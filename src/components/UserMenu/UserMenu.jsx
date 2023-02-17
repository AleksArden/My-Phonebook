import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail } from 'redux/auth/auth.selector';
import { logOutUserThunk } from 'redux/auth/auth.thunk';

const UserMenu = () => {
  const email = useSelector(selectUserEmail);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUserThunk());
  };
  return (
    <div>
      <p>{email}</p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
