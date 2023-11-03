import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Button } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/selectors';
import { fetchDeleteContact } from 'redux/operations';
export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  return (
    <List>
      {filteredContacts.map(contact => {
        return (
          <Item key={contact.id}>
            <p> {contact.name}</p>
            <p> {contact.phone}</p>
            <Button
              type="button"
              onClick={() => dispatch(fetchDeleteContact(contact.id))}
            >
              delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
