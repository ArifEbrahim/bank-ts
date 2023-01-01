export default class Account {
  private balance: number
  history: {
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

  deposit(amount: number) {
    if (amount < 0) {
      throw new Error('Negative numbers are not allowed, please try again.')
    }
    this.balance += amount
    this.history.push({
      date: new Date(),
      credit: amount,
      debit: 0,
      balance: this.balance
    })
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
    this.history.push({
      date: new Date(),
      credit: 0,
      debit: amount,
      balance: this.balance
    })
  }
}
