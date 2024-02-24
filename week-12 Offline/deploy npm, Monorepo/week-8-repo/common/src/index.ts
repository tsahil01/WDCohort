import { z } from "zod";

export const signinInput = z.object({
    userName: z.string(),
    password: z.string()
})

export type signinParams = z.infer<typeof signinInput>;
