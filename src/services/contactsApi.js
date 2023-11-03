import axios from 'axios';

const baseUrl = 'https://connections-api.herokuapp.com/';
export const getAllContact = async () => {
  return await axios(`${baseUrl}/contacts`);
};
export const addNewContact = async newContact => {
  return await axios.post(`${baseUrl}/contacts`, newContact);
};

export const deleteContact = async id => {
  return await axios.delete(`${baseUrl}/contacts/${id}`);
};
