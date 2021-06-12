import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute.jsx';
import { getIsAuthenticated } from '../../../redux/auth/auth-selectors';

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});
export default connect(mapStateToProps)(PrivateRoute);
