import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64723f036a9370d5a41b30cd.mockapi.io";

const errorMessage=`Something is wrong`

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get('/contacts');
        return response.data;
    
      } catch (e) {
        return thunkAPI.rejectWithValue(`${errorMessage}`);
      }
    }
  );

  export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
      try {
        const response = await axios.post('/contacts',  contact );
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(`${errorMessage}`);
      }
    }
  );

  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(`${errorMessage}`);
      }
    }
  );
  