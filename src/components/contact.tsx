interface ContactProps {
  name: string;
  email: string;
  phone: string;
  onDelete: () => void;
}
export function Contact({ name, email, phone, onDelete }: ContactProps) {
  return (
    <div style={styles.container}>
      <div>
        <h2 style={styles.name}>Nome: {name}</h2>
        <p style={styles.email}>{email}</p>
        <span style={styles.phone}>Telefone: {phone} </span>
      </div>
      <button onClick={onDelete}>Excluir</button>
    </div>
  );
}

const styles = {
  container: {
    border: "1px solid #ccc",
    padding: "12px",
    margin: "2px 0",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: "20px",
    color: "#333",
  },
  email: {
    fontSize: "14px",
    color: "#666",
  },
  phone: {
    fontWeight: "bold",
  },
};
