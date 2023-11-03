import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contact/contactSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const onChange = event => {
    dispatch(changeFilter(event.target.value));
  };
  return <input value={filter} onChange={onChange} />;
};
