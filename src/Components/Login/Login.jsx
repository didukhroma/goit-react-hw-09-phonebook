import PropTypes from 'prop-types';
import { AuthForm } from '../AuthForm/AuthForm';

const Login = ({ onLogin }) => {
  const handleAuth = ({ email, password }) => {
    onLogin({ email, password });
  };
  return (
    <div>
      <AuthForm cbAuth={handleAuth} />
    </div>
  );
};
Login.propTypes = {
  onLogin: PropTypes.func,
};
export default Login;
