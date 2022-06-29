import { Module } from '@nestjs/common';
import { ExpensecategoryService } from './expensecategory.service';
import { ExpensecategoryController } from './expensecategory.controller';

@Module({
  controllers: [ExpensecategoryController],
  providers: [ExpensecategoryService]
})
export class ExpensecategoryModule {}
