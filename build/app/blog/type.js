"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
exports.type = `#graphql

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

`;
