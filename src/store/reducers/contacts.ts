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
      numberContact: 1234
    },
    {
      id: 2,
      name: 'João Pedro',
      email: 'joao@email.com',
      numberContact: 12345
    },
    {
      id: 3,
      name: 'Maria eduarda',
      email: 'duda@email.com',
      numberContact: 123456
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
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const indexContact = state.items.findIndex(
        (t) => t.id === action.payload.id
      );

      if (indexContact >= 0) {
        state.items[indexContact] = action.payload;
      }
    },
    add: (state, action: PayloadAction<Contact>) => {
      const contactExist = state.items.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );

      if (contactExist) {
        alert('Ja existe um contato com esse nome');
      } else {
        state.items.push(action.payload);
      }
    }
  }
});

export const { remove, edit, add } = contactsSlice.actions;

export default contactsSlice.reducer;
