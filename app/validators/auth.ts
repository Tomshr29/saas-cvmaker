import vine from "@vinejs/vine";

export const registerValidator = vine.compile(
  vine.object({
    email: vine.string().maxLength(254).normalizeEmail(),
    password: vine.string().minLength(8),
  }),
);
