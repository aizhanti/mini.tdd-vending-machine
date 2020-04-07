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
    expect(machine.selectedRow).to.deep.equal("A");
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith("A")).to.be.true;
  });
});
