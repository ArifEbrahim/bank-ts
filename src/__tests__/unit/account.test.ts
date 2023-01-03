import Account from '../../account'
import Statement from '../../statement'
jest.mock('../../statement')

describe('Account', () => {
  let account: Account
  let mockStatement: Statement

  beforeEach(() => {
    mockStatement = new Statement()
    account = new Account(mockStatement)
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

  describe('History', () => {
    test('should start with an empty history', () => {
      expect(account).toHaveProperty('getHistory')
      const history = account.getHistory()
      expect(history).toEqual([])
    })

    test('should store transactions within the history', () => {
      account.deposit(10)
      const history = account.getHistory()
      expect(history.length).toEqual(1)
    })
  })

  describe('Transaction', () => {
    test('should record the date', () => {
      account.deposit(50)
      const history = account.getHistory()
      expect(history[0].date).toEqual(expect.any(Date))
    })

    test('should record deposits', () => {
      account.deposit(50)
      const history = account.getHistory()
      expect(history[0].credit).toEqual(50)
    })

    test('should record withdrawls', () => {
      account.deposit(50)
      account.withdraw(25)
      const history = account.getHistory()
      expect(history[1].debit).toEqual(25)
    })

    test('should record the balance', () => {
      account.deposit(50)
      const history = account.getHistory()
      expect(history[0].balance).toEqual(50)
    })
  })

  describe('Print Statement', () => {
    test('should print an account statement', () => {
      jest.spyOn(mockStatement, 'print')
      account.printStatement()
      expect(mockStatement.print).toHaveBeenCalledWith([])
    })
  })
})
