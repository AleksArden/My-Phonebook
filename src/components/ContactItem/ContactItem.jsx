import Button from 'components/Button/Button';
import { useDispatch } from 'react-redux';

import { openModalDelete, openModalEdit } from 'redux/contacts/contacts.slice';

import { Item } from './ContactItem.styled';

const ContactsItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

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
              <b>{name}</b>
            </Item>

            <Item>
              <p>{number}</p>
            </Item>

            <Item>
              <Button
                name="Edit"
                color="success"
                onClick={handleOpenModalEdit}
              />
            </Item>

            <Item>
              <Button
                name="Delete"
                color="error"
                onClick={handleOpenModalDelete}
              />
            </Item>
          </tr>
        </tbody>
      </table>
    </li>
  );
};
export default ContactsItem;
