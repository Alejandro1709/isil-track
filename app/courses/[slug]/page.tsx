import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import Link from "next/link";
import EditCourseModal from "@/components/edit-course-modal";

type Props = {
  params: {
    slug: string;
  };
};

async function CoursePage({ params: { slug } }: Props) {
  const course = await prisma.course.findUnique({
    where: { slug },
    include: { Subject: true },
  });

  return (
    <section className="flex flex-col flex-1 m-6">
      <header className="flex gap-4 items-center">
        <Button asChild>
          <Link href="/">Back</Link>
        </Button>

        <h1 className="text-2xl font-medium self-center">Course Details</h1>
      </header>

      <ul className="flex flex-col gap-2 my-4">
        <li>
          Course Name: <strong>{course?.title}</strong>
        </li>
        <li>
          Course Subject: <strong>{course?.Subject?.title}</strong>
        </li>
        <li>
          Status: <strong>{course?.status}</strong>
        </li>
      </ul>

      <EditCourseModal
        currentStatus={course?.status || "not-started"}
        slug={slug}
      />
    </section>
  );
}

export default CoursePage;
