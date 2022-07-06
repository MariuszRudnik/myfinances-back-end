import {forwardRef, Module} from '@nestjs/common';
import { ListOfWalletsService } from './list-of-wallets.service';
import { ListOfWalletsController } from './list-of-wallets.controller';
import {TransactionsService} from "../transactions/transactions.service";
import {TransactionsModule} from "../transactions/transactions.module";

@Module({
  imports: [
    forwardRef(() =>TransactionsModule),
  ],
  controllers: [ListOfWalletsController],
  providers: [ListOfWalletsService],
  exports: [ListOfWalletsService]
})
export class ListOfWalletsModule {}
