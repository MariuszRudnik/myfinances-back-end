import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
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
        nullable: true,
         //default: () => 'CURRENT_TIMESTAMP'
    })
    dateExpenses: Date

    @Column()
    operations: string;

    //@ManyToOne(()=> ListOfWallet, (wallet)=> wallet.transaction)
    @Column()
    wallet: string

}
