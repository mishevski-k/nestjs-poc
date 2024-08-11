import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomLoggerService } from './custom-logger/custom-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true
  });

  app.useLogger(app.get(CustomLoggerService));
  app.enableCors();
  app.setGlobalPrefix('api')

  await app.listen(3000);
}
bootstrap();
