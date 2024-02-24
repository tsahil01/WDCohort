"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinInput = void 0;
const zod_1 = require("zod");
exports.signinInput = zod_1.z.object({
    userName: zod_1.z.string(),
    password: zod_1.z.string()
});
