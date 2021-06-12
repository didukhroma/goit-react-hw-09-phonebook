import PropTypes from 'prop-types';
import styles from './Container.module.css';
import cx from 'classnames';
const Container = ({ children, styleClass }) => {
  return <div className={cx(styles.container, styleClass)}>{children}</div>;
};
Container.propTypes = {
  children: PropTypes.node,
  styleClass: PropTypes.string,
};
export default Container;
