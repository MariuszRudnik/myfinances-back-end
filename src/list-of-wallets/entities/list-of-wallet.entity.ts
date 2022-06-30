import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Wallet} from "../../wallet/entities/wallet.entity";
import {User} from "../../user/user.entity";

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

    @Column()
    chooseACurrency:number

    @OneToMany(()=> Wallet, (wallet)=> wallet.wallet)
    wallet: Wallet[]

    @ManyToOne(()=> User, (user)=> user.listOfWallet)
    user: User

}
