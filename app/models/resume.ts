import { DateTime } from "luxon";
import { BaseModel, belongsTo, column, hasMany } from "@adonisjs/lucid/orm";
import User from "#models/user";
import type { BelongsTo, HasMany } from "@adonisjs/lucid/types/relations";
import Job from "./job.js";
import Education from "./education.js";

export default class Resume extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare userId: number;

  @column()
  declare title: string;

  @column()
  declare jobTitle: string | null;

  @column()
  declare firstName: string | null;

  @column()
  declare lastName: string | null;

  @column()
  declare email: string | null;

  @column()
  declare phone: string | null;

  @column()
  declare about: string | null;

  @column()
  declare model: "blue-white" | "red-orange";

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime;

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>;

  @hasMany(() => Job)
  declare jobs: HasMany<typeof Job>;

  @hasMany(() => Education)
  declare educations: HasMany<typeof Education>;
}
