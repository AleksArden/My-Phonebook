import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

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

const ModalContainer = ({ children, onClose, open }: IProps) => {
  return (
    <div>
      <Modal
        open={open}
        style={{ borderRadius: 15 }}
        onClose={() => onClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ backgroundColor: '#c0c0c0' }}>
          {children}
        </Box>
      </Modal>
    </div>
  );
};
export default ModalContainer;
