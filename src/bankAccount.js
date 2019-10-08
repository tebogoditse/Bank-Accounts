class BankAccount {
  constructor(balance, interest, monthlyFee) {
    this.balance = balance;
    this.interest = interest;
    this.monthlyFee = monthlyFee;
  }
  finishMonth() {
    let rate = 1 + (this.interest/100);
    return this.balance = parseInt(rate * this.balance - this.monthlyFee)
  }
  deposit(amount) {
    return this.balance = this.balance + amount
  }
  withdraw(amount) {
    if (amount <= this.balance){
      return this.balance = this.balance - amount;
    }
    else{
      throw new Error("Transaction couldn't be processed");
    }
  }
}

module.exports = BankAccount;

let bank = new BankAccount(100, 12, 10);
console.log(bank.finishMonth());
console.log(bank.withdraw(100));
console.log(bank.deposit(200));
console.warn(bank.finishMonth());
