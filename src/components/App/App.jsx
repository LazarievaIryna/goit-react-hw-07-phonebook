import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactsList";
import { Filter } from "../Filter/Filter";
import { Layout } from "../Layout/Layout";
import { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import {selectContacts, selectIsLoading, selectError} from "../../redux/selectors"
import { Error } from "../Error/Error";
import {Loader} from "../Loader/Loader"
import { fetchContacts } from "redux/operations";



export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      {error && <Error>{error}</Error>}
      {contacts.length > 0 && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
      {!isLoading && contacts.length === 0 && <p>There is no contacts</p>}
      <Loader isLoading={isLoading} />
    </Layout>
  );
};
