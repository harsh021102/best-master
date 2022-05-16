import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { Box, Text,HStack } from "@chakra-ui/layout";
import './SideDrawer.css'
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Tooltip } from "@chakra-ui/tooltip";
import { BellIcon, ChevronDownIcon,SearchIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/toast";
import ChatLoading from "../ChatLoading";
import { Spinner } from "@chakra-ui/spinner";
import ProfileModal from "./ProfileModal";
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";
import { getSender } from "../../config/ChatLogics";
import UserListItem from "../UserAvatar/UserListItem";
import { ChatState } from "../../Context/ChatProvider";
import styled from 'styled-components'
import { BiUser } from "react-icons/bi";
import { IoLogoGameControllerB } from "react-icons/io";
import {MdChatBubble,MdVideoCameraBack,MdMusicNote } from "react-icons/md";
import {Link} from "react-router-dom";

function SideDrawer() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const {
    setSelectedChat,
    user,
    notification,
    setNotification,
    chats,
    setChats,
  } = ChatState();

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "Please Enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }

    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(`/api/user?search=${search}`, config);

      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Search Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const accessChat = async (userId) => {
    console.log(userId);

    try {
      setLoadingChat(true);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(`/api/chat`, { userId }, config);

      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
      setSelectedChat(data);
      setLoadingChat(false);
      onClose();
    } catch (error) {
      toast({
        title: "Error fetching the chat",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  return (
    <>

     
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="hsl(233, 47%, 13%);"
        w="100%"
        p="10px 20px"
      >
         <Text fontSize="xl" padding="0px 40px 0px 0px" >
           
  
  <div class="fl">GameVerse</div>
          
        
        </Text>
        {/* <Tooltip label="Search Users to chat" hasArrow placement="bottom-end" color="black">  */}
          <Button  onClick={onOpen} colorScheme="black" variant="solid"  border='2px'
  borderColor='navy'>
            {/* <i className="fas fa-search" style="color:white;"></i> */}
            <SearchIcon color="white"/>
            <Text d={{ base: "none", md: "flex" }} px={4} color="white">
              Search User
            </Text>
          </Button>
         {/* </Tooltip> */}
        

        <div className="sidebar__icon__container">
          <div className="sidebar__ic">
           <Link to="/dashboard"><GameButton><GamepadAnimation size="35" /></GameButton></Link>
            <UserButton>
              <UserAlt size="29"/>
              </UserButton>
            <ChatButton><ChatBubble size='30'/></ChatButton>
    
            <StreamButton><Stream size='30'/></StreamButton>
            <MusicButton><Music size='30'/></MusicButton>
          </div>
        </div>

        <div>
          <Menu>
            <MenuButton p={1}>
              <NotificationBadge
                count={notification.length}
                effect={Effect.SCALE}
              />
              <BellIcon fontSize="3xl" m={1} />
            </MenuButton>
            <MenuList pl={2}>
              {!notification.length && "No New Messages"}
              {notification.map((notif) => (
                <MenuItem
                  key={notif._id}
                  onClick={() => {
                    setSelectedChat(notif.chat);
                    setNotification(notification.filter((n) => n !== notif));
                  }}
                >
                  {notif.chat.isGroupChat
                    ? `New Message in ${notif.chat.chatName}`
                    : `New Message from ${getSender(user, notif.chat.users)}`}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
           <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}  colorScheme="linear-gradient(to right, #000428 0%, #004e92 51%, #000428 100%);">
              <HStack>
              <Avatar
                size="sm"
                cursor="pointer"
                name={user?.name}
                src={user?.pic}
              />
              <Box>
              {user?.name}
              </Box>
              </HStack>
            </MenuButton>
            <MenuList colorScheme="black">
              <ProfileModal user={user}>
                <MenuItem colorScheme="black">My Profile</MenuItem>{" "}
              </ProfileModal>
              <MenuDivider />
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen} backgroundColor="black">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" color="white" backgroundColor="black">Search Users</DrawerHeader>
          <DrawerBody backgroundColor="black">
            <Box d="flex" pb={2} color="black">
              <Input
                placeholder="Search by name or email"
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                color="white"
              />
              <Button onClick={handleSearch}>Go</Button>
            </Box>
            {loading ? (
              <ChatLoading />
            ) : 
            
              searchResult?.map((user) => (
                <UserListItem
                  key={user._id}
                  user={user}
                  handleFunction={() => accessChat(user._id)}
                />
              )
              )}
            {loadingChat && <Spinner ml="auto" d="flex" />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
const GamepadAnimation = styled(IoLogoGameControllerB)`
    /* from{
        filter: hue-rotate(0deg);
    }
    to{
        filter: hue-rotate(360deg);
    } */
`
const GameButton = styled.button`
 
  border-radius: 50px ;
  background: hsl(244, 38%, 16%);
  color: hsla(0, 0%, 100%, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 3px solid hsl(244, 38%, 16%);
  box-shadow: 2px 2px 2px #00000080,
                10px 10px 12px #00000080,
                inset 2px 2px 12px #00000080,
                inset 2px 2px 12px #00000080,
                inset 2px 2px 12px #00000080,
                inset 2px 2px 12px #00000080;
                /* text-shadow:0px 0px 50px #0072ff,
                0px 0px 100px #0072ff,
                0px 0px 150px #0072ff,
                0px 0px 200px #0072ff;
  animation: animate 3s linear; */
  &:hover{
    transform: scale(1.1);
    border-radius: 10px;
    transition: 0.3s ease-in-out;
    color:hsl(0, 0%, 100%);
  }
`
const UserButton = styled.button`
 
  border-radius: 10em;
  background: hsl(244, 38%, 16%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: hsla(0, 0%, 100%, 0.75);
  border: 3px solid hsl(244, 38%, 16%);
  box-shadow: 2px 2px 2px #00000080,
                10px 10px 12px #00000080,
                inset 2px 2px 12px #00000080,
                inset 2px 2px 12px #00000080,
                inset 2px 2px 12px #00000080,
                inset 2px 2px 12px #00000080;
  &:hover{
    transform: scale(1.1);
    border-radius: 10px;
    transition: 0.3s ease-in-out;
    color:hsl(0, 0%, 100%);
  }
`
const UserAlt = styled(BiUser)`
 
  color: #fff;
`
const ChatButton = styled.button`
 
  border-radius: 10em;
  background: hsl(233, 47%, 13%);
  display: flex;
  color: hsla(0, 0%, 100%, 0.75);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 3px solid hsl(244, 38%, 16%);
  box-shadow: 2px 2px 2px #00000080,
                    10px 10px 12px #00000080,
                    inset 2px 2px 12px #00000080,
                    inset 2px 2px 12px #00000080,
                    inset 2px 2px 12px #00000080,
                    inset 2px 2px 12px #00000080;
  &:hover{
    border-radius: 10px;
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
    color: hsl(0, 0%, 100%);
  }
`
const ChatBubble = styled(MdChatBubble)`
  /* color: pink; */
`


const StreamButton = styled.button`

  border-radius: 10em;
  background: hsl(233, 47%, 13%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: hsla(0, 0%, 100%, 0.75);
  border: 3px solid hsl(244, 38%, 16%);
  box-shadow: 2px 2px 2px #00000080,
                    10px 10px 12px #00000080,
                    inset 2px 2px 12px #00000080,
                    inset 2px 2px 12px #00000080,
                    inset 2px 2px 12px #00000080,
                    inset 2px 2px 12px #00000080;
  &:hover{
    border-radius: 10px;
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
    color: hsl(0, 0%, 100%);
  }
`
const Stream = styled(MdVideoCameraBack)`
  /* color: #b3f716; */
`
const MusicButton = styled.button`
 
  border-radius: 10em;
  background: hsl(233, 47%, 13%);
  display: flex;
  justify-content: center;
  color: hsla(0, 0%, 100%, 0.75);
  align-items: center;
  cursor: pointer;
  border: 3px solid hsl(244, 38%, 16%);
  box-shadow: 2px 2px 2px #00000080,
                    10px 10px 12px #00000080,
                    inset 2px 2px 12px #00000080,
                    inset 2px 2px 12px #00000080,
                    inset 2px 2px 12px #00000080,
                    inset 2px 2px 12px #00000080;
  &:hover{
    border-radius: 10px;
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    color: hsl(0, 0%, 100%);
  }
`
const Music = styled(MdMusicNote)`
  /* color: green; */
`
export default SideDrawer;