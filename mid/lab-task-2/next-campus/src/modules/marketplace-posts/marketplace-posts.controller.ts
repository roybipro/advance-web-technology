import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateMarketplacePostDto } from "./dto/create-marketplace-post.dto";
import { MarketplacePostsService } from "./marketplace-posts.service";

@Controller("marketplace-posts")
export class MarketplacePostsController {
  constructor(private readonly service: MarketplacePostsService) {}

  @Post()
  create(@Body() dto: CreateMarketplacePostDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
