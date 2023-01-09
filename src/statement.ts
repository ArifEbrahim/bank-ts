import { Transaction, TransactionType, IStatement } from './types'

class Statement implements IStatement {
  readonly HEADER: string

  constructor() {
    this.HEADER = 'date || credit || debit || balance'
  }

  print(history?: Transaction[]) {
    let displayString = `${this.HEADER}`

    if (!history) return displayString

    history.reverse().forEach(item => {
      const { date, type, amount, balance } = item
      displayString += this.formattedDate(date)
      displayString += this.formattedAmount(type, amount)
      displayString += this.formattedBalance(balance)
    })

    return displayString
  }

  private formattedDate(date: Date) {
    return `\n${date.toLocaleDateString()} ||`
  }

  private formattedAmount(type: TransactionType, amount: number) {
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

export default Statement
