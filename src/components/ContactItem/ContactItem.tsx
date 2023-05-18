import * as ReactDOM from 'react-dom';
import { useState } from 'react';
import { useAppDispatch } from 'redux/hooks/hooks';
import PersonIcon from '@mui/icons-material/Person';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import Button from 'components/Button/Button';
import { openModalDelete } from 'redux/contacts/contacts.slice';
import { IContact } from 'types/contactsType';

import { Item, TextWeight, Text } from './ContactItem.styled';
import EditContact from 'components/EditContact/EditContact';

interface IProps {
  contact: IContact;
}

const ContactsItem = ({ contact: { name, number, id } }: IProps) => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const dispatch = useAppDispatch();

  const handleOpenModalDelete = () => {
    dispatch(openModalDelete({ name, number, id }));
  };
  const handleOpenModalEdit = () => {
    // dispatch(openModalEdit({ name, number, id }));
    setShowModalEdit(true);
  };
  const handleCloseModalEdit = () => {
    setShowModalEdit(false);
  };
  return (
    <>
      <li>
        <table>
          <tbody>
            <tr>
              <Item>
                <PersonIcon color="secondary" fontSize="small" />
              </Item>
              <Item>
                <TextWeight>{name}</TextWeight>
              </Item>
              <Item>
                <PhoneForwardedIcon color="secondary" fontSize="small" />
              </Item>
              <Item>
                <Text>{number}</Text>
              </Item>

              <Item>
                <Button
                  type="button"
                  name="Edit"
                  color="success"
                  onClick={handleOpenModalEdit}
                  variant="contained"
                />
              </Item>

              <Item>
                <Button
                  type="button"
                  name="Delete"
                  color="error"
                  onClick={handleOpenModalDelete}
                  variant="contained"
                />
              </Item>
            </tr>
          </tbody>
        </table>
      </li>
      {showModalEdit &&
        ReactDOM.createPortal(
          <EditContact
            handleCloseModalEdit={handleCloseModalEdit}
            open={showModalEdit}
            contact={{ name, number, id }}
          />,
          document.querySelector('#modal-root')!
        )}
    </>
  );
};
export default ContactsItem;
