+++
title = "Terminology"
url = "/terminology/"
+++

<div class="content">
<div class="field field-name-body field-type-text-with-summary field-label-hidden">
<div class="field-items">
<div class="field-item even">
<div class="tex2jax">
<p><strong>A</strong></p>
<p><strong>Address.</strong>&nbsp;An identifier that is a synonym for the fully qualified IPC-Process-Instance, which is a member of a DIF. An address is only unambiguous within the DIF (and assigned by the DIF). &nbsp;This identifier may be assigned &nbsp;to facilitate its usefulness to the operation of the DIF, i.e. location-dependent.</p>
<p><strong>API-primitive</strong>.&nbsp;A library or system call used by an application to invoke functions, in particular IPC functions, such as requesting the allocation of IPC resources.</p>
<p><strong>Application-Entity, AE.</strong>&nbsp;1) a task within an application process directly involved with exchanging application information with other APs; 2) a sub-task.</p>
<p><strong>Application-Entity-instance, AEI</strong>.&nbsp;The instantiation of an AE within an Application-Process.</p>
<p><strong>Application-Entity-instance-id</strong>.&nbsp;An identifier, which is unambiguous with in the AE, but may be unambiguous within in the AP-name space when qualified by the Application-Process-name, Application-Process-instance-id, and the AE-identifier.</p>
<p><strong>Application-Entity-name, AE-name</strong>.&nbsp;An identifier from the AE-name space, which is unambiguous within the scope of the Application-Process. &nbsp;An AE-identifier when concatenated with an Application-Process-name is unambiguous AP-name space, as is AE-identifier concatenated with an Application-Process-Name and an Application-Process-instance-id.</p>
<p><strong>Application-Entity-name space, AE-name space</strong>.&nbsp;The set of strings, which may be assigned to AEs of a given AP and used to reference them by other applications in the same naming domain.</p>
<p><strong>Application Naming Information</strong>.&nbsp;The term used to represent the names used to reference an application that may include, Application Process Name, Application Process Instance Id, Application Entity Identifier, and Application Entity Instance Id. &nbsp;The only required name is the Application Process Name.</p>
<p><strong>Application-Process, AP</strong>.&nbsp;The instantiation of a program executing in a processing system intended to accomplish some purpose. &nbsp;An Application Process contains one or more tasks or Application-Entities, as well as functions for managing the resources (processor, storage, and IPC) allocated to this AP.</p>
<p><strong>Application-Process-Instance, AP-instance</strong>.&nbsp;The instantiation of an Application-Process on an OS.</p>
<p><strong>Application-Process-Instance-id, AP-instance-id.</strong>&nbsp;An identifier unambiguous within the Application Process and bound to Application-Process-Instance to distinguish multiple Application-Process-Instances. &nbsp;An Application-Process-Instance-id &nbsp;concatenated with Application-Process-Name is unambiguous in the AP-name space.</p>
<p><strong>Application-Process-Name, AP-name</strong>.&nbsp;A string assigned to an Application-Process from an Application-Process name space and assigned to no other Application-Process while bound to the one it is assigned.</p>
<p><strong>Application-Process-name space</strong>.&nbsp;The set of strings, which may be assigned to the Application-Processes and used to reference them by other applications in the same naming domain.</p>
<p><strong>Application-Protocol.</strong>&nbsp;A protocol used between to Application-Entities to perform operations external to the Protocol Machine (PM) itself.</p>
<p>&nbsp;</p>
<p><strong>C</strong></p>
<p><strong>Comm-AE</strong>.&nbsp;The component of an IPC Process responsible for managing the use of supporting DIFs consisting of the RMT and PDU-Protection Modules. &nbsp;There is a single instance of this AE in each IPC Process.</p>
<p><strong>Common Distributed Application Protocol, CDAP</strong>.&nbsp;CDAP enables distributed applications to deal with communications at an object level, rather than forcing applications to explicitly deal with serialization and input/output operations. &nbsp;CDAP provides the application protocol component of a Distributed Application Facility (DAF) that can be used to construct arbitrary distributed applications, of which the DIF is an example. CDAP provides a straightforward and unifying approach to sharing data over a network without having to create specialized protocols.</p>
<p><strong>Computing system</strong>.&nbsp;The collection of all processing systems (some specialized) under the same management domain with no restrictions of their connectivity.</p>
<p><strong>Connection</strong>.&nbsp;The shared state between two EFCP-instances consisting of a DataTransfer-AE and optionally a Data-Transfer Control-AE.</p>
<p><strong>Connection-endpoint-id, CEP-id.</strong>&nbsp;A Data Transfer AE-Instance-Identifier unique within the Data Transfer AE where it is generated. This is combined with the destination’s FEP-id and the QoS-id to form the connection-id.</p>
<p><strong>Connection-identifier.</strong>&nbsp;An identifier internal to the DIF and unambiguous within the scope of two communicating EFCPMs of that DIF. &nbsp;The connection-identifier is used to distinguish PDUs associated with a particular instance of IPC, i.e. a connection or flow. &nbsp;The connection-identifier is commonly formed by the concatenation of the DTI-ids, often referred to as port-ids. The concatenation of the source and destination CEP-ids and a QoS-id to distinguish multiple flows between the same two IPC Processes.</p>
<p>&nbsp;</p>
<p><strong>D</strong></p>
<p><strong>Data Transfer AE.</strong>&nbsp;The component of the IPC Process consisting of instances of protocol machines that implement the Error and Flow Control Protocol (EFCP). &nbsp;Each instance represents a single flow or connection. &nbsp;The EFCP is made of two loosely coupled state machines, one responsible for data transfer and one responsible for data transfer control.</p>
<p><strong>Data Transfer AE-Instance, DTAEI</strong>.&nbsp;A Data Transfer AE-Instance is created for each flow. A DTAEI consists of an instance of the DTP and optionally a DTCP and the associated state vector. &nbsp;The DTAEI-Identifier is the Connection-Endpoint-id.</p>
<p><strong>Data Transfer Control Protocol (DTCP)</strong>.&nbsp;The optional part of data transfer that provide the loosely-bound mechanisms. &nbsp;Each DTCP instance is paired with a DTPinstance to control the flow, based on its policies and the contents of the shared state vector.</p>
<p><strong>Data Transfer Control Protocol Machine, DTCP(PM)</strong>.&nbsp;This is the half of the EFCP that performs loosely bound (feedback) mechanisms, such as retransmission and flow control. This protocol maintains state which is discarded after long periods of no traffic (2MPL). &nbsp;One instantiation is created for each flow requiring either flow control or retransmission control.</p>
<p><strong>Data Transfer Protocol, DTP</strong>.&nbsp;The required Data Transfer Protocol consisting of tightly bound mechanisms found in all DIFs, roughly equivalent to IP and UDP. &nbsp;When necessary DTP coordinates through a state vector with an instance of the Data Transfer Control Protocol. &nbsp;There is an instance of DTP for each flow.</p>
<p><strong>Data Transfer Protocol Machine DTP(PM)</strong>.&nbsp;This is the half of the EFCP that performs tightly bound mechanisms, such as ordering, and fragmentation/reassembly. It is stateless.&nbsp;One instantiation is created for each flow allocated.</p>
<p><strong>Data Transfer State Vector, DTSV</strong>.&nbsp;The DTSV (sometimes called the transmission control block) provides shared state information for the flow and is maintained by the DTP and the DTCP.</p>
<p><strong>Delimiting</strong>.&nbsp;The first operation performed by the DIF usually by the API-primitives to delimit an SDU, so that the DIF can ensure being able to deliver the SDU to its recipient.</p>
<p><strong>DirectoryForwardingTable</strong>.&nbsp;Sometimes referred to as search rules. &nbsp;Maintains a set of entries that map application naming information to IPC process addresses. The returned IPC process address is the address of where to look for the requested application. &nbsp;If the returned address is the address of this IPC Process, then the requested application is here; otherwise, the search continues. In other words, either this is the IPC process through which the application process is reachable, or may be the next IPC process in the chain to forward the request. The Directory Forwarding table should always return at least a default IPC process address to continue looking for the application process, even if there are no entries for a particular application process naming information.</p>
<p><strong>Distributed-Application Facility, DAF</strong>.&nbsp;A collection of two or more cooperating APs in one or more processing systems, which exchange information using IPC and maintain shared state. In some Distributed Applications, all members will be the same, i.e. a homogeneous DAF, or may be different, a heterogeneous DAF.</p>
<p><strong>Distributed-Application-Name, DAN</strong>.&nbsp;A whatevercast name generally taken from the same name space as Application-Processes to identify a distributed application. &nbsp;An important type of distributed application is a DIF, i.e. the set of cooperating IPCProcesses. &nbsp;A DAN acts as a whatevercast name for the set of Application-Processes comprising this distributed application depending on the operation.</p>
<p><strong>Distribute-Application-Process, DAP</strong>.&nbsp;Distributed Application Process, a member of a DAF. &nbsp;Each DAP has infrastructure tasks to manage task scheduling, OIB (storage), IPC, and DAF management.</p>
<p><strong>Distributed-IPC-Facility, DIF, Layer</strong>.&nbsp;A collection of two or more Application Processes cooperating to provide Interprocess Communication (IPC). &nbsp;A DIF is a DAF that does IPC. The DIF provides IPC services to Applications via a set of API primitives that are used to exchange information with the Application’s peer.</p>
<p><strong>DIF Allocator, DA</strong>.&nbsp;The DA is an important component of the RINA architecture. Although it is a component of IPC, it is not a component of a DIF. &nbsp;When an application process requests the allocation of IPC resources, it is the task of the DIF Allocator&nbsp;to determine what DIF the Allocate should be delivered to. If the Application is available on a DIF that this processing system is not a member of, then the DIF Allocator will either instantiate an IPC Process to join the DIF, or cooperate with other DIF Allocators to create a DIF with sufficient scope to allow IPC.</p>
<p>&nbsp;</p>
<p><strong>E</strong></p>
<p><strong>Error and Flow Control Protocol, EFCP</strong>.&nbsp;The data transfer protocol required to maintain an instance of IPC within a DIF. The functions of this protocol ensure reliability, order, and flow control as required. It consists of a separate instances of DTP and optionally DTCP, which coordinate through a state vector.</p>
<p><strong>EFCP-instance</strong>.&nbsp;A single instantiation of EFCP for managing a single flow. An EFCPinstance consists of a single instance of DTP, optionally a DTCP, and a DT-state-vector.</p>
<p><strong>EFCP PM.</strong>&nbsp;The Error and Flow Control Protocol Machine is the task that instantiates an instance of the EFCP for a single flow or connection. &nbsp;An EFCPM consists of two loosely coupled state machines: &nbsp;one that performs the tightly bound mechanisms, referred to as the Data Transfer PM and is stateless; and the other that peroforms the loosely coupled mechanisms, referred to as the Data Transfer Control PM. &nbsp;The two coordinate through a state vector.</p>
<p>&nbsp;</p>
<p><strong>F</strong></p>
<p><strong>Flow</strong>.&nbsp;The service provided by an EFCP-instance to an application process. &nbsp;The binding between an EFCP-instance and the application process using it is called a port.</p>
<p><strong>Flow Allocator</strong>.&nbsp;The component of the IPC Process that responds to Allocation Requests from Application Processes.&nbsp;A Flow Allocator instance (FAI)&nbsp;is created for each Allocate Request. &nbsp;The FAI is responsible for 1) finding the address of the IPC-Process with access to the requested destination-application; 2) determining whether the requesting Application Process has access to the requested Application Process, 3) selects the policies to be used on the flow, 4) monitors the flow, and 5) manages the flow for its duration.</p>
<p><strong>Flow Allocator-Instance, FAI</strong>.&nbsp;A Flow Allocator-Instance is created for each allocation request to manage the allocation for its lifetime. &nbsp;It will translate the QoS requested by the Application Process into specific policies and find the destination Application and determine if the allocation can be honored. &nbsp;The FAI-identifier or port–id is returned to the application as a handle for the allocation.</p>
<p>&nbsp;</p>
<p><strong>I</strong></p>
<p><strong>IPC-Management.</strong>&nbsp;The component of an DAP responsible for managing the use of supporting DIFs consisting of the IRM, IDD interface, RMT and SDU-Protection Modules. IPC Management is a component of all Distributed Application Processes (DAP).</p>
<p><strong>IPC-Process</strong>.&nbsp;An Application-Process, which is a member of a DIF and implements locally the functionality to support and manage IPC using multiple sub-tasks.</p>
<p><strong>IPC-Process-Name.</strong>&nbsp;An Application-Process name that assigned to an IPC-Process. This is the external name of an IPC-Process.</p>
<p><strong>IPC-Resource-Manager</strong>.&nbsp;The component of an DAP responsible for managing IDD queries and the use of supporting DIFs consisting of the RMT and SDU-Protection Modules. The IPC Manager is a component of all Distributed Application Processes (DAP).</p>
<p>&nbsp;</p>
<p><strong>N</strong></p>
<p><strong>(N)-DIF</strong>.&nbsp;The DIF from who’s point of view a description is written.</p>
<p><strong>(N+1)-DIF</strong>.&nbsp;A DIF that uses an&nbsp;(N)-DIF. &nbsp;A (N)-DIF may only know the application process names of IPC-Processes in a (N+1)-DIF. &nbsp;Depending on the degree of trust between adjacent DIFs, (N)-DIF management may share other information with a (N+1)-DIF.</p>
<p><strong>(N-1)-DIF</strong>.&nbsp;A DIF used by a (N)-DIF. &nbsp;The IPC Processes on the (N)-DIF appear as ordinary Application Processes to a (N-1)-DIF. Depending on the degree of trust between adjacent DIFs, (N)-DIF management may share other information with a (N-1)-DIF.</p>
<p><strong>Namespace Manager</strong>. TODO.</p>
<p>&nbsp;</p>
<p><strong>P</strong></p>
<p><strong>Port-id.</strong>&nbsp;An identifier unambiguous within the scope of the AP and an IPC API used to distinguish a particular IPC allocation.</p>
<p><strong>Processing System</strong>.&nbsp;The hardware and software capable of executing programs instantiated as Application Processes that can coordinate with the equivalent of a “test and set” instruction, i.e. the tasks can all atomically reference the same memory.</p>
<p><strong>Protocol.</strong>&nbsp;The syntax of PDUs and associated set of procedures, which specifies the behavior between two PMs for the purpose of maintaining shared state.</p>
<p><strong>Protocol-Control-Information, PCI</strong>.&nbsp;The string of octets in a PDU that is understood by the protocol machine which interprets and processes the octets, usually the leading bits and sometimes leading and trailing bits.</p>
<p><strong>Protocol-Data-Unit, PDU</strong>.&nbsp;The string of octets exchanged among the Protocol Machines (PM). &nbsp;PDUs contain two parts: the PCI, which is understood and interpreted by the DIF, and User-Data, that is incomprehensible to this PM and is passed to its user</p>
<p><strong>Protocol-Machine, PM</strong>.&nbsp;A finite state machine that implements a protocol, which exchanges PDUs with a peer to maintain shared state with a corresponding PM usually in another processing system.</p>
<p>&nbsp;</p>
<p><strong>Q</strong></p>
<p><strong>QoS cube</strong>. TODO</p>
<p><strong>QoS-id</strong>.&nbsp;An identifier unambiguous within this DIF that identifies a QoS-hypercube. &nbsp;As QoS-cubes are created they are sequentially enumerated. QoS-id is an element of Data Transfer PCI that may be used by the RMT to classify PDUs.</p>
<p>&nbsp;</p>
<p><strong>R</strong></p>
<p><strong>Relaying/Multiplexing-Task, RMT</strong>.&nbsp;This task is an element of the data transfer function of a DIF. &nbsp;Logically, it sits between the EFCP and SDU Protection. &nbsp;RMT performs the real time scheduling of sending PDUs on the appropriate (N-1)-ports of the (N-1)-DIFs available to the RMT.</p>
<p><strong>Resource Allocator, RA</strong>.&nbsp;A component of the DIF that manages resource allocation and monitors the resources in the DIF by sharing information with other DIF IPC Processes and the performance of supporting DIFs.</p>
<p><strong>Resource Information Base, RIB.</strong>&nbsp;For the DAF, RIB is the logical representation of the local &nbsp;repository of the objects. Each member of the DAF maintains a OIB. A Distributed Application may define a OIB to be its local representation of its view of the distributed application. &nbsp;From the point of view of the OS model, this is storage.</p>
<p><strong>RIB Daemon</strong>.&nbsp;A local Application Process participating in a Distributed Application may have several sub-tasks or threads. &nbsp;Each of these may have requirements for information from other participants in the distributed application on a periodic or event driven basis. &nbsp;Hence, a common component of the AE is a OIB Daemon, which other tasks may request to get information from other members of the DAF either on demand, on an event, or periodically. &nbsp;The OIB Daemon can then optimize these requests for information. From the point of view of the OS model, this might be considered storage management.</p>
<p>&nbsp;</p>
<p><strong>S</strong></p>
<p><strong>Service-Data-Unit, SDU</strong>.&nbsp;Service Data Unit, the amount of data passed across the (N)-DIF interface to be transferred to the destination application process. &nbsp;The integrity of an SDU is maintained by the (N)-DIF. &nbsp;An SDU may be fragmented or combined with other SDUs for sending as one or more PDUs.</p>
<p>&nbsp;</p>
<p><strong>U</strong></p>
<p><strong>User-data.</strong>&nbsp;That portion of a PDU, which is not interpreted and is not interpretable by the PM and is delivered transparently to its client, as a SDU. User-data may consist of part of, precisely one, or more than one SDU. &nbsp;If more than one SDU, then SDUs in the User-data are delimited by the PCI.</p>
<p>&nbsp;</p>
<p><strong>W</strong></p>
<p><strong>Whatevercast-name</strong>.&nbsp;An identifier taken from a name space that is bound to a set of names (usually from the same name space) with an associated rule such that when the name is referenced the rule is used to select names from the set. &nbsp;(Traditional multicast and anycast are specific forms of everycast. &nbsp;A unicast name or address could be considered to be an everycast name with only one element in the set.</p>
</div>
</div>
</div>
</div>
</div>
