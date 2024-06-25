import { z } from "@hono/zod-openapi"

// The output schema for the GET /users endpoint
export const UserSchema = z.object({
  name: z.string().min(1).max(100).openapi({
    description: "The name of the user",
    example: "John Doe"
  }),
  age: z.number().int().positive().openapi({
    description: "The age of the user",
    example: 42
  }),
  id: z.string().uuid().openapi({
    description: "The unique identifier of the user",
    example: "123e4567-e89b-12d3-a456-426614174000"
  }),
})