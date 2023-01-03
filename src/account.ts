import { Transaction } from './types'
import Statement from './statement'

export default class Account {
  private balance: number
  private history: Transaction[]
  private statement: Statement

  constructor(statement = new Statement()) {
    this.balance = 0
    this.history = []
    this.statement = statement
  }

  getBalance() {
    return this.balance
  }

  getHistory() {
    return this.history
  }

  deposit(amount: number) {
    if (amount < 0) {
      throw new Error('Negative numbers are not allowed, please try again.')
    }
    this.balance += amount
    this.history.push(this.createTransaction(amount, undefined))
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
    this.history.push(this.createTransaction(undefined, amount))
  }

  private createTransaction(credit = 0, debit = 0) {
    return {
      date: new Date(),
      credit,
      debit,
      balance: this.balance
    }
  }

  printStatement() {
    return this.statement.print(this.history)
  }
}
