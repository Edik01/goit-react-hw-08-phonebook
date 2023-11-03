import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { fetchAllContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectFilteredContacts } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title={'contacts'}>
        <Filter />
        {filteredContacts && <ContactList />}
      </Section>
    </>
  );
};
