import { useEffect, useState } from "react";
import { api } from "../api";
import { Contact } from "../components/contact";
import { useNavigate } from "react-router-dom";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
}
function Home() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const navigate = useNavigate();

  function goToCreateContactPage() {
    navigate("/create");
  }
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

        <button style={styles.button} onClick={goToCreateContactPage}>
          {" "}
          Criar novo contato{" "}
        </button>
      </div>
    </>
  );
}

const styles = {
  container: {
    padding: "50px 100px 50px",
  },
  button: {
    marginTop: "12px",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};
export default Home;
