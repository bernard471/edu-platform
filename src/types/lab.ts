

export type LabDifficulty = 'Easy' | 'Medium' | 'Hard';
export type SortOption = 'points' | 'difficulty' | 'duration';

export interface Lab {
  id: number;
  title: string;
  description: string;
  difficulty: LabDifficulty;
  duration: string;
  points: number;
  topics: string[];
  prerequisites: string[];
  tools: string[];
  commands: object;
  terminalCommands?: object;
  objectives: string[];
  instructions: string[];
  resources: {
    title: string;
    url: string;
  }[];
}

export interface Labcommands {
  id: number;
  title: string;
  content: string;
  commands?: object;
}

