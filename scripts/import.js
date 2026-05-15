const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const cheerio = require('cheerio');

const projectRoot = process.cwd();
const contentRoot = path.join(projectRoot, 'content');
const staticRoot = path.join(projectRoot, 'static');
const siteOrigin = 'https://pouzinsociety.org';
const pagesBasePath = '/pouzin-society-v2';
const seededAssets = [
  'https://pouzinsociety.org/wp-content/uploads/2023/10/psoc_logo_75-1.png',
  'https://pouzinsociety.org/wp-content/uploads/2023/10/slide-image-1.jpg',
  'https://pouzinsociety.org/wp-content/uploads/2023/10/slide-image-2.jpg',
  'https://pouzinsociety.org/wp-content/uploads/2023/10/slide-image-3.jpg',
];

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function fetchText(url) {
  return execFileSync('curl', ['-k', '-L', '--silent', '--show-error', url], { encoding: 'utf8', maxBuffer: 1024 * 1024 * 20 });
}

function fetchBinary(url, outputPath) {
  ensureDir(path.dirname(outputPath));
  execFileSync('curl', ['-k', '-L', '--silent', '--show-error', '-o', outputPath, url], { maxBuffer: 1024 * 1024 * 20 });
}

function getUrlsFromSitemap(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
}

function toLocalLink(href) {
  if (!href) return href;
  if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return href;

  let parsed;
  try {
    parsed = new URL(href, siteOrigin);
  } catch {
    return href;
  }

  if (parsed.hostname === 'pouzinsociety.org') {
    if (parsed.pathname.startsWith('/category/')) {
      const slug = parsed.pathname.replace('/category/', '').replace(/^\/+|\/+$/g, '');
      return slug ? `/categories/${slug}/` : '/categories/';
    }
    if (parsed.pathname === '/') return '/';
    if (path.extname(parsed.pathname)) return parsed.pathname;
    return parsed.pathname.endsWith('/') ? parsed.pathname : `${parsed.pathname}/`;
  }

  return href;
}

function withPagesBasePath(urlPath) {
  if (!urlPath || !urlPath.startsWith('/')) return urlPath;
  if (urlPath === '/') return `${pagesBasePath}/`;
  if (urlPath.startsWith(`${pagesBasePath}/`) || urlPath === pagesBasePath) return urlPath;
  return `${pagesBasePath}${urlPath}`;
}

function localAssetPath(url) {
  const parsed = new URL(url, siteOrigin);
  const pathname = parsed.pathname === '/' ? '/index' : parsed.pathname;
  return path.join(staticRoot, 'mirror', parsed.hostname, pathname.replace(/^\//, ''));
}

function rewriteAssetUrl(url) {
  if (!url) return url;
  if (url.startsWith(`${pagesBasePath}/mirror/`)) return url.replace(pagesBasePath, '');
  if (url.startsWith('mirror/')) return `/${url}`;
  if (url.startsWith('/mirror/')) return url;
  let parsed;
  try {
    parsed = new URL(url, siteOrigin);
  } catch {
    return url;
  }

  const ext = path.extname(parsed.pathname).toLowerCase();
  const isLocalHost = parsed.hostname === 'pouzinsociety.org' || parsed.hostname === 'psoc.i2cat.net';
  const isImage = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'].includes(ext);
  const isMirrorableAsset = isLocalHost && ext && !['.html', '.htm', '.php'].includes(ext);

  if (!isImage && !isMirrorableAsset) {
    return url;
  }

  const filePath = localAssetPath(parsed.toString());
  if (!fs.existsSync(filePath)) {
    try {
      fetchBinary(parsed.toString(), filePath);
    } catch (error) {
      return url;
    }
  }

  return `/${path.relative(staticRoot, filePath).split(path.sep).join('/')}`;
}

function rewriteMediaUrl(url) {
  if (!url) return url;
  const rawUrl = url;
  let parsed;
  try {
    parsed = new URL(url, siteOrigin);
  } catch {
    return url;
  }

  const ext = path.extname(parsed.pathname).toLowerCase();
  const isMedia = ['.mp4', '.webm', '.mov', '.m4v'].includes(ext);
  if (!isMedia) return url;

  // Keep large legacy videos remote for now. Avoid giant local copies.
  if (/^https?:\/\//i.test(rawUrl)) return rawUrl;
  return parsed.toString();
}

function rewriteEmbeddedMediaHtml(html) {
  const videoCard = (src) => `<figure class="media-card media-card-video"><div class="media-card-body"><p class="eyebrow">External video</p><a class="card-cta" href="${rewriteMediaUrl(src)}" target="_blank" rel="noreferrer">Open video in new tab</a><p class="media-card-note">Large legacy video left on remote host to keep local site lightweight.</p></div></figure>`;

  return html
    .replace(/<div[^>]*class="[^"]*wp-video[^"]*"[^>]*>[\s\S]*?<source[^>]*src="([^"]+)"[^>]*>[\s\S]*?<\/div>/gi, (_, src) => videoCard(src))
    .replace(/<video[^>]*>[\s\S]*?<source[^>]*src="([^"]+)"[^>]*>[\s\S]*?<\/video>/gi, (_, src) => videoCard(src))
    .replace(/<iframe([^>]*)><\/iframe>/gi, '<figure class="media-card media-card-embed"><div class="media-card-body"><iframe$1></iframe></div></figure>');
}

function rewriteHtmlPaths(html) {
  return html
    .replace(/\b(src|poster)="\/(?!\/)([^"]+)"/gi, (_, attr, assetPath) => `${attr}="${withPagesBasePath(rewriteAssetUrl(`/${assetPath}`))}"`)
    .replace(/\bhref="\/(?!\/)([^"]*)"/gi, (_, hrefPath) => {
      const localHref = `/${hrefPath}`;
      const rewrittenAsset = rewriteAssetUrl(localHref);
      if (rewrittenAsset !== localHref) {
        return `href="${withPagesBasePath(rewrittenAsset)}"`;
      }
      return `href="${withPagesBasePath(toLocalLink(localHref))}"`;
    });
}

