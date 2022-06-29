import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { AuthModule } from './auth/auth.module';
import {orm} from "./utils/orm";
import { ExpensecategoryModule } from './expensecategory/expensecategory.module';

@Module({
  imports: [
      TypeOrmModule.forRoot(orm),
      UserModule,
      AuthModule,
      ExpensecategoryModule
      ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
