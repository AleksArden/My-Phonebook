import { NavList, StyledLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <NavList>
        <li>
          <StyledLink to={'/'}>Home</StyledLink>
        </li>
        <li>
          <StyledLink to={'contacts'}>Contacts</StyledLink>
        </li>
        <li>
          <StyledLink to={'add-contact'}>Add Contact</StyledLink>
        </li>
      </NavList>
    </nav>
  );
};
export default Navigation;
