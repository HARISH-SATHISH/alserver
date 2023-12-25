export const type=`#graphql

input logdata{
    
    obj:String,
    dateAndTime:String,
    device:String,
    note:String,
    media:String,
    authorId:Int
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