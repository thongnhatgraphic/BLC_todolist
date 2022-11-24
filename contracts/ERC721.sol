// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
 
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";
// import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
// import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "erc721a/contracts/extensions/ERC721AQueryable.sol";

// import "https://github.com/chiru-labs/ERC721A/blob/main/contracts/extensions/ERC721AQueryable.sol";

contract NftErc721 is ERC721AQueryable, Ownable, ERC721Holder {
    // using Counters for Counters.Counter;
    // using Strings for uint256;

    // Counters.Counter public _tokenIdCounter;
    
    constructor() ERC721A("NFT_BAP", "BAP") {}

    function createNft () public onlyOwner {
        _safeMint(msg.sender, 1, '');
    }

}