import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      to="/goit-react-hw-09-phonebook/register"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Registration
    </NavLink>
    <NavLink
      to="/goit-react-hw-09-phonebook/login"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      LogIn
    </NavLink>
  </div>
);

export default AuthNav;
