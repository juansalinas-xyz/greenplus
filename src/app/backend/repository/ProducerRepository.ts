import mongoose,{Schema} from "mongoose"
import { Producer } from "@model/user";
import { BaseUserRepository,} from "./BaseUserRepository";
import { userTypes } from "@model/userTypesEnum";



const ProducerSchema= new Schema<Producer>(
    {
        address:{
            type:String,
            required:[true,'Address is mandatory']
        }
    },
    {
        timestamps:{
            createdAt:'creationTime',
            updatedAt:'updateTime'
        }
    }
);

const ProducerRepository = mongoose.models.Producer || BaseUserRepository.discriminator<Producer>(userTypes.Producer,ProducerSchema);
export {ProducerRepository};