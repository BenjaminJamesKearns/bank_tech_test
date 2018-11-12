describe('bank account', function() {

  var account

  beforeEach(function() {
    account = new bankAccount();
  });

  it('can deposit money', function() {
    account.deposit(100)
    expect(account.balance).toEqual(100)
  });

  it('can withdraw money', function() {
    account.deposit(101)
    account.withdraw(100)
    expect(account.balance).toEqual(1)
  });
});
