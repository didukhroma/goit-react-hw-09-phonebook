import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);
PrivateRoute.propTypes = {
  component: PropTypes.array,
  isAuthenticated: PropTypes.bool,
  redirectTo: PropTypes.string,
};
export default PrivateRoute;
