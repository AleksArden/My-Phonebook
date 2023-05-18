import * as React from 'react';
import ButtonMui from '@mui/material/Button';

interface IProps {
  name: string;
  color?: 'secondary' | 'primary' | 'success' | 'error';
  type?: 'button' | 'submit';
  onClick?: () => void;
  variant?: 'contained';
  fullWidth?: boolean;
  style?: {};
}

const Button = ({
  name,
  onClick,
  color,
  type,
  variant,
  fullWidth,
  style,
}: IProps) => {
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
      variant={variant}
      type={type}
      fullWidth={fullWidth}
      style={style}
    >
      <span>{name}</span>
    </ButtonMui>
  );
};
export default Button;
