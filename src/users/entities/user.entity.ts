import {DeleteDateColumn, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column({nullable: false})
    password: string;

    @Column()
    age: number;

    @Column({unique: true, nullable: false})
    email: string;

    @DeleteDateColumn()
    deletedAt: Date;
}
