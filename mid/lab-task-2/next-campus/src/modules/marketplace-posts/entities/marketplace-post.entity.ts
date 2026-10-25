import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("marketplace_posts")
export class MarketplacePost {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 150 })
  title!: string;

  @Column({ type: "text" })
  description!: string;

  @Column({ type: "enum", enum: ["SELL", "RENT"] })
  kind!: string;

  @Column({ length: 80 })
  category!: string;

  @Column({ type: "numeric", precision: 10, scale: 2 })
  price!: number;

  @Column({ type: "enum", enum: ["NEW", "LIKE_NEW", "GOOD", "FAIR"] })
  condition!: string;

  @Column({
    type: "enum",
    enum: ["ACTIVE", "RESERVED", "SOLD"],
    default: "'ACTIVE'",
  })
  status!: string;
}
