import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function StudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    redirect("/signup");
  }

  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
