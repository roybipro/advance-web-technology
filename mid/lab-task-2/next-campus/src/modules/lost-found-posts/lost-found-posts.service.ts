import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateLostFoundPostDto } from "./dto/create-lost-found-post.dto";
import { LostFoundPost } from "./entities/lost-found-post.entity";

@Injectable()
export class LostFoundPostsService {
  constructor(
    @InjectRepository(LostFoundPost)
    private readonly repository: Repository<LostFoundPost>,
  ) {}

  create(dto: CreateLostFoundPostDto) {
    return this.repository.save(this.repository.create(dto));
  }

  findAll() {
    return this.repository.find();
  }
}
