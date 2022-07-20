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
            {isConnected ? 
            <button 
                class="connect-button-true" 
                disabled={true}
            >
                Connected
            </button>
            : 
            <button 
                class="connect-button-false" 
                onClick={connectAccount}
                style={{cursor: 'pointer'}}
            >
            Connect to Metamask
            </button>
            }
        </div>
    )
};

export default NavBar;