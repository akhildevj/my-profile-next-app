import {
  RiNodeTree,
  RiAmazonLine,
  RiDatabaseLine,
  RiReactjsLine,
  RiFlutterLine
} from 'react-icons/ri';
import { Service } from './interfaces/service';

export const services: Service[] = [
  {
    id: 1,
    title: 'Flutter Developer',
    about:
      'Hi there, I am a Software Engineer with 5+ Years of <b>development</b> experience in several languages.',
    Icon: RiFlutterLine
  },
  {
    id: 2,
    title: 'Backend Developer',
    about:
      'Hi there, I am a Software Engineer with 5+ Years of <b>development</b> experience in several languages.',
    Icon: RiNodeTree
  },
  {
    id: 3,
    title: 'Frontend Developer',
    about:
      'Hi there, I am a Software Engineer with 5+ Years of <b>development</b> experience in several languages.',
    Icon: RiReactjsLine
  },
  {
    id: 4,
    title: 'Database Management',
    about:
      'Hi there, I am a Software Engineer with 5+ Years of <b>development</b> experience in several languages.',
    Icon: RiDatabaseLine
  },
  {
    id: 5,
    title: 'Amazon Cloud',
    about:
      'Hi there, I am a Software Engineer with 5+ Years of <b>development</b> experience in several languages.',
    Icon: RiAmazonLine
  }
];
