import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './infrastructure/common/filter/exception.filter';
import { LoggerService } from './infrastructure/logger/logger.service';
import { LoggingInterceptor } from './infrastructure/common/interceptor/request.interceptor';
import { ResponseInterceptor } from './infrastructure/common/interceptor/response.interceptor';
import * as process from 'node:process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new AllExceptionFilter(new LoggerService()));
  app.useGlobalInterceptors(new LoggingInterceptor(new LoggerService()));
  app.useGlobalInterceptors(new ResponseInterceptor());

  await app.listen(process.env.SERVER_POST);
}
bootstrap();
