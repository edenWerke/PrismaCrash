import prisma from "@/lib/prisma"

export async function GET(){
    // const posts=await prisma.post.findMany({
    //     where:{
      
    //         OR:[
    //           {
    //             title:{
    //               contains:"learn",
    //               mode:"insensitive"
    //             }
    //           },
    //           {
    //             title:{
    //               contains:"Join"
    //             }
    //           }
    //         ],
    //         AND:{
    //           published:true
    //         }
    //     }
    // })
    const posts=await prisma.post.findMany({
      where:{
        author:{
          isNot:{
            name:"emma"
          }
        }
      
      }
    })
    return new Response(JSON.stringify(posts))
}
