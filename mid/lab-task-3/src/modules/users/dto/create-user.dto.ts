import { Type } from "class-transformer";
import {
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  Matches,
  Max,
  Min,
  MinLength,
} from "class-validator";

export enum AccountType {
  STUDENT = "student",
  TEACHER = "teacher",
}

export class CreateUserDto {
  @IsNotEmpty({ message: "fullName is required" })
  @IsString()
  @MinLength(3, { message: "fullName must be at least 3 characters long" })
  fullName!: string;

  @IsNotEmpty({ message: "email is required" })
  @IsEmail({}, { message: "email must be a valid email address" })
  email!: string;

  @IsNotEmpty({ message: "password is required" })
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    {
      message:
        "password must be at least 8 characters and include uppercase, lowercase, number, and special character",
    },
  )
  password!: string;

  @Type(() => Number)
  @IsInt({ message: "age must be an integer" })
  @Min(18, { message: "age must be at least 18" })
  @Max(60, { message: "age must not be greater than 60" })
  age!: number;

  @IsNotEmpty({ message: "phone is required" })
  @IsString()
  @Matches(/^01\d{9}$/, {
    message: "phone must be exactly 11 digits and start with 01",
  })
  phone!: string;

  @IsEnum(AccountType, {
    message: "accountType must be either student or teacher",
  })
  accountType!: AccountType;

  @IsOptional()
  @IsString()
  @MinLength(10, { message: "address must be at least 10 characters long" })
  address?: string;
}
