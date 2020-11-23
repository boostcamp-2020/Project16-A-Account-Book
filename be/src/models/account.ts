import { Schema, Types, model, Document } from 'mongoose';

const AccountSchema = new Schema({
  transactions: [
    {
      type: Types.ObjectId,
      ref: 'transaction',
    },
  ],
  categories: [
    {
      type: Types.ObjectId,
      ref: 'category',
    },
  ],
  methods: [
    {
      type: Types.ObjectId,
      ref: 'method',
    },
  ],
});

export interface Account extends Document {
  transactions?: [String];
  categories?: [String];
  methods?: [String];
}

export const AccountModel = model<Account>('accounts', AccountSchema);
