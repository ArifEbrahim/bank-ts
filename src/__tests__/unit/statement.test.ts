import Statement from '../../statement'

describe('Statement', () => {
  test('should print the header', () => {
    const statement = new Statement()
    const expectedOutput = 'date || credit || debit || balance'
    expect(statement.print()).toBe(expectedOutput)
  })

  test('should print the date', () => {
    const statement = new Statement()
    const mockHistory = [
      {
        date: new Date(' January 14, 2012, 11:00:00')
      }
    ]
    const expectedOutput = 'date || credit || debit || balance\n14/01/2012 ||'
    expect(statement.print(mockHistory)).toBe(expectedOutput)
  })

  test('should print any credits', () => {
    const statement = new Statement()
    const mockHistory = [
      {
        date: new Date(' January 14, 2012, 11:00:00'),
        credit: 100
      }
    ]
    const expectedOutput =
      'date || credit || debit || balance\n14/01/2012 || 100.00 || ||'
    expect(statement.print(mockHistory)).toBe(expectedOutput)
  })

  test('should print any debits', () => {
    const statement = new Statement()
    const mockHistory = [
      {
        date: new Date(' January 14, 2012, 11:00:00'),
        credit: 0,
        debit: 150
      }
    ]
    const expectedOutput =
      'date || credit || debit || balance\n14/01/2012 || || 150.00 ||'
    expect(statement.print(mockHistory)).toBe(expectedOutput)
  })

  test('should print the balance', () => {
    const statement = new Statement()
    const mockHistory = [
      {
        date: new Date(' January 14, 2012, 11:00:00'),
        credit: 0,
        debit: 150,
        balance: 500
      }
    ]
    const expectedOutput =
      'date || credit || debit || balance\n14/01/2012 || || 150.00 || 500.00'
    expect(statement.print(mockHistory)).toBe(expectedOutput)
  })
})
