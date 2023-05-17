import * as React from 'react';
import ButtonMui from '@mui/material/Button';

interface IProps {
  name: string;
  color?: 'secondary' | 'primary' | 'success' | 'error';

  onClick: () => void;
}

const Button = ({ name, onClick, color }: IProps) => {
  return (
    <ButtonMui
      sx={{
        color: 'secondary',
        fontWeight: 600,
        borderRadius: 15,
        lineHeight: 0.9,
        paddingTop: 1,
        paddingBottom: 0.85,
      }}
      color={color}
      size="large"
      onClick={onClick}
      variant="contained"
    >
      <span>{name}</span>
    </ButtonMui>
  );
};
export default Button;
