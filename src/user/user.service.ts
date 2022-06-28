import { Injectable } from '@nestjs/common';
import {RegisterDto} from "./dto/register.dto";
import {RegisterUserResponse} from "../../interface";
import {hashPwd} from "../utils/hash-pwd";
import {User} from "./user.entity";


@Injectable()
export class UserService {
    filter(user: User): RegisterUserResponse {
        const {id, email} = user;
        return {id, email};
    }

    async register(newUser: RegisterDto): Promise<RegisterUserResponse> {
        const user = new User();
        user.email = newUser.email;
        user.pwdHash = hashPwd(newUser.pwd)
        await user.save();
        return this.filter(user)
    }
}