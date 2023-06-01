import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList=()=>{


    const visibleContacts=useSelector(selectVisibleContacts)
    
    return(
        <List>
      {visibleContacts.map(contact=>(
        <ContactItem key={contact.id} contact={contact}/>
      ))
      }
    </List>
    )
}