import React from "react";
import { Box, Button, Center, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import Twitter from './assets/assets/social-media-icons/twitter_pixel_logo_icon_181924.png'


const NavBar = ({ accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }
    return (
        <Flex justify="space-between" align="center" >
            <Flex justify="center" align="center" width="40%" >
                <Link href="https://twitter.com/the_smart_ape">
                    <Image src={Twitter} boxSize="70px" align="center" marginTop="50px" />
                </Link>
            </Flex>


            {isConnected ? (
                <Box marginRight="150px" marginTop="50px">Connected</Box>
            ) : (
                <Button backgroundColor="#D6517D" 
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="0 15px"
                marginTop="50px"
                onClick={connectAccount}
                marginRight="150px">Connect</Button>
            )}
        </Flex>
    )
};

export default NavBar;