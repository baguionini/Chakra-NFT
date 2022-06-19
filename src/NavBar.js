import React from "react";
import './NavBar.css';

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return(
        <div className="NavBar">
            {isConnected ? (
                <p>Connected</p>
            ) : (
                <button class="button-23" onClick={connectAccount}>Connect Metamask</button>
            )}
        </div>
    )
};

export default NavBar;