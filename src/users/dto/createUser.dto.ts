import { IsEmail , MinLength, IsNotEmpty, IsString, } from "class-validator";

export class CreateUserDTO  {

    @IsEmail()
    email: string;

    @MinLength(8)
    password: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    address: string;

}