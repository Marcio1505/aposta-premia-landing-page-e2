import React from "react";
import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
  Image,
  Link,
  Divider,
} from "@chakra-ui/react";
import Partners from "./Partners";
import { LuArrowRight, LuArrowLeft } from "react-icons/lu";
import { abjr, ebac, eighteen, gt, ibrj } from "../assets";

const DATA_SECURITY = [
  {
    title: "Parceiros regulamentados",
    description:
      "Todo parceiro que aparece na nossa plataforma passou por um critério de segurança. Se tá no Aposta Premia, pode confiar.",
  },
  {
    title: "Sem pegadinha! Não somos casa de apostas.",
    description:
      "Não incentivamos depósito. A gente te devolve parte do que você já ia gastar.",
  },
  {
    title: "Comprometidos com a transparência",
    description:
      "Você acompanha todo o seu saldo em tempo real, direto na sua conta.",
  },
];

const Security: React.FC = () => {
  return (
    <Box id="seguro" mx={"auto"} bg={"primary"} w={"100%"} color="white">
      <Box p={6}>
        <Heading fontSize={{ base: "xl", md: "2xl" }} fontWeight={"900"}>
          É seguro?
        </Heading>
        <Text fontSize={"lg"} mt={2}>
          A gente entende que você não quer colocar seu dinheiro em qualquer
          lugar. Por isso, o Aposta Premia trabalha só com parceiros
          regulamentados e licenciados no Brasil.
        </Text>
        <Box mt={6}>
          <Divider mx={"auto"} w={"90%"} borderWidth={1.5} opacity={1} />
          <HStack
            maxW={500}
            w={{ base: "100%", md: "90vw" }}
            mx={"auto"}
            justifyContent={{ base: "center", md1: "space-between" }}
            spacing={{ base: 2, md1: 4 }}
            flexWrap="wrap"
          >
            <Box
              justifyContent={"center"}
              cursor={"pointer"}
              onClick={() =>
                window.open(
                  "https://apostapremia.com.br/terms-and-policies?responsible-gaming-policy",
                  "_blank",
                )
              }
            >
              <Image
                src={eighteen}
                w={{ base: "32px", md1: "49px" }}
                h="auto"
              />
            </Box>
            <Link href="https://ebacbrasil.com.br/" isExternal>
              <Image src={ebac} w={{ base: "65px", md1: "75px" }} />
            </Link>
            <Link href="https://gamblingtherapy.org/pt-br/" isExternal>
              <Image
                src={gt}
                w={{ base: "45px", md1: "55px" }}
                filter="brightness(0) invert(0.9)"
              />
            </Link>
            <Link href="https://ibjr.org.br/" isExternal>
              <Image src={ibrj} w={{ base: "39px", md1: "49px" }} />
            </Link>
            <Link href="https://jogoresponsavel.org.br/" isExternal>
              <Image src={abjr} w={65} />
            </Link>
            <Box>
              <div id="ra-verified-seal">
                <script
                  type="text/javascript"
                  id="ra-embed-verified-seal"
                  src="https://s3.amazonaws.com/raichu-beta/ra-verified/bundle.js"
                  data-id="dnF1Z3I0NWc5b21KNnZrNTpzcGlrZTU1LWludGVybWVkaWFjb2VzLWx0ZGE="
                  data-target="ra-verified-seal"
                  data-model="horizontal_2"
                ></script>
              </div>
            </Box>
          </HStack>
          <Divider mx={"auto"} w={"90%"} borderWidth={1.5} opacity={1} />
        </Box>
      </Box>
      <Box position="relative">
        <HStack>
          <Box
            as="button"
            bg="#D9D9D9"
            color={"primary"}
            borderRadius="full"
            p={2}
            ml={6}
            display={{ base: "block", md1: "none" }}
            aria-label="Scroll left"
            onClick={() => {
              const grid = document.getElementById("security-grid");
              if (grid) grid.scrollBy({ left: -260, behavior: "smooth" });
            }}
          >
            <LuArrowLeft />
          </Box>
          <Box
            as="button"
            bg="greenTeal"
            color={"primary"}
            borderRadius="full"
            p={2}
            display={{ base: "block", md1: "none" }}
            aria-label="Scroll right"
            onClick={() => {
              const grid = document.getElementById("security-grid");
              if (grid) grid.scrollBy({ left: 260, behavior: "smooth" });
            }}
          >
            <LuArrowRight />
          </Box>
        </HStack>

        <Grid
          id="security-grid"
          templateColumns={"repeat(3, minmax(240px, 1fr))"}
          overflowX={"auto"}
          mt={6}
          pl={6}
          gap={{ base: 4, md1: 3 }}
          sx={{
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {DATA_SECURITY.map((item, idx) => (
            <Box
              key={idx}
              bg={"white"}
              mb={4}
              borderRadius={18}
              minW="240px"
              mr={6}
            >
              <Flex
                bg={"greenTeal"}
                textAlign={"center"}
                alignItems={"center"}
                justifyContent={"center"}
                borderTopRadius={18}
                minH={"100px"}
                p={3}
              >
                <Heading fontSize={"lg"}>{item.title}</Heading>
              </Flex>
              <Text p={4} textAlign={"center"} color={"primary"}>
                {item.description}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>
      <Partners />
    </Box>
  );
};

export default Security;
