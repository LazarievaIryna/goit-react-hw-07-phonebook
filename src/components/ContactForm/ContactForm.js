import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Label, Input, BtnAdd } from './ContactForm.styled';
import {selectContacts} from '../../redux/selectors'
import { addContact } from 'redux/operations';



export const ContactForm=()=>{
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleSubmit=event=>{
    event.preventDefault();

    const newContact = { name, number};
    
    const checkedNumber=contacts.find(contact => contact.number === number);
    
    if(contacts.some(contact=>contact.name===name)){
      return alert(`Contact with name "${name}" is already in contacts`);
    } else if(checkedNumber){
      return alert(
        `Contact with number ${checkedNumber.number} is already in  ${checkedNumber.name}`
      );
    }
    else{
      dispatch(addContact(newContact))
    }
  setName('')
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