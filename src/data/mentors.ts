import sch1 from '../images/sch1.jpg'
import sch2 from '../images/sch2.jpg'
import sch3 from '../images/sch3.jpg'
import sch4 from '../images/sch4.png';
import { MentorExpertise } from '@/types/mentorship';

export const mentors = [
  {
    id: "m1",
    user: {
      display_name: "Dr. Sarah Chen",
      avatar_url: sch1.src
    },
    isVerified: true,
    rating: 4.9,
    totalSessions: 234,
    hourlyRate: 60,
    bio: "Security Researcher at MIT with 10+ years of experience in application security and penetration testing. Specialized in cloud security architecture.",
    expertise: [MentorExpertise.WebSecurity, MentorExpertise.CloudSecurity, MentorExpertise.PenTesting],
    yearsOfExperience: 10
  },
  {
    id: "m2",
    user: {
      display_name: "James Wilson",
      avatar_url: sch2.src
    },
    isVerified: true,
    rating: 4.8,
    totalSessions: 186,
    hourlyRate: 35,
    bio: "Former NSA analyst turned cybersecurity educator. Expert in network security and incident response. Regular speaker at DefCon.",
    expertise: [MentorExpertise.NetworkSecurity, MentorExpertise.IncidentResponse, MentorExpertise.Forensics],
    yearsOfExperience: 8
  },
  {
    id: "m3",
    user: {
      display_name: "Elena Rodriguez",
      avatar_url: sch3.src
    },
    isVerified: true,
    rating: 4.95,
    totalSessions: 312,
    hourlyRate: 50,
    bio: "CISO with extensive experience in financial sector security. Specialized in security architecture and team leadership.",
    expertise: [MentorExpertise.SecurityArchitecture, MentorExpertise.AppSec, MentorExpertise.CryptoSecurity],
    yearsOfExperience: 15
  },
  {
    id: "m4",
    user: {
      display_name: "Michael Zhang",
      avatar_url: sch4.src
    },
    isVerified: true,
    rating: 4.7,
    totalSessions: 56,
    hourlyRate: 85,
    bio: "Malware analyst and reverse engineering specialist. Contributing researcher to major threat intelligence platforms.",
    expertise: [MentorExpertise.MalwareAnalysis, MentorExpertise.Forensics, MentorExpertise.IncidentResponse],
    yearsOfExperience: 6
  }
];
