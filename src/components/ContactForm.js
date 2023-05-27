import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid'
import { Form, Label, Input, BtnAdd } from './ContactForm.styled';
import {getContacts} from '../redux/selectors'
import { addContact } from 'redux/contactsSlice';


export const ContactForm=()=>{
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit=event=>{
    event.preventDefault();
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts.`)
      : dispatch(addContact({
id: nanoid(),
name: name,
number: number

      }));
      setName('');
      setNumber('')
  }
  
  const handleNameChange = event => {
    setName(event.currentTarget.value);
  };
  const handleNumberChange = event => {
    setNumber(event.currentTarget.value);
  };

    return (
        <Form onSubmit={handleSubmit}>
          <Label>
            Name
            <Input
              type="text"
              value={name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleNameChange}
            />
          </Label>
    
          <Label>
            Number
            <Input
              type="tel"
              value={number}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleNumberChange}
            />
          </Label>
    
          <BtnAdd type="submit">Add contact</BtnAdd>
        </Form>
      );
}