import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactItem } from './ContactItem';
import { List } from './ContactList.styled';

export const ContactList=()=>{
    const contacts = useSelector(getContacts);
    const filter=useSelector(getFilter)

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return(
        <List>
      {visibleContacts.map(({ name, number, id }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            id={id}
            
          />
        );
      })}
    </List>
    )
}