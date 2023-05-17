import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import { getContacts } from 'redux/contacts/contacts.thunk';
import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks';
import { selectAuthToken } from 'redux/auth/auth.selector';
import { selectAuthIsLoading } from 'redux/auth/auth.selector';
import LinearColor from 'components/Skeleton/Skeleton';
import {
  selectContactIsLoading,
  selectContactsError,
} from 'redux/contacts/contacts.selector';
import Error from 'components/Error/Error';

const ContactsPage = () => {
  const dispatch = useAppDispatch();
  const isLoadingContact = useAppSelector(selectContactIsLoading);
  const isLoadingAuth = useAppSelector(selectAuthIsLoading);
  const error = useAppSelector(selectContactsError);
  const token = useAppSelector(selectAuthToken);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch, token]);
  return (
    <>
      {isLoadingContact && <LinearColor />}
      {isLoadingAuth && <LinearColor />}
      {error ? (
        <Error />
      ) : (
        <>
          <Outlet />
          <Filter />
          <ContactsList />
        </>
      )}
    </>
  );
};
export default ContactsPage;
