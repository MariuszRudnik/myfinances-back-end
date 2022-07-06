import {forwardRef, Inject, Injectable} from '@nestjs/common';
import { CreateListOfWalletDto } from './dto/create-list-of-wallet.dto';
import { UpdateListOfWalletDto } from './dto/update-list-of-wallet.dto';
import {ListOfWallet} from "./entities/list-of-wallet.entity";
import {TransactionsService} from "../transactions/transactions.service";


@Injectable()
export class ListOfWalletsService {
  constructor(
      @Inject(forwardRef(()=>TransactionsService)) private transaction: TransactionsService ,
  ) {}

  async create(createListOfWalletDto: CreateListOfWalletDto, user) {

    const wallet = new ListOfWallet;
    wallet.userId = user.id;
    wallet.nameWalled = createListOfWalletDto.nameWalled;
    wallet.openingBalance = createListOfWalletDto.openingBalance;
    wallet.chooseACurrency = createListOfWalletDto.chooseACurrency;
    await wallet.save()

    return {
      wallet
    }

  }

  async findAll(user) {
   return await ListOfWallet.find({
      where: {
        userId:user.id
      }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} listOfWallet`;
  }

  update(id: number, updateListOfWalletDto: UpdateListOfWalletDto) {
    return `This action updates a #${id} listOfWallet`;
  }

  remove(id: number) {
    return `This action removes a #${id} listOfWallet`;
  }
}
