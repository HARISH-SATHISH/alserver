export const type=`#graphql

input blogData{
  title:String
  content:String
  authorId:Int
}

type Blog{
  id:Int
  title:String
  content:String
  author:User
}

`