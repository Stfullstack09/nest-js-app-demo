import { Body, ClassSerializerInterceptor ,Controller, Post, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { userDTO } from 'src/auth/DTO/login.dto';
import { AuthService } from 'src/auth/services/auth/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    @UseInterceptors(ClassSerializerInterceptor)
    login(@Body() userDTO : userDTO) {
        return this.authService.login(userDTO)
    }
}
