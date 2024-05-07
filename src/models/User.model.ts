import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    profilePictureUrl: String,
    status: String,
    lastLogin: String,
  },
  {
    timestamps: true,
  },
);

const User = model('User', userSchema);

export default User;
