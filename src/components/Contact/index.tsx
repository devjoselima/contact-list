import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { remove, edit } from '../../store/reducers/contacts';
import ContactClass from '../../models/Contact';

import * as S from './styles';

type Props = ContactClass;

const Contact = ({
  name: originalName,
  email: originalEmail,
  numberContact: originalNumber,
  id
}: Props) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numberContact, setNumberContact] = useState('');

  useEffect(() => {
    if (originalName.length > 0) {
      setName(originalName);
    }

    if (originalEmail.length > 0) {
      setEmail(originalEmail);
    }

    if (originalNumber > 0) {
      setNumberContact(originalNumber);
    }
  }, [originalName, originalEmail, originalNumber]);

  function cancelEdition() {
    setIsEditing(false);
    setName(originalName);
    setEmail(originalEmail);
    setNumberContact(originalNumber);
  }

  return (
    <S.ContactContainer>
      <S.NameContact
        value={name}
        onChange={(event) => setName(event.target.value)}
        disabled={!isEditing}
      />
      <S.EmailContact
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        disabled={!isEditing}
      />
      <S.NumberContact
        value={numberContact}
        onChange={(event) => setNumberContact(event.target.value)}
        disabled={!isEditing}
      />
      <S.ContainerButtons>
        {isEditing ? (
          <>
            <S.SaveButton
              onClick={() => {
                dispatch(
                  edit({
                    id,
                    name,
                    email,
                    numberContact
                  })
                );
              }}
            >
              Salvar
            </S.SaveButton>
            <S.RemoveButton onClick={cancelEdition}>Cancelar</S.RemoveButton>
          </>
        ) : (
          <>
            <S.EditButton onClick={() => setIsEditing(true)}>
              Editar
            </S.EditButton>
            <S.RemoveButton onClick={() => dispatch(remove(id))}>
              Remover
            </S.RemoveButton>
          </>
        )}
      </S.ContainerButtons>
    </S.ContactContainer>
  );
};

export default Contact;
