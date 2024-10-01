import CourseCard from "@/components/course-card";
import subjects from "@/data/subjects";

export default function Home() {
  return (
    <section className="flex flex-col flex-1 overflow-scroll">
      {subjects.map((subject) => {
        return subject.courses.map((course) => (
          <CourseCard
            title={course.title}
            slug={course.slug}
            subject={subject.title}
            color={subject.theme}
            key={course.id}
          />
        ));
      })}
    </section>
  );
}
