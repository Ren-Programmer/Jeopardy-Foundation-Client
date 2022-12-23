import {
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

export interface IGameQuestionSource {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
export default function GameQuestionSource({
  isOpen,
  onClose,
  onOpen,
}: IGameQuestionSource) {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<string[]>([]);
  return (
    <>
      {" "}
      <Drawer
        closeOnOverlayClick={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            Please enter Parameters for your question Search
          </DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button
              isLoading={loading}
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                setLoading(true);
              }}
              colorScheme="blue"
              isLoading={loading}
            >
              Search
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
