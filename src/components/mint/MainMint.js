import React from "react";
import './MainMint.css';
import { ethers, BigNumber } from 'ethers';
import ChakraContract from './ChakraNFT.json';

const MainMint = ({ accounts }) => {
    const isConnected = Boolean(accounts[0]);
    
    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            const contract = new ethers.Contract(
                ChakraContract.address,
                ChakraContract.abi,
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
            {isConnected ? (
                <div>
                    <button class="button-mint" onClick={handleMint}>Mint a Chakra</button>
                </div>
            ) : (
                <p>You must be connected to Mint.</p>
            )}
        </div>
    )
};

export default MainMint;
