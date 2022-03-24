import { motion } from 'framer-motion';
import Image from 'next/image';
import { FunctionComponent, useState } from 'react';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { RiCloseLine } from 'react-icons/ri';
import { Project } from '../data/interfaces/project';
import { fadeInUp, stagger } from '../helpers/animation';

const ProjectCard: FunctionComponent<{
  project: Project;
  showDetails: number | null;
  setShowDetails: Function;
}> = ({
  project: {
    id,
    name,
    description,
    imageUrl,
    projectUrl,
    githubUrl,
    keyTechnologies
  },
  showDetails,
  setShowDetails
}) => {
  return (
    <div>
      <Image
        src={imageUrl}
        alt={name}
        width={300}
        height={150}
        layout='responsive'
        className='cursor-pointer'
        onClick={() => setShowDetails(id)}
        priority={true}
      />
      <p className='my-2 text-center'> {name}</p>

      {showDetails === id && (
        <div className='absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-300 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-zinc-700'>
          <motion.div variants={stagger} initial='initial' animate='animate'>
            <motion.div
              variants={fadeInUp}
              className='border-4 border-gray-100'
            >
              <Image
                src={imageUrl}
                alt={name}
                width={300}
                height={150}
                layout='responsive'
              />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className='flex justify-center my-4 space-x-3'
            >
              <a
                href={githubUrl}
                className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-400 dark:bg-zinc-800'
              >
                <AiFillGithub />
                <span>GitHub</span>
              </a>
              <a
                href={projectUrl}
                className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-400 dark:bg-zinc-800'
              >
                <AiFillProject />
                <span>Project</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger}>
            <motion.h2
              variants={fadeInUp}
              className='mb-3 text-xl font-medium md:text-2xl'
            >
              {name}
            </motion.h2>

            <motion.h3 variants={fadeInUp} className='mb-3 font-medium'>
              {description}
            </motion.h3>

            <motion.div
              variants={stagger}
              className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'
            >
              {keyTechnologies.map((keyTechnology, index) => (
                <motion.span
                  variants={fadeInUp}
                  key={index}
                  className='px-2 py-1 my-1 bg-gray-400 rounded dark:bg-zinc-800 '
                >
                  {keyTechnology}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <button
              onClick={() => setShowDetails(null)}
              className='absolute p-1 bg-gray-400 rounded-full top-3 right-3 focus:outline-none dark:bg-zinc-400'
            >
              <RiCloseLine size={30} />
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
