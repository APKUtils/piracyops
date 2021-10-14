---
title: Choosing the right VPN
author: xuac
author_title: Admin
author_url: https://gitlab.com/xuac
author_image_url: https://gitlab.com/uploads/-/system/user/avatar/8860699/avatar.png
---

> What is the best VPN?

There is no one-size-fits-all solution when it comes to VPNs. Just like email, there are many VPN services out there and you should choose the service that works best for you. Depending on which one you choose, you can benefit from an increased level of security when connected to networks you wouldn’t ordinarily trust. This does mean, however, that you will be placing your trust in the VPN itself.

<!--truncate-->

### BASICS

> How do VPNs actually Work?

VPN creates a sort of tunnel for your internet traffic in order to prevent outsiders from monitoring or modifying your traffic. Traffic in the tunnel is encrypted and sent to your VPN, which makes it much harder for third parties like internet service providers (ISPs) or hackers to snoop on a VPN user's traffic or execute man-in-the-middle attacks. The traffic then leaves the VPN to its ultimate destination, masking that user’s original IP address. This helps to disguise a user’s physical location for anyone looking at traffic after it leaves the VPN.

### TRUST

No matter what reason you want a VPN for, you want to know that the service you choose is trust worthy and is not compromising your data. This goes without saying but, never use a free VPN. They track, log and sell all your data to advertisers and marketers instead of directly earning from subscriptions. A disreputable VPN service might also do this deliberately, to collect personal information or other valuable data.

### VPN AFFILIATES

You may have started your search for a VPN by looking for "VPN Reviews" in your search engine of choice. if you had, you would have gotten page upon page of what seem to be harmless review sites, top 10 or blog reviews of different VPN services. The sites making these suggestions are, in almost every case, paid by the services they review and suggest.

Note that not all affiliates have to be bad actors and simply having an affiliate program is not necessarily grounds for mistrust of a VPN.

### LOGGING

When you connect to a VPN service, you are essentially just adding one more stop along your route to the open internet. The VPN is a "man in the middle" who you are trusting with the traffic. Some VPN companies choose to log this data. There are many reasons for doing so, some more legitimate than others.

Some services record this to protect themselves legally in the case they are approached by authorities. Some companies keep minimal connection logs to aid them in maintaining servers.

Choose a service that specifically states that they do NOT keep logs, AND which types they do not keep. Make sure they do not keep ANY kind of activity or connection log.

### PROTOCOLS

There are many different kinds of VPN protocols that allow you to establish a tunnel with your service provider - some more secure than others. Some are free and open source, and are freely available for security experts to audit and improve. The free availability of the source code ensures that vulnerabilities are patched quickly and anyone can see exactly how their software is working.

Choose a VPN that supports OpenVPN and use it to connect to your VPN server instead. Avoid using other protocols, specifically PPTP as its not suited for privacy.

### DNS AND IPv6 LEAKS

Your computer sends and receives a lot of data that isn't visible to you. When you type in a web address, a request is sent to a server that is usually operated by your ISP. When you connect to the internet using a VPN, this responsibility is now on them. If they don't take certain actions, this request containing info for the site your want to visit is being sent to THEIR ISP instead.

This may not be as bad as it going through yours, but there is a chance that the sites you visit can be correlated with the timestamps of when such a request is sent. Choose a VPN service that maintains their own first party DNS server that won't leak.

When you connect and use the internet, you are sending and receiving IPv6 data. Again, normally, this data is sent and resolved through your ISP and their DNS servers, but unless properly configured, this information might not be securely passing through the VPN tunnel and could be leaking to the open internet. Given such routed global IPv6 addresses, it's easy for remote sites to identify user ISPs. And with requisite authority, account information could be obtained from those ISPs.

Choose a VPN service that either blocks or provides new VPN-specific IPv6 address and provides an IPv6 DNS server that's reachable only through the VPN tunnel.

### ENCRYPTION AND OTHER FEATURES

Choose a VPN service that has strong data and handshake encryption. Make sure the protocol you choose has the level of advertised encryption available to it, as services typically provide more than one protocol with varying levels of encryption strength. Be sure that even if the service has the type of encryption you want available BY DEFAULT - some services will technically offer strong encryption, but it has to be manually configured.

Making sure P2P networks are not blocked on your VPN's servers

### SECURITY

Jurisdiction, specifically Freedom Status is important to ensure an environment where laws are enforced and physical security that we take for granted in some parts of the world are applicable to the servers we communicate with. This also helps indicate that our service and the servers we connect to are located in places that respect internet freedom.

### GEOBLOCKING

Being able to connect to an exit node in the country of your choice is really the only requirement if your only concern is to circumvent Geoblocking. This doesn't mean necessarily that you want to neglect the proper security measures, only that for things like Netflix, Hulu and sporting events, they are less important if geoblocking is ALL you're trying to get around, almost anything will work.

### BYPASSING RESTRICTIVE NETWORKS

Some parts of the world are resisting the ever-growing ability for their citizens to freely share information and as such have implemented roadblocks in their networking infrastructure to cripple such communication. For example, the "Great Firewall of China" has several layers of VPN detection and blocking built into it. Other networks belonging to large corporations or maybe even your Internet Service Provider may restrict you from using certain ports, limiting what you can use the internet for. However, there are ways to get around these restrictions by using the right VPN.

Features such as multihop, TCP port 443, Obfsproxy, SOCKS, SSL tunnels, SSH tunnels, and some other proprietary solutions can be useful in avoiding these restrictions. As for which are most effective, it's a matter of which restriction is being inflicted upon the user. Speak with your VPN service's support team to determine which might be effective in your case.

### KILL SWITCHES

Many VPN services offer in their client a feature called a "Kill switch". The idea with a Kill Switch is that when the VPN loses its connection, it completely prevents the device from using internet, thus preventing accidental leaks of traffic and connection data.

A Kill Switch has to react to an event and very often leads to leaks. The only way to be absolutely certain that there is no leak is for there to be an independent component (a Firewall) that blocks all packets unless destined for the VPN interface.

### CONCLUSION

Alternatively you can run your own VPN for using a cheap VPS and openVPN. It’s much cheaper than subscribing to a VPN service and you’ll get much better performance as you won’t share your VPN server with other VPN users. But do consider above mentioned features while settings up your remote VPN server.
