import User from "#models/user";
import { registerValidator } from "#validators/auth";
import type { HttpContext } from "@adonisjs/core/http";

export default class RegisterController {
  render({ inertia }: HttpContext) {
    return inertia.render("auth/register");
  }

  async execute({ session, auth, request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(registerValidator);

    const userExists = await User.findBy("email", email);
    if (userExists) {
      session.flash("errors", {
        email: "A user with this email already exists.",
      });

      return response.redirect().back();
    }

    const user = await User.create({ email, password });
    await auth.use("web").login(user);

    return response.redirect().toPath("/");
  }
}
