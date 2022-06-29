import { Injectable } from '@nestjs/common';
import {AddExpenseCategoryDto} from "./dto/add.expensecategory.dto";
import {expenseCategory} from "./expensecategory.entity";
import {User} from "../user/user.entity";

@Injectable()
export class ExpensecategoryService {

    async addCategory(categoryName:string, user:User) {
        const category = new expenseCategory;
        category.categoryName = categoryName;
        category.usersId = user.id;
        await category.save()

        return{
            categoryName: category.categoryName
        }
    }

    async showCategory(user:User) {
        const {id} = user;
        const showCategory = await expenseCategory.find({
            where: {
                usersId: id
            }
        })
        return{
            showCategory
        }

    }

    async removeCategory(user: User, idCategory: string) {
        const {id} = user;
        const findCategory = await expenseCategory.findOne({
            where:{
                id: idCategory
            }
        })
        if(id === findCategory.usersId){
            await findCategory.remove()
            return {
                isSuccess: true
            }
        }
        else {
            return {
                isSuccess: false
            }
        }
    }
}
