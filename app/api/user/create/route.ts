import prisma from "@/lib/prisma";

export async function POST() {
  const user = await prisma.user.create({
    data: {
      email: "edde@gmail.com",
      name: "edenwerke",
      role: "User",
    },
  });

  return new Response(JSON.stringify(user), { status: 201 });
}
