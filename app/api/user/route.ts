import prisma from "@/lib/prisma"

export async function GET(){
    const users=await prisma.user.findMany({
        where:{
            name:{
                startsWith:"j"
            }
        }
    })
    return new Response(JSON.stringify(users))
}
