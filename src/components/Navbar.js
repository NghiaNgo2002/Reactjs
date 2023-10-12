import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    Show,
    HStack,
    Text,
    useDisclosure,
    IconButton,
    Hide,
  } from "@chakra-ui/react";
  import {
    MoonIcon,
    SunIcon,
    HamburgerIcon,
    CloseIcon,
    AddIcon,
  } from "@chakra-ui/icons";
  import Name from "./Name";
  import "./Navbar.css";
import Profile from "./Profile";
  
  export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
  
  
    return (
      <div id="navFix">
        <Box
  bg={useColorModeValue("gray.100", "gray.900")}
  px={9}
  width={["100%"]}
  display="flex" // Add this line
  alignItems="center" // Center vertically
  justifyContent="space-between"
>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <HStack w="42%">
              <Name />
              <Profile/>
            </HStack>
  
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>


              <HStack spacing={8} alignItems={"center"}>
                <HStack
                  as={"nav"}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                  id="myDIV"
                >
                  <Button className="btnRes">
                    <a href="#Home">
                      {" "}
                      <b>Home</b>
                    </a>
                  </Button>
  
                  <Button className="btnRes">
                    <a href="#About">
                      <b>About</b>
                    </a>
                  </Button>

  
                  <Button className="btnRes">
                    <a href="#Contact">
                      <b>Contact</b>
                    </a>
                  </Button>
                </HStack>
              </HStack>
            </Flex>
  
            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
  
                
              </Stack>
            </Flex>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
           
          </Flex>
        </Box>
      </div>
    );
  }
  