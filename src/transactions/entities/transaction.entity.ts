import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ListOfWallet} from "../../list-of-wallets/entities/list-of-wallet.entity";

@Entity()
export class Transaction extends BaseEntity  {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nameTransactions: string;

    @Column({
        nullable: true
    })
    category: string;

    @Column()
    price: number;

    @Column({
        default: () => 'CURRENT_TIMESTAMP'
    })
    dateExpenses: Date


    @ManyToOne(()=> ListOfWallet, (wallet)=> wallet.transaction)
    wallet: ListOfWallet

}
