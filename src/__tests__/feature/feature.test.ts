import Account from '../../account'

describe('Feature tests', () => {
  // As a user,
  // So that I can manage my money,
  // I want to create a bank account.

  test('should allows users to create an empty bank account', () => {
    const account = new Account()
    expect(account.getBalance()).toBe(0)
  })

  // As a user,
  // So that I can add to my balance,
  // I want to be able to make deposits.

  test('should allow users to deposit money into their account', () => {
    const account = new Account()
    account.deposit(100)
    expect(account.getBalance()).toBe(100)
  })

  // As a user,
  // So that I can use my money,
  // I want to be able to make withdrawls.

  test('users can make withdrawls', () => {
    const account = new Account()
    account.deposit(50)
    account.withdraw(25)
    expect(account.getBalance()).toEqual(25)
  })
})
