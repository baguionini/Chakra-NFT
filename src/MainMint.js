import React from "react";
import './MainMint.css';
import './NavBar.css';
import { ethers, BigNumber } from 'ethers';
import ChakraNFT from './ChakraNFT.json';

const chakraNFTAddress = "0x603277d6e3223C25ea9F7193053A95d256023753"

const MainMint = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            const contract = new ethers.Contract(
                chakraNFTAddress,
                ChakraNFT.abi,
                signer
            );

            try {
                const response = await contract.mint(BigNumber.from(1));
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className="MainMint">
            <h2>Minting here</h2>
            {isConnected ? (
                <div>
                    <button class="button-23" onClick={handleMint}>Mint 1 NFT</button>
                </div>
            ) : (
                <p>You must be connected to Mint.</p>
            )}
        </div>
    )
};

export default MainMint;
