function CourseCard() {
  return (
    <article className="flex relative bg-white dark:bg-zinc-800 p-3">
      <div className="absolute bg-yellow-400 top-0 left-0 h-full w-4" />
      <div className="flex w-full justify-between items-center ml-6">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">Course Title</h2>
          <h3>Desarrollo Móvil</h3>
        </div>
        <button className="dark:bg-zinc-600 p-2 rounded-md border dark:hover:bg-zinc-500 bg-slate-50 hover:bg-slate-100">
          Detalle
        </button>
      </div>
    </article>
  );
}

export default CourseCard;
