import Account from '../../account'

describe('Create Account', () => {
  test('should allows users to create an empty bank account', () => {
    const account = new Account()
    expect(account.getBalance()).toBe(0)
  })
})
