import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class Blog { 
    @PrimaryGeneratedColumn()
    id: number;

   @Column({ 
    type: 'varchar',
    nullable: false,
   })
   title: string;

   @Column({
    type: 'longtext'
   }) 
   content: string;

   @Column({
    nullable: false,
    unique: true
   })
   slug: string;

   @ManyToOne(() => User, user => user.blog)
   users: User

  }