import Account from '../../account'

describe('Account', () => { 
  test('should have a method that returns the balance', () => { 
    const account = new Account()
    expect(account).toHaveProperty('getBalance')
   })

   test('should start with a balance of 0', () => { 
    const account = new Account()
    expect(account.getBalance()).toBe(0)
   })
 })