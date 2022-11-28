// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const env = require("dotenv")

async function main() {
  // const Todo = await hre.ethers.getContractFactory("TodoListOfNhat");
  // const Contract = await Todo.deploy();

  // await Contract.deployed();

  // console.log(
  //   `Lock with 1 ETH and unlock timestamp  deployed to ${Contract.address}`
  // );

  // const NFT721 = await hre.ethers.getContractFactory("NftErc721");
  // const Contract = await NFT721.deploy();

  // await Contract.deployed();

  // console.log(
  //   `Lock with 1 ETH and unlock timestamp  deployed to ${Contract.address}`
  // );

  // const Erc20 = await hre.ethers.getContractFactory("Erc20");
  // const Contract = await Erc20.deploy();

  // await Contract.deployed();

  // console.log(
  //   ` ERC20 deployed to ${Contract.address}`
  // );

  const Market = await hre.ethers.getContractFactory("Marketplace");
  const Contract = await Market.deploy("0x8AdaA05e81b1227740128e5C92Ed994e168DDb4A", "0xB06E58dbDb9cf91946e551b50418c29fECb6Fa02");

  await Contract.deployed();

  console.log(
    `Lock with 1 ETH and unlock timestamp  deployed to ${Contract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
