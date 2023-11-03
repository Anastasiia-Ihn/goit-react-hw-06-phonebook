
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    delContact: (state, action) => {
      state.contacts = state.contacts.filter(
        el => (el.id !== action.payload)
          );
        
    },
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload]
    
      }
  },
});

export const { delContact, addContact } = contactsSlice.actions;

export default contactsSlice.reducer;






