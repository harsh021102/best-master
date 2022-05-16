import {
  Box,
  Container,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { Image } from '@chakra-ui/react'

import gaming from './images/console.jpg' 
import "./HomePage.css"
function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <div className="homepage"> 
<>
  <div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
</>
    
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="black"
        w="820px"
        h="100px"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="3xl" >
         
  
  <div class="flux">GameVerse</div>
        
        
        </Text>
      </Box>
      <Box bg="black" w= "150%" h="73%" p={4} borderRadius="lg" borderWidth="1px">
   
        <Tabs isFitted variant="soft-rounded" color="white">
          <TabList mb="1em" >
            <Tab _selected={{ color: 'white', bg:"linear-gradient(to right, #4b6cb7 0%, #182848 51%, #4b6cb7 100%);"}}>
              Log</Tab>
            <Tab _selected={{color: 'white', bg:"linear-gradient(to right, #4b6cb7 0%, #182848 51%, #4b6cb7 100%);" }}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <HStack>
              <Image boxSize='47%' src={gaming} objectFit='cover' alt='Dan Abramov' />
              <Box padding="20px">
                  <Login />
              </Box>
            
              </HStack>
            </TabPanel>
            <TabPanel >
              <HStack>
              <Image boxSize='47%' src={gaming} objectFit='cover' alt='Dan Abramov' />
              <Box padding=' 0px 20px'>
              <Signup />
              </Box>
              </HStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
    </div>
    
  );
}

export default Homepage;