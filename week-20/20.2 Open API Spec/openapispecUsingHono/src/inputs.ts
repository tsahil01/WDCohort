import { z } from "@hono/zod-openapi";

// The input schema for the GET /users endpoint
export const ParamsSchema = z.object({
    id: z.string().min(1).max(100).openapi({
      param: {
        name: "id",
        in: "path",
      },
      example: "123"
    }),
  })