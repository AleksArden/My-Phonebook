import { useAppSelector } from 'redux/hooks/hooks';
import ContactsItem from 'components/ContactItem/ContactItem';

import ModalDelete from 'components/Delete/Delete';
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
    </>
  );
};
export default ContactsList;
