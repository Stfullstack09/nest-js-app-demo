import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/DataBase/user';

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:   false,
            secretOrKey: "nestjs-secret"
        })
    }

    async validate(payload: User) {
        return {
            email: payload.email,
            address: payload.address,
            name: payload.name
        }
    }
} 