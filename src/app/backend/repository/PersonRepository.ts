import mongoose,{Schema} from "mongoose"
import { Person } from "@model/user";
import { BaseUserRepository } from "./BaseUserRepository";
import { userTypes } from "@model/userTypesEnum";



const PersonSchema = new Schema<Person>(
    {
        firstName:{
            type:String,
            required:[true,'Firstname is mandatory']
        },
        lastName:{
            type:String,
            required:[true,'Lastname is mandatory']
        }
    },
   {
        timestamps:{
            createdAt:'creationTime',
            updatedAt:'updateTime'
        }
    }
    
);

const PersonRepository = mongoose.models.Person || BaseUserRepository.discriminator<Person>(userTypes.Person,PersonSchema);
export {PersonRepository}