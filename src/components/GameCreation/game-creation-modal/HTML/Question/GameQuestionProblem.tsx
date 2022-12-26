import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Input,
  Spacer,
  Text,
  TextareaProps,
  useDisclosure,
} from "@chakra-ui/react";
import GameCreationContext from "Contexts/GameCreationContext";
import { useContext, useEffect, useMemo } from "react";
import { UseFormReturn } from "react-hook-form";
import IconButton from "shared/components/button/icon-button/IconButton";
import FormControl from "shared/components/FormControl";
import CustomTextArea from "shared/components/input/text-area/CustomTextArea";
import TextArea from "shared/components/input/text-area/TextArea";
import GameQuestionSource from "./GameQuestionSource";

import { FaSearch } from "react-icons/fa";
export interface IGameQuestionProblem {
  formHook: UseFormReturn<any, any>;
  additionalInputProps?: TextareaProps;
}
export default function GameQuestionProblem({
  formHook,
  additionalInputProps,
}: IGameQuestionProblem) {
  const {
    register,
    formState: { errors },
  } = formHook;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <FormControl
        errorMessage={errors.problem?.message as string | undefined}
        label={
          <>
            <HStack>
              <Text>Problem</Text>
              <IconButton
                icon={<FaSearch />}
                {...{
                  "aria-label": "Global Question Search",
                  onClick: () =>
                    window.open(
                      "globalQuestionSearch",
                      "",
                      "popup,location=no"
                    ),
                }}
              />
            </HStack>
          </>
        }
        placeHolder="Please provide question"
        input={
          <>
            {/* <CustomTextArea formHook = {formHook} name="problem"/> */}
            <TextArea
              props={{
                id: "problem",
                ...register("problem", {
                  //required: "Please provide the problem",
                  minLength: {
                    value: 10,
                    message: "Problem needs to be at least 10 characters long",
                  },
                }),
                ...additionalInputProps,
              }}
            />
          </>
        }
      />
      {/* <GameQuestionSource /> */}
    </>
  );
}
