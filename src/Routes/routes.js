import { lazy } from 'react';
const MainPage = lazy(() => import('../Pages/MainPage'));
const RegisterPage = lazy(() => import('../Pages/RegisterPage'));
const LoginPage = lazy(() => import('../Pages/LoginPage'));
const ContactsPage = lazy(() => import('../Pages/ContactsPage'));

const routes = [
  {
    id: 'MainPage',
    path: '/',
    component: MainPage,
    exact: true,
    text: 'MainPage',
    publicRoute: true,
    redirect: '/',
  },
  {
    id: 'RegisterPage',
    path: '/register',
    component: RegisterPage,
    exact: true,
    text: 'RegisterPage',
    publicRoute: true,
    redirect: '/contacts',
  },
  {
    id: 'LoginPage',
    path: '/login',
    component: LoginPage,
    exact: true,
    text: 'LoginPage',
    publicRoute: true,
    redirect: '/contacts',
  },
  {
    id: 'ContactsPage',
    path: '/contacts',
    component: ContactsPage,
    exact: true,
    text: 'ContactsPage',
    publicRoute: false,
    redirect: '/login',
  },
];
//---------------------------------------Header-Navigation
const mainPage = routes.find(({ id }) => id === 'MainPage');
const contactsPage = routes.find(({ id }) => id === 'ContactsPage');
const navPath = { mainPage, contactsPage };
//--------------------------------------
export { routes, navPath };
