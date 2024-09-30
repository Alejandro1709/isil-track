import CourseCard from "@/components/course-card";
import { Toggler } from "@/components/toggler";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="h-14 bg-white dark:bg-zinc-800 border-b">
        <Toggler />
      </nav>
      <main className="m-5">
        <CourseCard />
      </main>
    </div>
  );
}
