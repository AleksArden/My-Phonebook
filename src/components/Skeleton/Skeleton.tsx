import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

const LinearColor = () => {
  return (
    <Stack
      sx={{ width: '100%', color: 'grey.500' }}
      spacing={2}
      style={{ position: 'absolute', left: 0, top: 86 }}
    >
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="error" />
      <LinearProgress color="primary" />
    </Stack>
  );
};
export default LinearColor;
