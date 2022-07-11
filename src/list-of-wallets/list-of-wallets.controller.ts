import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { ListOfWalletsService } from './list-of-wallets.service';
import { CreateListOfWalletDto } from './dto/create-list-of-wallet.dto';
import { UpdateListOfWalletDto } from './dto/update-list-of-wallet.dto';
import {AuthGuard} from "@nestjs/passport";
import {UserObj} from "../decoratois/userobj.decorator";
import {User} from "../user/user.entity";

@Controller('list-of-wallets')
export class ListOfWalletsController {
  constructor(private readonly listOfWalletsService: ListOfWalletsService) {}

  @Post('/')
  @UseGuards(AuthGuard('jwt'))
  create(
      @Body() createListOfWalletDto: CreateListOfWalletDto,
      @UserObj() user: User,
  ) {
    return this.listOfWalletsService.create(createListOfWalletDto, user);
  }

  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  findAll(
      @UserObj() user: User,
      @Param('wallet') wallet: string
  ) {
    return this.listOfWalletsService.findAll(user);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(
      @UserObj() user: User,
      @Param('id') id: string
  ) {
    return this.listOfWalletsService.findOne( id , user);
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
