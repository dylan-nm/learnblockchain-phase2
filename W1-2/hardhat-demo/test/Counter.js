const { expect } = require("chai");

describe("Counter", function () {
  it("increments counter by 1", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy(0);

    await counter.deployed();

    // Get the initial value of the counter
    const initialValue = await counter.counter();

    // Call the count function
    await counter.count();

    // Get the updated value of the counter
    const updatedValue = await counter.counter();

    // Verify that the counter has been incremented
    expect(updatedValue).to.equal(initialValue.add(1));
  });
});
