export const type=`#graphql

input cred{
    id:Int
    pass:String
}

type Mod{
    id:Int
    pass:String
    name:String
    projects:[Project]
}

`