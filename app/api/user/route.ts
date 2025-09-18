import prisma from "@/lib/prisma"

export async function GET(){
    // const users=await prisma.user.findMany({
    //     where:{
    //         id:{
    //             notIn:[1,3]
    //         }
    //     }
    // })

const users=await prisma.user.findMany({
    where:{
        post:{
            none:{
                published:true
            }
        }
    }
})





    return new Response(JSON.stringify(users))
}
