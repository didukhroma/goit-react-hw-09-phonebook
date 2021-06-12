import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './UserMenu.module.css';
const UserMenu = ({ userEmail, onLogout }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Welcome {userEmail} !</p>
      <Button text={'LogOut'} cdOnClick={onLogout} />
    </div>
  );
};
UserMenu.propTypes = {
  userEmail: PropTypes.string,
  onLogout: PropTypes.func,
};
export default UserMenu;
