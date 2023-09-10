import { Exclude } from "class-transformer";

export class userDTO {
    name: string;

    @Exclude()
    password: string;

    constructor(partial: Partial<userDTO>  ) {
        console.log(Object.assign(this, partial))
    }
}