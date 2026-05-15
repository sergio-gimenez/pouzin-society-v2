+++
title = "Dynamic and seamless network renumbering"
url = "/dynamic-and-seamless-network-renumbering/"
+++

<p><strong>Why network renumbering is hard today?&nbsp;</strong>Shortcomings in the naming and addressing structure of the current Internet protocol suite make network renumbering a tedious, error-prone and expensive procedure. The lack of application names causes the network to bind an application flow to an IP address and a transport layer port number. If the IP address of the source or the destination of the flow changes, the flow identity is lost and the flow is no longer usable.&nbsp;Renumbering a network with multiple layers today is a maintenance event: it has to be carefully planned, requires humans in the loop and it takes one or more days to complete.</p>
<hr>
<p class="rtejustify"><strong>What about renumbering RINA networks?&nbsp;</strong>In contrast the comprehensive naming scheme of RINA makes renumbering problems in IP networks non-issues and enables dynamic network renumbering. Flows are associations between application names, only locally bound to IPC Processes via a port-id. Addresses are just location-dependent synonyms of IPC Process names. The identity of IPC Processes is represented by their location-independent application name: authentication and access control operations are performed in terms of AP names, not IPCP addresses. Hence renumbering does not interfere with such procedures.&nbsp;In this experiment we have analysed how the complete naming and addressing architecture embodied by RINA allows RINA networks to be renumbered live, without significantly impacting the performance perceived by existing flows or impairing the ability to crate new ones. With RINA renumbering can be done life, dynamically, in a fully automated way and in a time period between tens or hundreds of milliseconds to a few seconds (depending on the network size).&nbsp;This property can be applied to multiple use cases, such as:</p>
<ul>
<li class="rtejustify"><em>Network address space consolidation</em>. Merge two or more address spaces from different companies after an acquisition</li>
<li class="rtejustify"><em>Network address space optimisation</em>. Change the addressing policy of a DIF if it is no longer optimal due to changes in the DIF (e.g. the DIF has grown a lot since the addressing policy was designed, or its structure has changed).</li>
<li class="rtejustify"><em>Mobility management</em>. Keep addresses of mobile hosts aggregatable as they move through different subnets.</li>
</ul>
<hr>
<p class="rtejustify"><strong>Do you want to learn more?</strong></p>
<ul>
<li class="rtejustify">Read the paper “<a href="https://zenodo.org/record/1013204#.W87dURMzZTZ"><em>Seamless network renumbering in RINA: Automate address changes without breaking flows</em></a>“, presented at the EUCNC conference 2017.</li>
<li class="rtejustify">Read chapter 5 of the&nbsp;<a href="http://ict-arcfire.eu/wp-content/uploads/2015/12/arcfire_D4.4.pdf"><em>final report of ARCFIRE experimentation activities</em></a>, deliverable D4.4, pages 104-118.</li>
<li class="rtejustify">Try a renumbering experiment yourself&nbsp;<a href="https://github.com/IRATI/stack/wiki/Tutorial-8:-DIF-renumbering-SDN-2016">by following this IRATI tutorial.</a></li>
</ul>
