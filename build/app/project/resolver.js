"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const db_1 = require("../../client/db");
const query = {
    getAllProject: () => {
        const projects = db_1.prismaClient.project.findMany();
        return projects;
    }
};
exports.resolvers = { query };
