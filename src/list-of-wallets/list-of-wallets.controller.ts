import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListOfWalletsService } from './list-of-wallets.service';
import { CreateListOfWalletDto } from './dto/create-list-of-wallet.dto';
import { UpdateListOfWalletDto } from './dto/update-list-of-wallet.dto';

@Controller('list-of-wallets')
export class ListOfWalletsController {
  constructor(private readonly listOfWalletsService: ListOfWalletsService) {}

  @Post()
  create(@Body() createListOfWalletDto: CreateListOfWalletDto) {
    return this.listOfWalletsService.create(createListOfWalletDto);
  }

  @Get()
  findAll() {
    return this.listOfWalletsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listOfWalletsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListOfWalletDto: UpdateListOfWalletDto) {
    return this.listOfWalletsService.update(+id, updateListOfWalletDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listOfWalletsService.remove(+id);
  }
}
