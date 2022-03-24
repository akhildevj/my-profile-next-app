import { GiTie } from 'react-icons/gi';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle
} from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { useState } from 'react';
import Image from 'next/image';

const Sidebar = () => {
  const [theme, setTheme] = useState('dark');

  const changeTheme = () => {
    document.documentElement.classList.remove(theme);
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.add(newTheme);
  };

  return (
    <div>
      <div className='w-32 h-32 mx-auto '>
        <Image
          src='/akhildev.webp'
          alt='akku'
          className='rounded-full '
          width='8rem'
          height='8rem'
          layout='responsive'
          priority={true}
        />
      </div>

      <h3 className='my-4 text-3xl font-medium tracking-wider font-Kaushan'>
        <span>Akhil</span>
        <span>dev</span>
        <span> MJ</span>
      </h3>
      <p className='px-1 py-2 my-3 bg-gray-200 rounded-full dark:bg-zinc-800 '>
        Developer
      </p>

      <a
        className='flex items-center justify-center px-1 py-2 my-3 bg-gray-200 rounded-full dark:bg-zinc-800 '
        href='#'
        download='name'
      >
        <GiTie className='w-6 h-6' /> Download Resume
      </a>

      <div className='flex justify-around w-9/12 mx-auto my-5 text-rose-500 md:w-full'>
        <a
          href='https://www.github.com/akhildevj'
          rel='noreferrer'
          target='_blank'
        >
          <AiFillGithub
            className='w-8 h-8 cursor-pointer'
            aria-label='GitHub'
          />
        </a>
        <a
          href='https://www.linkedin.com/in/akhildevmj'
          rel='noreferrer'
          target='_blank'
        >
          <AiFillLinkedin
            className='w-8 h-8 cursor-pointer'
            aria-label='LinkedIn'
          />
        </a>
        <a
          href='https://www.twitter.com/akhildev_mj'
          rel='noreferrer'
          target='_blank'
        >
          <AiFillTwitterCircle
            className='w-8 h-8 cursor-pointer'
            aria-label='Twitter'
          />
        </a>
      </div>

      <div className='p-2 my-4 -mx-4 bg-gray-200 dark:bg-zinc-800'>
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span>Kerala India</span>
        </div>
        <p className='my-2 break-words'>akhildev.adj@gmail.com</p>
        <p className='my-2 break-words'>+91 9074123050</p>
      </div>

      <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-pink-500 to-rose-500 focus:outline-none'>
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-pink-500 to-rose-500'
      >
        Toggle Me
      </button>
    </div>
  );
};

export default Sidebar;
