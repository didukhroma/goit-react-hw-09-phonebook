import { Component } from 'react';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';
export default class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Loader
          type="ThreeDots"
          color="black"
          height={30}
          width={30}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
}
