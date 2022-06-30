import { Injectable } from '@nestjs/common';
import { CreateListOfExpenseDto } from './dto/create-list-of-expense.dto';
import { UpdateListOfExpenseDto } from './dto/update-list-of-expense.dto';

@Injectable()
export class ListOfExpensesService {
  create(createListOfExpenseDto: CreateListOfExpenseDto) {
    return 'This action adds a new listOfExpense';
  }

  findAll() {
    return `This action returns all listOfExpenses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} listOfExpense`;
  }

  update(id: number, updateListOfExpenseDto: UpdateListOfExpenseDto) {
    return `This action updates a #${id} listOfExpense`;
  }

  remove(id: number) {
    return `This action removes a #${id} listOfExpense`;
  }
}
