function CourseCard({ title, subject, color }) {
  type Color = { [key: string]: { name: string; hex: string } };

  const colors: Color = {
    first: { name: "desarrollo-movil", hex: "#A1DAF8" },
    second: { name: "desarrollo-aplicaciones", hex: "#0EBBEF" },
    third: { name: "disenio-de-bd", hex: "#029FE3" },
    fourth: { name: "idiomas", hex: "#0077B4" },
  };

  // "#F39689",
  // "#E73B2C",
  // "#F39202",
  // "#FDC300",
  // "#FFE163",
  // "#0077B4",

  const getColor = (clrName: string): string => {
    return colors[clrName].hex;
  };

  return (
    <article className="flex relative bg-white dark:bg-zinc-800 p-3 border-b">
      <div
        className="absolute top-0 left-0 h-full w-4"
        style={{ backgroundColor: getColor(color) }}
      />
      <div className="flex w-full justify-between items-center ml-6">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">{title}</h2>
          <h3>{subject}</h3>
        </div>
        <button className="dark:bg-zinc-600 p-2 rounded-md border dark:hover:bg-zinc-500 bg-slate-50 hover:bg-slate-100">
          Detalle
        </button>
      </div>
    </article>
  );
}

export default CourseCard;
