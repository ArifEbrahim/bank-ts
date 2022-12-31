import Account from '../../account'

describe('Feature tests', () => {
  test('should allow users to create an empty bank acount', () => { 
    const account = new Account()
    expect(account.getBalance).toBe(0)
   })
})
