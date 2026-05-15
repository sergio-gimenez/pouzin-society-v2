+++
title = "Consistent Quality of Service model"
url = "/consistent-quality-of-service-model/"
+++

<p class="rtejustify"><strong>Why is guaranteeing end-to-end network QoS complex today?&nbsp;</strong>In addition to the issues identified in the&nbsp;<a href="/congestion/">congestion control section</a>, too much variability in protocols and the lack of a consistent QoS model that abstracts the high-level service quality characteristics from the technology used to deliver it are to blame.&nbsp;The lack of a clear, consistent model to communicate performance requirements across layers make it hard to manage the performance of a multi-layer network so that it delivers consistent service experiences to its customers. Since there are no abstract mechanisms for the communication of performance requirements between layers, this communication has to be designed on a use-case per use-case basis, usually involving the Network Management System. The layer also must be able to identify the flows belonging to different QoS groups, which also depends on the technology being used: DSCP code marking can be used in the case of IP, MPLS traffic engineering based on the values of MPLS labels, VLAN tags for Ethernet or I-SID (service identifiers) in the case of PBB.</p>
<hr>
<p class="rtejustify"><strong>What about RINA networks?</strong>&nbsp;An abstract service model that is technology-independent and a consistent service API&nbsp;across all layers are the key properties that allow RINA to provide a consistent QoS model across layers. The role of all layers is to provide communication flows with QoS characteristics over a certain scope. This characteristics – the flow Service Level Agreement, SLA – bound the statistical properties of the flow, such as packet loss, delay, capacity as well as other properties like in-order delivery of data. Each layer maps the flow requirements to one of the service categories (QoS cubes) it provides. Each layer marks the PDU belonging to a certain flow with a QoS-id, so that the policies at each DIF can treat packets belonging to the same class (or flow for “virutal circuit” connection-oriented resource allocation policies) in a consistent way. Providers can signal QoS requirements to each other, without divulging technological details of the operation of its network, hence eliminating barriers towards a multi-provider QoS market.</p>
<hr>
<p><strong>Do you want to know more?</strong></p>
<ul>
<li>Read chapter 4 of the&nbsp;<a href="http://ict-arcfire.eu/wp-content/uploads/2015/12/arcfire_D4.4.pdf"><em>final report of ARCFIRE’s experimentation activities,</em></a>&nbsp;pages 79-101.</li>
<li>Read the paper “<a href="https://cba.upc.edu/downloads/category/11-articles?download=1015:[ARTICLE]Assuring_QoS_Guarantees_for_Heterogeneous_Services_in_RINA_Networks_with_IQ.pdf&amp;start=440"><em>Assuring QoS guarantees for Heterogeneous Services in RINA Networks with deltaQ</em></a>“.</li>
<li>Read the paper “<a href="https://link.springer.com/article/10.1007/s11235-018-0489-2"><em>End-user traffic policing for QoS assurance in RINA networks</em></a>“, published at the Springer Telecommunications Systems journal (2018).</li>
<li>Look at the slides below, presented at the ARCFIRE project final review.</li>
</ul>
<hr>
<p><iframe style="border: 1px solid #CCC; border-width: 1px; margin-bottom: 5px; max-width: 100%;" src="//www.slideshare.net/slideshow/embed_code/key/2kdFh7zlTDAI6G" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen="allowfullscreen"> </iframe></p>
