import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

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
    currentTokenID:string | null
}