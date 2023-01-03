type transaction = {
  date: Date
  credit?: number
  debit?: number
  balance?: number
}

export default class Statement {
  private HEADER: string

  constructor() {
    this.HEADER = 'date || credit || debit || balance'
  }

  print(history?: transaction[]) {
    if (!history) return this.HEADER
    let displayString = `${this.HEADER}\n`
    const formattedDate = history[0].date.toLocaleDateString()
    displayString += `${formattedDate} ||`
    if (history[0].credit) {
      const formattedCredit = history[0].credit.toFixed(2)
      displayString += ` ${formattedCredit} || ||`
    } else if (history[0].debit) {
      const formattedDebit = history[0].debit.toFixed(2)
      displayString += ` || ${formattedDebit} ||`
    }
    if (history[0].balance) {
      const formattedBalance = history[0].balance.toFixed(2)
      displayString += ` ${formattedBalance}`
    }
    return displayString
  }
}
