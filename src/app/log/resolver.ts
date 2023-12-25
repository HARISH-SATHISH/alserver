import { prismaClient } from "../../client/db"

interface logdata{
 
    obj:string,
    dateAndTime:string,
    device:string,
    note:string,
    media:string,
    authorId:number
}

const query={
    getAllLogs:async()=>{
        const logs=prismaClient.log.findMany()
        return logs
    }
}
const mutation={
    createLog:async(parent:any,{payload}:{payload:logdata})=>{
     const log=await prismaClient.log.create({
      data:{
        obj:payload.obj,
        dateAndTime:payload.dateAndTime,
        device:payload.device,
        note:payload.note,
        media:payload.media,
        authorId:payload.authorId
      }
     })
     return log
    }
    
  }
  

export const resolvers={query,mutation}