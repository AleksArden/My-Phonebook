import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import HomePage from 'page/HomePage/HomePage';
import AddContact from 'page/AddContact/AddContact';
import Contacts from 'page/Contacts/Contacts';
import Login from 'page/Login/Login';
import Register from 'page/Register/Register';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/add-contact" element={<AddContact />} />
        <Route path="/register" element={<Login />} />
        <Route path="/login" element={<Register />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
