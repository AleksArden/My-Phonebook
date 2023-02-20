import ContactsItem from 'components/ContactsItem/ContactsItem';

import { useSelector } from 'react-redux';
import { selectFilterContacts } from 'redux/contacts/contacts.selector';

const ContactsList = () => {
  const items = useSelector(selectFilterContacts);

  return (
    <ul>
      {items.map(contact => (
        <ContactsItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
export default ContactsList;
