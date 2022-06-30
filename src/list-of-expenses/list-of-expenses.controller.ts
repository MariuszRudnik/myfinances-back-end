import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListOfExpensesService } from './list-of-expenses.service';
import { CreateListOfExpenseDto } from './dto/create-list-of-expense.dto';
import { UpdateListOfExpenseDto } from './dto/update-list-of-expense.dto';

@Controller('list-of-expenses')
export class ListOfExpensesController {
  constructor(private readonly listOfExpensesService: ListOfExpensesService) {}

  @Post()
  create(@Body() createListOfExpenseDto: CreateListOfExpenseDto) {
    return this.listOfExpensesService.create(createListOfExpenseDto);
  }

  @Get()
  findAll() {
    return this.listOfExpensesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listOfExpensesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListOfExpenseDto: UpdateListOfExpenseDto) {
    return this.listOfExpensesService.update(+id, updateListOfExpenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listOfExpensesService.remove(+id);
  }
}
