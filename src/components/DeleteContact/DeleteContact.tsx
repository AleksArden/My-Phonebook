import { useAppDispatch } from 'redux/hooks/hooks';
import Box from '@mui/material/Box';
import Button from 'components/Button/Button';
import { deleteContact } from 'redux/contacts/contacts.thunk';
import ModalContainer from 'components/Modal/Modal';

import { Text, List } from './DeleteContact.styled';

interface IProps {
  handleCloseModalDelete: () => void;
  open: boolean;
  id: string;
}

const DeleteContact = ({ handleCloseModalDelete, open, id }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <ModalContainer open={open} onClose={handleCloseModalDelete}>
      <Box style={{ backgroundColor: '#c0c0c0', height: 116 }}>
        <Text>Delete contact?</Text>
        <List>
          <li>
            <Button
              type="button"
              name="Delete"
              color="error"
              onClick={() => dispatch(deleteContact(id))}
              variant="contained"
            />
          </li>
          <li>
            <Button
              name="Cancel"
              color="primary"
              onClick={() => handleCloseModalDelete()}
              variant="contained"
              type="button"
            />
          </li>
        </List>
      </Box>
    </ModalContainer>
  );
};
export default DeleteContact;
