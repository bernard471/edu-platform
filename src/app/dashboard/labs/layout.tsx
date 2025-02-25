import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function LabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
