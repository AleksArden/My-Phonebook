import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  gap: 15px;
`;
export const StyledLink = styled(NavLink)`
  padding-bottom: 24px;
  padding-top: 24px;
`;
