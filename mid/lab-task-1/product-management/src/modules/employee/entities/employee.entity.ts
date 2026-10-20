import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 120 })
  name: string;

  @Column({ type: "varchar", length: 150 })
  email: string;

  @Column({ type: "varchar", length: 20 })
  phone: string;

  // select: false keeps the stored password out of every query result.
  @Column({ type: "varchar", length: 120, select: false })
  password: string;

  @Column({ type: "int" })
  age: number;

  @Column({ type: "int" })
  yearsOfWorking: number;
}
