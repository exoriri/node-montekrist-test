import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import {resolve } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(resolve('./src/client'));
  app.setBaseViewsDir(resolve('./src/client/views'));
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
