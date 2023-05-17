import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks';
import { selectUserEmail } from 'redux/auth/auth.selector';
import { logOutUser } from 'redux/auth/auth.thunk';
import Button from 'components/Button/Button';

import { Wrapper, Text } from './UserMenu.styled';

const UserMenu = () => {
  const email = useAppSelector(selectUserEmail);
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
  };
  return (
    <Wrapper>
      <Text style={{ color: 'greenyellow' }}>{email}</Text>
      <Button
        name="Logout"
        type="button"
        color="error"
        onClick={handleLogOut}
      />
    </Wrapper>
  );
};
export default UserMenu;
