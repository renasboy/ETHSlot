pragma solidity ^0.4.14;

contract ETHSlot {
    bytes32 public name = 'ETHSlot';
    address public owner;
    uint256 public max_fee;
    uint256 public create_block;
    uint8 public last_result_slot1;
    uint8 public last_result_slot2;
    uint8 public last_result_slot3;
    bytes1 private block_pointer;
    bytes1 private byte_pointer;

    event Balance(uint256 _balance);
    event Play(address indexed _sender, uint8 _result_slot1, uint8 _result_slot2, uint8 _result_slot3, bool _winner, uint256 _time);
    event Withdraw(address indexed _sender, uint256 _amount, uint256 _time);
    event Destroy();

    function ETHSlot() public payable {
        owner = msg.sender;
        create_block = block.number; 
        block_pointer = 0xff;
        max_fee = msg.value / 4;
    }

    modifier isOwner() {
        require(msg.sender == owner);
        _;
    }

    modifier isPaid() {
        require(msg.value > 0 && msg.value <= max_fee);
        _;
    }

    modifier isDirect() {
        require(tx.origin == msg.sender);
        _;
    }

    function play() public payable isDirect isPaid returns (bool) {
        if (tx.origin != msg.sender) {
            return true;
        }
        // get result block hash
        bytes32 block_hash = block.blockhash(block.number - uint8(block_pointer));
        // get result block byte
        bytes1 result1  = block_hash[uint8(byte_pointer) % 32];
        bytes1 result2  = block_hash[(1 + uint8(byte_pointer)) % 32];
        bytes1 result3  = block_hash[(2 + uint8(byte_pointer)) % 32];
        // cast result to uint8
        last_result_slot1 = uint8(result1) % 8 + 1;
        last_result_slot2 = uint8(result2) % 8 + 1;
        last_result_slot3 = uint8(result3) % 8 + 1;

        // set new pointers for new play
        block_pointer = block_hash[31];
        if (block_pointer == 0x00) {
            block_pointer = 0xff;
        }
        byte_pointer = block_hash[0];

        bool winner = false;
        // check for winner, ZERO is HOUSE
        if (last_result_slot1 == last_result_slot2 && last_result_slot2 == last_result_slot3) {
            winner = true;
            // there is a winner, calculate prize
            uint256 prize = msg.value * 2;
            uint256 credit = msg.value + prize;
            if (!msg.sender.send(credit)) {
                revert();
            }
        }
        max_fee = this.balance / 4;
        Balance(this.balance);
        Play(msg.sender, last_result_slot1, last_result_slot2, last_result_slot3, winner, now);
        return true;
    }

    function withdraw(uint256 _credit) public isOwner returns (bool) {
        if (!owner.send(_credit)) {
            revert();
        }
        Withdraw(msg.sender, _credit, now);
        max_fee = this.balance / 4;
        return true;
    }

    function destruct() public isOwner {
        Destroy();
        selfdestruct(owner);
    }

    function () public payable {
        max_fee = this.balance / 4;
        Balance(this.balance);
    }
}
