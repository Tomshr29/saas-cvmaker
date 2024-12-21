import { BaseSchema } from "@adonisjs/lucid/schema";

export default class extends BaseSchema {
  protected tableName = "jobs";

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table
        .integer("resume_id")
        .unsigned()
        .references("id")
        .inTable("resumes")
        .onDelete("CASCADE");

      table.string("company").notNullable();
      table.string("position").notNullable();
      table.date("start_date").nullable();
      table.date("end_date").nullable();
      table.text("description").nullable();

      table.timestamp("created_at");
      table.timestamp("updated_at");
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
