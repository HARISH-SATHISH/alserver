"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
exports.type = `#graphql

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
}`;
