import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe({
  	whitelist: true,
    forbidNonWhitelisted: true, 
    transform: true, 
  }));

  await app.listen(3000);
}
bootstrap();
