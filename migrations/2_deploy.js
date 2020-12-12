// migrations/2_deploy.js
const SPHToken = artifacts.require("SPHToken");

module.exports = async function (deployer) {
  await deployer.deploy(SPHToken, 3000000);
};
