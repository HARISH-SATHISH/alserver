import { User } from "@prisma/client"
import { prismaClient } from "../../client/db"


const quries = {
  getCurrentUser: async (parent: any) => {
    const user = await prismaClient.user.findUnique({ where: { email: "harish@gmail" } })
    return user
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