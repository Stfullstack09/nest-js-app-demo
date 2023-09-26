import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {entities} from './DataBase'
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { AuthtwoModule } from './authtwo/authtwo.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // config module using .env
    TypeOrmModule.forRoot(
     {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: null,
      database: 'learning',
      entities,
      synchronize: true,
     }
    ),
    UsersModule,
    AuthModule,
    BlogModule,
    AuthtwoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
