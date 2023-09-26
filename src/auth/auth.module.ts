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
import { JwtModule } from '@nestjs/jwt';
import { SessionSerializer } from './util/Serialization';
import { JWTStrategy } from './util/jwt.strategy';
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: "nestjs-secret",
    })
  ],
  controllers: [AuthController],
  providers: [
    SessionSerializer,
    {
      provide: SERVICES.USER,
      useClass: UserService
    },
    AuthService, 
    LocalStrategy,
    JWTStrategy
  ],
})
export class AuthModule {}
