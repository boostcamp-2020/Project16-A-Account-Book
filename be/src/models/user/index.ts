import { Schema, model, Document } from 'mongoose';

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
  profileUrl: {
    type: String,
  },
});

export interface IUserDocument extends Document {
  timezone?: String;
  startOfWeek?: String;
  id?: String;
  password?: String;
  salt?: String;
  nickname: String;
  profileUrl?: String;
}

export const UserModel = model<IUserDocument>('users', UserSchema);
