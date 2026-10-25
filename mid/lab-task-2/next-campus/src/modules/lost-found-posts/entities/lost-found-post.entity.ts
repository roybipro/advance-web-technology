import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("lost_found_posts")
export class LostFoundPost {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "enum", enum: ["LOST", "FOUND"] })
  kind!: string;

  @Column({ length: 80 })
  category!: string;

  @Column({ length: 150 })
  title!: string;

  @Column({ type: "text" })
  description!: string;

  @Column({ length: 200 })
  location!: string;

  @Column({ type: "date" })
  date!: string;

  @Column({ type: "enum", enum: ["OPEN", "RETURNED"], default: "'OPEN'" })
  status!: string;
}
