// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Marketplace {
    using Counters for Counters.Counter;
    Counters.Counter _index;

    enum Status {
        selling,
        sold,
        canceled
    }
    ERC20 tokenErc20;
    ERC721 tokenErc721;
    constructor(ERC20 _erc20, ERC721 _erc721) {
        tokenErc20 = _erc20;
        tokenErc721 = _erc721;
    }

    struct itemList {
        uint256 token_id;
        uint256 price;
        address seller;
        Status status;
    }
    
    mapping(address => itemList[]) public itemsListByAddress;
    mapping(address => uint256) public counterOfAddress;
    mapping(uint256 => uint256) public IndexOfTokenIdByAddress;

    itemList[] public allItemsList;
    mapping(uint256 => uint256) public IdOfAllItemList;

    function getListItemSellingOfAddress() external view returns ( itemList[] memory){
        return itemsListByAddress[msg.sender];
    }

    function getAllListingOfMarket() external view returns (itemList[] memory) {
        return allItemsList;
    }

    function listtingItem (uint256 _tokenId, uint256 price) external {
        tokenErc721.transferFrom(msg.sender, address(this), _tokenId);

        uint256 index = _index.current();
        
        itemList memory Item = itemList(_tokenId, price, msg.sender, Status.selling);
        itemsListByAddress[msg.sender].push(Item);

        allItemsList.push(Item);
        IdOfAllItemList[_tokenId] = index;
        IndexOfTokenIdByAddress[_tokenId] = counterOfAddress[msg.sender];
        
        counterOfAddress[msg.sender] += 1;
        _index.increment();
    }

    function itemBuy (uint256 _tokenId) external view returns (itemList memory) {
        return allItemsList[IdOfAllItemList[_tokenId]];
    }
    function buyItem (uint256 _tokenId) external {
        itemList storage ItemBuy = allItemsList[IdOfAllItemList[_tokenId]];
        ItemBuy.status = Status.sold;
        tokenErc20.transferFrom(msg.sender, ItemBuy.seller, ItemBuy.price);
        tokenErc721.transferFrom(address(this), msg.sender, _tokenId);
        itemList[] storage arraySeller =  itemsListByAddress[ItemBuy.seller];
        delete arraySeller[IndexOfTokenIdByAddress[_tokenId]];
        delete allItemsList[IdOfAllItemList[_tokenId]];
    }
}
