"use client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Kbd,
} from "@chakra-ui/react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchIcon } from "lucide-react";
const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button
        onClick={onOpen}
        className="p-1.5 px-4 rounded-md font-medium bg-neutral-100 text-sm flex items-center gap-1"
      >
        <MagnifyingGlass weight="bold" />
        Search here <Kbd>shift</Kbd> + <Kbd>H</Kbd>
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Hi</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Search;
