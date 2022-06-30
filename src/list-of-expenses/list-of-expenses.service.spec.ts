import { Test, TestingModule } from '@nestjs/testing';
import { ListOfExpensesService } from './list-of-expenses.service';

describe('ListOfExpensesService', () => {
  let service: ListOfExpensesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListOfExpensesService],
    }).compile();

    service = module.get<ListOfExpensesService>(ListOfExpensesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
