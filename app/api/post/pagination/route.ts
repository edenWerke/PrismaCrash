import prisma from "@/lib/prisma"

export async function Get(){
    const posts=await prisma.post.findMany({


        skip:0,
        take:10

    })
    return new Response(JSON.stringify(posts))
}