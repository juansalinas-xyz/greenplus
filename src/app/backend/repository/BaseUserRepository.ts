import mongoose,{Schema} from "mongoose"
import type { BaseUser } from "@model/user"



const baseOptions = {
	discriminatorKey: "type",
}

 const enum userTypes {
    Person = "person",
    Company = "company",
    Producer = "producer"

}
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
        timestamps:{
            createdAt:'creationTime',
            updatedAt:'updateTime'
        }
    }
);

const BaseUserRepository=mongoose.models.BaseUser || mongoose.model<BaseUser>('BaseUser',BaseUserSchema);

export {BaseUserRepository, userTypes}