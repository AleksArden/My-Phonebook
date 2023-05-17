import * as React from 'react';
import { useReducer } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { logInUser } from 'redux/auth/auth.thunk';
import { reducerLoginPage, initStateLoginPage } from 'services/reducer';
import {
  selectAuthError,
  selectAuthIsLoading,
  selectAuthToken,
} from 'redux/auth/auth.selector';
import LinearColor from 'components/Skeleton/Skeleton';
import Error from 'components/Error/Error';
import { ActionLoginPage } from 'types/reduserTypes';

const LoginPage = () => {
  const [state, reducerDispatch] = useReducer(
    reducerLoginPage,
    initStateLoginPage
  );
  const dispatch = useAppDispatch();

  const handleChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) =>
    reducerDispatch({ type: name, payload: value } as ActionLoginPage);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(logInUser(state));
  };

  const token = useAppSelector(selectAuthToken);
  if (token) <Navigate to="/contacts" replace />;

  const isLoadingAuth = useAppSelector(selectAuthIsLoading);
  const error = useAppSelector(selectAuthError);

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
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              autoFocus
              color="secondary"
              onChange={handleChange}
              value={state.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color="secondary"
              onChange={handleChange}
              value={state.password}
            />

            <Button
              style={{ borderRadius: 15 }}
              color="secondary"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item>
                <Link
                  to="/register"
                  style={{
                    color: '#800080',
                  }}
                >
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default LoginPage;
