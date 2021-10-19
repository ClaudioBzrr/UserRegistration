import { Repository, EntityRepository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)
class UserRepo extends Repository<User>{

}

export {UserRepo}