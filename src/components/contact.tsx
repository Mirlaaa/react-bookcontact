interface ContactProps {
  name: string;
  email: string;
  phone: string;
  onDelete: () => void;
}

export function Contact({ name, email, phone, onDelete }: ContactProps) {
  return (
    <div style={styles.container}>
      <div style={styles.info}>
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.detail}>
          <strong>Email:</strong> {email}
        </p>
        <p style={styles.detail}>
          <strong>Telefone:</strong> {phone}
        </p>
      </div>
      <button onClick={onDelete} style={styles.button}>
        Excluir
      </button>
    </div>
  );
}

const styles = {
  container: {
    border: "1px solid #ddd",
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: "#f7f7f7",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "12px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: "20px",
    marginBottom: "8px",
    color: "#333",
  },
  detail: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "4px",
  },
  button: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "8px 12px",
    fontWeight: "bold",
    cursor: "pointer",
    alignSelf: "center",
    transition: "background-color 0.3s ease",
  },
};
