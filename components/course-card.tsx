import { getColor } from "@/utils/colors";
import Link from "next/link";

type CourseCardType = {
  title: string;
  slug: string;
  subject: string;
  color: string;
};

function CourseCard({ title, slug, subject, color }: CourseCardType) {
  return (
    <article className="flex relative bg-white dark:bg-zinc-800 p-3 border-b dark:border-b-zinc-700">
      <div
        className="absolute top-0 left-0 h-full w-4"
        style={{ backgroundColor: getColor(color) }}
      />
      <div className="flex w-full justify-between items-center ml-6">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">{title}</h2>
          <h3>{subject}</h3>
        </div>
        <Link
          href={`/courses/${slug}`}
          className="dark:bg-zinc-600 p-2 rounded-md border dark:hover:bg-zinc-500 bg-slate-50 hover:bg-slate-100"
        >
          Details
        </Link>
      </div>
    </article>
  );
}

export default CourseCard;
