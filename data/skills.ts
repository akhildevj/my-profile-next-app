import {
  RiNodeTree,
  RiAmazonLine,
  RiDatabaseLine,
  RiReactjsLine,
  RiFlutterLine
} from 'react-icons/ri';
import { Service } from './interfaces/service';
import { Skill } from './interfaces/skill';

export const languages: Skill[] = [
  {
    id: 1,
    name: 'Flutter',
    Icon: RiFlutterLine
  },
  {
    id: 2,
    name: 'Express.js',
    Icon: RiNodeTree
  },
  {
    id: 3,
    name: 'React.js',
    Icon: RiReactjsLine
  }
];
export const tools: Skill[] = [
  {
    id: 1,
    name: 'SQL',
    Icon: RiDatabaseLine
  },
  {
    id: 2,
    name: 'AWS',
    Icon: RiAmazonLine
  }
];
