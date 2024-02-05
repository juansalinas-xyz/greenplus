import mongoose,{Schema} from "mongoose";
import { Company } from "@model/user";
import {userTypes} from "@model/userTypesEnum";
import { BaseUserRepository } from "./BaseUserRepository";



const CompanySchema = new Schema<Company>(
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
)
const CompanyRepository = mongoose.models.Company || BaseUserRepository.discriminator<Company>(userTypes.Company,CompanySchema);
export {CompanyRepository};