import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity{
    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    name:string;

    @Column({unique:true})
    userName:string;

}