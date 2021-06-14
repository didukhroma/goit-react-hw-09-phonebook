import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import PropTypes from 'prop-types';
import AuthNav from '../AuthNav/AuthNav';
import Container from '../Container';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import styles from './AppBar.module.css';

export default function AppBar() {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <header className={styles.header}>
      <Container styleClass={styles.wrapper}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </Container>
    </header>
  );
}

AppBar.propTypes = {
  isAuthenticated: PropTypes.bool,
};
