import { Test, TestingModule } from '@nestjs/testing';
import { ListOfWalletsController } from './list-of-wallets.controller';
import { ListOfWalletsService } from './list-of-wallets.service';

describe('ListOfWalletsController', () => {
  let controller: ListOfWalletsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListOfWalletsController],
      providers: [ListOfWalletsService],
    }).compile();

    controller = module.get<ListOfWalletsController>(ListOfWalletsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
