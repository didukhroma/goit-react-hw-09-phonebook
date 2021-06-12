import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Button.module.css';
const Button = ({
  type = 'button',
  text = 'Button',
  onDeletedById,
  id,
  cdOnClick,
  className,
}) => {
  const handleClick = () => {
    if (cdOnClick) return cdOnClick();
    if (!id) return;
    onDeletedById(id);
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={cx(styles.button, className)}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
  onDeletedById: PropTypes.func,
  cdOnClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
