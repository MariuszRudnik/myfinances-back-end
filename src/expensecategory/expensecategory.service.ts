import { Injectable } from '@nestjs/common';
import {AddExpenseCategoryDto} from "./dto/add.expensecategory.dto";
import {expenseCategory} from "./expensecategory.entity";

@Injectable()
export class ExpensecategoryService {

    async addCategory(categoryName:string):Promise<AddExpenseCategoryDto> {
        const category = new expenseCategory;
        category.categoryName = categoryName;
        await category.save()

        return{
            categoryName: category.categoryName
        }
    }
}
