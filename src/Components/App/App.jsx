import { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '../AppBar';
import Container from '../Container';
import Router from '../Router';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <AppBar />
        <Container>
          <Router />
        </Container>
      </>
    );
  }
}
App.propTypes = {
  onGetCurrentUser: PropTypes.func,
};
export default App;
