import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input';
import styles from './AuthForm.module.css';
const INITIAL_STATE = { name: '', email: '', password: '' };

export const AuthForm = ({ register, cbAuth }) => {
  const [user, setUser] = useState(INITIAL_STATE);
  const btnText = register ? 'Registration' : 'LogIn';

  const handleChange = event => {
    setUser({ ...user, [event.target.name.toLowerCase()]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    cbAuth(user);
    setUser(INITIAL_STATE);
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        {register && (
          <Input
            type={'text'}
            name={'Name'}
            value={user.name}
            onChange={handleChange}
          />
        )}
        <Input
          type={'email'}
          name={'Email'}
          value={user.email}
          onChange={handleChange}
        />
        <Input
          type={'password'}
          name={'Password'}
          value={user.password}
          onChange={handleChange}
        />
        <Button type="submit" text={btnText} className={styles.button} />
      </form>
    </div>
  );
};
AuthForm.propTypes = {
  register: PropTypes.bool,
  cbAuth: PropTypes.func,
};
