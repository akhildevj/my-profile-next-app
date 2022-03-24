import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectsNavBar from '../components/ProjectsNavbar';
import { Category } from '../data/interfaces/project';
import { projects as data } from '../data/projects';
import { fadeInUp, routeAnimation, stagger } from '../helpers/animation';

const Projects = () => {
  const [projects, setProjects] = useState(data);
  const [active, setActive] = useState('all');
  const [showDetails, setShowDetails] = useState<number | null>(null);

  const filterHandler = (category: Category) => {
    setActive(category);

    if (category === 'all') {
      setProjects(data);
      return;
    }

    const filterData = data.filter(project =>
      project.category.includes(category)
    );
    setProjects(filterData);
  };

  return (
    <motion.div
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
      className='px-5 py-2 overflow-y-scroll h-screen65'
    >
      <Head>
        <title>Akhildev MJ - Projects</title>
      </Head>

      <ProjectsNavBar filterHandler={filterHandler} active={active} />
      <motion.div
        variants={stagger}
        initial='initial'
        animate='animate'
        className='relative grid grid-cols-12 gap-4 my-3'
      >
        {projects.map(project => (
          <motion.div
            variants={fadeInUp}
            key={project.id}
            className='col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-zinc-800'
          >
            <ProjectCard
              project={project}
              showDetails={showDetails}
              setShowDetails={setShowDetails}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
