export interface TransactionDBType {
  excludeFromBudget: boolean;
  _id: string;
  client: string;
  date: Date;
  memo?: string;
  method: {
    _id: string;
    title: string;
    __v?: number;
  };
  category: {
    _id: string;
    title: string;
    color: string;
    type: string;
    __v?: number;
  };
  price: number;
}
export interface IDateTransactionObj {
  [date: string]: TransactionDBType[];
}
export interface IMethod {
  _id: string;
  title: string;
  __v?: number;
}

export interface ICategory {
  _id: string;
  title: string;
  color: string;
  type: string;
  __v?: number;
}

export interface IUser {
  _id: string;
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
