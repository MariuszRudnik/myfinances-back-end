import {BaseEntity, Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Wallet} from "../../wallet/entities/wallet.entity";
import {expenseCategory} from "../../expensecategory/expensecategory.entity";
import {JoinColumn} from "typeorm/browser";

@Entity()
export class ListOfExpense extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nameExpenses: string;


    @Column()
    price: number;

    @Column({
        default: () => 'CURRENT_TIMESTAMP'
    })
    dateExpenses: Date

    @ManyToOne(()=>Wallet, (idWallet) =>idWallet.expense)
    idWallet: Wallet


}
