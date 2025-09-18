import prisma from "@/lib/prisma"

export async function GET(){
    const posts=await prisma.post.findMany({
        where:{
      
            OR:[
              {
                title:{
                  contains:"learn",
                  mode:"insensitive"
                }
              },
              {
                title:{
                  contains:"Join"
                }
              }
            ],
            AND:{
              published:true
            }
        }
    })
    return new Response(JSON.stringify(posts))
}
