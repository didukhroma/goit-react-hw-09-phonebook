import { connect } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import Registration from './Registration';

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(Registration);
