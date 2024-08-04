import { Module } from '@nestjs/common';
import { EnvironmentConfigService } from '../environment-config/environment-config.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as process from 'node:process';
import { EnvironmentConfigModule } from '../environment-config/environment-config.module';

// export const getTypeOrmModuleOptions = (
//   config: EnvironmentConfigService,
// ): TypeOrmModuleOptions =>
//   ({
//     type: 'postgres',
//     host: config.getDatabaseHost(),
//     port: config.getDatabasePort(),
//     username: config.getDatabaseUser(),
//     password: config.getDatabasePassword(),
//     database: config.getDatabaseName(),
//     entities: [__dirname + '/**/*.entity{.ts,.js}'],
//     synchronize: false,
//     schema: process.env.DATABASE_SCHEMA,
//   }) as TypeOrmModuleOptions;
export const getTypeOrmModuleOptions = (
  config: EnvironmentConfigService,
): TypeOrmModuleOptions =>
  ({
    type: 'postgres',
    host: config.getDatabaseHost(),
    port: config.getDatabasePort(),
    username: config.getDatabaseUser(),
    password: config.getDatabasePassword(),
    database: config.getDatabaseName(),
    entities: [__dirname + './../../**/*.entity{.ts,.js}'],
    synchronize: false,
    schema: process.env.DATABASE_SCHEMA,
    migrationsRun: true,
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migrations',
    },
    // ssl: {
    //   rejectUnauthorized: false,
    // },
  }) as TypeOrmModuleOptions;
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      useFactory: getTypeOrmModuleOptions,
    }),
  ],
})
export class TypeOrmConfigModule {}
