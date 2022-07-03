import {Body, Controller, Get, Inject, Post, UseGuards} from '@nestjs/common';
import {UserService} from "./user.service";
import {RegisterDto} from "./dto/register.dto";
import {RegisterUserResponse} from "../../types/authentication/register";
import {UserObj} from "../decoratois/userobj.decorator";
import {User} from "./user.entity";
import {AuthGuard} from "@nestjs/passport";


@Controller('user')
export class UserController {
    constructor(@Inject(UserService) private userService: UserService ) {}

    @Post('/register')
    register(
        @Body() newUser: RegisterDto,
    ): Promise<RegisterUserResponse>{
        return this.userService.register(newUser);
    }

    @Get('/')
    @UseGuards(AuthGuard('jwt'))
    async getUser(
        @UserObj() user: User,
    ){
        return this.userService.login(user)
    }

}