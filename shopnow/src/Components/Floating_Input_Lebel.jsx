import {
    ChakraProvider,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    extendTheme,
    Box,
    Button,
    Text,
    HStack,
    PinInput,
    PinInputField,
  } from "@chakra-ui/react";
  import { useContext, useState } from "react";
  import { useNavigate } from "react-router-dom"; 
import { AuthContext } from "../Context/AuthContextProvider";
  const activeLabelStyles = {
    transform: "scale(0.90) translateY(-24px)",
  };
  export const theme = extendTheme({
    components: {
      Form: {
        variants: {
          floating: {
            container: {
              _focusWithin: {
                label: {
                  ...activeLabelStyles,
                },
              },
              "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
                {
                  ...activeLabelStyles,
                },
              label: {
                top: 0,
                left: 0,
                zIndex: 2,
                position: "absolute",
                backgroundColor: "white",
                pointerEvents: "none",
                transformOrigin: "left top",
              },
            },
          },
        },
      },
    },
  });
  
  export default function Floating_Input_Lebel() {
    const {login}=useContext(AuthContext)
    const [number, setNumber] = useState("");
    const [user, setUser] = useState("");
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [loading, setisLoading] = useState(false);
    const [flag, setFlag] = useState(false);
  
  
    const navigate = useNavigate();

  
    function getOtp() {
      setisLoading(true);
      setFlag(true);
      setisLoading(false);
  
    }
  
    function onOtpVerify() {
      setisLoading(true);
      if(otp=="123456")
      {
         setisLoading(false)
         login()
         return navigate("/")
      }else{
        alert("Wrong OTP")
        setisLoading(false)
      }
    }
  
    return (
      <ChakraProvider theme={theme}>
        <Box
          p={4}
          display={"flex"}
          alignItems="center"
          flexDirection={"column"}
          gap={6}
        >
          {flag ? (
            <HStack>
              <PinInput value={otp} onChange={(value)=>setOtp(value)}>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          ) : (
            <FormControl
              variant="floating"
              id="mobile-number"
              isRequired
              isInvalid
            >
              <div id="recaptcha-container" />
              <Input
                size="lg"
                type={"number"}
                value={number}
                variant={"flushed"}
                onChange={(e) => setNumber(e.target.value)}
                placeholder=" "
              />
              <FormLabel>
                {flag ? "Please type the OTP sent to" : "Mobile Number"}
              </FormLabel>
              {number.length > 0 && number.length < 10 ? (
                <FormErrorMessage position={"absolute"} right="0">
                  10 Digit Valid Mobile No. Required
                </FormErrorMessage>
              ) : null}
            </FormControl>
          )}
  
          {flag ? (
            <Button
              onClick={onOtpVerify}
              width={"full"}
              size="lg"
              mt={6}
              variant="solid"
              _hover={{ bg: "#e81864" }}
              bg={"#D3145A"}
            >
              Submit
            </Button>
          ) : (
            <Button
              onClick={getOtp}
              loadingText="Sending"
              width={"full"}
              size="lg"
              mt={6}
              variant="solid"
              _hover={number.length < 10 ? null : { bg: "#e81864" }}
              IsDisabled={number.length < 10? true : false}
              bg={number.length < 10 ? null : "#D3145A"}
            >
              Next
            </Button>
          )}
  
          <Text>{error}</Text>
          <Text>{user}</Text>
          {loading ? <Text>Loading...</Text> : null}
        </Box>
      </ChakraProvider>
    );
  }
  