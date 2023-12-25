"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
const type_1 = require("./type");
const query_1 = require("./query");
const resolvers_1 = require("./resolvers");
const mutation_1 = require("./mutation");
exports.Blog = { type: type_1.type, query: query_1.query, mutation: mutation_1.mutation, resolvers: resolvers_1.resolvers };
