import Account from '../../account'

describe('Feature tests', () => {
  let account: Account

  beforeEach(() => {
    account = new Account()
  })

  // As a user,
  // So that I can manage my money,
  // I want to create a bank account.

  test('should allows users to create an empty bank account', () => {
    expect(account.currentBalance).toBe(0)
  })

  // As a user,
  // So that I can add to my balance,
  // I want to be able to make deposits.

  test('should allow users to deposit money into their account', () => {
    account.deposit(100)
    expect(account.currentBalance).toBe(100)
  })

  // As a user,
  // So that I can use my money,
  // I want to be able to make withdrawls.

  test('should allow users to make withdrawls from their account', () => {
    account.deposit(50)
    account.withdraw(25)
    expect(account.currentBalance).toEqual(25)
  })

  // As a user,
  // So that I can track my account activity over time,
  // I want the date of each transaction to be recorded.

  test('should record the date of a transaction', () => {
    account.deposit(50)
    const transaction = account.latestHistory[0]
    expect(transaction.date instanceof Date).toBe(true)
  })

  // As a user,
  // So that I can see my account history,
  // I want to print an account statment.

  // As a user,
  // So that I can see my latest transactions quickly,
  // I want the statement to be in reverse chronological order.

  test('should allow users to print a statement with transactions in reverse chronological order', () => {
    account.deposit(50)
    account.withdraw(25)
    const today = new Date()
    const expectedOutput = `date || credit || debit || balance\n${today.toLocaleDateString()} || || 25.00 || 25.00\n${today.toLocaleDateString()} || 50.00 || || 50.00`
    const result = account.printStatement()
    expect(result).toBe(expectedOutput)
  })
})
