import type { HttpContext } from "@adonisjs/core/http";

export default class LandingController {
  home({ inertia }: HttpContext) {
    return inertia.render("home");
  }
}
