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

    test('should not allow negative deposits', () => {
      expect(() => {
        account.deposit(-10)
      }).toThrow('Negative numbers are not allowed, please try again.')
    })
  })

  describe('Withdraw', () => {
    beforeEach(() => {
      account.deposit(50)
    })

    test('should allow users to make a withdrawl', () => {
      expect(account).toHaveProperty('withdraw')
      account.withdraw(25)
      expect(account.getBalance()).toBe(25)
    })

    test('should not allow negative balance', () => {
      expect(() => {
        account.withdraw(60)
      }).toThrow('You have insufficient funds, your balance is 50.')
    })

    test('should not allow negative withdrawls', () => {
      expect(() => {
        account.withdraw(-10)
      }).toThrow('Negative numbers are not allowed, please try again.')
    })
  })

  describe('transaction', () => {
    test('the account starts with an empty history', () => {
      expect(account.history).toEqual([])
    })
    test('it records the date', () => {
      account.deposit(50);
      expect(account.history[0].date).toEqual(expect.any(Date));
    });
  })
})
