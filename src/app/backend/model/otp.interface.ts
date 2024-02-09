export interface IOtpSchema{
  email: MongoRequirement<string>
  otp: MongoRequirement<string>
  
}

export interface MongoRequirement<T>{
  type: T,
  required: boolean
}

export interface OtpData {
  email: string;
  otp: string;
}

