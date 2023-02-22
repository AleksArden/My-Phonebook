import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthList = styled.ul`
  display: flex;
  gap: 15px;
`;
export const StyledLink = styled(NavLink)`
  padding-top: 24px;
  padding-bottom: 24px;
  font-size: 20px;
  font-weight: 500;
  color: #800080;

  &.active {
    color: #ffff00;
  }
`;
