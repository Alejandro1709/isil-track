import prisma from "@/lib/db";

export async function GET() {
  return Response.json({ message: "Hello" });
}

export async function PATCH(request: Request) {
  const dta = await request.json();

  const res = await prisma.course.update({
    where: { slug: dta.slug },
    data: {
      status: dta.status,
    },
  });

  return Response.json({ message: res.status });
}
