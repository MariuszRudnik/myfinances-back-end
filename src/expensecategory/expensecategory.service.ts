import { Injectable } from '@nestjs/common';
import {expenseCategory} from "./expensecategory.entity";
import {User} from "../user/user.entity";

@Injectable()
export class ExpensecategoryService {

    async addCategory(categoryName:string, user) {
        const category = new expenseCategory;
        category.category = categoryName;
        category.user = user.id;
        await category.save()
        return{
            categoryName,
        }
    }

    async showCategory(user) {
        const {id} = user;
        const category =  await expenseCategory.find({
            //relations: [ 'user'],
            where: {
                user: {id}
            }
        });
        return{
            category
        }
    }

    async removeCategory(user: User, idCategory: string) {
        const {id} = user;
        const findCategory = await expenseCategory.findOne({
            relations: [ 'user'],
            where:{
                id: idCategory
            }
        });

        if(id === findCategory.user.id){
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
