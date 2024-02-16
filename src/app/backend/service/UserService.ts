import { connectToDB } from "@lib/dbConnect";
import { UserRepository} from "@repository/UserRepository";
import { User } from "@model/user";

export async function createUser(user: User): Promise<User> {
    try {
        await connectToDB(); 
        return await UserRepository.create(user);
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
}

export async function getAllUsers() : Promise<User[]> {
    await connectToDB();
    return await UserRepository.find();
}


export async function findUserById(id:string) {
    await connectToDB();
    const user = await UserRepository.findOne({_id:{$eq:id}});
    if(user)
        return user;
    else
        throw new Error(`Threre's no user with id: ${id}`)
}

export async function modifyUser(user:User,id:string) {
    const filter={_id:{$eq:id}}
    try {
        await connectToDB();
        let storedUser = await UserRepository.findOne(filter)
        console.log(typeof storedUser)
        console.log(storedUser)
        if(storedUser)
            return await UserRepository.replaceOne(filter,user);
        else
            throw new Error(`There's no user with id: ${id}`)    
    } catch (error) {
        throw new Error(error.message);
    }  
}
