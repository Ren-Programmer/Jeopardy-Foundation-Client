import { Box, Flex, Spacer } from "@chakra-ui/react";
import { BaseSearchParams } from "api/interfaces";
import Button from "../button/regular-button/Button";
import PaginationButton from "./PaginationButton";

export interface IPagination {
  paginationProps: PaginationProps;
  baseParam:BaseSearchParams;
  setBaseParam:React.Dispatch<React.SetStateAction<BaseSearchParams>>

}
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
}

export default function Pagination({ paginationProps,baseParam,setBaseParam }: IPagination) {
  const { currentPage, pageSize, totalCount, totalPages } = paginationProps;
  const spread = 2;
  let lesspages: number[] = [];
  let morepages: number[] = [];
  for (var t = spread; t > 0; t--) {
    if (currentPage! - t > 0) lesspages.push(currentPage! - t);
    if (currentPage! + t < totalPages! + 1) morepages.push(currentPage! + t);
  }
  lesspages = lesspages.sort();
  morepages = morepages.sort();
  return (
    <>
      <Flex alignContent={"center"} justifyContent={"center"}>
        <Box>
            Showing {(currentPage!-1)* pageSize! + 1} to  {(currentPage!-1)* pageSize! + pageSize!} of {totalCount} Items

        </Box>
        <Spacer></Spacer>
        <PaginationButton
          info="First"
          buttonProps={{
            disabled: currentPage === 1,
            onClick: ()=> setBaseParam({...baseParam, pageNumber:1})
          }}
        />
        <PaginationButton
          info=">"
          buttonProps={{
            disabled: currentPage === 1,
            onClick: ()=> setBaseParam({...baseParam, pageNumber:currentPage-1})
          }}
        />

        {lesspages.map((pageNumber) => {
          return (
            <>
              <PaginationButton info={pageNumber.toString()} buttonProps={{
                onClick: ()=> setBaseParam({...baseParam, pageNumber:pageNumber})
              }} />
            </>
          );
        })}

        <PaginationButton
          info={currentPage!.toString()}
          buttonProps={{
            colorScheme: "messenger",
                        
          }}
        />

        {morepages.map((pageNumber) => {
          return (
            <>
              <PaginationButton info={pageNumber.toString()} buttonProps={{
                onClick: ()=> setBaseParam({...baseParam, pageNumber})
              }} />
            </>
          );
        })}

        <PaginationButton
          info="<"
          buttonProps={{
            disabled: currentPage === totalPages,
            onClick: ()=> setBaseParam({...baseParam, pageNumber:currentPage+1})
          }}
        />

        {totalPages !== 1 && (
          <PaginationButton
            info={"Last"}
            buttonProps={{
              disabled: currentPage === totalPages,
              onClick: ()=> setBaseParam({...baseParam, pageNumber:totalPages})
            }}
          />
        )}
      </Flex>
    </>
  );
}
