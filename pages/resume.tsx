import SkillCard from '../components/SkillCard';
import { languages, tools } from '../data/skills';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../helpers/animation';
import Head from 'next/head';

const resume = () => {
  return (
    <motion.div
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
      className='px-6 py-2'
    >
      <div className='grid gap-6 md:grid-cols-2'>
        <Head>
          <title>Akhildev MJ - Resume</title>
        </Head>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold'>Education</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>
              Computer Science Engineering (2016-2020)
            </h5>
            <p>
              Sahrdaya College of Engineering and Technology Kodakara, Thrissur,
              Kerala
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold'>Experience</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>
              Software Engineer (2020-present)
            </h5>
            <p>QBurst Koratty, Thrissur, Kerala</p>
          </div>
        </motion.div>
      </div>

      <div className='grid mt-10 gap-9 md:grid-cols-2'>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Languages & Frameworks</h5>
          <motion.div
            variants={stagger}
            initial='initial'
            animate='animate'
            className='my-2'
          >
            {languages.map(language => (
              <motion.div variants={fadeInUp} key={language.id}>
                <SkillCard skill={language} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <h5 className='my-3 text-2xl font-bold'>Tools</h5>
          <motion.div
            variants={stagger}
            initial='initial'
            animate='animate'
            className='my-2'
          >
            {tools.map(tool => (
              <motion.div variants={fadeInUp} key={tool.id}>
                <SkillCard skill={tool} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
