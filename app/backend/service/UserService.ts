import { User } from "@model/user";
import { dbConnect } from '@lib/dbConnect'
import { UserRepository } from '@repository/UserRepository';

export async function createUser(user:User) : Promise<User>  {
    await dbConnect();
    return await UserRepository.create(user);
}

export async function getAllUsers() : Promise<Array<User>> {
    await dbConnect();
    return await UserRepository.find();
}