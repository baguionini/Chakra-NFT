const hre = require("hardhat");

const dotenv = require("dotenv");
dotenv.config();

async function main() {
  const ChakraNFT = await hre.ethers.getContractFactory("ChakraNFT");
  const chakraNFT = await ChakraNFT.deploy(process.env.BASE_URI);

  await chakraNFT.deployed();

  console.log("ChakraNFT deployed to:", chakraNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
