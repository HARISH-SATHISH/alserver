import JWT from "jsonwebtoken";
import {User} from '@prisma/client'

interface JwtUser{
    id:number,
    email:string
}



const JWT_SECRET="harish@123"
class JWTService{
    public static  generateTokenForUser(user:User){
      
        const payload:JwtUser={
            id:user?.id,
            email:user?.email
        }
        const token=JWT.sign(payload,JWT_SECRET)
        console.log(token)
        return token
    }
    public static decodeToken(token:string){
        try {
            return JWT.verify(token,JWT_SECRET) as JwtUser
        } catch (error) {
            return null
        }
      
    }
}

export default JWTService