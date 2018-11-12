function bankAccount() {
  this.balance = 0
}

bankAccount.prototype.deposit = function(amount) {
  this.balance += amount
}

bankAccount.prototype.withdraw = function(amount) {
  this.balance -= amount
}
