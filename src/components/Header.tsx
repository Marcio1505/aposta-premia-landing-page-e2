import React from "react";
import {
  HStack,
  Image,
  Link,
  VStack,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Divider,
  Box,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseCircleOutline } from "react-icons/io5";

import { logoWhite } from "../assets";

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = document.getElementById(targetId!);
    onClose(); // Fecha o menu imediatamente
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }, 300); // Adiciona um pequeno atraso antes de realizar o scroll
    }
  };

  return (
    <HStack
      as={"header"}
      spacing={4}
      position={"absolute"}
      zIndex={100}
      color={"primary"}
      p={4}
      justifyContent={{ base: "space-between", md1: "end" }}
      mx={"auto"}
      w={"100%"}
    >
      <HStack
        justifyContent={"space-between"}
        w={"100%"}
        maxW={1400}
        mx={"auto"}
        spacing={0}
      >
        <Box w={2} h={2} display={{ base: "none", md1: "flex" }} />
        <Image
          src={logoWhite}
          w={{ base: 90, md1: 105 }}
          right={10}
          top={4}
          position={"absolute"}
          cursor="pointer"
          onClick={() => (window.location.href = "/")}
        />
        <HStack display={{ base: "flex", md1: "none" }}>
          <IconButton
            aria-label="Open Menu"
            variant={"unstyled"}
            icon={<RxHamburgerMenu size={40} />}
            color={"white"}
            onClick={onOpen}
            mr={4}
          />
        </HStack>
      </HStack>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={"primary"}>
          <HStack m={4} ml={2} justifyContent={"space-between"} px={4}>
            <Image
              src={logoWhite}
              w={90}
              cursor="pointer"
              onClick={() => (window.location.href = "/")}
            />
            <IoCloseCircleOutline size={26} onClick={onClose} color="white" />
          </HStack>
          <DrawerBody>
            <VStack
              bg={"transparent"}
              spacing={4}
              fontWeight={"bold"}
              fontSize={"xs"}
              color={"white"}
            >
              <Link href="#comoFunciona" onClick={handleLinkClick}>
                Como funciona?
              </Link>
              <Divider />
              <Link href="#sectionFour" onClick={handleLinkClick}>
                Nossos Parceiros
              </Link>{" "}
              <Divider />
              <Link href="#porqueUsar" onClick={handleLinkClick}>
                Porque Usar?
              </Link>
              <Divider />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};

export default Header;
