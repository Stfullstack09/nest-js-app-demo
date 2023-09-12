import { Injectable } from "@nestjs/common";
import { ExecutionContextHost } from "@nestjs/core/helpers/execution-context-host";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
    async canActivate(context: ExecutionContextHost) {

        const result  = await super.canActivate(context) as boolean;
        const request =  context.switchToHttp().getRequest()
        
        super.logIn(request)
        return result;
    }
}