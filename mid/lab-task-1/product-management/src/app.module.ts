import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { getPostgresOptions } from "./config/database.config";
import { EmployeeModule } from "./modules/employee/employee.module";
import { ProductModule } from "./modules/product/product.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: getPostgresOptions,
    }),
    ProductModule,
    EmployeeModule,
  ],
})
export class AppModule {}
