import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NavItem from './NavItem';

const NavBar = () => {
  const [active, setActive] = useState<string>('About');
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') setActive('About');
    if (pathname === '/projects') setActive('Projects');
    if (pathname === '/resume') setActive('Resume');
  }, [pathname]);

  return (
    <div className='flex justify-between px-5 py-3 my-3'>
      <span className='text-xl font-bold border-b-4 text-cyan-400 border-sky-600 md:text-2xl'>
        {active}
      </span>
      <div className='flex space-x-5 text-lg'>
        <NavItem name='About' route='/' active={active} setActive={setActive} />
        <NavItem
          name='Projects'
          route='/projects'
          active={active}
          setActive={setActive}
        />
        <NavItem
          name='Resume'
          route='/resume'
          active={active}
          setActive={setActive}
        />
      </div>
    </div>
  );
};

export default NavBar;
