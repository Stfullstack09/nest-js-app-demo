import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(session({
    name: 'Token_NestJS_APP',
    secret: "nson3112",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 8400000,
      httpOnly: true
    }
  }))
  await app.listen(parseInt(process.env.PORT) || 8080);
  
}
bootstrap();
