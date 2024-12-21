/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from "@adonisjs/core/services/router";
import { middleware } from "./kernel.js";

const LandingController = () => import("#controllers/landing_controller");
const RegisterController = () =>
  import("#controllers/auth/register_controller");
const LoginController = () => import("#controllers/auth/login_controller");
const ResumesController = () => import("#controllers/resumes_controller");
const SettingsController = () => import("#controllers/settings_controller");

router
  .get("/", [LandingController, "home"])
  .middleware([middleware.silentAuth()]);

router
  .group(() => {
    router.get("/resumes", [ResumesController, "render"]);
    router.get("/resume/:id", [ResumesController, "show"]);
    router.post("/add-user-resume", [ResumesController, "store"]);
    router.delete("sign-out", [LoginController, "signout"]);
    router.get("/settings", [SettingsController, "render"]);
  })
  .middleware([middleware.auth()]);

router
  .group(() => {
    router.get("/register", [RegisterController, "render"]);
    router.post("/register", [RegisterController, "execute"]);
    router.get("/login", [LoginController, "render"]);
    router.post("/login", [LoginController, "execute"]);
  })
  .middleware([middleware.guest()]);

router.post("/resume/:id", [ResumesController, "update"]);
router.delete("/resume/:id", [ResumesController, "destroy"]);

const AuthController = () => import("#controllers/auth_controller");

router.get("/auth/google", [AuthController, "google"]);
router.get("/auth/google/callback", [AuthController, "googleCallback"]);
