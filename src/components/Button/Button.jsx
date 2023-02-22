import * as React from 'react';
import ButtonMui from '@mui/material/Button';

const Button = ({ name, onClick, color }) => {
  return (
    <ButtonMui
      sx={{
        // width: 128,
        // height: 36,
        color: '#800080',
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
