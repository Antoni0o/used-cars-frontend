"use client";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function AdminLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const callbackUrl = "/admin/dashboard";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setFormValues({ username: "", password: "" });

      const res = await signIn("credentials", {
        redirect: false,
        username: formValues.username,
        password: formValues.password,
        callbackUrl,
      });

      setLoading(false);

      console.log(res);
      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        setError("invalid username or password");
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <main className="login-main">
      <div className="login-wrapper">
        <h2 className="font-bold text-4xl mb-4">Login</h2>
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
    </main>
  )
}