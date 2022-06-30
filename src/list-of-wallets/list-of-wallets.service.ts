import { Injectable } from '@nestjs/common';
import { CreateListOfWalletDto } from './dto/create-list-of-wallet.dto';
import { UpdateListOfWalletDto } from './dto/update-list-of-wallet.dto';

@Injectable()
export class ListOfWalletsService {
  create(createListOfWalletDto: CreateListOfWalletDto) {
    return 'This action adds a new listOfWallet';
  }

  findAll() {
    return `This action returns all listOfWallets`;
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
