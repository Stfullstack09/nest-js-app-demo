import { Controller, Req, Post, UseGuards, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/util/local-auth.guard';
import { RequestCustom } from 'src/auth/DTO/login.dto';
import { JWTAuthGuard } from 'src/auth/util/jwt-auth.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService : AuthService) {}
  @UsePipes(new ValidationPipe())
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Req() req: RequestCustom) {
    return this.authService.loginJWT(req.user)
  }

  @UseGuards(JWTAuthGuard)
  @Get('auth/getUser') 
  getUser(@Req() request: RequestCustom) {
    return request.user
  }
}
