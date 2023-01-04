import { Transaction } from './types'
import { TransactionType } from './types'

export default class Statement {
  private HEADER: string

  constructor() {
    this.HEADER = 'date || credit || debit || balance'
  }

  print(history?: Transaction[]) {
    let displayString = `${this.HEADER}`

    if (!history) return displayString

    history.reverse().forEach(item => {
      displayString += this.formattedDate(item.date)
      displayString += this.formattedCreditOrDebit(item.type, item.amount)
      displayString += this.formattedBalance(item.balance)
    })

    return displayString
  }

  private formattedDate(date: Date) {
    return `\n${date.toLocaleDateString()} ||`
  }

  private formattedCreditOrDebit(type: TransactionType, amount: number) {
    return type === TransactionType.CREDIT
      ? ` ${this.formatNum(amount)} || ||`
      : ` || ${this.formatNum(amount)} ||`
  }

  private formattedBalance(balance: number) {
    return ` ${this.formatNum(balance)}`
  }

  private formatNum(value: number) {
    return value.toFixed(2)
  }
}
