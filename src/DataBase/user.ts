import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Blog } from "./blog";

@Entity()
export class User { 
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        unique: true,
    })
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    address: string;
    
    @OneToMany(() => Blog, blog => blog.users)
    blog: Blog[];  
 }