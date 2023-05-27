import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactsList";
import { Filter } from "./Filter";
import { Layout } from "./Layout";



export const App = () => {
  return (
    <Layout>
      <ContactForm/>
      <Filter/>
      <ContactList/>
    </Layout>
  );
};
