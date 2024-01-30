import mongoose,{Schema} from "mongoose"
import { Producer } from "@model/user";
import { BaseUserRepository, baseOptions } from "./BaseUserRepository";



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

const ProducerRepository = mongoose.models.Producer || BaseUserRepository.discriminator<Producer>('Producer',ProducerSchema,'userType');
export {ProducerRepository};