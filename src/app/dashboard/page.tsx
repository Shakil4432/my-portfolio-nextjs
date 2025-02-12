import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return <div>DashboardPage</div>;
}
