import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>Contacts</NavLink>
        </li>
        <li>
          <NavLink>Add Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
