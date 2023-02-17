import { useSelector } from 'react-redux';
import { selectUserEmail } from 'redux/auth/auth.selector';

const UserMenu = () => {
  const email = useSelector(selectUserEmail);
  return (
    <div>
      <p>{email}</p>
      <button>Logout</button>
    </div>
  );
};
export default UserMenu;
