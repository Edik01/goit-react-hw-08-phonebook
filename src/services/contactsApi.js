import axios from 'axios';

const baseUrl = 'https://653bf494d5d6790f5ec7add9.mockapi.io/contacts';
export const getAllContact = async () => {
  return await axios(baseUrl);
};
export const addNewContact = async newContact => {
  return await axios.post(baseUrl, newContact);
};

export const deleteContact = async id => {
  return await axios.delete(`${baseUrl}/${id}`);
};