function seedSiteAssets() {
  seededAssets.forEach((assetUrl) => {
    rewriteAssetUrl(assetUrl);
  });
}

function cleanContentHtml($root, url, type) {
  $root.find('script, style, noscript, .entry-meta, #nav-below, .sharedaddy').remove();

  $root.find('*').each((_, element) => {
    const $element = $root.find(element);
    const href = $element.attr('href');
    const src = $element.attr('src');
    const poster = $element.attr('poster');
    const srcset = $element.attr('srcset');

    if (href) $element.attr('href', toLocalLink(href));
    if (src) $element.attr('src', rewriteAssetUrl(rewriteMediaUrl(src)));
    if (poster) $element.attr('poster', rewriteAssetUrl(poster));
    if (srcset) $element.removeAttr('srcset');

    const style = $element.attr('style');
    if (style && style.includes('https://')) {
      $element.attr('style', style.replace(/https:\/\/[^)"'\s]+/g, (match) => rewriteAssetUrl(match)));
    }
  });

  let html = $root.html() || '';
  html = html.replace(/\u00a0/g, ' ');
  html = html.replace(/<!--\[if lt IE 9\]>.*?<!\[endif\]-->/gs, '');
  html = rewriteEmbeddedMediaHtml(html);
  html = rewriteHtmlPaths(html);

  if (type === 'page' && html.replace(/<[^>]+>/g, '').trim() === 'TODO') {
    return '<p>This section acts as an overview page. Use the navigation menu to access the detailed material in this area.</p>';
  }

  return html.trim();
}

function extractPageData(url, type) {
  const html = fetchText(url);
  const $ = cheerio.load(html);
  const title = $('#intro .page-title span').first().text().trim() || $('title').text().replace(/\s*\|.*$/, '').trim();
  const description = $('meta[name="description"]').attr('content') || '';
  const author = $('.entry-meta .author').first().text().trim() || '';
  const dateValue = $('.entry-meta time').first().attr('datetime') || '';
  const categories = $('.entry-meta .category a').map((_, el) => $(el).text().trim()).get().filter(Boolean);
  const featuredImage = rewriteAssetUrl($('article img').first().attr('src') || '');

  let contentNode = $('article .entry-content').first();
  if (!contentNode.length) {
    contentNode = $('article').first();
  }

  const contentHtml = cleanContentHtml(contentNode.clone(), url, type);

  return {
    title,
    description,
    author,
    dateValue,
    categories,
    featuredImage,
    contentHtml,
  };
}

function formatTomlArray(values) {
  return `[${values.map((value) => JSON.stringify(value)).join(', ')}]`;
}

function writeContentFile(targetPath, frontMatter, body) {
  ensureDir(path.dirname(targetPath));
  const frontMatterLines = Object.entries(frontMatter)
    .filter(([, value]) => value !== undefined && value !== null && value !== '' && !(Array.isArray(value) && value.length === 0))
    .map(([key, value]) => {
      if (Array.isArray(value)) return `${key} = ${formatTomlArray(value)}`;
      return `${key} = ${JSON.stringify(value)}`;
    });

  const fileContents = `+++\n${frontMatterLines.join('\n')}\n+++\n\n${body}\n`;
  fs.writeFileSync(targetPath, fileContents);
}

function pathSegmentsFromUrl(url) {
  const parsed = new URL(url);
  return parsed.pathname.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean);
}

function importHome() {
  writeContentFile(path.join(contentRoot, '_index.md'), { title: 'Pouzin Society' }, '');
}

function importPage(url) {
  const parsed = new URL(url);
  if (parsed.pathname === '/') return;

  const page = extractPageData(url, 'page');
  const segments = pathSegmentsFromUrl(url);
  const targetPath = path.join(contentRoot, ...segments, 'index.md');

  writeContentFile(
    targetPath,
    {
      title: page.title,
      url: parsed.pathname,
      description: page.description,
    },
    page.contentHtml,
  );
}

function importPost(url) {
  const parsed = new URL(url);
  const slug = pathSegmentsFromUrl(url).join('/');
  const post = extractPageData(url, 'post');
  const targetPath = path.join(contentRoot, 'posts', slug, 'index.md');

  writeContentFile(
    targetPath,
    {
      title: post.title,
      url: parsed.pathname,
      date: post.dateValue,
      author: post.author,
      categories: post.categories,
      description: post.description,
      featured_image: post.featuredImage,
    },
    post.contentHtml,
  );
}

function writeSectionFiles() {
  writeContentFile(path.join(contentRoot, 'posts', '_index.md'), { title: 'Blog' }, '<p>Posts, news, events, and workshop material from the Pouzin Society archive.</p>');
}

function main() {
  ensureDir(contentRoot);
  ensureDir(staticRoot);
  seedSiteAssets();

  const pageUrls = getUrlsFromSitemap(fetchText(`${siteOrigin}/wp-sitemap-posts-page-1.xml`));
  const postUrls = getUrlsFromSitemap(fetchText(`${siteOrigin}/wp-sitemap-posts-post-1.xml`));

  importHome();
  writeSectionFiles();
  pageUrls.forEach(importPage);
  postUrls.forEach(importPost);
}

main();
