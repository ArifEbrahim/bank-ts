import { Transaction, TransactionType } from './types'
import Statement from './statement'

export default class Account {
  constructor(
    private statement: Statement = new Statement(),
    private balance: number = 0,
    private history: Transaction[] = []
  ) {}

  get currentBalance() {
    return this.balance
  }

  get latestHistory() {
    return this.history
  }

  deposit(amount: number) {
    if (amount < 0) {
      throw new Error('Negative numbers are not allowed, please try again.')
    }
    this.balance += amount
    this.addToHistory(TransactionType.CREDIT, amount)
  }

  withdraw(amount: number) {
    if (amount > this.balance) {
      throw new Error(
        `You have insufficient funds, your balance is ${this.balance}.`
      )
    } else if (amount < 0) {
      throw new Error('Negative numbers are not allowed, please try again.')
    }
    this.balance -= amount
    this.addToHistory(TransactionType.DEBIT, amount)
  }

  private createTransaction(type: TransactionType, amount: number) {
    return {
      date: new Date(),
      type,
      amount,
      balance: this.balance
    }
  }

  printStatement() {
    return this.statement.print(this.history)
  }

  private addToHistory(type: TransactionType, amount: number) {
    if (type === TransactionType.CREDIT) {
      this.history.push(this.createTransaction(TransactionType.CREDIT, amount))
    } else {
      this.history.push(this.createTransaction(TransactionType.DEBIT, amount))
    }
  }
}
