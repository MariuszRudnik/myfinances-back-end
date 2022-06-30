import { Test, TestingModule } from '@nestjs/testing';
import { ListOfExpensesController } from './list-of-expenses.controller';
import { ListOfExpensesService } from './list-of-expenses.service';

describe('ListOfExpensesController', () => {
  let controller: ListOfExpensesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListOfExpensesController],
      providers: [ListOfExpensesService],
    }).compile();

    controller = module.get<ListOfExpensesController>(ListOfExpensesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
