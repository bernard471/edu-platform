import NextAuth, { DefaultSession } from "next-auth";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      isAdmin: boolean;
      isVerified: boolean;
      coursesPurchased: Array<{
        courseId: string;
        purchaseDate: Date;
        status: 'active' | 'completed';
        dueDate: Date;
        progress: number;
        certificateStatus: 'not_issued' | 'issued';
        completionDate: Date;
      }>;
      labsCompleted: Array<{
        labId: string;
        startDate: Date;
        completionDate: Date;
        status: 'not_started' | 'in_progress' | 'completed';
      }>;
      studyTimes: Array<{
        courseId: string;
        duration: number;
        date: Date;
      }>;
      courseCompletions: Array<{
        courseId: string;
        courseTitle: string;
        completionDate: Date;
      }>;
      labCompletions: Array<{
        labId: string;
        labTitle: string;
        completionDate: Date;
      }>;
      hasProfileImage: boolean;
    } & DefaultSession["user"]
  }
}

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { type: "email", label: "Email" },
        password: { type: "password", label: "Password" }
      },
      async authorize(credentials) {
        try {
          await connect();
          const user = await User.findOne({ email: credentials?.email });
          
          if (!user) {
            throw new Error("Invalid credentials");
          }

          if (!user.isVerified) {
            throw new Error("Email not verified");
          }

          const isValidPassword = await bcrypt.compare(
            credentials?.password ?? "",
            user.password as string
          );

          if (!isValidPassword) {
            throw new Error("Invalid credentials");
          }

          return user;
        } catch (error) {
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        await connect();
        const existingUser = await User.findOne({ email: profile?.email });
        
        if (!existingUser) {
          await User.create({
            name: profile?.name,
            email: profile?.email,
            profileImage: profile?.image,
            coursesPurchased: [],
            labsCompleted: [],
            studyTimes: [],
            courseCompletions: [],
            labCompletions: [],
            isVerified: true,
            lastLogin: new Date(),
          });
        } else {
          await User.findOneAndUpdate(
            { email: profile?.email },
            { lastLogin: new Date() }
          );
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        const userData = await User.findOne({ email: token.email });
        if (userData) {
          session.user = {
            ...session.user,
            id: userData._id?.toString() ?? '',
            isAdmin: userData.isAdmin,
            isVerified: userData.isVerified,
            coursesPurchased: userData.coursesPurchased,
            labsCompleted: userData.labsCompleted,
            studyTimes: userData.studyTimes,
            courseCompletions: userData.courseCompletions,
            labCompletions: userData.labCompletions,
            hasProfileImage: userData.hasProfileImage ?? false,
            image: userData.profileImage || session.user.image // Add this line
          };
        }
      }
      return session;
    },
  },
  pages: {
    signIn: "/signup",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
