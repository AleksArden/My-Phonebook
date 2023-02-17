import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';

import { Header, Wrapper } from './AppBar.styled';

import { selectAuthToken } from 'redux/auth/auth.selector';
import { useSelector } from 'react-redux';
const AppBar = () => {
  const token = useSelector(selectAuthToken);

  return (
    <Header>
      <Wrapper>
        <Navigation />
        {token ? <UserMenu /> : <AuthNav />}
      </Wrapper>
    </Header>
  );
};
export default AppBar;
