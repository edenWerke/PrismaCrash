import prisma from "@/lib/prisma"

export async function GET(){
    const posts=await prisma.post.findMany({
        where:{
      
            OR:[
              {
                title:{
                  contains:"Learn"
                }
              },
              {
                title:{
                  contains:"Join"
                }
              }
            ]
        }
    })
    return new Response(JSON.stringify(posts))
}
