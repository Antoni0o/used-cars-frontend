"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi"

export default function AdminLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const callbackUrl = "/admin/dashboard";

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);

      const res = await signIn("credentials", {
        redirect: true,
        username: formValues.username,
        password: formValues.password,
        callbackUrl,
      });

      setFormValues({ username: "", password: "" });
      setLoading(false);

      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        setError("invalid username or password");
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <main className="login-main">
      <div className="login-wrapper">
        <div className="flex justify-between w-full">
          <h1 className="flex items-center text-md cursor-pointer hover:underline" onClick={() => router.push("/")}> <BiLeftArrowAlt />&nbsp;Voltar</h1>
          <h2 className="font-bold text-4xl my-4">Login</h2>
        </div>
        <form action="post" className="flex flex-col items-center gap-4 w-full" onSubmit={onSubmit}>
          {error && (
            <p className="text-center bg-red-300 p-2 mb-4 rounded-lg">{error}</p>
          )}
          <input
            name="username"
            type="text"
            placeholder="Digite o nome"
            className="input"
            value={formValues.username}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Digite a senha"
            className="input"
            value={formValues.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="submit-button"
            disabled={loading}
          >
            {loading ? "Carregando..." : "Entrar"}
          </button>
        </form>
      </div>
    </main >
  )
}