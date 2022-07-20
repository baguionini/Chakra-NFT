import React from "react";
import logo from '../../assets/black.png';
import './Image.css'


const Image = () => {

    const openOpenSea = () => {
        window.open('https://testnets.opensea.io/collection/chakra', '_blank', 'noopener,noreferrer');
      };

    return(
        <>
            <img 
                className="Image"
                src={logo}
            />
            <div className="bottom-bar">
                <div className="left">
                    <p>Background:<br/>Black</p>
                </div>
                <div className="middle">
                    <p>Spiral:<br/>#F4EF7D</p>
                </div>
                <div className="right">
                    <button 
                        className="button-opensea" 
                        onClick={openOpenSea}>
                        View on Opensea
                    </button>
                </div>
                
                

            </div>

        </>

    )
}

export default Image