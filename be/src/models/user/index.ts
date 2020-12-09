import { Schema, Types, model, Document } from 'mongoose';

export const UserSchema = new Schema({
  timezone: {
    type: String,
    default: 'Asia/Seoul',
  },
  startOfWeek: {
    type: String,
    default: 'sunday',
  },
  nickname: {
    type: String,
    required: true,
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

export interface IUserDocument extends Document {
  accounts: Types.ObjectId[];
  timezone?: String;
  startOfWeek?: String;
  id?: String;
  password?: String;
  salt?: String;
  nickname: String;
}

export const UserModel = model<IUserDocument>('users', UserSchema);
