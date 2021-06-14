import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Button.module.css';
export default function Button({
  type = 'button',
  text = 'Button',
  id,
  cdOnClick,
  className,
}) {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (cdOnClick) return cdOnClick();
    if (!id) return;
    dispatch(deleteContact(id));
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
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
  cdOnClick: PropTypes.func,
  className: PropTypes.string,
};
