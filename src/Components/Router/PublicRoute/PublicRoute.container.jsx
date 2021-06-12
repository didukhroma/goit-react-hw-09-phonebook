import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../../redux/auth/auth-selectors';
import PublicRoute from './PublicRoute';

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});
export default connect(mapStateToProps)(PublicRoute);
