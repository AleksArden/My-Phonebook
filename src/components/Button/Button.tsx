import * as React from 'react';
import ButtonMui from '@mui/material/Button';

interface IProps {
  name: string;
  color: 'secondary' | 'primary' | 'success' | 'error';
  type?: 'button' | 'submit';
  onClick: () => void;
}

const Button = ({ name, onClick, color, type }: IProps) => {
  return (
    <ButtonMui
      sx={{
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
      type={type}
    >
      <span>{name}</span>
    </ButtonMui>
  );
};
export default Button;
