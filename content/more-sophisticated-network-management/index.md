+++
title = "More sophisticated Network Management"
url = "/more-sophisticated-network-management/"
+++

<p><strong>Why is network management hard today?&nbsp;</strong>The following issues at the network protocol architecture level contribute to making network management complex and expensive.</p>
<ul>
<li class="rtejustify"><strong>Too little commonality in network protocols</strong>. Different layers perform different functions, which require different protocols. Even within the same layer multiple protocols are required to adapt the layer to different operational requirements. Each protocol comes with its own protocol machine definition, its own configuration and its own state model. Managing networks designed this way is hard and cumbersome, since the NMS needs to understand the state, operation and configuration models of all the different protocols in the network, as well as their interactions.</li>
<li class="rtejustify"><strong>No well defined model for interaction between layers</strong>. To manage a multi-layer network, not only needs the NMS to understand individual protocols, but also the interaction amongst the multiple protocol layers. Since there is no well-defined, consistent layer API, each layer interaction has to be dealt with on a case-by-case basis, complicating network configuration, performance and security management.</li>
<li class="rtejustify"><strong>Different protocols and object models for Network Management</strong>. Although NETCONF and YANG are gaining traction as a protocol and object model for network configuration management, they are still far from covering all the network segments and technologies. CMIP and X.700, SNMP and SMI, and SID (the Shared Information and Data Model) are still prevalent in different networking areas. As a consequence converged operator networks today are likely to require multiple protocols and object models for management, complicating this task even more.</li>
</ul>
<hr>
<p><strong>What about RINA networks?&nbsp;</strong>Managing a network architecture based on a single type of layer makes the job of the NMS considerable simpler, due to the commonality exhibitied by the network structure. Specifically:</p>
<ul>
<li class="rtejustify"><strong>Two immutable protocol framework and a well-defined set of policies</strong>. Everything in the RINA&nbsp;architecture tries to maximize the invariants and reduce the variability in computer networks, minimising it to the essential subset of functions that need to change to adapt to different application and physical layer requirements. The resulting immutable, common structure with a single type of layer that features two protocol frameworks and a well-defined set of policies greatly simplifies the complexity of the network management problem. This is specially true compared to the current landscape of redundant, independently designed protocols across layers and within layers. Simplifying the network structure not only reduces complexity, but also enables more sophisticated automation within the Management System (which shift its main focus from understanding and configuring the multiple protocol structures to managing the network).</li>
<li class="rtejustify"><strong>Consistent API and functions across all layers, strict layering</strong>. Management systems of RINA networks never need to worry about cross-layer effects, since strict layering is enforced by design. Interactions between layers are well understood and easy to model as layers of IPC service over different scopes and ranges of QoS. The NMS coordinates multiple layers but does not need to micro-manage them: since each layer is autonomic the NMS can set high-level strategies that each layer will execute via the layer management functions.</li>
<li class="rtejustify"><strong>Single management protocol and common layer object model</strong>. Commonality is the key towards effective network management, which is something RINA excels at. Management systems of RINA networks use a single protocol to interact with Management Agents of the systems at different segments of the network. This management protocol, CDAP, is not even specific to Network Management (it is also used for layer management). CDAP is used to operate on the objects exposed by the RIB of Management Agents at each system. All DIFs have a common RIB model, which further facilitates the task of managing DIFs: the only difference from managing one DIF&nbsp;to the other is in the object models of individual policies.</li>
</ul>
<hr>
<p><strong>Do you want to know more?</strong></p>
<ul>
<li>Read the paper “<a href="https://tnc16.geant.org/getfile/2675"><em>Simplifying multi-layer network management with RINA</em></a>“, presented at the TNC conference 2016.</li>
<li>Read chapter 1 of the&nbsp;<a href="http://ict-arcfire.eu/wp-content/uploads/2015/12/arcfire_D4.4.pdf"><em>final report of ARCFIRE experimentation activities</em></a>, deliverable D4.4, pages 27-54.</li>
<li>Read the article “<a href="https://sdn.ieee.org/newsletter/may-2016/sdn-architectural-limitations-towards-a-full-software-network-vision"><em>SDN Architectural limitations: towards a full Software Networks vision</em></a>“, published at the IEEE Softwarization newsletter.</li>
<li>Look at the slides below, presented at the TNC conference 2016.</li>
</ul>
<hr>
<p>&nbsp;</p>
<p><iframe style="border: 1px solid #CCC; border-width: 1px; margin-bottom: 5px; max-width: 100%;" src="//www.slideshare.net/slideshow/embed_code/key/gEQhlXn4miqAPD" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen="allowfullscreen"> </iframe></p>
