import { Box } from "@chakra-ui/layout";
import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg= "linear-gradient(to right, #000428 0%, #004e92 51%, #000428 100%);"//"#202020"//hsl(233, 47%, 7%);"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      // borderWidth="1px"
      // borderColor="blue"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;
