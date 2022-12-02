import { Th, chakra, Box, Flex } from "@chakra-ui/react";
import { ReactElement } from "react";
import { IActiveHeader } from "./TableHeader";

interface ITableHead {
  title: string;
  id: number;
  sortable?: boolean;
  activeHeader: IActiveHeader;
  setActiveHeader: React.Dispatch<React.SetStateAction<IActiveHeader>>;
  arrowUp: ReactElement;
  arrowDown: ReactElement;
  sortName: string;
}

export default function TableHead({
  id,
  title,
  sortable = true,
  activeHeader,
  setActiveHeader,
  arrowDown,
  arrowUp,
  sortName,
}: ITableHead) {
  return (
    <>
      <Th scope="col">
        <Flex
          onClick={() => {
            if (activeHeader.activeHeaderId === id) {
              if (activeHeader.sortDirection === "ascending") {
                setActiveHeader({
                  activeHeaderId: id,
                  sortDirection: "descending",
                  activeName: sortName,
                });
              } else {
                setActiveHeader({
                    activeHeaderId:999,
                    activeName:undefined,
                    sortDirection:"ascending"
                });
              }
            } else {
              setActiveHeader({
                activeHeaderId: id,
                sortDirection: "ascending",
                activeName: sortName,
              });
            }
          }}
        >
          <Box as="button" fontWeight={"extrabold"} textTransform="uppercase">{title}</Box>
          <Box ml={2}>
            {activeHeader.activeHeaderId === id ? (
              <>
                {activeHeader.sortDirection === "ascending"
                  ? arrowUp
                  : arrowDown}
              </>
            ) : null}
          </Box>
        </Flex>
      </Th>
    </>
  );
}
