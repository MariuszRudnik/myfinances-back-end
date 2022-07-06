import {forwardRef, Inject, Injectable} from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import {Transaction} from "./entities/transaction.entity";
import {ListOfWallet} from "../list-of-wallets/entities/list-of-wallet.entity";
import {ListOfWalletsService} from "../list-of-wallets/list-of-wallets.service";

@Injectable()
export class TransactionsService {
  constructor(
      @Inject(forwardRef(()=>ListOfWalletsService)) private listOfWallet : ListOfWalletsService,
  ) {}


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
      transaction.operations = createTransactionDto.operations;
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

  async findAll(walletRR:string) {
    return  await Transaction.find({
      where:{
        wallet: walletRR
      }
    })

  }

  // findOne(id: number) {
  //   return `This action returns a #${id} transaction`;
  // }
  //
  // update(id: number, updateTransactionDto: UpdateTransactionDto) {
  //   return `This action updates a #${id} transaction`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} transaction`;
  // }
}
