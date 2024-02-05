import mongoose,{DiscriminatorOptions, Schema} from "mongoose"
import type { BaseUser } from "@model/user"




const BaseUserSchema = new Schema<BaseUser>(
    {
        name:{
            type:String,
        },
        document:{
            type:String,
        },
        documentNumber:{
            type:String,
        },
        email:{
            type:String,
        },
        phone:{
            type:String,
        }

    },
    {
        discriminatorKey:'userType',
        timestamps:{
            createdAt:'creationTime',
            updatedAt:'updateTime'
        }
    },
    
);

const BaseUserRepository=mongoose.models.BaseUser || mongoose.model<BaseUser>('BaseUser',BaseUserSchema);

export {BaseUserRepository}