import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api";

const editContactSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
});

type ContactData = z.infer<typeof editContactSchema>;

export function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const { register, handleSubmit, reset } = useForm<ContactData>({
    resolver: zodResolver(editContactSchema),
  });

  useEffect(() => {
    async function loadContact() {
      try {
        const response = await api.get(`/contact/${id}`);
        reset(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar contato", error);
      }
    }
    loadContact();
  }, [id, reset]);

  async function handleUpdate(data: ContactData) {
    await api.put(`/contact/${id}`, data);
    navigate("/");
  }

  if (loading) return <p>Carregando...</p>;

  return (
    <form onSubmit={handleSubmit(handleUpdate)} style={styles.form}>
      <h2 style={styles.title}>Editar contato</h2>

      <label style={styles.label}>Nome</label>
      <input type="text" {...register("name")} style={styles.input} />

      <label style={styles.label}>Email</label>
      <input type="email" {...register("email")} style={styles.input} />

      <label style={styles.label}>Telefone</label>
      <input type="text" {...register("phone")} style={styles.input} />

      <button type="submit" style={styles.button}>
        Atualizar
      </button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: "400px",
    margin: "0 auto",
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
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
