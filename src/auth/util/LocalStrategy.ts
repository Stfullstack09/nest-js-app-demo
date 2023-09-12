import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../services/auth/auth.service";
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({ usernameField: 'email' }); 
    }

    async validate(email:string, passwordInput: string) {
        const user = await this.authService.validateUser(email, passwordInput)
        if(!user) {
            throw new UnauthorizedException()
        }
        const {password, ...result} = user;

        return result;
        
    }
    
}