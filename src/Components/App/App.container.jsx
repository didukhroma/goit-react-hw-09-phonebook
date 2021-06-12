import { connect } from 'react-redux';
import App from './App';
import { getCurrentUser } from '../../redux/auth/auth-operations';

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};
export default connect(null, mapDispatchToProps)(App);
