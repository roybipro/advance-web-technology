import { Type } from "class-transformer";
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  MaxLength,
  Min,
} from "class-validator";

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  name: string;

  @IsEmail()
  @MaxLength(150)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  phone: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  password: string;

  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(120)
  age: number;

  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(60)
  yearsOfWorking: number;
}
