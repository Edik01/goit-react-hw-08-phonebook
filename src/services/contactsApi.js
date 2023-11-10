import axios from 'axios';

const baseUrl = 'https://connections-api.herokuapp.com/';
export const getAllContact = async () => {
  return await axios(`${baseUrl}contacts`);
};
export const addNewContact = async newContact => {
  return await axios.post(`${baseUrl}contacts`, newContact);
};

export const deleteContact = async id => {
  return await axios.delete(`${baseUrl}contacts/${id}`);
};
const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const register = async newUser => {
  const { data } = await axios.post(`${baseUrl}users/signup`, newUser);
  setToken(data.token);
  return data;
};

export const login = async user => {
  const { data } = await axios.post(`${baseUrl}users/login`, user);
  setToken(data.token);
  return data;
};

export const logout = async () => {
  const { data } = await axios.post(`${baseUrl}users/logout`);
  setToken('');
  return data;
};

export const refresh = async token => {
  setToken(token);
  const { data } = await axios.get(`${baseUrl}users/current`);

  return data;
};
