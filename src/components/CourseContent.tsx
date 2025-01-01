"use client";

import React, { ComponentType, useState } from 'react';
import { Shield, Bug, ShieldAlert, Video, Terminal, ShieldCheck } from 'lucide-react';
import { TerminalPlayground } from '../lib/terminal/Terminal';
// import dynamic from 'next/dynamic';

// const TerminalProps = dynamic(
//   () => import('../lib/terminal/Terminal').then((mod) => mod.Terminal),
//   { ssr: false }
// );



interface CourseContentProps {
  currentChapter: number;
}

interface Chapter {
  title: string;
  icon: ComponentType<{ className?: string; size?: number }>;
  content: string;
  videoUrl: string;
  commands?: {
    whoami: string;
  };
  terminalCommands?: object
}



const chapters : Chapter[] = [
  {
    title: 'Understanding Cybersecurity Basics',
    icon: Shield,
    content: `
      <h2 class="text-2xl font-bold mb-4">Core Concepts in Cybersecurity</h2>
      <p class="mb-4">Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These attacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes.</p>
      
      <h3 class="text-xl font-semibold mb-3">Key Topics:</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>Introduction to Information Security</li>
        <li>CIA Triad: Confidentiality, Integrity, and Availability</li>
        <li>Basic Security Terminology</li>
        <li>Types of Cyber Threats</li>
      </ul>
    `,
    videoUrl: 'https://www.youtube.com/embed/Otq0LY90Qso',
    commands:  {whoami: "jackharper"}
  },
  {
    title: 'Common Security Threats',
    icon: Bug,
    content: `
      <h2 class="text-2xl font-bold mb-4">Understanding Security Threats</h2>
      <p class="mb-4">In this chapter, we'll explore the most common types of security threats that organizations and individuals face today.</p>
      
      <h3 class="text-xl font-semibold mb-3">Topics Covered:</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>Malware Types and Prevention</li>
        <li>Phishing Attacks and Social Engineering</li>
        <li>Ransomware and Data Breaches</li>
        <li>Zero-day Exploits</li>
      </ul>
    `,
    videoUrl: 'https://www.youtube.com/embed/Otq0LY90Qso',
    terminalCommands: [
      'wireshark',
      'tcpdump -i any',
      'ps aux | grep suspicious'
    ],
    commands:  {whoami: "common yber"}
  },
  {
    title: 'Basic Security Practices',
    icon: ShieldAlert,
    content: `
      <h2 class="text-2xl font-bold mb-4">Essential Security Measures</h2>
      <p class="mb-4">Learn the fundamental security practices that help protect your digital assets and maintain cybersecurity hygiene.</p>
      
      <h3 class="text-xl font-semibold mb-3">Key Practices:</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>Password Management and Strong Authentication</li>
        <li>Regular Software Updates and Patch Management</li>
        <li>Data Backup and Recovery</li>
        <li>Network Security Best Practices</li>
      </ul>
    `,
    videoUrl: 'https://www.youtube.com/embed/Otq0LY90Qso',
    terminalCommands: [
      'sudo apt update',
      'sudo apt upgrade',
      'systemctl status firewalld'
    ]
  },
  {
    title: 'Advanced Security Concepts',
    icon: Video,
    content: `
      <h2 class="text-2xl font-bold mb-4">Advanced Security Concepts</h2>
      <p class="mb-4">Dive deeper into advanced security concepts that are crucial for understanding modern cybersecurity.</p>

      <h3 class="text-xl font-semibold mb-3">Topics Covered:</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>Cryptography and Encryption</li>
        <li>Network Security Protocols</li>
        <li>Security Testing and Auditing</li>
        <li>Security Architecture and Design</li>
      </ul>
    `,
    videoUrl: 'https://www.youtube.com/embed/Otq0LY90Qso',
    terminalCommands: [
      'openssl req -new -x509 -days 365 -nodes -out server.crt -keyout server.key',
      'openssl s_client -connect example.com:443',
      'telnet example.com 80'
    ]
},
{
    title: 'Ethical Hacking and Penetration Testing',
    icon: Terminal,
    content: `
      <h2 class="text-2xl font-bold mb-4">Ethical Hacking and Penetration Testing</h2>
      <p class="mb-4">Explore the world of ethical hacking and penetration testing, and learn how to identify vulnerabilities in systems and networks.</p
      <h3 class="text-xl font-semibold mb-3">Topics Covered:</h3>
      <ul class="list-disc pl-6 mb-6">
      <li>Introduction to Ethical
      <li>Identifying and Reporting Vulnerabilities</li>
      <li>Exploiting Vulnerabilities</li>
      <li>Penetration Testing Tools</li>
      </ul>`,
     videoUrl: 'https://www.youtube.com/embed/Otq0LY90Qso',
    terminalCommands: [
      'openssl req -new -x509 -days 365 -nodes -out server.crt -keyout server.key',
      'openssl s_client -connect example.com:443',
      'telnet example.com 80'
]
  },
  {
    title: 'Security Incident Response',
    icon: ShieldCheck,
    content: `
      <h2 class="text-2xl font-bold mb-4">Security Incident Response</h2>
      <p class="mb-4">Learn how to respond to and recover from security incidents, ensuring minimal impact on your systems and data.</p>

      <h3 class="text-xl font-semibold mb-3">Key Topics:</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>Incident Response Planning</li>
        <li>Incident Handling and Response</li>
        <li>Post-Incident Analysis and Lessons Learned</li>
        <li>Incident Reporting and Communication</li>
      </ul>
    `,
    videoUrl: 'https://www.youtube.com/embed/Otq0LY90Qso',
    terminalCommands: [
      'sudo apt update',
      'sudo apt upgrade',
      'systemctl status firewalld'
    ]
  },
  {
    title: 'Security Compliance and Regulations',
    icon: ShieldCheck,
    content: `
      <h2 class="text-2xl font-bold mb-4">Security Compliance and Regulations</h2>
      <p class="mb-4">Understand the importance of security compliance and regulations in the digital landscape.</p>
      <h3 class="text-xl font-semibold mb-3">Key Topics:</h3>
      <ul class="list-disc pl-6 mb-6">
      <li>Compliance Frameworks (e.g., GDPR, HIPAA)</li>
      >
      <li>Regulatory Compliance Requirements</li>
      <li>Security Aud
      <li>Incident Response Training</li>
      <li>Incident Reporting and Communication</li>
      </ul>`,
      videoUrl: 'https://www.youtube.com/embed/Otq0LY90Qso',
    terminalCommands: [
      'openssl req -new -x509 -days 365 -nodes -out server.crt -keyout server.key',
      'openssl s_client -connect example.com:443',
      'telnet example.com 80'
 ]
  }
]
  // Add more chapters as needed

function CourseContent({ currentChapter }: CourseContentProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  
  const chapter = chapters[currentChapter];
  const Icon = chapter.icon;

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="text-green-600" size={24} />
        <h2 className="text-2xl text-gray-600 font-bold">{chapter.title}</h2>
      </div>
      
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setShowVideo(!showVideo)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Video size={20} />
          {showVideo ? 'Hide Video' : 'Watch Tutorial'}
        </button>
        
        <button
          onClick={() => setShowTerminal(!showTerminal)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
        >
          <Terminal size={20} />
          {showTerminal ? 'Hide Terminal' : 'Open Terminal'}
        </button>
      </div>

      {showVideo && (
        <div className="mb-6 rounded-lg overflow-hidden">
          <iframe
            src={chapter.videoUrl}
            className="w-full aspect-video"
            allowFullScreen
          />
        </div>
      )}

      {showTerminal && (
        <div className="mb-6 bg-gray-900 h-[400px] text-green-400 p-4 rounded-lg font-mono">
          <TerminalPlayground commands={chapters[currentChapter]?.commands || {}}/>
        </div>
      )}
  
      <div 
        className="prose max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: chapter.content }}
      />
    </div>
  );
}

export default CourseContent;