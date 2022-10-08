import { NavLink } from 'react-router-dom';

import { ROUTES } from 'utils';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      {ROUTES.map(d => (
        <NavLink
          key={d.path}
          to={d.path}
          className={({ isActive }) =>
            isActive ? classes.activeLink : classes.link
          }
        >
          {d.name}
        </NavLink>
      ))}
    </header>
  );
};

export default Header;
