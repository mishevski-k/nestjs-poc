import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { PresentationModule } from './presentation/presentation.module';

@Module({
  imports: [EnvironmentConfigModule, PresentationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
