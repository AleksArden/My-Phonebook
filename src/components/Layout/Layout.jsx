import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import { Wrapper } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </main>
    </>
  );
};
export default Layout;
