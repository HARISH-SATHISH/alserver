export const type=`#graphql

input userdata{
    email:String
    name:String
    imgUrl:String
}

type User{
    id:Int!
    email:String!
    name:String
    imgUrl:String
    logs:[Log]
    blogs:[Blog]
}`