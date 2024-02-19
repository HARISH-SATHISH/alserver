export const type=`#graphql

input logdata{
    
    obj:String!,
    dateAndTime:String!,
    device:String!,
    note:String!,
    media:String!,
    
    email:String!
}
type Log{
    id:Int
    obj:String
    dateAndTime:String
    device:String
    note:String
    media:String
    author:User
}

`