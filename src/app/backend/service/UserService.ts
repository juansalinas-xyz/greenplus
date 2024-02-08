import { BaseUser, User } from "@model/user";
import { dbConnect } from "@lib/dbConnect";
import { PersonRepository } from "@repository/PersonRepository";
import { ProducerRepository } from "@repository/ProducerRepository";
import { CompanyRepository } from "@repository/CompanyRepository";
import { BaseUserRepository } from "@repository/BaseUserRepository";
import { userTypes } from "@model/userTypesEnum";



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
        switch(type){
            case 1:
                users = await PersonRepository.find({
                    userType:{$eq:userTypes.Person}
                });
            break;
            case 2:
                users = await ProducerRepository.find({
                    userType:{$eq:userTypes.Producer}
                });
            break;
            case 3:
                users = await CompanyRepository.find({
                    userType:{$eq:userTypes.Company}
                });
            break;
            default:
                throw new Error ('Invalid userType, it must be between 1 and 2')
        }
           
        
        
            
         
        return users;
    } catch (error) {
        throw new Error(error);
    }   
    
}

export async function modifyUser(user:BaseUser,id:string){
    console.log('In service: id received: '+id)
    try {
        await dbConnect();
        let storedUser = BaseUserRepository.findOne({
            id:{$eq:id}
        })
        if(storedUser==null)
            throw new Error(`There's no user with id: ${id}`)
        else    
            return BaseUserRepository.updateOne({
                id:{$eq:id},
                user
        });
    } catch (error) {
        throw new Error(error.message);
    }
   
}