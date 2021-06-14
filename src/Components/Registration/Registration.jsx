import { useDispatch } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import { AuthForm } from '../AuthForm/AuthForm';

export default function Registration() {
  const dispatch = useDispatch();
  const handleAuth = data => {
    dispatch(authOperations.register(data));
  };
  return (
    <div>
      <AuthForm register cbAuth={handleAuth} />
    </div>
  );
}
