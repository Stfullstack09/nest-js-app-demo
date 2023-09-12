import { Injectable , ExecutionContext, BadRequestException} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { validate } from "class-validator";
import {Request} from 'express';
import { userDTO } from "../DTO/login.dto";

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
    async canActivate(context: ExecutionContext) {

        const result  = await super.canActivate(context) as boolean;
        const request : Request =  context.switchToHttp().getRequest() ;

        const user : userDTO = request.body;

        const errors = await validate(user)

        console.log(errors)

        if (errors.length > 0) {
            // Nếu có lỗi, ném ra một lỗi BadRequestException
            throw new BadRequestException(errors);
          }
        
        super.logIn(request)
        return result;
    }
}