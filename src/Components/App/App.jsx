import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentUser } from '../../redux/auth/auth-operations';
import AppBar from '../AppBar';
import Container from '../Container';
import Router from '../Router';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Container>
        <Router />
      </Container>
    </>
  );
}

App.propTypes = {
  onGetCurrentUser: PropTypes.func,
};
