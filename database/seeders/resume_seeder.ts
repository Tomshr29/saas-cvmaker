import { BaseSeeder } from "@adonisjs/lucid/seeders";
import Resume from "#models/resume";
import { DateTime } from "luxon";
import User from "#models/user";

export default class ResumeSeeder extends BaseSeeder {
  public async run() {
    const user = await User.create({
      id: 1, // ID statique pour s'assurer qu'il correspond au user_id utilisé
      email: "jean.dupont@example.com",
      password: "hashed_password", // Remplace par un mot de passe haché
      createdAt: DateTime.now(),
      updatedAt: DateTime.now(),
    });

    const resume = await Resume.create({
      userId: user.id,
      title: "Développeur Full-Stack",
      jobTitle: "Développeur Full-Stack",
      firstName: "Jean",
      lastName: "Dupont",
      email: "jean.dupont@example.com",
      phone: "0123456789",
      model: "blue-white",
      about: "Passionné par le développement web.",
    });

    await resume.related("jobs").createMany([
      {
        company: "TechCorp",
        position: "Développeur Back-End",
        startDate: DateTime.fromISO("2020-01-01"),
        endDate: DateTime.fromISO("2022-12-31"),
        description: "Développement d'API en Node.js.",
      },
      {
        company: "WebAgency",
        position: "Développeur Front-End",
        startDate: DateTime.fromISO("2023-01-01"),
        endDate: null, // Poste actuel
        description: "Création de sites web avec React.",
      },
    ]);

    await resume.related("educations").createMany([
      {
        school: "Université de Paris",
        degree: "Master",
        fieldOfStudy: "Informatique",
        startDate: DateTime.fromISO("2015-09-01"),
        endDate: DateTime.fromISO("2017-06-30"),
      },
      {
        school: "Lycée Jules Verne",
        degree: "Baccalauréat",
        fieldOfStudy: "Sciences",
        startDate: DateTime.fromISO("2012-09-01"),
        endDate: DateTime.fromISO("2015-06-30"),
      },
    ]);
  }
}
