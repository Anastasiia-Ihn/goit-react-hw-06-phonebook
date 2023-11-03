import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

const initialState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
    reducers: {
      
// addContact: {
//     reduser: (state, action) => {
//       state.contacts = [...state.contacts, action.payload];
//     },
//     prepare: ( name, number ) => {
//       const id = nanoid();
//       return { payload: { id, name, number } };
//     },
//   },
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
  
    delContact: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
  },
});

export const { delContact, addContact } = contactsSlice.actions;

export default contactsSlice.reducer;


