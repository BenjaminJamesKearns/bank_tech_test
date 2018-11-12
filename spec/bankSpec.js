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

  it('can view bank statement', function() {
    account.deposit(100)
    expect(account.statement()).toEqual("date || amount || balance \
    12/11/2018 || 100 || 100")
  });

  it('can view balance', function() {
    account.deposit(100)
    expect(account.viewBalance()).toEqual("Balance: 100")
  });

});
