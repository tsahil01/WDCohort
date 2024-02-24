import { z } from "zod";
export declare const signinInput: z.ZodObject<{
    userName: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    userName: string;
    password: string;
}, {
    userName: string;
    password: string;
}>;
export type signinParams = z.infer<typeof signinInput>;
