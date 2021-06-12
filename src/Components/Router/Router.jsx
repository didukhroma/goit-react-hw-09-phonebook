import { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
// import { routes } from '../../Routes/routes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const MainPage = lazy(() => import('../../Pages/MainPage'));
const RegisterPage = lazy(() => import('../../Pages/RegisterPage'));
const LoginPage = lazy(() => import('../../Pages/LoginPage'));
const ContactsPage = lazy(() => import('../../Pages/ContactsPage'));

const Router = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <PublicRoute exact path="/" component={MainPage} />
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts"
            component={RegisterPage}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
            component={LoginPage}
          />
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={ContactsPage}
          />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Router;

//
