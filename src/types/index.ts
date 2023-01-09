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

export interface IAccount {
  deposit: (amount: number) => void
  withdraw: (amount: number) => void
  printStatement: () => string
  currentBalance: number
  latestHistory: Transaction[]
}
