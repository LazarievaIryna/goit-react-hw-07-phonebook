import { createSlice } from '@reduxjs/toolkit';



export const contactsSlice = createSlice(
    {
        name:"contacts",
        initialState: {
            contacts: [],
            filter: ""
          },
        reducers:{
            addContact:{
                reducer(state, action){
                    state.contacts.push(action.payload)
                }
            },
            filterContacts:{
                reducer(state, action){
                    state.filter=action.payload
                }
            },
            removeContacts:{
                reducer(state, action){
                    state.contacts=state.contacts.filter(
                        contact=> contact.id !== action.payload
                    )
                }
            }
        }
    }
);

export const { addContact, filterContacts, removeContacts} = contactsSlice.actions;
// export const contactSlice = contactsSlice.reducer;