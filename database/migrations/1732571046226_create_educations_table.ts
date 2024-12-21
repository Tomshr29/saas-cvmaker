import { BaseSchema } from "@adonisjs/lucid/schema";

export default class extends BaseSchema {
  protected tableName = "educations";

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table
        .integer("resume_id")
        .unsigned()
        .references("id")
        .inTable("resumes")
        .onDelete("CASCADE");

      table.string("school").notNullable();
      table.string("degree").nullable();
      table.string("field_of_study").nullable();
      table.date("start_date").nullable();
      table.date("end_date").nullable();

      table.timestamp("created_at");
      table.timestamp("updated_at");
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
