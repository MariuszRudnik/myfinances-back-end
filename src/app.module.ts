import {forwardRef, Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { AuthModule } from './auth/auth.module';
import { ExpensecategoryModule } from './expensecategory/expensecategory.module';
import { ListOfWalletsModule } from './list-of-wallets/list-of-wallets.module';
import { TransactionsModule } from './transactions/transactions.module';
import {orm} from './utils/orm'

@Module({
  imports: [
      TypeOrmModule.forRoot( orm  ),
      UserModule,
      AuthModule,
      ExpensecategoryModule,
      // ListOfWalletsModule,
      // TransactionsModule,
      forwardRef(() =>ListOfWalletsModule),
      forwardRef(() =>TransactionsModule),
      ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
