import { FaAws, FaNodeJs, FaReact } from 'react-icons/fa';
import {
  SiDocker,
  SiElasticsearch,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiTailwindcss
} from 'react-icons/si';
import { Skill } from './interfaces/skill';

export const languages: Skill[] = [
  { name: 'Node.js', Icon: FaNodeJs },
  { name: 'Express.js', Icon: SiExpress },
  { name: 'React.js', Icon: FaReact },
  { name: 'Nest.js', Icon: SiNestjs },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'Flutter', Icon: SiFlutter },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'Python', Icon: SiPython }
];
export const tools: Skill[] = [
  { name: 'AWS', Icon: FaAws },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'Firebase', Icon: SiFirebase },
  { name: 'PostgreSQL', Icon: SiPostgresql },
  { name: 'ElasticSearch', Icon: SiElasticsearch },
  { name: 'Kubernetes', Icon: SiKubernetes },
  { name: 'Docker', Icon: SiDocker },
  { name: 'Tailwind', Icon: SiTailwindcss }
];
