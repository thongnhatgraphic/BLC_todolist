const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

let addressOwner, addressOther, todoListContract;
before(async function deployTodoList() {
  const [owner, otherAccount] = await ethers.getSigners();
  addressOwner = owner.address;
  addressOther = otherAccount

  const TodoList = await ethers.getContractFactory("TodoListOfNhat");
  todoListContract = await TodoList.deploy();
})

describe("TodoListOfNhat", function () {
    describe("Contract- Addtodo", function () {
      it("Deploy contract- AddtoDo By Owner", async () => {
      
        const counterCurrent = await todoListContract.counterOfAddress(addressOwner);
        await todoListContract.addTodoItem("This is first Des of Owner");
        const counterAfterAdd = await todoListContract.counterOfAddress(addressOwner);
      
        const arrayOfOwner = await todoListContract.connect(addressOwner).getListTodoOfAddress();
        
        expect(arrayOfOwner).to.be.an("array");
        expect(counterCurrent).to.equal(arrayOfOwner[counterCurrent]._idTodo);
        expect(counterCurrent).to.equal(counterAfterAdd - 1);
      })
      it("Deploy contract- AddtoDo By Other", async () => {
      
        const counterCurrent = await todoListContract.counterOfAddress(addressOther.address);
        await todoListContract.connect(addressOther).addTodoItem("This is first Des of Other");
        const counterAfterAdd = await todoListContract.counterOfAddress(addressOther.address);
      
        const arrayOfOwner = await todoListContract.connect(addressOther).getListTodoOfAddress();
        
        expect(arrayOfOwner).to.be.an("array");
        expect(counterCurrent).to.equal(arrayOfOwner[counterCurrent]._idTodo);
        expect(counterCurrent).to.equal(counterAfterAdd - 1);
      })


      it("Deploy contract- Remove 1 Item", async () => {
        
        // case 2:
        await todoListContract.addTodoItem("This is remove 1");
        await todoListContract.addTodoItem("This is remove 2");

        const idDelete = 1
        await todoListContract.removeTodoItem(idDelete);
        // expect([{a: 1}]).to.not.include({a: 1});
        const arrayTodo = await todoListContract.getListTodoOfAddress();

        const itemDelete = await todoListContract.getTodoOfAddressById(idDelete);
        expect(arrayTodo[idDelete]._idTodo).to.equal(0);

        //Case 3: _idTodo less than length
        const idGreaterLength = 10;
        await expect(todoListContract.removeTodoItem(idGreaterLength)).to.be.revertedWith("Can not delete when not todo avalable");

      })

      it("Deploy contract- edit 1 item", async () => {
        
      })

    })
    

    
    
})