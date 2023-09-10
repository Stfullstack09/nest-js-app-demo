import { CreateUserDTO } from './../../dto/createUser.dto';
import { Controller, Get, Post, Param,ClassSerializerInterceptor,UseInterceptors, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from 'src/users/services/user/user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    
    @Get()
    @UseInterceptors(ClassSerializerInterceptor)
    getUsers() {
        return this.userService.getUsers();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get(':username') 
    getOneUser(@Param('username') username: string) {
        return this.userService.getOneUser(username)
    }

    // handle with database
    
    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() user: CreateUserDTO) {
        return this.userService.createUser(user)
    }

    
    
}

