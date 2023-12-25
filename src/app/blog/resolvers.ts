import { prismaClient } from "../../client/db"

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

export const resolvers={query,mutation}