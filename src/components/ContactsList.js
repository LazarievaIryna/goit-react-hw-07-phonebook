import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { ContactItem } from './ContactItem';
import { List } from './ContactList.styled';

export const ContactList=()=>{
    // const contacts = useSelector(selectContacts);
    // const filter=useSelector(selectStatusFilter)

    const visibleContacts=useSelector(selectVisibleContacts)
    console.log(visibleContacts)
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