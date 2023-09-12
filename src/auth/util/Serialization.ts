import { PassportSerializer } from "@nestjs/passport";
import { User } from "src/DataBase/user";
import { UserService } from "src/users/services/user/user.service";

export class SessionSerializer extends PassportSerializer {
    constructor(private readonly userService: UserService) {
        super();
    }

    serializeUser(user: User, done: Function) {
        done(null, user);
    }

    async deserializeUser(payload: User, done: Function) {
        const user =  await this.userService.finOneUserByEmail(payload.email);
        return user ? done(null, user) : done(null, null)
    }
    
}
