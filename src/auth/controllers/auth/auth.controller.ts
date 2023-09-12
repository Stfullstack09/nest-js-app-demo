import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/util/local-auth.guard';

@Controller()
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}

// import { Body, ClassSerializerInterceptor , Request,Controller, Post, UseInterceptors, UsePipes, ValidationPipe, Response, UseGuards, Req } from '@nestjs/common';
// import { userDTO } from 'src/auth/DTO/login.dto';
// import { AuthService } from 'src/auth/services/auth/auth.service';
// import {AuthGuard} from '@nestjs/passport';
// // import { Request, Response as responseEX } from 'express';

// @Controller('auth')
// export class AuthController {
//     constructor(private readonly authService : AuthService) {}

//     // @Post()
//     // @UsePipes(new ValidationPipe())
//     // @UseInterceptors(ClassSerializerInterceptor)
//     // async login(@Body() userDTO : userDTO, @Response() response: responseEX) {
//     //     const user =  await this.authService.login(userDTO);
//     //     response.cookie('jwt', 'my-token' , {
//     //         httpOnly: true,
//     //         expires: new Date(Date.now() + 3600000),
//     //     })
//     //     response.status(200).json(user)

//     //     // return this.authService.login(userDTO);
//     // }

//     @Post('login')
//     @UseGuards(AuthGuard('local'))
//     async login(@Request() req) {
//         return req.user;
//       }
      
    
// }
