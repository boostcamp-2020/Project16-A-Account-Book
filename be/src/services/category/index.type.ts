export interface ITotalPrice {
  income: number;
  expense: number;
}

export interface ICategoryStatistics {
  _id: string;
  color: string;
  title: string;
  percent: number;
}

export interface IStatistics {
  totalPrice: ITotalPrice;
  incomeCategories: ICategoryStatistics[];
  expenseCategories: ICategoryStatistics[];
}
