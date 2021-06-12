import { connect } from 'react-redux';
import { getUserEmail } from '../../redux/auth/auth-selectors';
import * as authOperations from '../../redux/auth/auth-operations';
import UserMenu from './UserMenu';

const mapStateToProps = state => ({
  userEmail: getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
