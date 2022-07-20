import React from "react";
import MainMint from "../mint/MainMint";
import './Description.css';

const Description = ({accounts, setAccounts}) => {
    return(
        <div className="title">
            <h1 className="nft-title">Chakra <br/> Metaverse&trade;</h1>
            <p>An NFT collection of 32 generative art built using Samila. <br/>
                Inspired by sinusoidal functions. <br/>
                Minting is free of charge.
            </p>
            <MainMint accounts={accounts} setAccounts={setAccounts}/>
        </div>
    )
}

export default Description;