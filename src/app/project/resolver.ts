import { prismaClient } from "../../client/db";



const query={
    getAllProject:()=>{
        const projects= prismaClient.project.findMany()
        return projects
    }
}

export const resolvers ={query}