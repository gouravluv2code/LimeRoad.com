import React, { useContext } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  FormControl,
  Text,
  Avatar,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import { AuthContext } from "../../Context/AuthContextProvider";
import { Link, Navigate } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
import { useState } from "react";
export const User = () => {
  const {isAuth,logout}=useContext(AuthContext)
  const [userName, setUserName] = useState({
    name: "",
    profileImg: "",
  });
  const [name, setName] = useState("");
  const [url, setURL] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const handleLogout = () => {
   logout()
  };


  
  return (
    <>
      <Menu>
        <MenuButton>
          <BsPersonFill
            className="header-icon"
            color={isAuth ? "green" : "black"}
          />
        <Text>Profile</Text>
        </MenuButton>
        <MenuList borderRadius="2px">
          {isAuth ? (
            <>
              <MenuItem>
                <HStack bg={"black"} p="5px" alignItems={"center"} w="full">
                  <Avatar size={"md"}  />
                  <Spacer />
                  <Text as={"h2"} color="white">
                    {"Gourav Tiwari"}
                  </Text>
                </HStack>
              </MenuItem>
              <MenuItem>
                <Button
                  width="100%"
                  p="-1"
                  borderRadius="none"
                  colorScheme="black"
                  _hover={{ bg: "black", color: "white" }}
                  variant="outline"
                  onClick={handleLogout}
                >
                  LOG OUT
                </Button>
              </MenuItem>
            </>
          ) : (
            <Link to="/login">
              <MenuItem>
                <Button
                  width="100%"
                  p="-1"
                  borderRadius="none"
                  colorScheme="black"
                  _hover={{ bg: "black", color: "white" }}
                  variant="outline"
                  onClick={()=>Navigate("/login")}
                >
                  LOG IN
                </Button>
              </MenuItem>
            </Link>
          )}
          <MenuItem>
            {isAuth ? (
              <Button
                onClick={onOpen}
                disabled={isAuth}
                width="100%"
                p="-1"
                borderRadius="none"
                colorScheme="black"
                _hover={{ bg: "black", color: "white" }}
                variant="outline"
              >
                Profile
              </Button>
            ) : null}
          </MenuItem>
          <MenuItem _hover={{ backgroundColor: "gray.100" }}>Wishlist</MenuItem>
          <MenuItem _hover={{ backgroundColor: "gray.100" }}>
            Your Orders
          </MenuItem>
          <MenuItem _hover={{ backgroundColor: "gray.100" }}>
            Your Refferals
          </MenuItem>
        </MenuList>
      </Menu>
      {/* Modal */}

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Input
                type="text"
                value={name}
                placeholder="Enter Name"
              />
              <Input
                type="text"
                value={url}
                onChange={(e) => setURL(e.target.value)}
                placeholder="Enter Image URL"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
