import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-green-400">
          Welcome to the Dashboard
        </h1>

        {session?.user?.image && (
          <div className="flex justify-center mb-4">
            <img
              src={session.user.image}
              alt="User Avatar"
              className="w-24 h-24 rounded-full border-4 border-blue-500"
            />
          </div>
        )}

        <p className="text-gray-300 mb-2">
          <strong>Username:</strong> {session?.user?.name || "N/A"}
        </p>
        <p className="text-gray-300">
          <strong>Email:</strong> {session?.user?.email || "N/A"}
        </p>
      </div>
    </div>
  );
}
