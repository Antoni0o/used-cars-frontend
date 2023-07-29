import axios, { AxiosResponse } from "axios";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

type IResponse = {
  data: AxiosResponse;
  jwt: AxiosResponse;
};

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/admin",
  },
  providers: [
    CredentialsProvider({
      name: "Login",
      credentials: {
        username: { type: "text", placeholder: "Digite o nome" },
        password: { type: "passowrd", placeholder: "Digite a senha" },
      },
      async authorize(credentials) {
        const res = await axios.post("http://localhost:8080/login", {
          name: credentials?.username,
          password: credentials?.password,
        });

        return {
          ...res.data,
          user: {
            name: credentials?.username,
            password: credentials?.password,
          },
        };
      },
    }),
  ],
  secret: process.env.SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
