pragma ^0.5.12;

import 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol';
import 'openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol';

contract MockDai is ERC20, ERC20Detailed {
  constructor() 
    public 
    ERC20Detailed('Dai Stablecoin v1', 'DAI', 18) {} 

  function faucet(uint amount) external {
    _mint(msg.sender, amount);
  }
}
