import { Box, ToastProps, useColorMode } from "@chakra-ui/react";
import AppContext from "Contexts/AppContext";
import { useContext } from "react";
import { mode } from "@chakra-ui/theme-tools";

export interface IGenericToast extends ToastProps {}

export function useToast() {
  const { colorMode } = useColorMode();
  const { toast } = useContext(AppContext);

  function ErrorToast(toastProps: ToastProps) {
    const id = toast!({
      position: "top-right",
      title: "Error",
      ...toastProps,
      status: "error",
      // title: "An error occurred.",
      // description: "Unable to create user account.",
      // status: "error",
      // duration: 9000,
      // isClosable: true,
    });
    return id;
  }
  function SuccessToast(toastProps: ToastProps) {
    toast!({
      //position: "top-right",
      title: "Success",
      ...toastProps,
      status: "success",
      // title: "An error occurred.",
      // description: "Unable to create user account.",
      // status: "error",
      // duration: 9000,
      // isClosable: true,
    });
  }

  function ProcessingToast() {
    const id = toast!({
      title: "Processing",
      position: "top",
      description: <>Processing Request</>,
      status: "loading",
      duration: 100000000,
      // render: () => (
      //   <>
      //     <Box bg={colorMode === "light" ? "blue.500" : "blue.200"}>
      //       sbvsbwrrswbg
      //     </Box>
      //   </>
      // ),
    });
    return id;
  }

  return { ErrorToast, toast, SuccessToast, ProcessingToast };
}
