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
const query = {
    getAllLogs: () => __awaiter(void 0, void 0, void 0, function* () {
        const logs = db_1.prismaClient.log.findMany();
        return logs;
    })
};
const mutation = {
    createLog: (parent, { payload }) => __awaiter(void 0, void 0, void 0, function* () {
        const author = yield db_1.prismaClient.user.findUnique({ where: { email: payload.email } });
        if (author === null || author === void 0 ? void 0 : author.id) {
            const log = yield db_1.prismaClient.log.create({
                data: {
                    obj: payload.obj,
                    dateAndTime: payload.dateAndTime,
                    device: payload.device,
                    note: payload.note,
                    media: payload.media,
                    authorId: author === null || author === void 0 ? void 0 : author.id
                }
            });
            return log;
        }
    })
};
const extraResolvers = {
    Log: {
        author: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield db_1.prismaClient.user.findUnique({ where: { id: parent.authorId } }); })
    }
};
exports.resolvers = { query, mutation, extraResolvers };
