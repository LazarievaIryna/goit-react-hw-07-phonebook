import { useDispatch, useSelector } from "react-redux"
import { filterContacts } from "redux/contactsSlice";
import { getFilter } from "redux/selectors";
export const Filter=()=>{
    const dispatch=useDispatch()
    const filter=useSelector(getFilter)
    
    return(<>
    <h2>Contacts</h2>
      <p>Find contacts by name</p>
    <input type="text" 
    name="filter"
    value={filter}
    onChange={event=> dispatch(filterContacts(event.target.value))} 
    />
    </>)
}