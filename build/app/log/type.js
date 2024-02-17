"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
exports.type = `#graphql

input logdata{
    
    obj:String,
    dateAndTime:String,
    device:String,
    note:String,
    media:String,
    authorId:Int,
    email:String
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

`;
