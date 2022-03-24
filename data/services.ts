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
    title: 'Backend Developer',
    about:
      'I have experience working with several backend frameworks like <b>Express.js</b> and <b>Nest.js</b>.',
    Icon: RiFlutterLine
  },
  {
    title: 'Frontend Developer',
    about:
      'I have experience working with several frontend frameworks like <b>React.js</b> and <b>Next.js</b>.',
    Icon: RiReactjsLine
  },
  {
    title: 'Database Management',
    about:
      'I have experience working with both SQL and NoSQL databases. Also several databases like <b>MySQL</b>, <b>MS SQL</b>, <b>PostgreSQL</b>, <b>MongoDB</b>, <b>Elasticsearch</b>, and <b>Firebase</b>.',
    Icon: RiDatabaseLine
  },
  {
    title: 'Amazon Cloud',
    about:
      'I have experience working with several AWS services like <b>Amazon EC2</b>, <b>Amazon Lambda</b>, <b>Amazon S3</b>, <b>Amazon CloudFront</b>, <b>Dynamo DB</b>, and <b>Amazon Cloudwatch</b>.',
    Icon: RiAmazonLine
  },
  {
    title: 'Flutter Developer',
    about:
      'I have experience working with <b>Flutter</b> and <b>Dart</b> programming language.',
    Icon: RiNodeTree
  },
  {
    title: 'Frontend Styling',
    about:
      'I have experience working with <b>CSS</b>, <b>CSS Modules</b>, <b>Sass</b>, and <b>Tailwind CSS</b>.',
    Icon: RiReactjsLine
  }
];
