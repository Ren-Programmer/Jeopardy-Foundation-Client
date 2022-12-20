import { Center, Heading, Stack, Text, useColorMode } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { FaSadCry } from "react-icons/fa";
import Button from "../button/regular-button/Button";

export interface IRedirection {}
export default function Redirection({}: IRedirection) {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <Center p={5}>
        <Stack
          bg={isDark ? "gray.700" : "white"}
          boxShadow={"md"}
          p="20"
          rounded={"md"}
        >
          <Heading>Route Not Found</Heading>
          {/* <Stack>
            <FaSadCry />
          </Stack> */}
          <Text>
            Page Not found! Please click previous to return to previous page, or
            home to navigation to dashboard
          </Text>
          <Stack>
            <Button
              info="Previous"
              buttonProps={{
                onClick: () => {
                  navigate(-1);
                },
                
              }}
            />

            <Button          
              info="Home"
              buttonProps={{
                onClick: () => {
                  navigate("/");
                },
              }}
            />
          </Stack>
        </Stack>
      </Center>
    </>
  );
}
