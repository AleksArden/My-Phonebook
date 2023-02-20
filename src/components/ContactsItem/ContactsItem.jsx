import ContactDetails from 'components/ContactDetails/ContactDetails';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentContact } from 'redux/contacts/contacts.selector';
import { openContactAction } from 'redux/contacts/contacts.slice';
import { deleteContactThunk } from 'redux/contacts/contacts.thunk';

const ContactsItem = ({ contact }) => {
  // const currentContact = useSelector(selectCurrentContact);
  // console.log(currentContact);
  const dispatch = useDispatch();
  // const handleButton = () => {
  //   dispatch(openContactAction(contact));
  // };
  const handleDelete = () => {
    dispatch(deleteContactThunk(contact.id));
  };
  return (
    <li>
      {/* {!currentContact ? ( */}
      <>
        <b>{contact.name}</b>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </>
      {/* ) : ( */}
      <ContactDetails />
      {/* )} */}
    </li>
  );
};
export default ContactsItem;
