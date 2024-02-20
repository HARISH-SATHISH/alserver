"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initServer = void 0;
const express_1 = __importDefault(require("express"));
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const body_parser_1 = __importDefault(require("body-parser"));
const user_1 = require("./user");
const log_1 = require("./log");
const blog_1 = require("./blog");
const cors_1 = __importDefault(require("cors"));
function initServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        app.use(body_parser_1.default.json());
        app.use((0, cors_1.default)());
        const graphqlServer = new server_1.ApolloServer({
            typeDefs: `
     ${user_1.User.type}
     ${log_1.Log.type}
     ${blog_1.Blog.type}
    type Query{
        hello: String ,
        ${user_1.User.query},
        ${log_1.Log.query},
        ${blog_1.Blog.query}
    }
    type Mutation{
      ${log_1.Log.mutation}
      ${blog_1.Blog.mutation}
    }
    `,
            resolvers: Object.assign(Object.assign(Object.assign({ Query: Object.assign(Object.assign(Object.assign({ hello: () => 'Hello, GraphQL!' }, user_1.User.resolvers.quries), log_1.Log.resolvers.query), blog_1.Blog.resolvers.query), Mutation: Object.assign(Object.assign({}, log_1.Log.resolvers.mutation), blog_1.Blog.resolvers.mutation) }, user_1.User.resolvers.extraresolver), log_1.Log.resolvers.extraResolvers), blog_1.Blog.resolvers.extraResolvers)
        });
        yield graphqlServer.start();
        app.use('/graphql', (0, express4_1.expressMiddleware)(graphqlServer));
        return app;
    });
}
exports.initServer = initServer;
