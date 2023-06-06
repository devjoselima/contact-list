import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { remove } from '../../store/reducers/contacts';
import ContactClass from '../../models/Contact';

import * as S from './styles';

type Props = ContactClass;

const Contact = ({
  name: originalName,
  email: originalEmail,
  number: originalNumber,
  id
}: Props) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    if (originalName.length > 0) {
      setName(originalName);
    }

    if (originalEmail.length > 0) {
      setEmail(originalEmail);
    }

    if (originalNumber > 0) {
      setNumber(originalNumber);
    }
  }, [originalName, originalEmail, originalNumber]);

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
        value={number}
        onChange={(event) => setNumber(event.target.value)}
        disabled={!isEditing}
      />
      <S.ContainerButtons>
        {isEditing ? (
          <>
            <S.SaveButton>Salvar</S.SaveButton>
            <S.RemoveButton onClick={() => setIsEditing(false)}>
              Cancelar
            </S.RemoveButton>
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
