export interface Transaction {
  date: Date
  credit: number
  debit: number
  balance: number
}

export enum TransactionType {
  Credit,
  Debit
}
