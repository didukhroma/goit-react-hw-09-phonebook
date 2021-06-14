import { Suspense, lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
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
          <PublicRoute exact path="/goit-react-hw-09-phonebook/">
            <MainPage />
          </PublicRoute>

          <PublicRoute
            path="/goit-react-hw-09-phonebook/register"
            restricted
            redirectTo="/goit-react-hw-09-phonebook/contacts"
          >
            <RegisterPage />
          </PublicRoute>

          <PublicRoute
            path="/goit-react-hw-09-phonebook/login"
            restricted
            redirectTo="/goit-react-hw-09-phonebook/contacts"
          >
            <LoginPage />
          </PublicRoute>

          <PrivateRoute
            path="/goit-react-hw-09-phonebook/contacts"
            redirectTo="/goit-react-hw-09-phonebook/login"
          >
            <ContactsPage />
          </PrivateRoute>
          <Redirect to="/goit-react-hw-09-phonebook/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Router;

//
