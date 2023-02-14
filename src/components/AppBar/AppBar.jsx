import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNave';

const AppBar = () => {
  return (
    <header>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </header>
  );
};
export default AppBar;
