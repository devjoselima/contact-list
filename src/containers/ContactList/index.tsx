import { useSelector } from 'react-redux';
import Contact from '../../components/Contact';
import { RootReducer } from '../../store';
import { Container } from './styles';

const ContactList = () => {
  const contacts = useSelector((state: RootReducer) => state.contacts.items);

  return (
    <Container>
      {contacts.map((c) => (
        <Contact
          key={c.numberContact}
          id={c.id}
          name={c.name}
          email={c.email}
          numberContact={c.numberContact}
        />
      ))}
    </Container>
  );
};

export default ContactList;
