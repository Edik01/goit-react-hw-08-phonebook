import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/selectors';
import { LinkStyled, List } from './Nav.styled';

export const Nav = () => {
  const token = useSelector(selectToken);
  return (
    <List>
      <li>
        <LinkStyled to="/">Home</LinkStyled>
      </li>
      {!token && (
        <>
          {' '}
          <li>
            <LinkStyled to="/register">Register</LinkStyled>
          </li>
          <li>
            <LinkStyled to="/login ">Login</LinkStyled>
          </li>{' '}
        </>
      )}
      {token && (
        <li>
          <LinkStyled to="/contacts">Contacts</LinkStyled>
        </li>
      )}
    </List>
  );
};
