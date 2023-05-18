import * as React from 'react';
import { ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// import { selectOpenModalEdit } from 'redux/contacts/contacts.selector';
// import { closeModalEdit } from 'redux/contacts/contacts.slice';
import EditContact from 'components/EditContact/EditContact';
import { createPortal } from 'react-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,

  bgcolor: 'background.paper',
  borderRadius: 15,
  boxShadow: 24,
  p: 4,
};

interface IProps {
  onClose: () => void;
  open: boolean;
  children: ReactNode;
}

export default function ModalContainer({ children, onClose, open }: IProps) {
  // const dispatch = useAppDispatch();

  // const open = useAppSelector(selectOpenModalEdit);

  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <Modal
        open={open}
        style={{ borderRadius: 15 }}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ backgroundColor: '#c0c0c0' }}>
          {children}
        </Box>
      </Modal>
    </div>
  );
}
