import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../user/user.entity";
import {Transaction} from "../../transactions/entities/transaction.entity";

@Entity()
export class ListOfWallet extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    userId: string;

    @Column()
    nameWalled: string;

    @Column()
    openingBalance: number;

    @Column({
        length: 30
    })
    chooseACurrency:string;

    // @OneToMany(()=> Wallet, (wallet)=> wallet.wallet)
    // wallet: Wallet[]

    @OneToMany(()=> Transaction, (transaction) =>  transaction.wallet )
    transaction: Transaction[]

    @ManyToOne(()=> User, (user)=> user.listOfWallet)
    user: User


}
