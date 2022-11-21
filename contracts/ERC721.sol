// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
 
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";


contract NftErc721 is ERC721, ERC721Holder, Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter public _tokenIdCounter;
    
    constructor() ERC721("NftCars", "CAR") {}

    string public baseURI = "";

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721: invalid token ID");

        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString())) : "";
    }

    function test () public view returns (uint ) {
        return _tokenIdCounter.current();
    }
    function createNft () public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        if ( tokenId == 0 ) {
            tokenId = 1;
            _tokenIdCounter.increment();
        } else {
            tokenId += 1;
        _tokenIdCounter.increment();
        }
        _safeMint(msg.sender, tokenId);
        tokenURI( tokenId);
    }

}