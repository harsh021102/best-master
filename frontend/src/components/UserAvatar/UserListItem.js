import { Avatar } from "@chakra-ui/avatar";
import { Box, Text } from "@chakra-ui/layout";


const UserListItem = ({ user, handleFunction }) => {

  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="#303030"//"linear-gradient(to right, #000428 0%, #004e92 51%, #000428 100%);"//"#E8E8E8"
     
      _hover={{
        background: "rgb(24, 119, 242)",
        color: "white",
      }}
      w="100%"
      d="flex"
      alignItems="center"
      color="white"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={user?.name}
        src={user?.pic}
      />
      <Box>
        <Text>{user?.name}</Text>
        <Text fontSize="xs">
          <b>Email : </b>
          {user?.email}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;