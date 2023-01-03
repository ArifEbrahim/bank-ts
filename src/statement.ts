import { Transaction } from './types'

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
      displayString += this.formattedCreditOrDebit(item.credit, item.debit)
      displayString += this.formattedBalance(item.balance)
    })

    return displayString
  }

  private formattedDate(date: Date) {
    return `\n${date.toLocaleDateString()} ||`
  }

  private formattedCreditOrDebit(credit: number, debit: number) {
    return credit
      ? ` ${this.formatNum(credit)} || ||`
      : ` || ${this.formatNum(debit)} ||`
  }

  private formattedBalance(balance: number) {
    return ` ${this.formatNum(balance)}`
  }

  private formatNum(value: number) {
    return value.toFixed(2)
  }
}
