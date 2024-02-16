import mongoose, {Schema} from "mongoose"
import type { Person, Producer, User } from "@model/user"
import { Company, UserType } from '@model/user';

const UserSchema = new Schema<User>(
  {
    document: {
      type: String,
      required: true
    },
    documentNumber: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      reuired: true
    },
    type: {
      type: String,
      required: true
    }
  },
  {
    _id: true,
    discriminatorKey: 'type',
    timestamps: { createdAt: 'timestamp', updatedAt: false }
  }

);

type UserDocument = User & Document;

const UserRepository = mongoose.models.User || mongoose.model<UserDocument>('User', UserSchema);

const PersonSchema = UserRepository.discriminator(UserType.PERSON,
  new Schema<Person>(
    {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true }
    },
    {
      _id: true,
      discriminatorKey: 'type',
      timestamps: { createdAt: 'timestamp', updatedAt: false }
    }
  ));

const ProducerSchema = UserRepository.discriminator(UserType.PRODUCER,
  new Schema<Producer>({
    name: { type: String, required: true },
    address: { type: String, required: true },
  }, {
    _id: true,
    discriminatorKey: 'type',
    timestamps: { createdAt: 'timestamp', updatedAt: false }
  }));

const CompanySchema = UserRepository.discriminator(UserType.COMPANY,
  new Schema<Company>({
    name: { type: String, required: true },
    address: { type: String, required: true },
  }, {
    _id: true,
    discriminatorKey: 'type',
    timestamps: { createdAt: 'timestamp', updatedAt: false }
  }));

export { UserRepository };