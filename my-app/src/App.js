import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Button,
  Flex,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import withAction from './navbar';
import { extendTheme } from '@chakra-ui/react'
import Nav from './navbar';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })


function App() {

  return (
    <>
      <ChakraProvider theme={theme}>

        <Box px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Flex alignItems={'center'} justifyContent={'space-between'} >
              <Box w="100%" h="auto">
                <Text
                  bgGradient="linear(to-l, #7928CA, #FF0080)"
                  bgClip="text"
                  fontSize="2xl"
                  fontWeight="extrabold"
                >
                  NFTrade.
                </Text>
              </Box>
            </Flex>
            <Flex alignItems={'center'} justifyContent={'space-between'} >
              <Box>Top Collection</Box>
            </Flex>

            <Flex alignItems={'center'} justifyContent={'space-between'} >
              <Box>Gaming</Box>
            </Flex>

            <Flex alignItems={'center'} justifyContent={'space-between'} >
              <Box>Utility</Box>
            </Flex>

            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7}>

                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Button>
                      <Flex alignItems={'center'} justifyContent={'space-between'} >
                        <Box w="100%" h="auto">
                          <Text
                            bgGradient="linear(to-l, #7928CA, #FF0080)"
                            bgClip="text"
                            fontSize="1xl"
                      
                          >
                          CONNECT
                          </Text>
                        </Box>
                      </Flex>
                    </Button>

                  </MenuButton>
                  <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar
                        size={'2xl'}
                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                      />
                    </Center>
                    <br />
                    <Center>
                      <Text textAlign="center" fontSize="10">
                      <sm>0x65570edd44577d4C7f75c67856e3A1c61697fAf8</sm>
                      </Text>
            
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your NFTs</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
              <ColorModeSwitcher justifySelf="flex-end" />

            </Flex>
          </Flex>
        </Box>

        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={10}>

            <VStack spacing={10}>
              <Box border='1px' borderRadius="md" display="grid" gridAutoFlow="row dense" w="80%" h="180px" bgGradient="linear(to-t, blue.200, pink.500)">

                <Text p="1" w="auto" h="15" fontSize="3xl" fontWeight="extrabold" >
                  NFT MARKETPLACE
                </Text>
                <Text fontSize="1xl">
                  Everything you need at the same place
                </Text>

                  <Box textAlign="center" justifyContent="space-between">
                  <Button mr="10">
                    CREATE
                  </Button>
                  <Button>
                    DISCOVER
                  </Button>
                  </Box>
  
              </Box>
            </VStack>
          </Grid>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
