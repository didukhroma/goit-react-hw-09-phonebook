import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contacts-operations';
import {
  getAllContacts,
  getLoading,
} from '../../redux/contacts/contacts-selectors';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Loader from '../Loader';
import styles from './ContactsPage.module.css';

export default function ContactsPage() {
  const contacts = useSelector(getAllContacts);
  const loading = useSelector(getLoading);

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), []);

  return (
    <section className={styles.contactsSection}>
      {loading && <Loader />}
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.title}>Contacts</h2>
        {contacts.length > 1 && <Filter />}
        {contacts.length > 0 && <ContactList />}
        {contacts.length === 0 && (
          <h3 className={styles.title}>Your Phonebook is empty!!!</h3>
        )}
      </div>
    </section>
  );
}
