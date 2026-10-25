import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MarketplacePostsController } from "./marketplace-posts.controller";
import { MarketplacePostsService } from "./marketplace-posts.service";
import { MarketplacePost } from "./entities/marketplace-post.entity";

@Module({
  imports: [TypeOrmModule.forFeature([MarketplacePost])],
  controllers: [MarketplacePostsController],
  providers: [MarketplacePostsService],
})
export class MarketplacePostsModule {}
