// import * as React from "react";
// // import { ethers } from "ethers";
// import "./App.css";

// export default function App() {
//   const wave = () => {};

//   return (
//     <div className="mainContainer">
//       <div className="dataContainer">
//         <div className="header">👋 Hey there!</div>
//         <div className="bio">
//           My name is Johnson, A web 3 engineer and I create projects that
//           revolutionizes the traditional finance sector through blockchain.
//           That's pretty cool right? Connect your Ethereum wallet and wave at me!
//         </div>{" "}
//         <br />
//         <button className="btn btn--white btn--animated" onClick={wave}>
//           Wave at Me
//         </button>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
  * Implement your connectWallet method here
  */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">
        👋 Hey there!
        </div>

        <div className="bio">
        My name is Johnson, A web 3 engineer and I create projects that
          revolutionizes the traditional finance sector through blockchain.
          That's pretty cool right? Connect your Ethereum wallet and wave at me!
        </div>

        <button className="btn btn--white btn--animated"  onClick={null}>
          Wave at Me
        </button>

        {/*
        * If there is no currentAccount render this button
        */}
        {!currentAccount && (
          <button className="btn btn--white btn--animated"  onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
}

export default App
