import Transaction from '../../transaction'

describe('Transaction', () => {
  let transaction: Transaction

  test('should record the date', () => {
    transaction = new Transaction()
    expect(transaction.date).toEqual(expect.any(Date))
  })
  test('should record deposits', () => {
    transaction = new Transaction(50, undefined)
    expect(transaction.credit).toEqual(50)
  })
  test('should record withdrawls', () => {
    transaction = new Transaction(undefined, 50)
    expect(transaction.debit).toEqual(50)
  })
  test('should record the balance', () => {
    transaction = new Transaction(undefined, undefined, 50);
    expect(transaction.balance).toEqual(50);
  });
})
