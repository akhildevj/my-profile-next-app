import { AnimatePresence } from 'framer-motion';
import NavBar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <div className='grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-32'>
      <div className='col-span-12 p-4 text-center text-black bg-white dark:bg-zinc-900 dark:text-white lg:col-span-3 rounded-2xl shadow-custom_light dark:shadow-custom_dark'>
        <Sidebar />
      </div>
      <div className='flex flex-col col-span-12 overflow-hidden text-black bg-white dark:bg-zinc-900 dark:text-white lg:col-span-9 rounded-2xl shadow-custom_light dark:shadow-custom_dark'>
        <NavBar />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MyApp;
