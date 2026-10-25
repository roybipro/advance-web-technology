import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateMarketplacePostDto } from "./dto/create-marketplace-post.dto";
import { MarketplacePost } from "./entities/marketplace-post.entity";

@Injectable()
export class MarketplacePostsService {
  constructor(
    @InjectRepository(MarketplacePost)
    private readonly repository: Repository<MarketplacePost>,
  ) {}

  create(dto: CreateMarketplacePostDto) {
    return this.repository.save(this.repository.create(dto));
  }

  findAll() {
    return this.repository.find();
  }
}
