import { connect } from 'react-redux';
import ContactsPage from './Contacts';
import { fetchContacts } from '../../redux/contacts/contacts-operations';
import {
  getAllContacts,
  getLoading,
} from '../../redux/contacts/contacts-selectors';

const mapStateToProps = state => ({
  contacts: getAllContacts(state),
  loading: getLoading(state),
});
const mapDispatchToProps = dispatch => ({
  fetchAllContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
