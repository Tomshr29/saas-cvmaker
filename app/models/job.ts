import { DateTime } from "luxon";
import { BaseModel, belongsTo, column } from "@adonisjs/lucid/orm";
import Resume from "#models/resume";
import type { BelongsTo } from "@adonisjs/lucid/types/relations";

export default class Job extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare resumeId: number;

  @column()
  declare company: string;

  @column()
  declare position: string;

  @column.dateTime()
  declare startDate: DateTime;

  @column.dateTime()
  declare endDate: DateTime | null;

  @column()
  declare description: string;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime;

  @belongsTo(() => Resume)
  declare resume: BelongsTo<typeof Resume>;
}
