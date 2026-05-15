+++
title = "Application discovery across layers and networks"
url = "/application-discovery-across-layers-and-networks/"
+++

<p class="rtejustify"><strong>How is application discovery limited on IP networks?&nbsp;</strong>The current architecture does not provide names for layers. Since there are no names for layers, there is no way to describe on which layers a requested application is on. In addition, neither a directory with mappings of application names to layers exists. DNS (Domain Name System)&nbsp;is the only directory-like service in the current Internet, and it only provides synonyms for IP addresses that are just Point of Attachment addresses. As a consequence, all discoverable applications are assumed to be accessible via the same layer instantiation, the same IP address space, whether a private network or the public Internet.</p>
<hr>
<p class="rtejustify"><strong>What about RINA networks?&nbsp;</strong>Applications deployed on a RINA network can be accessed through any layer that provides enough QoS and scope. This is different from current networks, in which applications are only reachable through the topmost IP layer. RINA incorporates infrastructure for application registration and discovery within a layer (distributed application directories that map registered application names to IPC Process addresses are part of all layers) as well as across layers. The DIF Allocator is the component that enables application discovery across layers. It has two main functions: i) maintaining a distributed mapping of registered application names to the names of the DIFs where they are registered and ii) collaborating with management systems to dynamically create or extend layers as part of flow allocation requests.</p>
<p class="rtejustify">Hence, the DIF Allocator and per-layer directories provide full dynamic application discovery support, within a layer and across layers. This is a generic capability of the architecture that is leveraged by any type of applications, avoiding the need for dedicated protocols that provide application registration and discovery capabilities for a subset of applications (such as SIP). The DIF Allocator also enables the dynamic orchestration of DIFs across multiple providers, by interacting with each provider’s Network Management System to grow/reduce/modify the connectivity graph of such DIFs in response to flow allocation requests from applications.</p>
<hr>
<p><strong>Do you want to learn more?</strong></p>
<ul>
<li>Read chapter 6 of&nbsp;<a href="http://ict-arcfire.eu/wp-content/uploads/2015/12/arcfire_D4.4.pdf"><em>ARCFIRE’s final report on experimentation activities</em></a>, pages 126-137.</li>
<li>Read the paper “<a href="https://ieeexplore.ieee.org/document/6335369"><em>Layer Discovery in RINA networks</em></a>“, published at the IEEE CAMAD 2012 conference.</li>
<li>Setup an experiment following&nbsp;<a href="https://github.com/IRATI/stack/wiki/Tutorial-9:-DMM-app-discovery-ARCFIRE-2018">IRATI tutorial 9</a>.</li>
<li>Look at the slides below, presented at the 1st RINA workshop (IDD is the old term for DIF Allocator).</li>
</ul>
<hr>
<p><iframe style="border: 1px solid #CCC; border-width: 1px; margin-bottom: 5px; max-width: 100%;" src="//www.slideshare.net/slideshow/embed_code/key/g26ZzJJdWyGcRB" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen="allowfullscreen"> </iframe></p>
