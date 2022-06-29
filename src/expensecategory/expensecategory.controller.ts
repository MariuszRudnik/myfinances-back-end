import {Body, Controller, Param, Post} from '@nestjs/common';
import { ExpensecategoryService } from './expensecategory.service';

@Controller('expensecategory')
export class ExpensecategoryController {
  constructor(private readonly expensecategoryService: ExpensecategoryService) {}


  @Post('/:userId')
  addExpenseCategory(
      @Param('userId') userID: string,
      @Body('categoryName') categoryName : string
  ){
    return this.expensecategoryService.addCategory(categoryName)
  }

}
