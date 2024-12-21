import { BaseSchema } from "@adonisjs/lucid/schema";

export default class extends BaseSchema {
  protected tableName = "resumes";

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table
        .integer("user_id")
        .unsigned()
        .references("users.id")
        .onDelete("CASCADE");
      table.string("title").notNullable();
      table.string("job_title").nullable();
      table.string("first_name").nullable();
      table.string("last_name").nullable();
      table.string("email").nullable();
      table.string("phone").nullable();

      table
        .enum("model", ["blue-white", "red-orange"])
        .defaultTo("blue-white")
        .notNullable();

      table.string("about").nullable();

      table.timestamp("created_at");
      table.timestamp("updated_at");
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
