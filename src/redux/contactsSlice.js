import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {fetchContacts,addContact, deleteContact} from './operations'

const customArr = [fetchContacts, addContact, deleteContact]
const fn = (status) => customArr.map((el) => el[status])
const initialState={
items: [],
isLoading: false,
error: null

}
const handlePending = state => {
    state.isLoading = true;
  };
 const handleFullfiled = state =>{
  state.isLoading = false;
  state.error = null;
 }

  const handleRejected = (state, {payload}) => {
    state.isLoading = false;
    state.error = payload;
  };
  const fetchSuccessReducer= (state, {payload})=>{
    state.items = payload
  }
  const addContactReducer = (state, {payload})=>{
    state.items.push(payload)
   
  }
  const deleteContactReducer = (state, action)=>{
    const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1);

  }
const ContactsSlice=createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchContacts.fulfilled, fetchSuccessReducer)
        .addCase(addContact.fulfilled, addContactReducer)
        .addCase(deleteContact.fulfilled, deleteContactReducer)
        .addMatcher(isAnyOf(...fn('pending')), handlePending)
        .addMatcher(isAnyOf(...fn('rejected')), handleRejected)
        .addMatcher(isAnyOf(...fn('fulfilled')), handleFullfiled);
    }
})
export const contactsReducer = ContactsSlice.reducer