import mongoose,{Schema} from "mongoose"
import { Person } from "@model/user";
import { BaseUserRepository, baseOptions } from "./BaseUserRepository";


const PersonSchema=new Schema<Person>(
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
    },
    
);

const PersonRepository = mongoose.models.Person || BaseUserRepository.discriminator<Person>('Person',PersonSchema,'userType'/*discrination key*/);
export {PersonRepository}