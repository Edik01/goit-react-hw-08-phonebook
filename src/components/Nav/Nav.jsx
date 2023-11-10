import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectToken } from 'redux/auth/selectors';

export const Nav = () => {
  const token = useSelector(selectToken);
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {!token && (
        <>
          {' '}
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login ">Login</Link>
          </li>{' '}
        </>
      )}
      {token && (
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      )}
    </ul>
  );
};
