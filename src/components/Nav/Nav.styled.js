import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
`;
export const LinkStyled = styled(Link)`
  text-decoration: none;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  background-color: green;
  color: white;
  border-radius: 5px;
`;
