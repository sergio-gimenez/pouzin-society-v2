+++
title = "It is always nice when a plan comes together, by John Day (with help)"
url = "/it-is-always-nice-when-a-plan-comes-together-by-john-day-with-help/"
date = "2023-11-26T15:00:34+00:00"
author = "Eduard Grasa"
categories = ["Blog"]
featured_image = "/mirror/psoc.i2cat.net/sites/default/files/field/image/AAEAAQAAAAAAAAY_AAAAJGUxOTg1OTNlLTQyZmEtNDUwOC1hNGY5LTNhMzZjOTEyM2ZlNg.jpg"
+++

<p class="rtejustify">One goal of RINA is to distill a theory based on fundamental principles, on what the problem tells us. Largely, this has come down to finding the invariances. The RINA Reference Model describes that theory, as we now understand it. We have found that by not breaking the invariances we don’t encounter “devils in the details,” but quite the opposite, the theory tends to yield simpler results for thorny problems. But we are always testing it. Trying to uncover things we haven’t seen. Trying to find holes in the theory.&nbsp; As Miguel Ponce de Leon said at a recent workshop, “The purpose of the PRISTINE project [actually all of our projects] is to prove [RINA]<a id="_ftnref1" title="" href="https://psoc.i2cat.net/iotefcp#_ftn1" name="_ftnref1">[1]</a>&nbsp;wrong!”&nbsp; We can’t prove a theory right; we can only prove them wrong. So we are always looking for questions, requirements that might uncover something that will break the theory.</p>
<p class="rtecenter"><img fetchpriority="high" decoding="async" class="aligncenter" src="/pouzin-society-v2/mirror/psoc.i2cat.net/sites/default/files/field/image/AAEAAQAAAAAAAAY_AAAAJGUxOTg1OTNlLTQyZmEtNDUwOC1hNGY5LTNhMzZjOTEyM2ZlNg.jpg" alt="" width="698" height="400"></p>
<p class="rtejustify">This past Spring an advanced networking course<a id="_ftnref2" title="" href="https://psoc.i2cat.net/iotefcp#_ftn2" name="_ftnref2">[2]</a>&nbsp;at Boston University took as a class project to survey so-called IoT protocols (Internet of Things)<a id="_ftnref3" title="" href="https://psoc.i2cat.net/iotefcp#_ftn3" name="_ftnref3">[3]</a>&nbsp;to test the claim that the RINA EFCP (Error and Flow Control Protocol) can be configured to cover any requirement. Or would some necessary requirement of IoT break the theory?</p>
<p class="rtejustify">Because IoT protocols have limited functionality, there is a tendency to include only the functionality absolutely necessary. Consequently, they operate under very tight constraints of cost, bandwidth, power, tight resources on computing and memory, etc. IoT protocols try to be as minimal as possible, to cut every possible corner. If any protocols would provide exceptions to claims that EFCP was a universal data transfer protocol, IoT should be prime candidate.&nbsp; The class surveyed over 10 different IoT protocols, including Bluetooth, WiFi, Zigbee, Modbus, Wireless Hart, ISA100.11a, Near Field Communication, Z-wave, etc.</p>
<p class="rtejustify">At first glance, it might appear that IoT protocols easily invalidate the claim.&nbsp; A number of IoT devices and their protocols are defined to support a single application, which does a request/response (or stop-and-wait, depending on one’s perspective) over a point-to-point media, without any kind of connection-id, i.e. no port-ids or connection-endpoint-ids and seldom bother with connection establishment.&nbsp; This certainly doesn’t sound like it is consistent with EFCP.</p>
<p>But it is.&nbsp; They are a very neat degenerate case.&nbsp; Lets consider it more carefully.</p>
<p class="rtejustify">Probably the most important aspect of the IPC Model applicable to this analysis is Richard Watson’s proof that the necessary and sufficient condition for synchronization for reliable data transfer is impose an upper bound on 3 times:&nbsp; Maximum Packet Lifetime, MPL; Maximum time to wait before an Acknowledgement is sent, A; and the Maximum time to exhaust retries, R. Watson’s result also implies that port allocation and synchronization should be distinct.<a id="_ftnref4" title="" href="https://psoc.i2cat.net/iotefcp#_ftn4" name="_ftnref4">[4]</a>&nbsp;This is fundamental to all data transfer prtocools. Building on that result, the EFCP for RINA separates mechanism and policy and uses the distinction between abstract and concrete syntax to create a configurable error and flow control protocol that naturally cleaves between data transfer and data transfer control, i.e. retransmission and flow control. Our claim is this protocol can be configured so that it is the only data transfer protocol needed.</p>
<p>Now lets look at each of the three phases of the communication:</p>
<p class="rtejustify"><em><strong>Enrollment</strong>&nbsp;</em>consists of the operations necessary to create sufficient state in the network to support allocating an instance of communication. The Enrollment Phase determines whether the IoT device is allowed to join a layer and, if so, to assign it an address for use in that layer and any initial parameters required.&nbsp; For this, the device needs a serial number assigned at manufacture.<a id="_ftnref5" title="" href="https://psoc.i2cat.net/iotefcp#_ftn5" name="_ftnref5">[5]</a>&nbsp;Identifiers should not be overloaded with different semantics. A device identifier should not be used as a network address.<a id="_ftnref6" title="" href="https://psoc.i2cat.net/iotefcp#_ftn6" name="_ftnref6">[6]</a>&nbsp; The global scope of MAC addresses has led to their wide use as both device-id and address.&nbsp; This constitutes a security threat. We strongly suggest moving away from even wireless addresses with large scope. Some IoT protocols, e.g. WiFi and Bluetooth have explicit enrollment phases,<a id="_ftnref7" title="" href="https://psoc.i2cat.net/iotefcp#_ftn7" name="_ftnref7">[7]</a>&nbsp;which improves their security. For some, enrollment is an ad hoc procedure.<a id="_ftnref8" title="" href="https://psoc.i2cat.net/iotefcp#_ftn8" name="_ftnref8">[8]</a></p>
<p class="rtejustify"><strong><em>Allocation</em></strong>&nbsp;creates the shared state to support a particular instance of communication, also called&nbsp;<em>establishment</em>.&nbsp; With only a single application with a single point-to-point flow, addresses are sufficient to identify the flow.&nbsp; Explicit connection-endpoint-ids are not required. &nbsp;Similarly, port-ids are not required between the application and the protocol state machine because there are not multiple flows to distinguish.&nbsp; Addresses will be required for multi-access media, but for wired point-to-point no addresses are required. Also, no “establishment phase” is required. Port allocation is implicit. When there is data to send, it is simply sent. Synchronization and reliability is assured by the bounds on the 3 times. &nbsp;It just works.</p>
<p class="rtejustify"><em><strong>Data Transfer</strong>:</em>&nbsp; It is straightforward to show that any stop-and-wait protocol with rules similar to 802.11 operating directly over the physical media satisfies the requirements of Watson’s necessary and sufficient conditions, so the data transfer is reliable or fails completely.<a id="_ftnref9" title="" href="https://psoc.i2cat.net/iotefcp#_ftn9" name="_ftnref9">[9]</a></p>
<p><em><strong>IoT is simply a degenerate case of the more general EFCP</strong>.&nbsp;&nbsp;</em>The only real reason for different protocols is as a barrier to competition.</p>
<p class="rtejustify">The most important result from this exercise is that the IoT environment is a degenerate case of the EFCP structure. No special cases occur. When the aspects not needed are null, the protocol is not affected. Every thing just works in a very nice and satisfying way. We had not recognized the possibility of implicit CEP-ids or port-ids nor of synchronization in the degenerate case.<a id="_ftnref10" title="" href="https://psoc.i2cat.net/iotefcp#_ftn10" name="_ftnref10">[10]</a>&nbsp; While not earthshattering, it is yet another ‘failure’ to prove the theory wrong, and increase our confidence that it is ‘right.’ Until next time!</p>
<p>It is always nice when a plan comes together.<a id="_ftnref11" title="" href="https://psoc.i2cat.net/iotefcp#_ftn11" name="_ftnref11">[11]</a></p>
<div>
<hr align="left" size="1" width="33%">
<div id="ftn1">
<p><a id="_ftn1" title="" href="https://psoc.i2cat.net/iotefcp#_ftnref1" name="_ftn1">[1]</a>&nbsp;He said “John Day” because I was in the audience and it made good theater. But many others have contributed to the concepts since the book.</p>
</div>
<div id="ftn2">
<p><a id="_ftn2" title="" href="https://psoc.i2cat.net/iotefcp#_ftnref2" name="_ftn2">[2]</a>&nbsp;Boston University’s Metropolitan College CS 635</p>
</div>
<div id="ftn3">
<p><a id="_ftn3" title="" href="https://psoc.i2cat.net/iotefcp#_ftnref3" name="_ftn3">[3]</a>&nbsp;Each student researched a couple of protocols and reported to the class. The project provided the impetus to go beyond the marketing hype.</p>
</div>
<div id="ftn4">
<p><a id="_ftn4" title="" href="https://psoc.i2cat.net/iotefcp#_ftnref4" name="_ftn4">[4]</a>&nbsp;As in any field, where if the principles are not followed, the result may work but poorly. When one builds, it is possible to skimp on materials, cut corners, etc. The building will stand . . . for awhile, but then things begin to go bad, sometimes catastrophically. Computing is no different. Those creating systems must have the intelligence, discipline, and maturity to build it correctly. The wrong way often works but with consequences in on-going complexity creep, unforeseen problems, less security, etc. all increasing costs.</p>
</div>
<div id="ftn5">
<p><a id="_ftn5" title="" href="https://psoc.i2cat.net/iotefcp#_ftnref5" name="_ftn5">[5]</a>&nbsp;Preferably machine-readable and not forgeable.</p>
</div>
<div id="ftn6">
<p><a id="_ftn6" title="" href="https://psoc.i2cat.net/iotefcp#_ftnref6" name="_ftn6">[6]</a>&nbsp;The device-id might be used as, or to create, an application-name for managing the IoT-device, but not as an address. An address is only used to determine if the IPC Process is a member of the layer, for routing to the destination, or is the destination for a PDU.</p>
</div>
<div id="ftn7">
<p><a id="_ftn7" title="" href="https://psoc.i2cat.net/iotefcp#_ftnref7" name="_ftn7">[7]</a>&nbsp;referred to as “association” and “pairing” respectively.</p>
</div>
<div id="ftn8">
<p><a id="_ftn8" title="" href="https://psoc.i2cat.net/iotefcp#_ftnref8" name="_ftn8">[8]</a>&nbsp;These are primarily the RFID applications where very limited range (a few meters) makes this viable.</p>
</div>
<div id="ftn9">
<p><a id="_ftn9" title="" href="https://psoc.i2cat.net/iotefcp#_ftnref9" name="_ftn9">[9]</a>&nbsp;In fact, it is a homework problem in the course to determine whether 802.11 confirms Watson’s results or contradicts them and if so, how.</p>
</div>
<div id="ftn10">
<p><a id="_ftn10" title="" href="https://psoc.i2cat.net/iotefcp#_ftnref10" name="_ftn10">[10]</a>&nbsp;Yet another case, as has happened so often, of “We hadn’t thought about it like that but now that we do, it is obvious, it makes sense.”</p>
</div>
<div id="ftn11">
<p><a id="_ftn11" title="" href="https://psoc.i2cat.net/iotefcp#_ftnref11" name="_ftn11">[11]</a>&nbsp;Hannibal Smith’s tagline (played by George Peppard) in a truly bad American action TV show, The A-Team.</p>
</div>
</div>
