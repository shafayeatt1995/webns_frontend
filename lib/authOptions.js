import CredentialsProvider from "next-auth/providers/credentials";
import fetchApi from "../lib/fetchapi";

export const authOptions = {
  pages: { signIn: "/login", signOut: "/login" },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        try {
          if (credentials?.token) {
            return await fetchApi.post(`/auth/login`, credentials);
          } else {
            return await fetchApi.post(`/auth/login`, credentials);
          }
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      const accessToken = token.token;

      session.user = { ...token.user, accessToken };
      return session;
    },
  },
};
