import { useDispatch } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import { AuthForm } from '../AuthForm/AuthForm';

export default function Login() {
  const dispatch = useDispatch();

  const handleAuth = userData => {
    dispatch(authOperations.logIn(userData));
  };

  return (
    <div>
      <AuthForm cbAuth={handleAuth} />
    </div>
  );
}
