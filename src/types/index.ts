export interface Transaction {
  date: Date
  type: TransactionType
  amount: number
  balance: number
}

export enum TransactionType {
  CREDIT,
  DEBIT
}

export interface IStatement {
  readonly HEADER: string
  print(history: Transaction[]): string
}