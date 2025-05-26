import { NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import apiAuthSignIn from "./../utils/api";
import { JWT } from "next-auth/jwt";
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials:
          | Record<"email" | "password", string>
          | undefined
      ) {
        if (!credentials) {
          throw new Error("Invalid credentials");
        }
        const user = await apiAuthSignIn(credentials);
        return user as any;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (user) {
        // Add a new prop on token for user data
        token.data = user;
      }
      return Promise.resolve(token);
    },
async session({ session, token }: { session: any; token: JWT }) {
      session.accessToken = token.data;
      return session;
},
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // Maximum session age in seconds (30 days)
  },

  pages: {
     signIn: "/auth/signin",
     newUser: '/auth/signup'
  },
  jwt: {
    secret: process.env.NEXT_JWT_SECRET as string,
  },
  secret: process.env.NEXTAUTH_SECRET as string,
};
/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);



