import { useAppSelector } from 'redux/hooks/hooks';
import ContactsItem from 'components/ContactItem/ContactItem';
import ModalEditContact from 'components/ModalEditContact/ModalEditContact';
import ModalDelete from 'components/ModalDelete/ModalDelete';
import {
  selectFilterContacts,
  selectGetContacts,
} from 'redux/contacts/contacts.selector';

import { List, Text } from './ContactsList.styled';

const ContactsList = () => {
  const filteredItems = useAppSelector(selectFilterContacts);
  const items = useAppSelector(selectGetContacts);

  return items.length === 0 ? (
    <Text>There is no contact in your PHONEBOOK</Text>
  ) : filteredItems.length === 0 ? (
    <Text>There is no such contact in your PHONEBOOK</Text>
  ) : (
    <>
      <List>
        {filteredItems.map(contact => (
          <ContactsItem key={contact.id} contact={contact} />
        ))}
      </List>
      <ModalDelete />
      <ModalEditContact />
    </>
  );
};
export default ContactsList;
