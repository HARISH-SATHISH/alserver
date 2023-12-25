"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
const type_1 = require("./type");
const query_1 = require("./query");
const resolver_1 = require("./resolver");
const mutation_1 = require("./mutation");
exports.Log = { type: type_1.type, query: query_1.query, resolvers: resolver_1.resolvers, mutation: mutation_1.mutation };
