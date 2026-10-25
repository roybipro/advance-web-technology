import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  name!: string;

  @Column({ unique: true, length: 150 })
  email!: string;

  @Column({ nullable: true, length: 100 })
  department?: string;

  @Column({ nullable: true, length: 30 })
  batch?: string;

  @Column({
    type: "enum",
    enum: ["USER", "ADMIN", "SUPERUSER"],
    default: "'USER'",
  })
  role!: string;
}
