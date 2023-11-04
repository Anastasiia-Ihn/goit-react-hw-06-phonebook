import { useDispatch, useSelector } from 'react-redux';
import { BtnDeleteContact, List, ListItem } from './ContactList.styled';
import { delContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const listContacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filters);

  const dispatch = useDispatch();

  const getFilterList = () => {
    const lowerWord = filter.toLowerCase();
    return listContacts.filter(contact => {
      return contact.name.toLowerCase().includes(lowerWord);
    });
  };
  const filterList = getFilterList();

  // const deleteContact = idContact =>
  //   dispatch(delContact(idContact))
  //     setContacts(prevState =>
  //       prevState.filter(contact => contact.id !== idContact)
  // );

  return (
    <List>
      {filterList?.map(({ id, name, number }) => (
        <ListItem key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <BtnDeleteContact onClick={() => dispatch(delContact(id))}>
            Delete
          </BtnDeleteContact>
        </ListItem>
      ))}
    </List>
  );
};

// import { BtnDeleteContact, List, ListItem } from './ContactList.styled';

// export const ContactList = ({ listContacts, onDelete }) => {
//   return (
//     <List>
//       {listContacts.map(({ id, name, number }) => (
//         <ListItem key={id}>
//           <p>{name}</p>
//           <p>{number}</p>
//           <BtnDeleteContact onClick={() => onDelete(id)}>
//             Delete
//           </BtnDeleteContact>
//         </ListItem>
//       ))}
//     </List>
//   );
// };
