import { prismaClient } from "../../client/db"
import {Blog} from '@prisma/client'
interface blogData{
    title:string
    content:string
    authorId:number
}

const query={
    getAllBlogs:async(parent:any)=>{
        const blogs=await prismaClient.blog.findMany()
        return blogs
    }
}

const mutation={
    createBlog:async(parent:any,{payload}:{payload:blogData})=>{
        const blog= await prismaClient.blog.create({data:{
            title:payload.title,
            content:payload.content,
            authorId:payload.authorId
        }})
        return blog
    }
}
const extraResolvers={
    Blog:{
      author:async(parent:Blog)=>{return  await prismaClient.user.findUnique({where:{id:parent.authorId}})}
    }
  }
  

export const resolvers={query,mutation,extraResolvers}