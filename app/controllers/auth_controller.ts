import User from "#models/user";
import type { HttpContext } from "@adonisjs/core/http";

export default class AuthController {
  public async google({ ally }: HttpContext) {
    return ally.use("google").redirect();
  }

  public async googleCallback({ ally, auth, response }: HttpContext) {
    const gg = ally.use("google");

    if (gg.accessDenied()) {
      return "You have cancelled the login process";
    }

    if (gg.stateMisMatch()) {
      return "We are unable to verify the request. Please try again.";
    }

    if (gg.hasError()) {
      return gg.getError();
    }

    const ggUser = await gg.user();
    const user = await User.firstOrCreate({
      email: ggUser.email,
      password: "",
    });
    await auth.use("web").login(user!);
    return response.redirect("/");
  }
}
