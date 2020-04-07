// your class here
/*




  // >>> Don't forget to use module.exports!
  // What is that? Well, glad you asked.
  // Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/

class VendingMachine {
  constructor(
    balance = 0,
    till = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    }
  ) {
    this.balance = balance;
    this.till = till;
  }

  balance() {
    return this.balance;
  }

  insertCoin(coin) {
    this.balance += coin;
    this.till[coin] += 1;
  }
}

module.exports = VendingMachine;
