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
          key={c.number}
          id={c.id}
          name={c.name}
          email={c.email}
          number={c.number}
        />
      ))}
    </Container>
  );
};

export default ContactList;
