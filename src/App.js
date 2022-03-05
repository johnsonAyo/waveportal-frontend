import * as React from "react";
import { ethers } from "ethers";
import "./App.css";

export default function App() {
  const wave = () => {};

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">👋 Hey there!</div>
        <div className="bio">
          My name is Johnson, A web 3 engineer and I create projects that
          revolutionizes the traditional finance sector through blockchain.
          That's pretty cool right? Connect your Ethereum wallet and wave at me!
        </div>{" "}
        <br />
        <button className="btn btn--white btn--animated" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
