import prisma from "@/lib/prisma"

export async function GET(){
    const users=await prisma.user.findMany({
        where:{
            name:"jhon"
        }
    })
    return new Response(JSON.stringify(users))
}
