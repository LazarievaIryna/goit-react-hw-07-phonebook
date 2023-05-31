
import { useDispatch } from "react-redux"
import {deleteContact} from"../redux/operations"
// import { removeContacts } from "redux/contactsSlice"
import { Item, BtnDelete } from "./ContactItem.styled"

export const ContactItem=({name, number, id})=>{
    const dispatch=useDispatch()
    const handleDelete = () => dispatch(deleteContact(id));
    return(
        <>
      <Item key={id}>
        {name}: {number}
        <BtnDelete type="button" onClick={handleDelete}>
          Delete
        </BtnDelete>
      </Item>
    </>
    )
}