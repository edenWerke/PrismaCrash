import prisma from "@/lib/prisma"

export async function Get(){
    const posts=await prisma.post.findMany({


        skip:1,
        take:1

    })
    return new Response(JSON.stringify(posts))
}