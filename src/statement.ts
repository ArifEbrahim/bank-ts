type transaction = {
  date: Date
  credit: number
  debit: number
  balance: number
}

export default class Statement {
  private HEADER: string

  constructor() {
    this.HEADER = 'date || credit || debit || balance'
  }

  print(history?: transaction[]) {
    if (!history) return this.HEADER
    let displayString = `${this.HEADER}`

    history.forEach(item => {
      const formattedDate = item.date.toLocaleDateString()
      displayString += `\n${formattedDate} ||`

      if (item.credit) {
        const formattedCredit = item.credit.toFixed(2)
        displayString += ` ${formattedCredit} || ||`
      } else if (item.debit) {
        const formattedDebit = item.debit.toFixed(2)
        displayString += ` || ${formattedDebit} ||`
      }

      const formattedBalance = item.balance.toFixed(2)
      displayString += ` ${formattedBalance}`
    })

    return displayString
  }
}
