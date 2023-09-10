 import { Exclude } from 'class-transformer';
import { IsNotEmpty ,MinLength,IsEmail} from 'class-validator';
export class userDTO {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(8)
    password: string;
}

export class UserResponse {
    @Exclude()
    password: string;

    constructor(user : Partial<UserResponse> ) {
        Object.assign(this,user)
    }
}