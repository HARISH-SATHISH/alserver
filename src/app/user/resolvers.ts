import { User } from "@prisma/client"
import { prismaClient } from "../../client/db"
import JWTService from "../../services/jwt"


interface userdata{
  email:string,
  name:string,
  imgUrl:string
}

const quries = {
  getCurrentUser: async (parent: any,{token}:{token:userdata}) => {
    const user = await prismaClient.user.findUnique({ where: { email: token.email } })
    if(!user)
    {
      const newuser= await prismaClient.user.create({data:{
        email:token.email,
        name:token.name,
        imgUrl:token.imgUrl
      }})
      
    }
    const userInDb = await prismaClient.user.findUnique({ where: { email: token.email } })
    // if(!userInDb) throw new Error('user not found')
    // const usertoken = JWTService.generateTokenForUser(userInDb)
    return userInDb
  }
}

const extraresolver = {
  User: {
    logs: async (parent: User) => {
      const log = await prismaClient.log.findMany({
        where: {
          authorId: parent.id
        }
      })
      return log
    },
    blogs: async (parent: User) => {
      const blog = await prismaClient.blog.findMany({
        where: {
          authorId: parent.id
        }
      })
      return blog
    }
  }
}



export const resolvers = { quries, extraresolver }