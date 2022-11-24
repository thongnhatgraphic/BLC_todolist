// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
 
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "erc721a/contracts/extensions/ERC721AQueryable.sol";
import "erc721a/contracts/ERC721A.sol";

contract NftErc721 is ERC721AQueryable, Ownable, ERC721Holder {
    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter public _tokenIdCounter;
    
    constructor() ERC721A("NftCars", "CAR") {}

    function createNft () public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        if ( tokenId == 0 ) {
            tokenId = 1;
            _tokenIdCounter.increment();
        } else {
            tokenId += 1;
        _tokenIdCounter.increment();
        }
        _safeMint(msg.sender, 1, '');
        // tokenURI( tokenId);
    }

}