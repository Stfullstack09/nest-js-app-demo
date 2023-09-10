import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/DataBase/user';
import { UserResponse } from 'src/auth/DTO/login.dto';
import { CheckPassword } from 'src/utils/helper/bcrypt.helper';
import { loginUser } from 'src/utils/type';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(User) private readonly userRepository : Repository<User>) {}

    async login(user: loginUser) {
        const userFind = await this.userRepository.findOneBy({
            email: user.email
        })

        if(!userFind) {
            throw new HttpException('Email không tồn tại trong hệ thống!', HttpStatus.NOT_FOUND)
        }

        const check = await CheckPassword(user.password , userFind.password);

        if(!check) {
            throw new HttpException('Sai Mật Khẩu!!', HttpStatus.UNAUTHORIZED);
        }

        return new UserResponse(userFind)
        
    }
}
