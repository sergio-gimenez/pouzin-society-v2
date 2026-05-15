+++
title = "Congestion Management"
url = "/congestion-management/"
+++

<p class="rtejustify"><strong>Why is congestion control on the Internet hard?&nbsp;</strong>Because it operates at the transport layer, it is impossible for TCP to always do “the right thing” for every network segment. By measuring only the round-trip time (RTT) and packet loss, it is very difficult to optimally adapt the transmission rate of the sender when the path to the receiver is a chain of technologies (e.g. WLAN, Ethernet, satellite, 3G). TCP cannot make any form of link technology-specific decision. This problem is compounded by well-known TCP issues like e.g. its inability to distinguish between congestion losses and losses that are due to link impairments. TCP’s end-to-end congestion control also does not scale well in several dimensions:</p>
<ul>
<li class="rtejustify"><em>The diameter of the network.</em>&nbsp;The effectiveness of any congestion control scheme will deteriorate with increasing network diameter. TCP maximizes this effect because it operates in “rounds” based on the round-trip time. This is particularly problematic in high bandwidth networks where the capacity does not become a limit, especially with short flows that are common in web traffic.</li>
<li class="rtejustify"><em>The number of flows</em>. When multiple flows traverse a path, they compete for the available bandwidth, pushing up the queues and creating delay and loss. Jointly controlling them as a group can lead to much better behavior and enable precise prioritization between flows.</li>
<li class="rtejustify"><em>The bottleneck link capacity.</em>&nbsp;TCP often poorly saturates high-capacity links due to its linear increase in standard TCP’s congestion avoidance phase. This has been addressed approximately a decade ago; now, the most prominent solution is the CUBIC congestion control mechanism that is used by default in Linux hosts.</li>
</ul>
<hr>
<p class="rtejustify"><strong>What about RINA networks?&nbsp;</strong>RINA can solve all of the Internet congestion&nbsp;problems by 1) breaking up the long control loop into shorter ones, 2) controlling flow aggregates inside the network, and 3) enabling the deployment of arbitrary congestion control mechanisms per DIF.</p>
<p class="rtejustify">The main achievement of RINA is that the series of hacks and patches found in the Internet, with its problems that we have discussed in the case of congestion control, are not required. RINA is therefore an ideal vehicle for investigating drastic changes to how congestion control, and in-network resource pooling as another example, could be done, and it provides a suitable framework with many promising dimensions for future research. Congestion control in RINA “naturally” exhibits properties of various improvements that have been made to (or at least proposed for) the Internet, without inheriting the problems that come from imposing these mechanisms on an architecture that was not made for them (all the problems that PEPs – Performance Enhancing Proxies –&nbsp;have).</p>
<hr>
<p><strong>Do you want to learn more?</strong></p>
<ul>
<li>Read the paper “<a href="https://ieeexplore.ieee.org/document/7510818"><em>Congestion Control in the Recursive InterNetwork Architecture</em></a>“, presented a the IEEE ICC 2016 conference.</li>
<li>Read the paper “<a href="https://link.springer.com/chapter/10.1007/978-3-319-46433-6_8"><em>Feedback in Recursive Congestion Control</em></a>“, presented at the EPEW workshop 2016.</li>
<li>Look at the slides below, presented at the IEEE ICC 2016 conference.</li>
</ul>
<hr>
<p><iframe style="border: 1px solid #CCC; border-width: 1px; margin-bottom: 5px; max-width: 100%;" src="//www.slideshare.net/slideshow/embed_code/key/lLV89oxKqi0LEU" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen="allowfullscreen"> </iframe></p>
