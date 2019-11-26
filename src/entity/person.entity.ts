import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    lastname: string;

    @Column()
    firstname: string;

    @Column()
    generation: string; 
}