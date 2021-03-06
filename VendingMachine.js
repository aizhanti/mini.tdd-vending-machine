// your class here
/*




  // >>> Don't forget to use module.exports!
  // What is that? Well, glad you asked.
  // Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/

class VendingMachine {
  constructor(
    bal = 0,
    till = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    },
    selectedRow,
    selectedColumn
  ) {
    this.bal = bal;
    this.till = till;
    this.selectedRow = selectedRow;
    this.selectedColumn = selectedColumn;
  }

  // get balance() {
  //   for (const i in this.till) {
  //     this.balance += this.till[coin] * coin;
  //   }
  //   return this.balance;
  // }

  get balance() {
    return this.bal;
  }

  set balance(balance) {
    this.bal = balance;
  }

  insertCoin(coin) {
    this.balance += coin;
    this.till[coin] += 1;
  }

  inventory(inv) {
    this.inventory = inv;
  }

  pressButton(arg) {
    if (typeof arg === "string") {
      switch (arg) {
        case "A":
          this.selectedRow = 0;
          break;
        case "B":
          this.selectedRow = 1;
          break;
        case "C":
          this.selectedRow = 2;
          break;
        case "D":
          this.selectedRow = 3;
          break;
      }
    } else if (typeof arg === "number") {
      this.selectedColumn = arg - 1;
    }
    console.log(this.selectedRow, this.selectedColumn);
  }

  getItem() {
    if (this.selectedRow !== undefined && this.selectedColumn !== undefined) {
      const item = this.inventory[this.selectedRow][this.selectedColumn];
      if (item.price <= this.balance && item.count > 0) {
        item["count"] -= 1;
        console.log("Here is your " + item["name"]);
        return this.balance - item.price;
      } else if (item.price > this.balance) {
        console.log("No enough money");
        return this.balance;
      } else if (item.count === 0) {
        console.log("Sold-out!");
        return this.balance;
      }
    }
  }
}

module.exports = VendingMachine;
