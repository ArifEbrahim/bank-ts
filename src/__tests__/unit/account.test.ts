import Account from '../../account'

describe('Account', () => {
  let account: Account

  beforeEach(() => {
    account = new Account()
  })

  test('should have a method that returns the balance', () => {
    expect(account).toHaveProperty('getBalance')
  })

  test('should start with a balance of 0', () => {
    expect(account.getBalance()).toBe(0)
  })

  describe('Deposit', () => {
    test('should allow users to make a depost', () => {
      expect(account).toHaveProperty('deposit')
      account.deposit(50)
      expect(account.getBalance()).toBe(50)
    })
  })

  describe('Withdraw', () => {
    test('should allow users to make a withdrawl', () => {
      expect(account).toHaveProperty('withdraw')
      account.deposit(100)
      account.withdraw(25)
      expect(account.getBalance()).toBe(75)
    })
  })
})
