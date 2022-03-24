import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../helpers/animation';
import Head from 'next/head';

const Home = () => {
  return (
    <motion.div
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
      className='flex flex-col flex-grow px-6 pt-1'
    >
      <Head>
        <title>Akhildev MJ</title>
      </Head>

      <h4 className='my-3 font-medium'>
        Hi there, I am a Software Engineer with 5+ Years of development
        experience in several languages.
      </h4>
      <div className='flex-grow p-4 mt-5 -mx-6 bg-gray-400 dark:bg-zinc-800'>
        <h5 className='my-3 text-xl font-bold tracking-wide'>
          What I am good at
        </h5>
        <motion.div
          className='grid gap-6 lg:grid-cols-2'
          variants={stagger}
          initial='initial'
          animate='animate'
        >
          {services.map(service => (
            <motion.div
              variants={fadeInUp}
              key={service.id}
              className='bg-gray-200 rounded-lg dark:bg-black lg:col-span-1'
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
