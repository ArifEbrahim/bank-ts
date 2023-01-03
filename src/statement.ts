type transaction = {
  date: Date
}

export default class Statement {
  private HEADER: string

  constructor() {
    this.HEADER = 'date || credit || debit || balance'
  }

  print(history?: transaction[]) {
    if (!history) return this.HEADER
    const formattedDate = history[0].date.toLocaleDateString()
    const displayString = `${this.HEADER}\n${formattedDate}`
    return displayString
  }
}
