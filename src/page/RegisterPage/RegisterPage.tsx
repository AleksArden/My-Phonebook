import * as React from 'react';
import { useReducer } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks';
import { Link, Navigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from 'components/Button/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { registerUser } from 'redux/auth/auth.thunk';
import { reduserRegisterPage, initStateRegisterPage } from 'services/reducer';
import {
  selectAuthError,
  selectAuthIsLoading,
  selectAuthToken,
} from 'redux/auth/auth.selector';
import LinearColor from 'components/Skeleton/Skeleton';
import Error from 'components/Error/Error';
import { ActionRegisterPage } from 'types/reduserTypes';

const RegisterPage = () => {
  const [state, reducerDispatch] = useReducer(
    reduserRegisterPage,
    initStateRegisterPage
  );

  const dispatch = useAppDispatch();
  const isLoadingAuth = useAppSelector(selectAuthIsLoading);
  const error = useAppSelector(selectAuthError);

  const handleChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) =>
    reducerDispatch({ type: name, payload: value } as ActionRegisterPage);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(registerUser(state));
  };

  const token = useAppSelector(selectAuthToken);
  if (token) <Navigate to="/contacts" replace />;

  return (
    <>
      {isLoadingAuth && <LinearColor />}
      {error && <Error />}
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
          <Typography component="h1" variant="h5" color="secondary">
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="off"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  color="secondary"
                  onChange={handleChange}
                  value={state.name}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  type="email"
                  name="email"
                  color="secondary"
                  onChange={handleChange}
                  value={state.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  color="secondary"
                  onChange={handleChange}
                  value={state.password}
                />
              </Grid>
            </Grid>
            <Button
              style={{
                borderRadius: 15,
                fontWeight: 500,
                lineHeight: 1.75,
                marginTop: 24,
                marginBottom: 16,
              }}
              color="secondary"
              type="submit"
              fullWidth
              variant="contained"
              name="Register"
            />
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  to="/login"
                  style={{
                    color: '#800080',
                  }}
                >
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default RegisterPage;
