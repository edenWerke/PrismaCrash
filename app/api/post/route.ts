// import prisma from "@/lib/prisma";

// export async function GET(){
//     const posts=await prisma.post.findMany()
//     return new Response (JSON.stringify(posts))
// }
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const posts = await prisma.post.findFirst();
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to fetch posts" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
