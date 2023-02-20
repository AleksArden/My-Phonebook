import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import { Outlet } from 'react-router-dom';
import { getContactsThunk } from 'redux/contacts/contacts.thunk';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);
  return (
    <>
      <Outlet />
      <Filter />
      <ContactsList />
    </>
  );
};
export default ContactsPage;
