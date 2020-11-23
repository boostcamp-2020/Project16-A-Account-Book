import { Schema, Types, model, Document } from 'mongoose';

const UserSchema = new Schema({
  timezone: {
    type: String,
    default: 'Asia/Seoul',
  },
  startOfWeek: {
    type: String,
    default: 'sunday',
  },
  id: {
    type: String,
  },
  password: {
    type: String,
  },
  salt: {
    type: String,
  },
  accounts: [
    {
      type: Types.ObjectId,
      required: true,
      ref: 'accounts',
    },
  ],
});

export interface User extends Document {
  accounts: [Types.ObjectId];
  timezone?: String;
  startOfWeek?: String;
  id?: String;
  password?: String;
  salt?: String;
}

export const UserModel = model<User>('users', UserSchema);
