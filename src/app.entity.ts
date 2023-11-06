import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class coffeeentity {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar' })
    name: string;
  
    @Column({ type: 'varchar'})
    size: string;
  
    @Column({ type: 'varchar' })
    flavour: string;
  
    @Column({ type: 'varchar' })
    price: number;
  
    @Column({ type: 'varchar' })
    strength: string;

    @Column({ type: 'varchar' })
    imageurl: string;


}