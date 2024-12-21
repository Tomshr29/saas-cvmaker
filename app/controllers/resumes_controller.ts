import Resume from "#models/resume";
import { resumeValidator } from "#validators/resume";
import type { HttpContext } from "@adonisjs/core/http";

export default class ResumesController {
  async render({ auth, inertia }: HttpContext) {
    const user = await auth.authenticate();
    const posts = await Resume.query()
      .where("user_id", user.id)
      .orderBy("updated_at", "desc");
    return inertia.render("resume/index", { posts });
  }

  async show({ inertia, params }: HttpContext) {
    const id = params.id;
    const post = await Resume.findOrFail(id);
    return inertia.render("resume/create", {
      post,
    });
  }

  public async store({ auth, request, response }: HttpContext) {
    const user = auth.user!;
    const data = request.all();
    const payload = await resumeValidator.validate(data);

    const email = data.email ?? user.email;

    const userResume = await Resume.create({
      userId: user.id,
      email: email,
      ...payload,
    });

    return response.redirect(`/resume/${userResume.id}`);
  }

  public async update({ request, response, params }: HttpContext) {
    const userResume = await Resume.findOrFail(params.id);
    const data = request.all();
    const payload = await resumeValidator.validate(data);

    userResume.merge(payload);
    await userResume.save();

    return response.redirect().back();
  }

  async destroy({ params, response }: HttpContext) {
    const userResume = await Resume.findOrFail(params.id);
    await userResume.delete();

    return response.redirect().back();
  }
}
