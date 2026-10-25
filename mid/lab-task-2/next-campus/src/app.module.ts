import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PostgresDatabaseProviderModule } from "@/providers/database/postgres/provider.module";
import { AppController } from "@/src/app.controller";
import { AppService } from "@/src/app.service";
import global_config from "@/config/global_config";
import { BullModule } from "@nestjs/bull";
import { UsersModule } from "@/modules/users/users.module";
import { MarketplacePostsModule } from "@/modules/marketplace-posts/marketplace-posts.module";
import { LostFoundPostsModule } from "@/modules/lost-found-posts/lost-found-posts.module";

@Module({
  imports: [
    PostgresDatabaseProviderModule,

    ConfigModule.forRoot({
      isGlobal: true,
      load: [],
    }),
    BullModule.forRoot({
      url: process.env.REDIS_URL,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [global_config],
    }),
    UsersModule,
    MarketplacePostsModule,
    LostFoundPostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
