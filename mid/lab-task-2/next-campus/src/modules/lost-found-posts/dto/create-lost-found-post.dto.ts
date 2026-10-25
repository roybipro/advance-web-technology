import { IsDateString, IsIn, IsNotEmpty, IsString } from "class-validator";

export class CreateLostFoundPostDto {
  @IsNotEmpty()
  @IsIn(["LOST", "FOUND"])
  kind!: string;

  @IsNotEmpty()
  @IsString()
  category!: string;

  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsNotEmpty()
  @IsString()
  description!: string;

  @IsNotEmpty()
  @IsString()
  location!: string;

  @IsNotEmpty()
  @IsDateString()
  date!: string;
}
