import Statement from '../../statement'

describe('Statement', () => {
  let statement: Statement

  const mockCreditTransaction = {
    date: new Date(' January 14, 2012, 11:00:00'),
    credit: 100,
    debit: 0,
    balance: 500
  }

  const mockDebitTransaction = {
    date: new Date(' January 14, 2012, 11:00:00'),
    credit: 0,
    debit: 100,
    balance: 500
  }

  beforeEach(() => {
    statement = new Statement()
  })

  test('should print the header', () => {
    const expectedOutput = 'date || credit || debit || balance'
    expect(statement.print()).toBe(expectedOutput)
  })

  describe('for one transaction', () => {
    test('should print a credit transaction', () => {
      const mockHistory = [mockCreditTransaction]
      const expectedOutput =
        'date || credit || debit || balance\n14/01/2012 || 100.00 || || 500.00'
      expect(statement.print(mockHistory)).toBe(expectedOutput)
    })

    test('should print a debit transaction', () => {
      const mockHistory = [mockDebitTransaction]
      const expectedOutput =
        'date || credit || debit || balance\n14/01/2012 || || 100.00 || 500.00'
      expect(statement.print(mockHistory)).toBe(expectedOutput)
    })
  })

  describe('for multiple transaction', () => {
    test('should print correctly formatted transactions in reverse chronological order', () => {
      const mockHistory = [mockCreditTransaction, mockDebitTransaction]
      const expectedOutput =
        'date || credit || debit || balance\n14/01/2012 || || 100.00 || 500.00\n14/01/2012 || 100.00 || || 500.00'
      expect(statement.print(mockHistory)).toBe(expectedOutput)
    })
  })
})
