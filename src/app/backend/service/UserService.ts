import { BaseUser, User } from "@model/user";
import { dbConnect } from "@lib/dbConnect";
import { UserRepository } from "@repository/UserRepository";
import { PersonRepository } from "@repository/PersonRepository";
import { ProducerRepository } from "@repository/ProducerRepository";
import { CompanyRepository } from "@repository/CompanyRepository";
import { BaseUserRepository, userTypes } from "@repository/BaseUserRepository";


/* Para diferenciar el usuario podriamos desde el front mandar un numer 1:person,2:producer,3:company
    así aquí lo discrimino y uso el repositorio correspondiente en base a ello. O si no puedo hacer
    3 repositorios.
*/
export async function createUser(user:BaseUser, type:number) : Promise<BaseUser>  {
    let createdUser:BaseUser=null;
    try {
            await dbConnect();
        if(type==1){
            createdUser = await PersonRepository.create(user);
        }
        else if(type==2){
            createdUser = await ProducerRepository.create(user);
        }
        else{
            createdUser = await CompanyRepository.create(user);
        }
    
        return createdUser;
    } catch (error) {
        throw new Error(error)
    }
   
    
}



export async function getAllUsers() : Promise<BaseUser[]> {
    try {
        await dbConnect();
        return await BaseUserRepository.find();
    } catch (error) {
        throw new Error(error)
    }
   
}

export async function getAllUsersByType(type:number) : Promise<BaseUser[]>{
   
    let users:BaseUser[] = [];
   
    try {
        await dbConnect();
        if(type===1){
            users = await PersonRepository.find({
                userType:userTypes.Person
            });
        }
        else if(type===2){
            users = await ProducerRepository.find({
                userType:userTypes.Producer
            });
        }
        else{
            users = await CompanyRepository.find({
                userType:userTypes.Company
            });
        }   
        return users;
    } catch (error) {
        throw new Error(error);
    }   
    
}

export async function modifyUser(user:BaseUser,id:string){
    try {
        await dbConnect();
        let result = BaseUserRepository.replaceOne(
            {_id:{$eq:id}},
            user
          );
       return result;
    } catch (error) {
        throw new Error(error);
    }
   
}