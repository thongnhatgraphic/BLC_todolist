const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TodoListOfNhat", function () {
    async function deployTodoList() {
      const [owner, otherAccount] = await ethers.getSigners();
      const addressOwner = owner.address;

      const TodoList = await ethers.getContractFactory("TodoListOfNhat");
      const todoListContract = await TodoList.deploy();

      return {todoListContract, addressOwner}
    }
// it("First deploy contract", async () => {
//   const { addressOwner, todoListContract } = await loadFixture(deployTodoList)
//   const a = await todoListContract.counterOfAddress(addressOwner);
//   console.log("a", a);

//   await todoListContract.addTodoItem("Description 1");
//   const b = await todoListContract.counterOfAddress(addressOwner);
//   console.log("b", b);

//   await todoListContract.addTodoItem("Description 2");
//   const c = await todoListContract.counterOfAddress(addressOwner);

//   const dCompare = await todoListContract._listTodoOfAddress(addressOwner)[counter];
//   // console.log("c", c.toNumber());

//   // expect(c).to.equal(d)
// })


})