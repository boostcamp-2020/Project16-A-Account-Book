import { Schema, Types, model, Document } from 'mongoose';

const AccountSchema = new Schema({
  transactions: [
    {
      type: Types.ObjectId,
      ref: 'transactions',
    },
  ],
  categories: [
    {
      type: Types.ObjectId,
      ref: 'categories',
    },
  ],
  methods: [
    {
      type: Types.ObjectId,
      ref: 'methods',
    },
  ],
});

export interface Account extends Document {
  transactions?: [String];
  categories?: [String];
  methods?: [String];
}

export const AccountModel = model<Account>('accounts', AccountSchema);
