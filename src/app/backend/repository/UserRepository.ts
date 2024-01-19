import mongoose, { Schema } from "mongoose";
import type { User } from "@model/user";
const UserSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: {
            createdAt: 'creationTime', // Use `created_at` to store the created date
            updatedAt: 'updateTime', // and `updated_at` to store the last updated date
        },
    }
);

const UserRepository = mongoose.models.User || mongoose.model<User>('User', UserSchema);

export { UserRepository };


