import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CatsModule } from './domains/cats/cats.module';
import { LoggerMiddleware } from './core/middlewares/logger.middleware';
import { RolesGuard } from './core/guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CatsModule,
    ConfigModule.forRoot({
      envFilePath: './config/.env',
    }),
  ],
  // providers: [
  //   {
  //     provide: APP_FILTER,
  //     useClass: AllExceptionsFilter,
  //   },
  // ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}
