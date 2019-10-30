const DaiMock = artifacts.require("mocks/DaiMock.sol");

module.exports = function(deployer) {
  deployer.deploy(DaiMock);
};
