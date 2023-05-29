import { createSlice } from '@reduxjs/toolkit';
// const defaultStatus = {
// 	pending: 'pending',
// 	fulfilled: 'fulfilled',
// 	rejected: 'rejected',
// }
const initialState={
items: [],
isLoading: false,
error: null

}
const handlePending = state => {
    state.isLoading = true;
  };

  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };
const ContactsSlice=createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder)=>{
        builder
    }
})