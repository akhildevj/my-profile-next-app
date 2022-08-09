import { FunctionComponent } from 'react';
import { Category } from '../data/interfaces/project';

const NavItem: FunctionComponent<{
  value: Category;
  filterHandler: Function;
  active: string;
}> = ({ value, filterHandler, active }) => {
  let className = 'capitalize cursor-pointer hover:text-cyan-400';
  if (active === value) className += ' text-sky-600 font-bold';

  return (
    <li onClick={() => filterHandler(value)} className={className}>
      {value}
    </li>
  );
};

const ProjectsNavBar: FunctionComponent<{
  filterHandler: Function;
  active: string;
}> = props => {
  const values: Category[] = [
    'all',
    'react',
    'node',
    'mongo',
    'express',
    'next'
  ];

  return (
    <div className='flex px-3 py-2 space-x-3 overflow-x-auto list-none'>
      {values.map(value => (
        <NavItem key={value} value={value} {...props} />
      ))}
    </div>
  );
};

export default ProjectsNavBar;
