type transaction = {
  date: Date
  credit?: number
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
    }
    return displayString
  }
}
