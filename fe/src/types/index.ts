export interface TransactionDBType {
  excludeFromBudget: boolean;
  id: number;
  client: string;
  date: Date;
  memo?: string;
  price: number;
  classification: string;
  methodId: number;
  categoryId: number;
  accountId: number;
}
export interface IDateTransactionObj {
  [date: string]: TransactionDBType[];
}
export interface IMethod {
  id: string;
  title: string;
}

export interface ICategory {
  id: string;
  title: string;
  color: string;
  type: string;
}

export interface IUser {
  timezone: string;
  startOfWeek: string;
  id: string;
  nickname: string;
  profileUrl: string;
  __v: number;
}

export interface ICheckCategory extends ICategory {
  checked: boolean;
}
export interface ICheckMethod extends IMethod {
  checked: boolean;
}
export interface IFilterCategory {
  disabled: boolean;
  list: Array<string>;
}

export interface ICategoryStatistics extends Omit<ICategory, '__v' | 'type'> {
  totalPrice: number;
  percent: number;
}

export interface ITotalPrice {
  income: number;
  expense: number;
}

export interface IStatistics {
  totalPrice: ITotalPrice;
  incomeCategories: ICategoryStatistics[];
  expenseCategories: ICategoryStatistics[];
}

export interface IDateTotalprice {
  date: string;
  totalPrice: number;
}

export interface IMessage {
  sender: string;
  message: string;
}

export interface ISearch {
  onClick: any;
  onChange: any;
}
