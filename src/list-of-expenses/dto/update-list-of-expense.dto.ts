import { PartialType } from '@nestjs/mapped-types';
import { CreateListOfExpenseDto } from './create-list-of-expense.dto';

export class UpdateListOfExpenseDto extends PartialType(CreateListOfExpenseDto) {}
