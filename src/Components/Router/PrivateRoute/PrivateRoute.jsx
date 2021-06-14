import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../../redux/auth/auth-selectors';

export default function PrivateRoute({ children, redirectTo, ...routeProps }) {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {isAuthenticated ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
  redirectTo: PropTypes.string,
};
