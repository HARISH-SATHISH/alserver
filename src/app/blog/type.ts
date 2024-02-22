export const type=`#graphql

input blogData{
  title:String
  content:String
  authorId:Int
  email:String
}

type Blog{
  id:Int
  title:String
  content:String
  author:User
}

`