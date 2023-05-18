import { useAppDispatch } from 'redux/hooks/hooks';
import PersonIcon from '@mui/icons-material/Person';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import Button from 'components/Button/Button';
import { openModalDelete, openModalEdit } from 'redux/contacts/contacts.slice';
import { IContact } from 'types/contactsType';

import { Item, TextWeight, Text } from './ContactItem.styled';

interface IProps {
  contact: IContact;
}

const ContactsItem = ({ contact: { name, number, id } }: IProps) => {
  const dispatch = useAppDispatch();

  const handleOpenModalDelete = () => {
    dispatch(openModalDelete({ name, number, id }));
  };
  const handleOpenModalEdit = () => {
    dispatch(openModalEdit({ name, number, id }));
  };

  return (
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
  );
};
export default ContactsItem;
