import { Module } from '@nestjs/common';
import { ListOfExpensesService } from './list-of-expenses.service';
import { ListOfExpensesController } from './list-of-expenses.controller';

@Module({
  controllers: [ListOfExpensesController],
  providers: [ListOfExpensesService]
})
export class ListOfExpensesModule {}
