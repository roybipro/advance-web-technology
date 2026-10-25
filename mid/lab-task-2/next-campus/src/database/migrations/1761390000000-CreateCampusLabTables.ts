import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCampusLabTables1761390000000 implements MigrationInterface {
  name = "CreateCampusLabTables1761390000000";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          { name: "id", type: "serial", isPrimary: true },
          { name: "name", type: "varchar", length: "100" },
          { name: "email", type: "varchar", length: "150", isUnique: true },
          {
            name: "department",
            type: "varchar",
            length: "100",
            isNullable: true,
          },
          { name: "batch", type: "varchar", length: "30", isNullable: true },
          {
            name: "role",
            type: "enum",
            enum: ["USER", "ADMIN", "SUPERUSER"],
            default: "'USER'",
          },
        ],
      }),
    );
    await queryRunner.createTable(
      new Table({
        name: "marketplace_posts",
        columns: [
          { name: "id", type: "serial", isPrimary: true },
          { name: "title", type: "varchar", length: "150" },
          { name: "description", type: "text" },
          { name: "kind", type: "enum", enum: ["SELL", "RENT"] },
          { name: "category", type: "varchar", length: "80" },
          { name: "price", type: "numeric", precision: 10, scale: 2 },
          {
            name: "condition",
            type: "enum",
            enum: ["NEW", "LIKE_NEW", "GOOD", "FAIR"],
          },
          {
            name: "status",
            type: "enum",
            enum: ["ACTIVE", "RESERVED", "SOLD"],
            default: "'ACTIVE'",
          },
        ],
      }),
    );
    await queryRunner.createTable(
      new Table({
        name: "lost_found_posts",
        columns: [
          { name: "id", type: "serial", isPrimary: true },
          { name: "kind", type: "enum", enum: ["LOST", "FOUND"] },
          { name: "category", type: "varchar", length: "80" },
          { name: "title", type: "varchar", length: "150" },
          { name: "description", type: "text" },
          { name: "location", type: "varchar", length: "200" },
          { name: "date", type: "date" },
          {
            name: "status",
            type: "enum",
            enum: ["OPEN", "RETURNED"],
            default: "'OPEN'",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("lost_found_posts");
    await queryRunner.dropTable("marketplace_posts");
    await queryRunner.dropTable("users");
  }
}
