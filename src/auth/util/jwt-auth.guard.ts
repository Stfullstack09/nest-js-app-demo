import { ExecutionContext } from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport";

export class JWTAuthGuard  extends AuthGuard('jwt') {
    async canActivate(context: ExecutionContext) {
        const result = await  super.canActivate(context) as boolean;
        
        return result;
    }
}