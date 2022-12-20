import { Box, BoxProps, Flex } from "@chakra-ui/react";

export interface IGameBox {
  value: string;
  boxProps: BoxProps;
}
export default function GameBox({ value, boxProps }: IGameBox) {
  return (
    <>
      <Flex 
        {...{          
          textAlign:"center",
          justifyItems:"center",
          justifyContent:"center",
          h: "70px",
          alignItems: "center",
          alignContent: "center",
          //boxShadow:"md",
          bg:"telegram.400"
        }}

        {...boxProps}
      >
        {value}
      </Flex>
    </>
  );
}
