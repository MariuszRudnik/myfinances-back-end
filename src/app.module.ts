import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
      TypeOrmModule.forRoot( {
          "type": "mysql",
          "host": "localhost",
          "port": 8889,
          "username": "root",
          "password": "root",
          "database": "myfinances",
          "entities": ["dist/**/**.entity{.ts,.js}"],
          "bigNumberStrings": false,
          "logging": true,
          "synchronize": true
      }),
      UserModule,
      AuthModule
      ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}