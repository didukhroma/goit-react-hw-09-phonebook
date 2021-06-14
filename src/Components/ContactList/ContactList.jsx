import { useSelector } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import ContactListItem from '../ContactListItem/ContactListItem';

export default function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
