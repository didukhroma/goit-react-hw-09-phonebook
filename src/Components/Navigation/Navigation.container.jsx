import { connect } from 'react-redux';
import Navigation from './Navigation';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
