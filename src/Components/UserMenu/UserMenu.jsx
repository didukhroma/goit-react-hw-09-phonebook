import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail } from '../../redux/auth/auth-selectors';
import * as authOperations from '../../redux/auth/auth-operations';
import Button from '../Button';
import styles from './UserMenu.module.css';
export default function UserMenu() {
  const userEmail = useSelector(getUserEmail);

  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Welcome {userEmail} !</p>
      <Button text={'LogOut'} cdOnClick={onLogout} />
    </div>
  );
}
