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
          <PublicRoute exact path="/">
            <MainPage />
          </PublicRoute>

          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterPage />
          </PublicRoute>

          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginPage />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsPage />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </div>
  );
};

export default Router;

//
