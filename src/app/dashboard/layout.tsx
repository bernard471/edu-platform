import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ClientLayout from "./client-layout";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    redirect("/signup");
  }

  return <ClientLayout>{children}</ClientLayout>;
}
