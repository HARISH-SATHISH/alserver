import { prismaClient } from "../../client/db"

interface cred{
    id:number,
    pass:string
}

const query={
    verifyMod:async (parent:any,{payload}:{payload:cred})=>{
        const mod =await prismaClient.mods.findUnique({where:{id:payload.id}})
        if(payload.pass===mod?.pass)
        {
            return mod
        }
        else
        {
           
            return null
        }
    }
}

export const resolvers={query}