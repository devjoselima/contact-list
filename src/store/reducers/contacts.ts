import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Contact from '../../models/Contact';

type ContactsState = {
  items: Contact[];
};

const initialState: ContactsState = {
  items: [
    {
      id: 1,
      name: 'Jose Lima',
      email: 'jose@email.com',
      number: 1234
    },
    {
      id: 2,
      name: 'João Pedro',
      email: 'joao@email.com',
      number: 12345
    },
    {
      id: 3,
      name: 'Maria eduarda',
      email: 'duda@email.com',
      number: 123456
    }
  ]
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    }
  }
});

export const { remove } = contactsSlice.actions;

export default contactsSlice.reducer;
