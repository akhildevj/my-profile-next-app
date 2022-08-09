import { FunctionComponent } from 'react';
import Link from 'next/link';

const NavItem: FunctionComponent<{
  active: string;
  setActive: Function;
  name: string;
  route: string;
}> = ({ active, setActive, name, route }) => {
  return (
    active !== name && (
      <Link href={route} passHref={true}>
        <span
          onClick={() => setActive(name)}
          className='cursor-pointer hover:text-cyan-400'
        >
          {name}
        </span>
      </Link>
    )
  );
};

export default NavItem;
