import { useForm } from "react-hook-form";
import { z } from "zod";

const createContactSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
});

type contactData = z.infer<typeof createContactSchema>;

export function Create() {
  const { register, handleSubmit } = useForm<contactData>();

  function handleCreateContactForm(data: contactData) {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(handleCreateContactForm)}>
      <label htmlFor="name">Nome</label>
      <input type="text" placeholder="Nome" {...register("name")} />

      <label htmlFor="email">Email</label>
      <input type="text" placeholder="Email" {...register("email")} />

      <label htmlFor="phone">Phone</label>
      <input type="text" placeholder="Telefone" {...register("phone")} />

      <button> Criar </button>
    </form>
  );
}
