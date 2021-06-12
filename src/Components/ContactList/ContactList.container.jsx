import { connect } from 'react-redux';
import ContactList from './ContactList';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';

const mapStateToProps = state => ({
  contacts: getFilteredContacts(state),
});

export default connect(mapStateToProps)(ContactList);
