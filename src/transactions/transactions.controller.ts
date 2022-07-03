import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import {AuthGuard} from "@nestjs/passport";
import {UserObj} from "../decoratois/userobj.decorator";
import {User} from "../user/user.entity";

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('/:wallet')
  @UseGuards(AuthGuard('jwt'))
  create(
      @Body() createTransactionDto: CreateTransactionDto,
      @UserObj() user: User,
      @Param('wallet') wallet: string
  ) {
    return this.transactionsService.create(createTransactionDto, user, wallet);
  }

  @Get()
  findAll() {
    return this.transactionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
    return this.transactionsService.update(+id, updateTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionsService.remove(+id);
  }
}