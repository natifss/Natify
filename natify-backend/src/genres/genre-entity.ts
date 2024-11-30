import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('genre')
export class Genre{
    @PrimaryGeneratedColumn()
    id: string;

    @Column({length: 60, nullable: false})
    name: string;
}