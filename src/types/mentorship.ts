export enum MentorExpertise {
  NetworkSecurity = 'Network Security',
  WebSecurity = 'Web Security',
  CloudSecurity = 'Cloud Security',
  MalwareAnalysis = 'Malware Analysis',
  IncidentResponse = 'Incident Response',
  Forensics = 'Forensics',
  AppSec = 'Application Security',
  CryptoSecurity = 'Cryptography',
  PenTesting = 'Penetration Testing',
  SecurityArchitecture = 'Security Architecture'
}

export type MentorshipStatus = 'pending' | 'active' | 'completed' | 'cancelled';

export interface Mentor {
  id: string;
  user: {
    display_name: string;
    avatar_url: string;
  };
  expertise: MentorExpertise[];
  yearsOfExperience: number;
  bio: string;
  hourlyRate: number;
  rating: number;
  totalSessions: number;
  isVerified: boolean;
}


export interface MentorshipSession {
  id: string;
  mentorId: string;
  menteeId: string;
  status: MentorshipStatus;
  scheduledFor: string;
  duration: number;
  topic: string;
  notes?: string;
  rating?: number;
  feedback?: string;
  createdAt: string;
}

export interface MentorshipRequest {
  id: string;
  mentorId: string;
  menteeId: string;
  topic: string;
  message: string;
  preferredTime: string[];
  status: MentorshipStatus;
  createdAt: string;
}