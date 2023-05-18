import * as ReactDOM from 'react-dom';
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import Button from 'components/Button/Button';
import { IContact } from 'types/contactsType';
import EditContact from 'components/EditContact/EditContact';
import DeleteContact from 'components/DeleteContact/DeleteContact';

import { Item, TextWeight, Text } from './ContactItem.styled';

interface IProps {
  contact: IContact;
}

const ContactsItem = ({ contact: { name, number, id } }: IProps) => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const handleCloseModalEdit = () => {
    setShowModalEdit(false);
  };
  const handleCloseModalDelete = () => {
    setShowModalDelete(false);
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
                  onClick={() => setShowModalEdit(true)}
                  variant="contained"
                />
              </Item>

              <Item>
                <Button
                  type="button"
                  name="Delete"
                  color="error"
                  onClick={() => setShowModalDelete(true)}
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
      {showModalDelete &&
        ReactDOM.createPortal(
          <DeleteContact
            handleCloseModalDelete={handleCloseModalDelete}
            open={showModalDelete}
            id={id}
          />,
          document.querySelector('#modal-root')!
        )}
    </>
  );
};
export default ContactsItem;
