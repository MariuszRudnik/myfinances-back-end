import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class expenseCategory extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length: 255,
    })
    categoryName: string;

    @Column({ nullable: true })
    usersId:string
}