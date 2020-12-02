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

export interface ICheckCategory extends ICategory {
  checked: boolean;
}
export interface ICheckMethod extends IMethod {
  checked: boolean;
}
export interface IFilterCategory {
  disabled: boolean;
  list: ICheckCategory[];
}
