import { Schema, model, Document, Types } from 'mongoose';

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
  profileUrl: {
    type: String,
  },
  invitations: [
    {
      accounts: {
        type: Types.ObjectId,
        ref: 'accounts',
      },
      host: String,
    },
  ],
});

export interface IInvitation {
  host: string;
  accounts: string;
}
export interface IUserDocument extends Document {
  timezone?: String;
  startOfWeek?: String;
  id?: String;
  password?: String;
  salt?: String;
  nickname: String;
  profileUrl?: String;
  invitations?: Array<IInvitation>;
}

export const UserModel = model<IUserDocument>('users', UserSchema);
