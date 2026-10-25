import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LostFoundPostsController } from "./lost-found-posts.controller";
import { LostFoundPostsService } from "./lost-found-posts.service";
import { LostFoundPost } from "./entities/lost-found-post.entity";

@Module({
  imports: [TypeOrmModule.forFeature([LostFoundPost])],
  controllers: [LostFoundPostsController],
  providers: [LostFoundPostsService],
})
export class LostFoundPostsModule {}
