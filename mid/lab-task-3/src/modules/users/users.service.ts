import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  register(createUserDto: CreateUserDto) {
    // Password is intentionally left out of the response
    const { fullName, email, age, accountType } = createUserDto;

    return {
      message: "User registered successfully",
      data: { fullName, email, age, accountType },
    };
  }
}
