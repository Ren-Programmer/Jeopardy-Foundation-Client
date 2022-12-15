import {
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import UserName from "./HTML/UserName";
import UserPassword from "./HTML/UserPassword";
import useSecurity from "./useSecurity";

export interface ISecurityCard {
  heading: string;
  help: string;
  type: "login" | "register";
}
export default function SecurityCard({ heading, help, type }: ISecurityCard) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const colorScheme = "messenger";
  const { error, formHook, submit } = useSecurity({ type });
  return (
    <>
      <Center p={5} h="100vh">
        <Stack
          bg={isDark ? "gray.700" : "white"}
          boxShadow={"md"}
          p="20"
          rounded={"md"}
        >
          <Flex>
            <IconButton
              colorScheme={colorScheme}
              aria-label="color-mode"
              icon={isDark ? <FaSun /> : <FaMoon />}
              isRound={true}
              onClick={toggleColorMode}
            ></IconButton>
          </Flex>
          <Heading as={"h1"}>{heading}</Heading>
          <Text fontSize={"lg"}>{help}</Text>

          <Stack my="4" spacing={6}>
            <Text>{formHook.formState.errors.overall?.message as string | undefined}</Text>
            <UserName formHook={formHook} />
            <UserPassword formHook={formHook} />
            <Stack my={4}>
              <Button
                isLoading={formHook.formState.isSubmitting}
                loadingText="Processing"
                onClick={formHook.handleSubmit(submit, error)}
                colorScheme={colorScheme}
              >
                {heading}
              </Button>
            </Stack>
          </Stack>

          <Stack justify={"center"} spacing={3}>
            <Text colorScheme={"messenger"} as="div" textAlign={"center"}>
              <span>Don't have an account? </span>
              <Button colorScheme={colorScheme} variant="link">
                Sign Up
              </Button>
            </Text>
            <Button colorScheme={colorScheme} variant="link">
              Forgot Password?
            </Button>
          </Stack>
        </Stack>
      </Center>
    </>
  );
}
