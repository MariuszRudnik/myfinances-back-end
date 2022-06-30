import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ListOfWallet} from "../../list-of-wallets/entities/list-of-wallet.entity";
import {ListOfExpense} from "../../list-of-expenses/entities/list-of-expense.entity";

@Entity()
export class Wallet extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(()=> ListOfWallet, (wallet) => wallet.wallet)
    wallet: ListOfWallet

    @OneToMany(()=> ListOfExpense, (expense) => expense.idWallet  )
    expense: ListOfExpense[]
}
