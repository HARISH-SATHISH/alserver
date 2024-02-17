import { Log } from "@prisma/client"
import { prismaClient } from "../../client/db"

interface logdata{
 
    obj:string,
    dateAndTime:string,
    device:string,
    note:string,
    media:string,
    authorId:number,
    email:string
}

const query={
    getAllLogs:async()=>{
        const logs=prismaClient.log.findMany()
        return logs
    }
}
const mutation={
    createLog:async(parent:any,{payload}:{payload:logdata})=>{
      
     const author=await prismaClient.user.findUnique({where:{email:payload.email}})
     if(author?.id){
      const log=await prismaClient.log.create({
        data:{
          obj:payload.obj,
          dateAndTime:payload.dateAndTime,
          device:payload.device,
          note:payload.note,
          media:payload.media,
          authorId:author?.id
        }
      })
      return log
     }
    }
    
  }
  const extraResolvers={
    Log:{
      author:async(parent:Log)=>{return  await prismaClient.user.findUnique({where:{id:parent.authorId}})}
    }
  }
  

export const resolvers={query,mutation,extraResolvers}