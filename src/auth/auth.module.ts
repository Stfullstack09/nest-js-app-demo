import { LocalStrategy } from './util/LocalStrategy';
import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/DataBase/user';
import { AuthService } from './services/auth/auth.service';
import { SERVICES } from 'src/utils/enum';
import { UserService } from 'src/users/services/user/user.service';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    UsersModule
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: SERVICES.USER,
      useClass: UserService
    },
    AuthService, 
    LocalStrategy
  ],
})
export class AuthModule {}
