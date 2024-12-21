import vine from "@vinejs/vine";

export const resumeValidator = vine.compile(
  vine.object({
    title: vine.string().trim().optional(),
    jobTitle: vine.string().trim().optional(),
    firstName: vine.string().trim().optional(),
    lastName: vine.string().trim().optional(),
    phone: vine.string().trim().optional(),
    about: vine.string().trim().optional(),
    model: vine.enum(["blue-white", "red-orange"]).optional(),
  }),
);
