import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Navbar session={session}></Navbar>
      <Introduction></Introduction>
      <Skills></Skills>
      <Projects></Projects>
    </>
  );
}
