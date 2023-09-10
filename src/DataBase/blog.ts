import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

 }