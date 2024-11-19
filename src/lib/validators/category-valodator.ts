import { z } from "zod"

export const CATEGORY_NAME_VALIDATOR = z
  .string()
  .min(1, "Category name is required")
  .regex(
    /^[a-zA-Z0-9-]+$/,
    "Category name can only letters, numbers or hypens."
  )

export const EVENT_CATEGORY_VALIDATOR = z.object({
  name: CATEGORY_NAME_VALIDATOR,
  color: z
    .string()
    .min(1, "Color is required")
    .regex(/^#[0-9A-F]{6}$/i, "Invalid color format."),
  emoji: z.string().emoji("Invalid emoji").optional(),
})
