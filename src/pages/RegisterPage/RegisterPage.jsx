import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRegister } from 'redux/auth/operations';
// import { register } from 'services/contactsApi';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleChange = ({ target: { name: propName, value } }) => {
    switch (propName) {
      case 'name':
        setName(value);
        break;
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
    dispatch(fetchRegister({ name, email, password }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input onChange={handleChange} name="name" type="text" value={name} />
        Name
      </label>
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
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
