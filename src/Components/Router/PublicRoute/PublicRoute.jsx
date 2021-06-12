import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
const PublicRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);
PublicRoute.propTypes = {
  component: PropTypes.array,
  isAuthenticated: PropTypes.bool,
  redirectTo: PropTypes.string,
};
export default PublicRoute;
