import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DefaultNamingStrategy, NamingStrategyInterface } from "typeorm";
import { snakeCase } from "typeorm/util/StringUtils";

/**
 * Classes are stored in snake_case plural tables: Product -> products,
 * yearsOfWorking -> years_of_working.
 */
export class SnakeNamingStrategy
  extends DefaultNamingStrategy
  implements NamingStrategyInterface
{
  tableName(className: string, customName: string): string {
    return customName ? customName : `${snakeCase(className)}s`;
  }

  columnName(
    propertyName: string,
    customName: string,
    embeddedPrefixes: string[] = [],
  ): string {
    if (customName) return customName;
    return snakeCase([...embeddedPrefixes, propertyName].join("_"));
  }
}

export const getPostgresOptions = (
  config: ConfigService,
): TypeOrmModuleOptions => ({
  type: "postgres",
  host: config.get<string>("DB_HOST", "localhost"),
  port: Number(config.get<string>("DB_PORT", "5432")),
  username: config.get<string>("DB_USER", "postgres"),
  password: config.get<string>("DB_PASSWORD", ""),
  database: config.get<string>("DB_DATABASE", "product_management"),
  autoLoadEntities: true,
  synchronize: config.get<string>("DB_SYNCHRONIZE", "true") === "true",
  namingStrategy: new SnakeNamingStrategy(),
});
