import { Course } from '../types/course';
import sch1 from "../images/sch1.jpg";
import sch4 from "../images/sch4.png";
import sch3 from "../images/sch3.jpg";


export const courses: Course[] = [
  {
    id: "cyber-fundamentals",
    title: "Comprehensive Cybersecurity Beginner to Advanced",
    description: "Learn the fundamentals of cybersecurity, including basic concepts, terminology, and best practices for protecting digital assets.",
    level: "Beginner",
    duration: "6 weeks",
    durationCategory: "4-8 hours",
    topics: ["Network Security", "Web Security"],
    image: sch1.src,
    price: 299,
    currency: "USD",
    createdAt: "2024-03-15",
    popularity: 95,
    chapters: [
      {
        id: 101,
        title: "Understanding Cybersecurity Basics",
        duration: "2 weeks",
        description: "Core concepts and terminology in cybersecurity"
      },
      {
        id: 102,
        title: "Common Security Threats",
        duration: "2 weeks",
        description: "Overview of malware, phishing, and social engineering"
      },
      {
        id: 103,
        title: "Basic Security Practices",
        duration: "2 weeks",
        description: "Essential security measures for personal and professional use"
      }
    ]
  },
  {
    id:  "cyber-fundamentals-beginner",
    title: "Advanced Network Security Essentials Online Course",
    description: "Master the essential concepts of network security, protocols, and threat detection techniques.",
    level: "Intermediate",
    duration: "6 weeks",
    durationCategory: "8+ hours",
    topics: ["Network Security", "Incident Response"],
    image: sch4.src,
    price: 399,
    currency: "USD",
    createdAt: "2024-03-10",
    popularity: 88,
    chapters: [
      {
        id: 201,
        title: "Network Protocols and Security",
        duration: "2 weeks",
        description: "Deep dive into TCP/IP, SSL/TLS, and secure protocols"
      },
      {
        id: 202,
        title: "Firewall Configuration",
        duration: "3 weeks",
        description: "Setting up and managing network firewalls"
      },
      {
        id: 203,
        title: "Intrusion Detection Systems",
        duration: "3 weeks",
        description: "Implementing and monitoring IDS/IPS solutions"
      }
    ]
  },
  {
    id: "exploitation-techniques",
    title: "Advanced Penetration Testing And Ethical Hacking",
    description: "Learn advanced techniques for identifying and exploiting security vulnerabilities in systems and applications.",
    level: "Advanced",
    duration: "12 weeks",
    durationCategory: "8+ hours",
    topics: ["Web Security", "Malware Analysis"],
    image: sch3.src,
    price: 499,
    currency: "USD",
    createdAt: "2024-03-01",
    popularity: 75,
    chapters: [
      {
        id: 301,
        title: "Advanced Exploitation Techniques",
        duration: "4 weeks",
        description: "Advanced vulnerability discovery and exploitation"
      },
      {
        id: 302,
        title: "Web Application Security Testing",
        duration: "4 weeks",
        description: "Testing and exploiting web application vulnerabilities"
      },
      {
        id: 303,
        title: "Post-Exploitation and Reporting",
        duration: "4 weeks",
        description: "Post-exploitation techniques and professional reporting"
      }
    ]
  },
  {
    id: "web-security",
    title: "Advanced Web Security And Ethical Hacking",
    description: "Learn advanced techniques for identifying and exploiting security vulnerabilities in systems and applications.",
    level: "Advanced",
    duration: "12 weeks",
    durationCategory: "8+ hours",
    topics: ["Web Security", "Malware Analysis"],
    image: sch3.src,
    price: 499,
    currency: "USD",
    createdAt: "2024-03-01",
    popularity: 75,
    chapters: [
      {
        id: 301,
        title: "Advanced Exploitation Techniques",
        duration: "4 weeks",
        description: "Advanced vulnerability discovery and exploitation"
      },
      {
        id: 302,
        title: "Web Application Security Testing",
        duration: "4 weeks",
        description: "Testing and exploiting web application vulnerabilities"
      },
      {
        id: 303,
        title: "Post-Exploitation and Reporting",
        duration: "4 weeks",
        description: "Post-exploitation techniques and professional reporting"
      }
    ]
  },
  {
    id: "malware-analysis",
    title: "Advanced Malware Analysis",
    description: "Learn advanced techniques for identifying and exploiting security vulnerabilities in systems and applications.",
    level: "Advanced",
    duration: "12 weeks",
    durationCategory: "8+ hours",
    topics: ["Web Security", "Malware Analysis"],
    image: sch3.src,
    price: 499,
    currency: "USD",
    createdAt: "2024-03-01",
    popularity: 75,
    chapters: [
      {
        id: 301,
        title: "Advanced Exploitation Techniques",
        duration: "4 weeks",
        description: "Advanced vulnerability discovery and exploitation"
      },
      {
        id: 302,
        title: "Web Application Security Testing",
        duration: "4 weeks",
        description: "Testing and exploiting web application vulnerabilities"
      },
      {
        id: 303,
        title: "Post-Exploitation and Reporting",
        duration: "4 weeks",
        description: "Post-exploitation techniques and professional reporting"
      }
    ]
  },
  {
    id: "kali-linux-basics",
    title: "Introduction to Kali Linux, Setup, Linux Basics, and Tools ",
    description: "Learn the basics of kali linux operating system and tools.",
    level: "Advanced",
    duration: "8 weeks",
    durationCategory: "8+ hours",
    topics: ["Web Security", "Malware Analysis"],
    image: sch3.src,
    price: 499,
    currency: "USD",
    createdAt: "2024-03-01",
    popularity: 75,
    chapters: [
      {
        id: 301,
        title: "Introduction to Kali Linux",
        duration: "2 weeks",
        description: "Introduction to Kali Linux and Setup"
      },
      {
        id: 302,
        title: "Setup Kali Linux",
        duration: "2 weeks",
        description: "Setup Kali Linux with Linux Basics and Commands"
      },
      {
        id: 303,
        title: "Linux Basics",
        duration: "2 weeks",
        description: "Linux Basics and Commands"
      },
      {
        id: 304,
        title: "Tools",
        duration: "2 weeks",
        description: "Kali Linux Tools"
      }
    ]
  }
];