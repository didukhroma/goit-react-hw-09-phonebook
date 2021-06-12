import { connect } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import Login from './Login';

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(Login);
