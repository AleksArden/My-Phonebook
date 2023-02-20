import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Notiflix from 'notiflix';
import { useReducer } from 'react';
import { addContactThunk } from 'redux/contacts/contacts.thunk';
import { useDispatch, useSelector } from 'react-redux';
import { selectGetContacts } from 'redux/contacts/contacts.selector';
import { formReducer } from 'services/reducer';
import { initStateAddContact } from 'services/reducer';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

const AddContactPage = () => {
  const [state, setState] = useReducer(formReducer, initStateAddContact);
  const items = useSelector(selectGetContacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const hasSameName = items.some(contact => contact.name === state.name);

    hasSameName
      ? Notiflix.Notify.warning(`${state.name} is already in contacts`, {
          position: 'center-center',
          cssAnimationStyle: 'zoom',
        })
      : dispatch(addContactThunk(state));
    navigate('/contacts');

    hasSameName ||
      (setState({ type: 'name', payload: '' }) && hasSameName) ||
      setState({ type: 'number', payload: '' });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Contact
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="off"
              autoFocus
              color="secondary"
              onChange={({ target: { value, name } }) =>
                setState({ type: name, payload: value })
              }
              value={state.name}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="number"
              label="Number"
              type="tel"
              id="password"
              autoComplete="off"
              color="secondary"
              onChange={({ target: { value, name } }) =>
                setState({ type: name, payload: value })
              }
              value={state.number}
            />

            <Button
              style={{
                backgroundColor: '#800080',
              }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Contact
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default AddContactPage;
