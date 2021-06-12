import Button from '../Button';
import styles from './ContactListItem.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({ contact: { name, number, id } }) => {
  return (
    <li className={styles.item}>
      <span className={styles.text}>
        {name} : {number}
      </span>
      <Button text="Delete" id={id} />
    </li>
  );
};
ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }),
};
export default ContactListItem;