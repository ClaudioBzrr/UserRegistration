import {PrimaryColumn, Column,CreateDateColumn, Entity} from 'typeorm'
import {v4 as idGenerator} from 'uuid'

@Entity("users")
class User{

    @PrimaryColumn()
    id:string;

    @Column()
    email:string;

    @Column()
    password:string;
    
    @Column()
    name:string;
    
    @CreateDateColumn()
    created_at:Date;


    constructor(){
        if(!this.id){
            this.id = idGenerator();
        }
    }

}


export {User}