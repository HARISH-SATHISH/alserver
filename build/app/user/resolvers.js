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
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const db_1 = require("../../client/db");
const quries = {
    getCurrentUser: (parent, { token }) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield db_1.prismaClient.user.findUnique({ where: { email: token.email } });
        if (!user) {
            const newuser = yield db_1.prismaClient.user.create({ data: {
                    email: token.email,
                    name: token.name,
                    imgUrl: token.imgUrl
                } });
        }
        const userInDb = yield db_1.prismaClient.user.findUnique({ where: { email: token.email } });
        // if(!userInDb) throw new Error('user not found')
        // const usertoken = JWTService.generateTokenForUser(userInDb)
        return userInDb;
    }),
    getAllUser: () => __awaiter(void 0, void 0, void 0, function* () {
        const users = yield db_1.prismaClient.user.findMany();
        return users;
    })
};
const extraresolver = {
    User: {
        logs: (parent) => __awaiter(void 0, void 0, void 0, function* () {
            const log = yield db_1.prismaClient.log.findMany({
                where: {
                    authorId: parent.id
                }
            });
            return log;
        }),
        blogs: (parent) => __awaiter(void 0, void 0, void 0, function* () {
            const blog = yield db_1.prismaClient.blog.findMany({
                where: {
                    authorId: parent.id
                }
            });
            return blog;
        })
    }
};
exports.resolvers = { quries, extraresolver };
