import { useDispatch, useSelector } from 'react-redux';
import { fetchLogout } from 'redux/auth/operations';
import { selectName } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  return (
    <>
      {' '}
      <p>{`Welcome, ${name || 'guest'}`}</p>
      <button type="button" onClick={() => dispatch(fetchLogout())}>
        Log out
      </button>
    </>
  );
};
