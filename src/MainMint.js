import { BigNumber } from '@ethersproject/bignumber';
//import { ethers, BigNumber } from 'ethers';
import {useState} from 'react';
import NFT from './NFT.json'
import Web3 from "web3";
import { Box, Button, Center, Flex, Input, Text, Image } from "@chakra-ui/react";
import ape1 from './assets/apes/1.png'
import ape2 from './assets/apes/2.png'
import ape3 from './assets/apes/3.png'
import ape4 from './assets/apes/4.png'
import ape5 from './assets/apes/5.png'


const ethers = require("ethers")
const web3 = new Web3(window.ethereum);


const NFTAddress = "0x81D23EA10116b67c9bf0A3744eA0a3C4Ea34a485"


const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            // const provider = new ethers.providers.Web3Provider(window.ethereum);
            // const signer = provider.getSigner();
            // const contract = new ethers.Contract(
            //     NFTAddress,
            //     NFT.abi,
            //     signer
            // );
            const accounts = await web3.eth.getAccounts();
            const val = await web3.utils.toWei(mintAmount*0.0035, 'ether')
            const minter = new web3.eth.Contract(NFT.abi, NFTAddress)

        try {
            // const response = await contract.mint(BigNumber.from(mintAmount));
            // console.log('response: ', response)
            await minter.methods.mint(accounts[0], mintAmount).send({
                from: accounts[0],
                value: val
              });
        } catch (err) {
            console.log("error", err)
        }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 4444) return;
        setMintAmount(mintAmount + 1);
    };

    const handleInputChange = (event) => {
        const value = parseInt(event.target.value);
        setMintAmount(value);
    };

    return(
        <Flex justify="center" align="center" height="50vh" paddingBottom="150px" marginTop="100px" >
            <Box width="1500px">
                <div>
                    <Text fontSize="48px" textShadow="0 5px #000000">The Smart Ape Collection</Text>
                    <Text 
                    fontSize="30px"
                    letterSpacing="-5.5%"
                    fontFamily="VT323"
                    textShadow="0 5px #000000">
                        The Smart Ape Collection: 4444 Smart Apes created for educational purpose. Grab one and be part of The Smart Ape community.</Text>
                </div>

            {isConnected ? (
                <div>
                    <Flex align="center" justify="center">
                        <Button backgroundColor="#D6517D" 
                            borderRadius="5px"
                            boxShadow="0px 2px 2px 1px #0F0F0F"
                            color="white"
                            cursor="pointer"
                            fontFamily="inherit"
                            padding="15px"
                            margin="0 15px"
                            marginTop="50px"
                            onClick={handleDecrement}>-</Button>
                        {/* <input type="number" value={mintAmount} /> */}
                        <Input 
                            type="number" 
                            value={mintAmount} 
                            onChange={handleInputChange}
                            fontFamily="inherit"
                            width="100px"
                            height="40px"
                            textAlign="center"
                            paddingLeft="19px"
                            marginTop="50px" />
                        <Button backgroundColor="#D6517D" 
                            borderRadius="5px"
                            boxShadow="0px 2px 2px 1px #0F0F0F"
                            color="white"
                            cursor="pointer"
                            fontFamily="inherit"
                            padding="15px"
                            margin="0 15px"
                            marginTop="50px"
                            onClick={handleIncrement}>+</Button>
                    </Flex>
                    <Button backgroundColor="#D6517D" 
                            borderRadius="5px"
                            boxShadow="0px 2px 2px 1px #0F0F0F"
                            color="white"
                            cursor="pointer"
                            fontFamily="inherit"
                            padding="15px"
                            margin="0 15px"
                            marginTop="50px"
                            onClick={handleMint}>Mint Now</Button>
                </div>
            ) : (
                <div>
                    <p>You must be connected to mint.</p>
                    <br />
                </div>
                
            )}
            <div>
                <Image src={ape1} boxSize="250px" />
                <Image src={ape2} boxSize="250px" />
                <Image src={ape3} boxSize="250px" />
                <Image src={ape4} boxSize="250px" />
                <Image src={ape5} boxSize="250px" />
            </div>
            </Box>   
                    
        </Flex>
    );
 };

 export default MainMint;