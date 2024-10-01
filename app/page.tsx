import CourseCard from "@/components/course-card";

export default function Home() {
  return (
    <section className="flex flex-col flex-1 overflow-scroll">
      <CourseCard
        title="Aplicaciones Móviles para Android."
        subject="Desarrollo Móvil"
        color="first"
      />
      <CourseCard
        title="Aplicaciones Móviles para IPhone."
        subject="Desarrollo Móvil"
        color="first"
      />
      <CourseCard
        title="Soluciones Basadas en iot."
        subject="Desarrollo Móvil"
        color="first"
      />
    </section>
  );
}
