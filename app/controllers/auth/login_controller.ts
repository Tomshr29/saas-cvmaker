import User from "#models/user";
import { registerValidator } from "#validators/auth";
import type { HttpContext } from "@adonisjs/core/http";

export default class LoginController {
  render({ inertia }: HttpContext) {
    return inertia.render("auth/login");
  }

  async execute({ auth, request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(registerValidator);

    const user = await User.verifyCredentials(email, password);
    await auth.use("web").login(user);

    return response.redirect().toPath("/");
  }

  async signout({ auth, response }: HttpContext) {
    await auth.use("web").logout();

    return response.redirect().toPath("/");
  }
}
