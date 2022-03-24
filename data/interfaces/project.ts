export interface Project {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  projectUrl: string;
  category: Category[];
  keyTechnologies: string[];
}

export type Category = 'all' | 'react' | 'node' | 'mongo' | 'express' | 'next';
