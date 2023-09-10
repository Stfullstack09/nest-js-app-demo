import { Injectable , HttpException, HttpStatus} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/DataBase/user';
import { userDTO } from 'src/users/dto/user.dto';
import { generatePassword } from 'src/utils/helper/bcrypt.helper';
import { CreateUser, user } from 'src/utils/type';
import { Repository } from 'typeorm';
// import {plainToClass} from 'class-transformer'

@Injectable()
export class UserService {

    constructor (@InjectRepository(User) private readonly userRepository : Repository<User>) {}
    
    private users : user[] =  [
        {
            name: 'truongson',
            password : 'truongson2003'
        }, 
        {
            name : 'truongsondev',
            password: 'truongson2@'
        },
        {
            name: '0869224813',
            password: 'nson3112'
        }
    ]

    getUsers() {
        // return  this.users.map(i => plainToClass(userDTO, i))
        return this.users.map(i=> new userDTO(i))
    }

    getOneUser(username: string) {
        let userFind:userDTO =  this.users.find(i => i.name === username)
        
        if(userFind) {
            return new userDTO(userFind)
        }else{
            throw new HttpException('Không tìm thấy người dùng nào!!', HttpStatus.BAD_REQUEST)
        }
        
    }

    async createUser(user: CreateUser) {
       try {
        const passwordHash = await generatePassword(user.password);
        const newUser = this.userRepository.create({
            ...user,
            password: passwordHash
        })
        const saveUser = await this.userRepository.save(newUser);
        return saveUser;
       } catch (error) {
            throw new HttpException('Email Đã Tồn Tại!', HttpStatus.BAD_REQUEST)
       }
    }
}
