import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateLostFoundPostDto } from "./dto/create-lost-found-post.dto";
import { LostFoundPostsService } from "./lost-found-posts.service";

@Controller("lost-found-posts")
export class LostFoundPostsController {
  constructor(private readonly service: LostFoundPostsService) {}

  @Post()
  create(@Body() dto: CreateLostFoundPostDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
