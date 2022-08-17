import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health/health.controller';
import { PetController } from './pet/pet.controller';
import { HttpModule } from "@nestjs/axios";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from 'path';


@Module({
  imports: [HttpModule.registerAsync({
    useFactory: () => ({
      timeout: 5000,
      maxRedirects: 5,
    }),
  }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),],
  controllers: [AppController, HealthController, PetController],
  providers: [AppService],
})
export class AppModule {}
