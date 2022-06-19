const hre = require("hardhat");

async function main() {
  const ChakraNFT = await hre.ethers.getContractFactory("ChakraNFT");
  const chakraNFT = await ChakraNFT.deploy();

  await chakraNFT.deployed();

  console.log("ChakraNFT deployed to:", chakraNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
