import {
  Box,
  ChakraProvider,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { BaseSearchParams } from "api/interfaces";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export interface ISerachInput {
  baseParam: BaseSearchParams;
  setBaseParam: React.Dispatch<React.SetStateAction<BaseSearchParams>>;
}

export default function SearchInput({ baseParam, setBaseParam }: ISerachInput) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setBaseParam({ ...baseParam, searchCriteria: query, pageNumber: 1 });
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <>
      <Stack spacing={4} mr={4}>
        <InputGroup>
          <Input value={query} onChange={(e) => setQuery(e.target.value)} />
          <InputRightElement pointerEvents={"none"} children={<FaSearch />} />
        </InputGroup>
      </Stack>
    </>
  );
}
