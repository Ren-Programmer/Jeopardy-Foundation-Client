import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  TextareaProps,
  useDisclosure,
} from "@chakra-ui/react";
import { UseFormReturn } from "react-hook-form";
import FormControl from "shared/components/FormControl";
import CustomTextArea from "shared/components/input/text-area/CustomTextArea";
import TextArea from "shared/components/input/text-area/TextArea";
import GameQuestionSource from "./GameQuestionSource";

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
        label="Problem"
        placeHolder="Please provide question"
        input={
          <>
            {/* <button onClick={onOpen}>Repo</button> */}
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
      {/* <GameQuestionSource isOpen={isOpen} onClose={onClose} onOpen={onOpen} /> */}
    </>
  );
}
