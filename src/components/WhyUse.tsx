import {
  HStack,
  Image,
  Text,
  Heading,
  VStack,
  Box,
  Flex,
} from "@chakra-ui/react";
import {
  aryanePremia,
  aryanePremiaMobile,
  atendimento,
  cashback,
  graphUp,
  seguranca,
} from "../assets";
import { LuArrowRight, LuArrowLeft } from "react-icons/lu";
import { useState } from "react";

const whyUsedata = [
  {
    id: 1,
    title: "De 4% a 16% de volta",
    description: "Parte do valor que você gasta volta pra sua carteira!",
    bgColor: "#A93FFF",
    color: "#fff",
    icon: cashback,
  },
  {
    id: 2,
    title: "Mais barato na prática",
    description:
      "Com o dinheiro que volta, cada aposta sai por menos do que o preço original. ",
    bgColor: "#A93FFF",
    color: "#fff",
    icon: graphUp,
  },
  {
    id: 3,
    title: "Parceiros regulamentados",
    description:
      "Só trabalhamos com casas licenciadas e aprovadas. Zero dor de cabeça!",
    bgColor: "#A93FFF",
    color: "#fff",
    icon: seguranca,
  },
  {
    id: 4,
    title: "Sem taxa escondida",
    description:
      "Cadastro grátis, sem mensalidade, sem surpresa. Você só gasta o que quer gastar.",
    bgColor: "#A93FFF",
    color: "#fff",
    icon: atendimento,
  },
  {
    id: 5,
    title: "Saque fácil",
    description:
      "Seu saldo ficou disponível? Pode sacar a partir de R$X. Sem burocracia!",
    bgColor: "#A93FFF",
    color: "#fff",
    icon: atendimento,
  },
  {
    id: 6,
    title: "Tudo num lugar só",
    description:
      "Vários parceiros e modalidades reunidos em uma única plataforma. ",
    bgColor: "#A93FFF",
    color: "#fff",
    icon: atendimento,
  },
];

const WhyUse = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = whyUsedata.slice(currentIndex, currentIndex + 2);

  return (
    <VStack
      id="porqueUsar"
      alignItems={"flex-start"}
      bg="purpleMedium"
      color="white"
      mt={-1}
    >
      <Flex w={"100%"} gap={8} flexDir={{ base: "column-reverse", md1: "row" }}>
        <Box w={{ base: "100%", md1: "40%" }}>
          <Box
            w={"100%"}
            h={"100%"}
            borderRadius={12}
            mb={-5}
            bg={"#A93FFF"}
            mt={1}
          >
            <Image
              display={{ base: "none", md1: "block" }}
              position={"relative"}
              h={"100%"}
              ml={-6}
              src={aryanePremia}
            />
            <Image
              display={{ base: "block", md1: "none" }}
              position={"relative"}
              mx={"auto"}
              src={aryanePremiaMobile}
            />
          </Box>
        </Box>
        <VStack
          w={{ base: "100%", md1: "60%" }}
          mt={{ base: 0, lg: 8 }}
          align={"streth"}
          spacing={{ base: 2, md1: 3, lg: 6 }}
        >
          <Box px={6}>
            <Heading
              fontSize={{ base: "xl", md: "2xl" }}
              mb={2}
              fontWeight={"900"}
            >
              Por que usar o Aposta Premia?
            </Heading>
            <Text
              fontSize={{ base: "sm", md1: "md", lg: "lg" }}
              lineHeight={1.4}
            >
              Você pode apostar e comprar cotas em qualquer lugar.{" "}
              <b>Mas só aqui o dinheiro volta pra você!</b>
            </Text>{" "}
          </Box>
          <HStack px={4} justifyContent="start" color="white" spacing={2}>
            <HStack
              spacing={2}
              w={"full"}
              h={{ base: "180px", xl: 220 }}
              py={4}
            >
              <Box
                as="button"
                bg="#d4d4d4"
                color="primary"
                borderRadius="full"
                position={"absolute"}
                left={2}
                opacity={0.5}
                mt={-5}
                zIndex={1}
                p={2}
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev - 2 < 0
                      ? whyUsedata.length -
                        (whyUsedata.length % 2 === 0 ? 2 : 1)
                      : prev - 2,
                  )
                }
              >
                <LuArrowLeft size={17} />
              </Box>
              {visibleCards.map((item) => (
                <FlipCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  bgColor={item.bgColor}
                  color={item.color}
                />
              ))}{" "}
              <Box
                as="button"
                bg="#d4d4d4"
                color="primary"
                borderRadius="full"
                p={2}
                mt={-5}
                position={"absolute"}
                opacity={0.5}
                right={2}
                zIndex={1}
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev + 2 >= whyUsedata.length ? 0 : prev + 2,
                  )
                }
              >
                <LuArrowRight size={17} />
              </Box>
            </HStack>
          </HStack>
        </VStack>
      </Flex>
      <HStack
        spacing={2}
        mt={-20}
        pb={7}
        alignSelf="center"
        display={{ base: "none", md1: "flex" }}
      >
        {Array.from({ length: Math.ceil(whyUsedata.length / 2) }).map(
          (_, idx) => (
            <Box
              key={idx}
              w={3}
              h={3}
              borderRadius="full"
              bg={currentIndex / 2 === idx ? "#9FFFDD" : "gray.400"}
              border={"white"}
              transition="background 0.2s"
            />
          ),
        )}
      </HStack>
    </VStack>
  );
};

export default WhyUse;

type FlipCardProps = {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  color: string;
};

export const FlipCard = ({
  title,
  description,
  icon,
  bgColor,
  color,
}: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Box
      onClick={() => setFlipped((prev) => !prev)}
      cursor="pointer"
      w="100%"
      h="100%"
      sx={{
        perspective: "1000px",
      }}
    >
      <Box
        position="relative"
        w="100%"
        h="100%"
        transition="transform 0.6s"
        sx={{
          transformStyle: "preserve-3d",
        }}
        transform={flipped ? "rotateY(180deg)" : "none"}
      >
        {/* Front */}
        <Box
          position="absolute"
          w="100%"
          h="100%"
          sx={{
            backfaceVisibility: "hidden",
          }}
          bg={bgColor}
          color={color}
          borderRadius="8px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={4}
        >
          <Image src={icon} alt={title} boxSize="30px" mb={2} />
          <Text fontWeight={600} fontSize="md" textAlign="center">
            {title}
          </Text>
        </Box>
        {/* Back */}
        <Box
          position="absolute"
          w="100%"
          h="100%"
          sx={{
            backfaceVisibility: "hidden",
          }}
          bg={bgColor}
          color={color}
          borderRadius="8px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={4}
          transform="rotateY(180deg)"
        >
          <Text fontSize="sm" textAlign="center">
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
