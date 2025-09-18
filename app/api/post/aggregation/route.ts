import prisma from "@/lib/prisma";

export async function GET(){
    const aggregations =await prisma.post.aggregate({
        _sum:{
            likeNum:true
        }
    })
    return new Response(JSON.stringify(aggregations))
}