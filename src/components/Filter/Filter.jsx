import { useDispatch, useSelector } from 'react-redux';
import { FormInput } from './Filter.styled';
import { setFilter } from 'redux/filtersSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter.filters) ?? "";
  console.log(filter);
  
  const dispatch = useDispatch();

  const changeFilter =  evt => dispatch(setFilter(evt.target.value))
  

  return (
    <FormInput>
      <label>
        Find contacts by name
        <input type="text" name="input"   value={filter}
                onChange={changeFilter}  />
      </label>
    </FormInput>
  );
};
// listContacts={contacts} filter={filter} onChange={changeFilter} 

// const changeFilter = evt => setFilter(evt.currentTarget.value);

//   const filterList = () => {
//     const lowerWord = filter.toLowerCase();
//     return contacts.filter(contact => {
//       return contact.name.toLowerCase().includes(lowerWord);
//     });
//   };

// import { FormInput } from './Filter.styled';

// export const Filter = ({ filter, onChange }) => {
//   return (
//     <FormInput>
//       <label>
//         Find contacts by name
//         <input type="text" name="input" value={filter} onChange={onChange} />
//       </label>
//     </FormInput>
//   );
// };