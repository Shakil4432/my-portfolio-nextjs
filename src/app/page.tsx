import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar session={session} />
      <main className="max-w-full mx-auto p-4 space-y-12">
        <Introduction />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}
