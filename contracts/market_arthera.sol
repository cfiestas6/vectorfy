import "./ISubscriptionOwner.sol";
import "@openzeppelin/contracts/utils/introspection/ERC165.sol";


// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract vectorfyAr is ISubscriptionOwner, ERC165 {

    address public backendAddress;
    
    struct Offer {
        address payable provider;
        string modelName;
        uint256 pricePerCredit;  // Price per credit in Wei
        uint256 escrowBalance;  // Escrow balance in Wei
        bool releaseAuthorized;
    }

    struct CreditBalance {
        address payable owner;
        uint256 offerId;
        uint256 credits;
    }

    Offer[] public offers;
    mapping(uint256 => mapping(address => CreditBalance)) public creditBalances;  // Mapping of offerId to address to CreditBalance
    
    //index evetns
    event CreditsUsed(uint256 indexed offerId, address indexed user, uint256 creditAmount);
    event OfferCreated(uint256 indexed offerId, address indexed provider, string modelName, uint256 pricePerCredit);
    event CreditsPurchased(uint256 indexed offerId, address indexed requester, uint256 amount);
    event FundsReleased(uint256 indexed offerId, uint256 amount);
    event AuthorizedRelease(uint256 indexed offerId);
    event FundsSlashed(uint256 indexed offerId, uint256 amount);

    modifier onlyBackend() {
        require(msg.sender == backendAddress, "Not authorized");
        _;
    }

    constructor(address _backendAddress) {
        require(_backendAddress != address(0), "Invalid backend address");
        backendAddress = _backendAddress;
    }

    function createOffer(string memory modelName, uint256 pricePerCredit) public returns (uint256) {
        uint256 offerId = offers.length;
        offers.push(Offer({
            provider: payable(msg.sender),
            modelName: modelName,
            pricePerCredit: pricePerCredit,
            escrowBalance: 0,
            releaseAuthorized: false
        }));
        emit OfferCreated(offerId, msg.sender, modelName, pricePerCredit);
        return offerId;
    }

    function purchaseCredits(uint256 offerId, uint256 amount) public payable {
        require(offerId < offers.length, "Invalid offer ID");
        Offer storage offer = offers[offerId];
        uint256 cost = amount * offer.pricePerCredit;
        require(msg.value >= cost, "Insufficient Ether sent");
    
        offer.escrowBalance += msg.value;
        CreditBalance storage balance = creditBalances[offerId][msg.sender];
        balance.owner = payable(msg.sender);
        balance.offerId = offerId;
        balance.credits += amount;
    }


    function releaseFunds(uint256 offerId) public {
        require(offerId < offers.length, "Invalid offer ID");
        Offer storage offer = offers[offerId];
        require(msg.sender == offer.provider, "Only the provider can release funds");
        require(offer.releaseAuthorized, "Release not authorized");
        require(offer.escrowBalance > 0, "No funds to release");

        uint256 amount = offer.escrowBalance;
        offer.escrowBalance = 0;
        offer.releaseAuthorized = false;
        offer.provider.transfer(amount);

        emit FundsReleased(offerId, amount);
    }

    function backendAuthorizeRelease(uint256 offerId) public onlyBackend {
        require(offerId < offers.length, "Invalid offer ID");
        Offer storage offer = offers[offerId];
        offer.releaseAuthorized = true;
        emit AuthorizedRelease(offerId);
    }

    function useCredits(uint256 offerId, uint256 creditAmount) public {
        require(offerId < offers.length, "Invalid offer ID");
        CreditBalance storage balance = creditBalances[offerId][msg.sender];
        require(balance.owner == msg.sender, "Not the owner of the credits");
        require(balance.credits >= creditAmount, "Insufficient credits");
        balance.credits -= creditAmount;
        emit CreditsUsed(offerId, msg.sender, creditAmount);
    }

    function slashFunds(uint256 offerId, uint256 amount) public onlyBackend {
        require(offerId < offers.length, "Invalid offer ID");
        Offer storage offer = offers[offerId];
        require(offer.escrowBalance >= amount, "Insufficient funds in escrow");

        offer.escrowBalance -= amount;

        emit FundsSlashed(offerId, amount);
    }

    function getSubscriptionOwner() external view returns (address) {
        // the owner of the subscription must be an EOA
        // Replace this with the account created in Step 1
        return backendAddress;
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC165) returns (bool) {
        return interfaceId == type(ISubscriptionOwner).interfaceId || super.supportsInterface(interfaceId);
    }
}