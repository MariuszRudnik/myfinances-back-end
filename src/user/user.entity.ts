import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {expenseCategory} from "../expensecategory/expensecategory.entity";
import {ListOfWallet} from "../list-of-wallets/entities/list-of-wallet.entity";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length: 255,
    })
    email: string;

    @Column()
    pwdHash:string

    @Column({
        nullable: true,
        default: null,
    })
    currentTokenId :string | null

    @OneToMany(()=> expenseCategory, (categoryName) => categoryName.user)
    categoryName:expenseCategory[]

    @OneToMany(() => ListOfWallet, (listOfWallet) => listOfWallet.user)
    listOfWallet: ListOfWallet[]
}