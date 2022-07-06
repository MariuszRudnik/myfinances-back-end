import {forwardRef, Module} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import {ListOfWalletsModule} from "../list-of-wallets/list-of-wallets.module";


@Module({
  imports: [
    forwardRef(() =>ListOfWalletsModule),
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService],
  exports:[TransactionsService]
})
export class TransactionsModule {}
