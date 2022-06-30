import { Test, TestingModule } from '@nestjs/testing';
import { ListOfWalletsService } from './list-of-wallets.service';

describe('ListOfWalletsService', () => {
  let service: ListOfWalletsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListOfWalletsService],
    }).compile();

    service = module.get<ListOfWalletsService>(ListOfWalletsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
