import {Body, Controller, Delete, Get, Param, Post, UseGuards} from '@nestjs/common';
import { ExpensecategoryService } from './expensecategory.service';
import {AuthGuard} from "@nestjs/passport";
import {UserObj} from "../decoratois/userobj.decorator";
import {User} from "../user/user.entity";

@Controller('expensecategory')
export class ExpensecategoryController {
  constructor(private readonly expensecategoryService: ExpensecategoryService) {}


  @Post('/')
  @UseGuards(AuthGuard('jwt'))
  addExpenseCategory(
      @UserObj() user: User,
      @Body('categoryName') categoryName : string
  ){
    return this.expensecategoryService.addCategory(categoryName, user)
  }

  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  showUserCategory(
      @UserObj() user: User,
  ){
    return this.expensecategoryService.showCategory(user)
  }
  @Delete('/:idCategory')
  @UseGuards(AuthGuard('jwt'))
  removeExpenseCategory(
      @UserObj() user: User,
      @Param('idCategory') idCategory: string
  ){
    return this.expensecategoryService.removeCategory(user, idCategory)
  }

}
