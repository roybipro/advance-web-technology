import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ValueTransformer,
} from "typeorm";

const decimalToNumber: ValueTransformer = {
  to: (value: number | null | undefined) => value,
  from: (value: string | null) => (value === null ? null : Number.parseFloat(value)),
};

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 120 })
  name: string;

  @Column({ type: "varchar", length: 80 })
  category: string;

  @Column({
    type: "decimal",
    precision: 12,
    scale: 2,
    transformer: decimalToNumber,
  })
  price: number;

  @Column({ type: "int" })
  quantity: number;
}
