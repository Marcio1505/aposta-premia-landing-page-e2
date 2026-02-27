import React from "react";
import { VStack, Heading, HStack, Text, Box, Image } from "@chakra-ui/react";
import {
  coin1,
  coin2,
  coinCroped,
  heroDesktop,
  heroMobile,
  heroText,
} from "../assets";

const Apresentation: React.FC = () => {
  return (
    <Box
      mx={"auto"}
      justifyContent={"center"}
      pb={6}
      bg={"purpleMedium"}
      w={"100%"}
      position="relative"
    >
      <HStack
        spacing={4}
        position="relative"
        borderBottomRadius={30}
        mx={"auto"}
        justifyContent={{ base: "center", md1: "start" }}
        pb={0}
        overflow="hidden"
      >
        {/* Background image with blur */}
        <Box
          position="absolute"
          inset={0}
          w="100%"
          ml={"auto"}
          h="100%"
          bgImage={{ base: `url(${heroMobile})`, md1: `url(${heroDesktop})` }}
          bgSize="cover"
          bgPosition="start"
          zIndex={0}
        />

        <VStack
          spacing={6}
          mt={{ base: 8, md1: 20 }}
          py={8}
          px={{ base: 6, md1: 20 }}
          justifyContent={{ base: "flex-end", md1: "center" }}
          color={"white"}
          w={"100%"}
          textAlign={{ base: "center", md1: "start" }}
          zIndex={2}
        >
          <Image src={heroText} display={{ base: "block", md1: "none" }} />

          <Heading display={{ base: "none", md1: "block" }}>
            Receba parte do{" "}
            <Text display={"inline"} color={"#6BF0C1"}>
              seu dinheiro de volta
            </Text>{" "}
            em cada jogada
          </Heading>

          <Text fontSize={"md"} lineHeight={1.2}>
            <b>
              Sorteio, cassino, aposta esportiva, não importa onde você joga.
            </b>{" "}
            No Aposta Premia, de 4% a 16% do que você gasta volta pra você.
            Dinheiro de verdade, pra usar de novo ou sacar.
          </Text>

          <Text
            whiteSpace="normal"
            bg={"linear-gradient(45deg, #6BF0C1 0%, #3FCE9D 100%)"}
            color={"primary"}
            p={2}
            px={4}
            borderRadius={8}
            textAlign={"center"}
            fontWeight={"bold"}
            cursor={"pointer"}
            onClick={() =>
              (window.location.href =
                "https://app.apostapremia.com.br/register")
            }
          >
            FAÇA SEU CADASTRO GRATUITAMENTE
          </Text>
        </VStack>
        <Box w={{ base: 0, md1: "50%" }} />
      </HStack>

      <Image
        position={"absolute"}
        zIndex={1}
        w={55}
        transform={"rotate(45deg)"}
        mt={-8}
        ml={"20%"}
        src={coin1}
      />
      <Image
        position={"absolute"}
        zIndex={1}
        w={125}
        transform={"rotate(100deg)"}
        top={20}
        ml={-65}
        src={coin1}
      />
      <Image
        position={"absolute"}
        zIndex={0}
        w={45}
        top={130}
        right={0}
        src={coinCroped}
        pointerEvents="none"
      />
      <Image
        position={"absolute"}
        zIndex={0}
        w={45}
        top={0}
        right={"45%"}
        mt={-10}
        transform={"rotate(270deg)"}
        src={coinCroped}
        pointerEvents="none"
        filter={"blur(3px)"}
      />
      <Image
        position={"absolute"}
        zIndex={1}
        w={10}
        top={110}
        right={0}
        src={coin2}
      />
    </Box>
  );
};

export default Apresentation;
