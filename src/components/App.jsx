import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { fetchAllContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectFilteredContacts } from 'redux/selectors';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(fetchAllContacts());
  //   }, [dispatch]);
  //   const filteredContacts = useSelector(selectFilteredContacts);
  //   return (
  //     <>
  //       <Section title="Phonebook">
  //         <ContactForm />
  //       </Section>
  //       <Section title={'contacts'}>
  //         <Filter />
  //         {filteredContacts && <ContactList />}
  //       </Section>
  //     </>
  //   );
};
