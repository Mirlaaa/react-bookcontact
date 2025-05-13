import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "../api";
import { useNavigate } from "react-router-dom";

const createContactSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
});

type contactData = z.infer<typeof createContactSchema>;

export function Create() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<contactData>({
    resolver: zodResolver(createContactSchema),
  });

  async function handleCreateContactForm(data: contactData) {
    console.log(data);

    await api.post("/contact/", {
      name: data.name,
      email: data.email,
      phone: data.phone,
    });

    navigate("/");
  }
  return (
    <form onSubmit={handleSubmit(handleCreateContactForm)} style={styles.form}>
      <h2 style={styles.title}>Criar novo contato</h2>

      <label htmlFor="name" style={styles.label}>
        Nome
      </label>
      <input
        type="text"
        placeholder="Nome"
        {...register("name")}
        style={styles.input}
      />

      <label htmlFor="email" style={styles.label}>
        Email
      </label>
      <input
        type="text"
        placeholder="Email"
        {...register("email")}
        style={styles.input}
      />

      <label htmlFor="phone" style={styles.label}>
        Telefone
      </label>
      <input
        type="text"
        placeholder="Telefone"
        {...register("phone")}
        style={styles.input}
      />

      <button type="submit" style={styles.button}>
        Criar
      </button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: "400px",
    margin: "100px auto",
    padding: "24px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f7f7f7",
    display: "flex",
    flexDirection: "column" as const,
    gap: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center" as const,
    marginBottom: "12px",
    fontSize: "22px",
    color: "#333",
  },
  label: {
    fontWeight: "bold",
    color: "#555",
  },
  input: {
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outlineColor: "#007bff",
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
