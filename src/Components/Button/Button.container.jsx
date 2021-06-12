import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import Button from './Button';

const mapDispatchToProps = dispatch => ({
  onDeletedById: id => dispatch(deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(Button);
