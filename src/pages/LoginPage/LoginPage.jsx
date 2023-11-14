import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLogin } from 'redux/auth/operations';
import { Input, Label } from './LoginPage.styled';
// import { register } from 'services/contactsApi';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleChange = ({ target: { name: propName, value } }) => {
    switch (propName) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(fetchLogin({ email, password }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Label>
        Email{' '}
        <Input
          onChange={handleChange}
          name="email"
          type="email"
          value={email}
        />
      </Label>
      <Label>
        Password{' '}
        <Input
          onChange={handleChange}
          name="password"
          type="password"
          value={password}
        />
      </Label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
