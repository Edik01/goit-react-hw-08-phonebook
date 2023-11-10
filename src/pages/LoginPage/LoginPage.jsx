import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLogin } from 'redux/auth/operations';
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
      <label>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          value={email}
        />
        Email
      </label>
      <label>
        <input
          onChange={handleChange}
          name="password"
          type="password"
          value={password}
        />
        Password
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
