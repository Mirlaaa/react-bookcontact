import { useEffect, useState } from "react";
import { api } from "../api";
import { Contact } from "../components/contact";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
}
function Home() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const fetchContacts = async () => {
    try {
      const data = await api.get("/contact/");
      setContacts(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id: string) => {
    try {
      console.log(id);
      await api.delete(`/contact/${id}`);
      setContacts((state) => state.filter((contact) => contact.id != id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);
  return (
    <>
      <div style={styles.container}>
        <h1>Lista de contatos</h1>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            onDelete={() => deleteContact(contact.id)}
          />
        ))}

        <button> Criar novo contato </button>
      </div>
    </>
  );
}

const styles = {
  container: {
    padding: "0 100px 0",
  },
};
export default Home;
