import Statement from '../../statement'

describe('Statement', () => {
  test('should print the header', () => { 
    const statement = new Statement()
    const expectedOutput = 'date || credit || debit || balance'
    expect(statement.print()).toBe(expectedOutput)
   })
})