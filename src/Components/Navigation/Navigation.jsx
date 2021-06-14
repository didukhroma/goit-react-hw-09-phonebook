import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
// import cx from 'classnames';
import { navPath } from '../../Routes/routes';
import styles from './Navigation.module.css';
const { mainPage, contactsPage } = navPath;
export default function Navigation() {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <nav className={styles.nav}>
      <NavLink
        exact={mainPage.exact}
        to={mainPage.path}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}
      >
        {mainPage.text}
      </NavLink>
      {isAuthenticated && (
        <NavLink
          exact={contactsPage.exact}
          to={contactsPage.path}
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          {contactsPage.text}
        </NavLink>
      )}
    </nav>
  );
}
