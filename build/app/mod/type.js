"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
exports.type = `#graphql

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

`;
