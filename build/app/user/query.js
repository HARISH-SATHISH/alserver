"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
exports.query = `#graphql
getCurrentUser(token:userdata):User,
getAllUser:[User]
`;
