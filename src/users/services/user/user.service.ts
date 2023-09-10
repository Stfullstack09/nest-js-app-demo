import { Injectable , HttpException, HttpStatus} from '@nestjs/common';
import { userDTO } from 'src/users/dto/user.dto';
import { CreateUser, user } from 'src/utils/type';
// import {plainToClass} from 'class-transformer'

@Injectable()
export class UserService {
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

    createUser(user: CreateUser) {
        return ;
    }
}
