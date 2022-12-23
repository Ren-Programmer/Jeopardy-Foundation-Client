import { Box, BoxProps, Button, ButtonProps, Flex } from "@chakra-ui/react";

export interface IGameBox extends ButtonProps {
  // value: string;
  // buttonProps: ButtonProps;
}
export default function GameBox(props : IGameBox) {  
  return (
    <>
      <Flex
        {...{
          textAlign: "center",
          justifyItems: "center",
          justifyContent: "center",
          h: "70px",
          alignItems: "center",
          alignContent: "center",
          //boxShadow:"md",
         
        }}
       
      >
        <Button
        {...props}
        w="100%"  h="70px" boxShadow={"lg"} 
        >{props.value}</Button>
      </Flex>
    </>
  );
}
