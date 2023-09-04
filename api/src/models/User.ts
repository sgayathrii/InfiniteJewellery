import mongoose, { Document } from "mongoose";

export type UserDocument = Document & {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  dateOfBirth: string;
  address: string;
  apartment: string;
  city: string;
  state: string;  
  country: string;
  phone: string;
};

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  dateOfBirth: {
    type: String,
  },
  address: {
    type: String,
  },
  apartment: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },  
  country: {
    type: String,
  },
  phone: {
    type: String,
  },
});

export default mongoose.model<UserDocument>("User", UserSchema);
