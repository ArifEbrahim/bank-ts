export default class Account {
  private balance: number
  private history: {
    date: Date
    credit: number
    debit: number
    balance: number
  }[]

  constructor() {
    this.balance = 0
    this.history = []
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

  createTransaction(credit = 0, debit = 0) {
    return {
      date: new Date(),
      credit,
      debit,
      balance: this.balance
    }
  }
}
