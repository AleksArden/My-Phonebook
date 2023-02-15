import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import HomePage from 'page/HomePage/HomePage';
import AddContactPage from 'page/AddContactPage/AddContactPage';
import ContactsPage from 'page/ContactsPage/ContactsPage';
import LoginPage from 'page/LoginPage/LoginPage';
import RegisterPage from 'page/RegisterPage/RegisterPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/add-contact" element={<AddContactPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
