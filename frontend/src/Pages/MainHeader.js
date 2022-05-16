import React from 'react'
import styled from 'styled-components'
import './MainHeader.css'
import { Button } from "@chakra-ui/button";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import ProfileModal from "../components/miscellaneous/ProfileModal";
import { ChatState } from "../Context/ChatProvider";
import { BellIcon, ChevronDownIcon,SearchIcon } from "@chakra-ui/icons";
import { MdNotifications, MdArrowDropDown, MdSearch } from "react-icons/md";
import { Avatar } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { HStack,Box } from '@chakra-ui/react';
function MainHeader() {
    const {user} = ChatState();
  const history = useHistory();
    const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };
  return (
    <div className='chatHeader'>
      <div className="chatHeader__left">
        {/* <div className="chatHeader__search">
          <input placeholder="Search" />
          <Search size="28" />
        </div>
        <NotiButton><Notifications size="28" /></NotiButton> */}
      </div>
      <div className="chatHeader__right">
        <div className="sidebar__profile">
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
      </div>
    </div>
  )
}
const Profile = styled.button`
  /* padding: 10px; */
  padding: 0 10px;
  border-radius: 10em;
  background: hsl(233, 47%, 13%);
  display: flex;
  justify-content: center;
  color: hsla(0, 0%, 100%, 0.75);
  align-items: center;
  gap: 0.8rem;
  border: 3px solid hsl(244, 38%, 16%);
  box-shadow: 2px 2px 2px #00000080,
                10px 10px 12px #00000080,
                inset 2px 2px 12px #00000080,
                inset 2px 2px 12px #00000080,
                inset 2px 2px 12px #00000080,
                inset 2px 2px 12px #00000080;
  &:hover{
    /* border-radius: 10px; */
    /* transform: scale(1.1); */
    background-color: hsl(233, 47%, 19%);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: hsl(0, 0%, 100%);
  }
`
const Search = styled(MdSearch)`
  padding: 5px;
  cursor: pointer;
`
const NotiButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  background: hsl(233, 47%, 10%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: hsla(0, 0%, 100%, 0.75);
  border: 3px solid hsl(244, 38%, 16%);
  box-shadow: 2px 2px 2px #00000080,
                10px 10px 12px #00000080,
                inset 2px 2px 12px #00000080,
                inset 2px 2px 12px #00000080,
                inset 2px 2px 12px #00000080,
                inset 2px 2px 12px #00000080;
  &:hover{
    background-color: hsl(233, 47%, 19%);
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
    color: hsl(0, 0%, 100%);
  }
`
const Notifications = styled(MdNotifications)`
  /* color: white; */
`
const ProAvatar = styled(Avatar)`
  &:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }
`
export default MainHeader