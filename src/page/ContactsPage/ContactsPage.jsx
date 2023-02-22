import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import { Outlet } from 'react-router-dom';
import { getContactsThunk } from 'redux/contacts/contacts.thunk';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/auth.selector';
import { selectAuthIsLoading } from 'redux/auth/auth.selector';
import LinearColor from 'components/Skeleton/Skeleton';
import { selectContactIsLoading } from 'redux/contacts/contacts.selector';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoadingContact = useSelector(selectContactIsLoading);
  const isLoadingAuth = useSelector(selectAuthIsLoading);
  const token = useSelector(selectAuthToken);
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch, token]);
  return (
    <>
      {isLoadingContact || isLoadingAuth ? (
        <LinearColor />
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
