import CourseCard from "@/components/course-card";
import prisma from "@/lib/db";

export default async function Home() {
  const subjects = await prisma.subject.findMany({
    include: {
      corses: true,
    },
  });

  return (
    <section className="flex flex-col flex-1 overflow-scroll">
      {subjects.map((subject) => {
        return subject.corses.map((course) => (
          <CourseCard
            title={course.title}
            slug={course.slug || ""}
            subject={subject.title}
            color={subject.theme}
            key={course.id}
          />
        ));
      })}
    </section>
  );
}
