import { DateTime } from "luxon";
import { BaseModel, belongsTo, column, hasMany } from "@adonisjs/lucid/orm";
import Resume from "#models/resume";
import type { BelongsTo, HasMany } from "@adonisjs/lucid/types/relations";

export default class Education extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare resumeId: number;

  @column()
  declare school: string;

  @column()
  declare degree: string;

  @column()
  declare fieldOfStudy: string;

  @column.dateTime()
  declare startDate: DateTime;

  @column.dateTime()
  declare endDate: DateTime;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime;

  @belongsTo(() => Resume)
  declare resume: BelongsTo<typeof Resume>;
}
