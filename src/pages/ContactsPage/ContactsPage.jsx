import { ContactForm } from 'components/ContactForm/ContactForm';
import { Section } from 'components/Section/Section';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchAllContacts } from 'redux/contact/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectFilteredContacts } from 'redux/contact/selectors';

const ContactsPage = () => {
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

export default ContactsPage;
