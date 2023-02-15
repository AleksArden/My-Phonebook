import Navigation from 'components/Navigation/Navigation';
// import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';

import { Header, Wrapper } from './AppBar.styled';

const AppBar = () => {
  return (
    <Header>
      <Wrapper>
        <Navigation />
        {/* <UserMenu /> */}
        <AuthNav />
      </Wrapper>
    </Header>
  );
};
export default AppBar;
