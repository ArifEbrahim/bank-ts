export default class Statement {
  private HEADER: string

  constructor() {
    this.HEADER = 'date || credit || debit || balance'
  }

  print() {
    return this.HEADER
  }
}
