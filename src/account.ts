export default class Account {
  private balance: number
  history: {
    date: Date
    credit: number
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
      credit: amount
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
  }
}
