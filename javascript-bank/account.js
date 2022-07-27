/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var $newTransaction = new Transaction('deposit', amount);
    this.transactions.push($newTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var $newTransaction = new Transaction('withdrawal', amount);
    this.transactions.push($newTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  } else {
    var totalDeposits = 0;
    var totalWithdraw = 0;
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'deposit') {
        totalDeposits += this.transactions[i].amount;
      } else if (this.transactions[i].type === 'withdrawal') {
        totalWithdraw += this.transactions[i].amount;
      }
    }
    return totalDeposits - totalWithdraw;
  }
};
