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
