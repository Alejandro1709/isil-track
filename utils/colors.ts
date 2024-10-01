type Color = { [key: string]: { name: string; hex: string } };

const colors: Color = {
  first: { name: "desarrollo-movil", hex: "#A1DAF8" },
  second: { name: "desarrollo-aplicaciones", hex: "#0EBBEF" },
  third: { name: "disenio-de-bd", hex: "#029FE3" },
  fourth: { name: "idiomas", hex: "#0077B4" },
  fifth: { name: "integracion-negocios", hex: "#F39689" },
  sixth: { name: "gestion-infra", hex: "#E73B2C" },
  seventh: { name: "herramientas", hex: "#F39202" },
  eighth: { name: "desarrollo-web", hex: "#FDC300" },
  ninenth: { name: "competencias-blandas", hex: "#FFE163" },
};

export const getColor = (clrName: string): string => {
  return colors[clrName].hex;
};
