import { IsNotEmpty, IsIn, IsNumber, IsString, Min } from "class-validator";

export class CreateMarketplacePostDto {
  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsNotEmpty()
  @IsString()
  description!: string;

  @IsNotEmpty()
  @IsIn(["SELL", "RENT"])
  kind!: string;

  @IsNotEmpty()
  @IsString()
  category!: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  price!: number;

  @IsNotEmpty()
  @IsIn(["NEW", "LIKE_NEW", "GOOD", "FAIR"])
  condition!: string;
}
