import PropTypes from 'prop-types';
import { useDispatch } from "react-redux"
import {deleteContact} from"../../redux/operations"
import { Item, BtnDelete } from "./ContactItem.styled"

export const ContactItem=({contact: {name, number, id}})=>{
    const dispatch=useDispatch()
    const handleDelete = () => dispatch(deleteContact(id));
    return(
        <>
      <Item >
        {name}: {number}
        <BtnDelete type="button" onClick={handleDelete}>
          Delete
        </BtnDelete>
      </Item>
    </>
    )
}
ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};