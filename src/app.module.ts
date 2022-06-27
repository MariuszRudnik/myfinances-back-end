import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {oremTypes} from "../oremTypes"


@Module({
  imports: [
      TypeOrmModule.forRoot(oremTypes),
      UserModule
      ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
