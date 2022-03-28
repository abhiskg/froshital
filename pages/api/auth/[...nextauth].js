import NextAuth from "next-auth";
import dbConnect from "@/lib/dbConnect";
import Admin from "@/models/Admin";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/admin/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",

      async authorize(credentials) {
        dbConnect();

        const { username, password } = credentials;

        if (!username || !password) {
          throw new Error("Please enter a username or password");
        }

        const admin = await Admin.findOne({ username }).select("+password");

        if (!admin) {
          throw new Error("Invalid username or password");
        }

        // Check password
        const isPasswordMatched = await admin.matchPassword(password);

        if (!isPasswordMatched) {
          throw new Error("Invalid username or password");
        }

        const user = { id: 2, username: "abhi", role: admin.role };

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },

    async session({ session, token }) {
      token && (session.user = token.user);
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    encryption: true,
  },
});
