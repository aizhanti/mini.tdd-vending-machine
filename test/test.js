const VendingMachine = require("../VendingMachine");
const { expect } = require("chai");

describe("vending machine", () => {
  it("should accept valid coins", () => {
    // Setup
    const machine = new VendingMachine();

    // Exercise
    machine.insertCoin(500);

    // Assert
    expect(machine.till).to.deep.equal({
      10: 0,
      50: 0,
      100: 0,
      500: 1,
    });
    expect(machine.balance).to.equal(500); // Use an ES6 getter
  });

  it("Given that no row is selected, when a row is selected the letter should be saved and printed to the console", () => {
    // Setup
    const machine = new VendingMachine();

    // Exercise
    machine.pressButton("A");

    // Assert
    expect(machine.selectedRow).to.deep.equal(0);
  });

  it("Given that a row is selected, when there is sufficient balance and inventory and a column is selected,then the row and column should be logged to the console", () => {
    // Setup
    const machine = new VendingMachine();

    const appleJuice = { name: `Apple Juice`, price: 350, count: 5 };
    const orangeJuice = { name: `Orange Juice`, price: 350, count: 5 };
    const coffee = { name: "Tully's", price: 250, count: 7 };
    const hotChoco = { name: "Cocoa", price: 250, count: 7 };

    const inventoryExm = [
      [appleJuice, coffee, hotChoco, orangeJuice],
      [appleJuice, coffee, hotChoco, orangeJuice],
      [appleJuice, coffee, hotChoco, orangeJuice],
      [appleJuice, coffee, hotChoco, orangeJuice],
    ];
    machine.inventory(inventoryExm);

    // Exercise
    machine.pressButton("A");
    machine.pressButton(1);
    machine.insertCoin(500);

    // Assert
    expect(machine.selectedRow).to.deep.equal(0);
    expect(machine.selectedColumn).to.deep.equal(0);
    expect(machine.getItem()).to.be.equal(150);
    expect(machine.inventory[0][0]["count"]).to.be.equal(4);
  });

  it("Given that a row and column are selected, when there is no inventory at that column, then an error message should be logged", () => {
    // Setup
    const machine = new VendingMachine();

    const appleJuice = { name: `Apple Juice`, price: 350, count: 0 };
    const orangeJuice = { name: `Orange Juice`, price: 350, count: 5 };
    const coffee = { name: "Tully's", price: 250, count: 7 };
    const hotChoco = { name: "Cocoa", price: 250, count: 7 };

    const inventoryExm = [
      [appleJuice, coffee, hotChoco, orangeJuice],
      [appleJuice, coffee, hotChoco, orangeJuice],
      [appleJuice, coffee, hotChoco, orangeJuice],
      [appleJuice, coffee, hotChoco, orangeJuice],
    ];
    machine.inventory(inventoryExm);

    // Exercise
    machine.pressButton("A");
    machine.pressButton(1);
    machine.insertCoin(500);

    // Assert
    expect(machine.selectedRow).to.deep.equal(0);
    expect(machine.selectedColumn).to.deep.equal(0);
    expect(machine.getItem()).to.be.equal(500);
    expect(machine.inventory[0][0]["count"]).to.be.equal(0);
  });

  it("Given that a row and column are selected, when the balance is insufficient to purchase the selected item, then an error message should be printed", () => {
    // Setup
    const machine = new VendingMachine();

    const appleJuice = { name: `Apple Juice`, price: 350, count: 5 };
    const orangeJuice = { name: `Orange Juice`, price: 350, count: 5 };
    const coffee = { name: "Tully's", price: 250, count: 7 };
    const hotChoco = { name: "Cocoa", price: 250, count: 7 };

    const inventoryExm = [
      [appleJuice, coffee, hotChoco, orangeJuice],
      [appleJuice, coffee, hotChoco, orangeJuice],
      [appleJuice, coffee, hotChoco, orangeJuice],
      [appleJuice, coffee, hotChoco, orangeJuice],
    ];
    machine.inventory(inventoryExm);

    // Exercise
    machine.pressButton("A");
    machine.pressButton(1);
    machine.insertCoin(50);

    // Assert
    expect(machine.selectedRow).to.deep.equal(0);
    expect(machine.selectedColumn).to.deep.equal(0);
    expect(machine.getItem()).to.be.equal(50);
    expect(machine.inventory[0][0]["count"]).to.be.equal(5);
  });
});
