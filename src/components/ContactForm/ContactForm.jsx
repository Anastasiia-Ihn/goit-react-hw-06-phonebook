import { Formik } from 'formik';
import { nanoid } from '@reduxjs/toolkit';

import * as Yup from 'yup';
import {
  BtnAddContact,
  ErrorMsg,
  FieldForm,
  StyledForm,
} from './ContactForm.styled';

import { addContact } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

const builderSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('This field is required'),
  number: Yup.string().min(7, 'Too Short!').required('This field is required'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const listContacts = useSelector(getContacts);

  const onSubmit = (value, form) => {
    const { name, number } = value;

    const isElem = listContacts.find(contact => contact.name === name);

    if (isElem) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      })
    );

    form.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      alidationSchema={builderSchema}
      onSubmit={onSubmit}
    >
      <StyledForm>
        <label>
          Name
          <FieldForm id={nanoid()} name="name" />
          <ErrorMsg component="p" name="name" />
        </label>

        <label>
          Number
          <FieldForm type="tel" id={nanoid()} name="number" />
          <ErrorMsg component="p" name="number" />
        </label>

        <BtnAddContact type="submit">Add contact</BtnAddContact>
      </StyledForm>
    </Formik>
  );
};
