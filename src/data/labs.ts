import { Lab } from '../types/lab';
import { echo, help, whoami, clear, ls, date, history, mkdir,  } from '../components/coursedata/commands';

export const labs: Lab[] = [
  {
    id: 1,
    title: "Incident Response Simulation",
    description: "Handle a simulated security breach and practice incident response procedures in a realistic environment.",
    difficulty: "Hard",
    duration: "2 hours",
    points: 500,
    topics: ["Incident Response", "Digital Forensics"],
    prerequisites: ["Network Security", "System Administration"],
    tools: ["Volatility", "Wireshark", "Log Analysis Tools"],
    commands: { whoami, echo, help, clear , ls, date,history, mkdir,  },
    objectives: [
      "Simulate a security breach and practice incident response procedures",
      "Learn to use Volatility and Wireshark for digital forensics",
      "Understand the importance of incident response and digital forensics"
    ],
    instructions: [
      "Set up a simulated security breach scenario in a virtual environment",
      "Capture network traffic and logs using Wireshark and Log Analysis Tools",
      "Investigate the breach and perform incident response procedures"
    ],
    resources: [
      {
        title: "Security Breach Simulation Guide",
        url: "https://www.us-cert.gov/sites/default/files/resources/simulations/simulations_breach_simulation_guide.pdf"
      },
    ]
  },
  
  {
    id: 2,
    title: "Web Application Vulnerabilities",
    description: "Identify and exploit common web vulnerabilities in a safe environment. Practice SQL injection, XSS, and CSRF attacks.",
    difficulty: "Medium",
    duration: "1.5 hours",
    points: 250,
    topics: ["Web Security", "Penetration Testing"],
    prerequisites: ["Basic Web Development", "HTTP Protocol"],
    tools: ["Burp Suite", "OWASP ZAP"],
    commands: { whoami, echo, help, clear, ls, date,  },
    objectives: [
      "Identify common web vulnerabilities",
      "Practice SQL injection, XSS, and CSRF attacks",
      "Understand the importance of web security"
    ],
    instructions: [
      "Install Burp Suite or OWASP ZAP on your local machine",
      "Practice SQL injection, XSS, and CSRF attacks on a vulnerable web application",
      "Analyze captured packets to identify potential security threats"
    ],
    resources: [
      {
        title: "OWASP Top 10 Vulnerabilities",
        url: "https://owasp.org/www-project-top-ten/"
      },
      {
        title: "Web Application Security Testing Guide",
        url: "https://owasp.org/www-project-web-security-testing-guide/"
      }
    ]
  },
  {
    id: 3,
    title: "Advanced Network Traffic Analysis",
    description: "Learn to analyze network packets using Wireshark to identify potential security threats and malicious activities.",
    difficulty: "Easy",
    duration: "45 mins",
    points: 100,
    topics: ["Network Security", "Traffic Analysis"],
    prerequisites: ["Basic Networking"],
    tools: ["Wireshark"],
    commands: { whoami, echo, help, clear, ls, date },
    objectives: [
      "Learn to use Wireshark for network traffic analysis",
      "Identify potential security threats and malicious activities",
      "Understand network protocols and traffic patterns"
    ],
    instructions: [
      "Install Wireshark on your local machine",
      "Capture network traffic using Wireshark",
      "Analyze captured packets to identify potential security threats"
    ],
    resources: [
      {
        title: "Wireshark Tutorial",
        url: "https://www.wireshark.org/docs/wsug_html_chunked/"
  },
]
  },
  
];