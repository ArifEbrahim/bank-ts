export default class Account {
  private balance: number

  constructor() {
    this.balance = 0
  }

  getBalance() {
    return this.balance
  }

  deposit(amount: number) {
    this.balance += amount
  }

  withdraw(amount: number) {
    this.balance -= amount
  }
}
