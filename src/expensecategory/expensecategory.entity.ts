import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ListOfExpense} from "../list-of-expenses/entities/list-of-expense.entity";
import {User} from "../user/user.entity";

@Entity()
export class expenseCategory extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(()=>User, (user)=> user.categoryName)
    @JoinColumn()
    user: User;

    @Column()
    category:string

}