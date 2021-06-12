import PropTypes from 'prop-types';
import { AuthForm } from '../AuthForm/AuthForm';

const Registration = ({ onRegister }) => {
  const handleAuth = data => {
    onRegister(data);
  };
  return (
    <div>
      <AuthForm register cbAuth={handleAuth} />
    </div>
  );
};
Registration.propTypes = {
  onRegister: PropTypes.func,
};
export default Registration;
