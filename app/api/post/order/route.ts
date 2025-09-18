import prisma from "@/lib/prisma"
import { json } from "stream/consumers"

export async function GET(){
    const posts=await prisma.post.findMany({
        orderBy:{
            likeNum:"asc"
        }
    })
    return new Response(JSON.stringify(posts))
}