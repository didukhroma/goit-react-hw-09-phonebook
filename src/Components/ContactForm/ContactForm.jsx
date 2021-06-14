import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchName } from '../../utils/searchName';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';
import Button from '../Button';
import Input from '../Input';
import styles from './ContactForm.module.css';

const INITIAL_STATE = { name: '', number: '' };

export default function ContactForm() {
  const [contact, setContact] = useState(INITIAL_STATE);

  const contacts = useSelector(getAllContacts);

  const dispatch = useDispatch();

  const handleChange = event => {
    const {
      target: { value, name },
    } = event;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isFind = searchName(contacts, contact.name);
    if (isFind) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(contact));
    setContact(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        type="text"
        name="name"
        value={contact.name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        onChange={handleChange}
      />
      <Input
        type="tel"
        name="number"
        value={contact.number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        onChange={handleChange}
      />
      <Button type="submit" text="Add contact" />
    </form>
  );
}
