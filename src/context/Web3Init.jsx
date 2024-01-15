import React from "react";
import { createContext } from "react";
import { useEffect, useState } from "react";
import Web3 from "web3";
import contractAbi from "../contract/buyCourseABI.json";

export const Web3InitContext = createContext();

export default function Web3InitProvider({ children }) {
   const [web3, setWeb3] = useState(null);
   const [contract, setContract] = useState(null);
   const [contractValue, setContractValue] = useState("");
   const [userAddress, setUserAddress] = useState("");

   //    useEffect(() => {
   //       initWeb3();
   //    }, []);

   const connectWallet = async () => {
      if (window.ethereum) {
         try {
            // Request Account Access
            await window.ethereum.enable();

            const web3Instance = new Web3(window.ethereum);
            setWeb3(web3Instance);

            // Get user account
            const accounts = web3Instance.eth.getAccounts();
            const account = accounts[0];
            setUserAddress(account);

            console.log(account); // check account

            // check connected wallet chainId
            const chainId = await web3Instance.eth.getChainId();
            console.log(chainId);
         } catch (error) {
            console.error(error);
         }
      } else {
         alert("Install Metamask");
      }
   };

   return (
      <Web3InitContext.Provider value={{ connectWallet, web3, contract }}>
         {children}
      </Web3InitContext.Provider>
   );
}

// import React, { useState } from "react";
// import Web3 from "web3";

// const Web3InitProvider = () => {
//    const [selectedAccount, setSelectedAccount] = useState(null);

//    const connectWallet = async () => {
//       if (window.ethereum) {
//          try {
//             // Request account access
//             await window.ethereum.enable();

//             // Create a Web3 instance
//             const web3 = new Web3(window.ethereum);

//             // Get the selected account
//             const accounts = await web3.eth.getAccounts();
//             const account = accounts[0];

//             setSelectedAccount(account);

//             console.log("Connected to Wallet");
//             console.log("Selected Account:", account);

//             const chainId = await web3.eth.getChainId();
//             console.log(chainId);

//             // Now you can use the `web3` instance to interact with the blockchain using the connected account
//             // web3.eth.getBlock("latest").then(console.log);
//          } catch (error) {
//             console.error(
//                "User denied account access or other error occurred:",
//                error
//             );
//          }
//       } else {
//          console.log("Web3 or a compatible wallet is not installed");
//       }
//    };

//    return (
//       <div>
//          <button onClick={connectWallet}>Connect Wallet</button>
//          {selectedAccount && <p>Connected Account: {selectedAccount}</p>}
//       </div>
//    );
// };

// export default Web3InitProvider;
