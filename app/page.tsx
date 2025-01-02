import Hero from "@/components/Hero"
import Grid from "@/components/Grid"
import { FloatingNav } from "@/components/ui/FloatingNav";
// import { FaHome } from "react-icons/fa";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/ui/Experience";
import { navItems } from "@/data";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Footer />
        <FloatingNav navItems={navItems} />
      </div>
    </main>
  );
}
