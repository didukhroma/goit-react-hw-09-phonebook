import { Component } from 'react';
import PropTypes from 'prop-types';
import { searchName } from '../../utils/searchName';
import Button from '../Button';
import Input from '../Input';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const {
      target: { value, name },
    } = event;

    this.setState(() => ({
      [name]: value,
    }));
  };
  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { addContact, contacts } = this.props;

    const isFind = searchName(contacts, name);
    if (isFind) {
      alert(`${name} is already in contacts.`);
      return;
    }
    addContact(name, number);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <Input
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={this.handleChange}
        />
        <Input
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          onChange={this.handleChange}
        />
        <Button type="submit" text="Add contact" />
      </form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.obj,
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }),
  addContact: PropTypes.func,
};
export default ContactForm;
