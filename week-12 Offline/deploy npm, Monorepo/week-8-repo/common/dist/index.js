"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const UserSchema = zod_1.z.object({
    userName: zod_1.z.string(),
    password: zod_1.z.string()
});
const user1 = {
    userName: "Sail",
    password: "sa"
};
