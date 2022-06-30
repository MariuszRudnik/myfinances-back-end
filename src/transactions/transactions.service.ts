import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import {Transaction} from "./entities/transaction.entity";
import {ListOfWallet} from "../list-of-wallets/entities/list-of-wallet.entity";

@Injectable()
export class TransactionsService {
  async create(createTransactionDto: CreateTransactionDto, user, wallet) {

    const walletId = await ListOfWallet.findOne({
        where: {
            id: wallet
        }
    });
    const walletNameId = walletId.id;
    console.log(walletNameId);
    console.log(typeof walletNameId)



    if(user.id === walletId.userId){
      const transaction = new Transaction;
      transaction.nameTransactions = createTransactionDto.nameTransactions;
      transaction.category = createTransactionDto.category;
      transaction.price = createTransactionDto.price;
      transaction.dateExpenses = createTransactionDto.dateExpenses;
      transaction.wallet = walletNameId;
      await transaction.save()
      console.log(transaction)

      return {
        transaction
      }
    } else {
      return {
        stron : 'to bedzie bład'
      }
    }
  }

  findAll() {
    return `This action returns all transactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
