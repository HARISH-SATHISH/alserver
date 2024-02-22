import { prismaClient } from "../../client/db"
import {Blog} from '@prisma/client'
interface blogData{
    title:string
    content:string
    authorId:number
    email:string
}

const query={
    getAllBlogs:async(parent:any)=>{
        const blogs=await prismaClient.blog.findMany()
        return blogs
    }
}

const mutation={
    createBlog:async(parent:any,{payload}:{payload:blogData})=>{
        const user=await prismaClient.user.findUnique({where:{email:payload.email}})

       if(user?.id){
        const blog= await prismaClient.blog.create({data:{
            title:payload.title,
            content:payload.content,
            authorId:user.id
        }})
        return blog
       }
    }
}
const extraResolvers={
    Blog:{
      author:async(parent:Blog)=>{return  await prismaClient.user.findUnique({where:{id:parent.authorId}})}
    }
  }
  

export const resolvers={query,mutation,extraResolvers}