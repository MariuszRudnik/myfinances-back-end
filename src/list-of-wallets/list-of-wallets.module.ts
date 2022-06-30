import { Module } from '@nestjs/common';
import { ListOfWalletsService } from './list-of-wallets.service';
import { ListOfWalletsController } from './list-of-wallets.controller';

@Module({
  controllers: [ListOfWalletsController],
  providers: [ListOfWalletsService]
})
export class ListOfWalletsModule {}
