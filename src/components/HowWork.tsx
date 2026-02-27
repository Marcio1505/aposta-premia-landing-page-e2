import React, { useRef, useState, useEffect } from "react";
import {
  Text,
  Box,
  Heading,
  HStack,
  Flex,
  Container,
  VStack,
} from "@chakra-ui/react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const HowWorkData = [
  {
    id: 1,
    title: "Crie sua conta grátis",
    description: "em menos de 1 minuto no Aposta Premia.",
  },
  {
    id: 2,
    title: "Escolha a modalidade:",
    description: "sorteio, cassino, aposta esportiva... você decide.",
  },
  {
    id: 3,
    title: "Faça sua jogada",
    description: "Compre ou aposte normalmente pelo parceiro escolhido.",
  },
  {
    id: 4,
    title: "Receba dinheiro de volta",
    description: "Em até 48h, parte do valor volta pra sua carteira.",
  },
];

// Hook personalizado para verificar se um elemento está visível
const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement | null>,
  options: IntersectionObserverInit,
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      }, options);

      observer.observe(currentRef);

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }
  }, [ref, options]);

  return isIntersecting;
};

const HowWork: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth * 0.45 + 20; // Baseado no minW e gap
      scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth * 0.45 + 20; // Baseado no minW e gap
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  return (
    <Box
      id="comoFunciona"
      bg="white"
      color={"primary"}
      py={10}
      w={"100%"}
      overflow="hidden"
    >
      <Container maxW="container.xl">
        <VStack align={"stretch"} mb={4}>
          <Heading fontSize={{ base: "xl", md: "2xl" }} fontWeight={"900"}>
            Como funciona?
          </Heading>
          <Text>
            Você participa pelos nossos parceiros e recebe parte do que gastou
            de volta.
          </Text>

          <HStack spacing={4} mt={2}>
            <Box
              as="button"
              bg="#d4d4d4"
              color="white"
              borderRadius="full"
              p={2}
              onClick={scrollLeft}
            >
              <LuArrowLeft size={20} />
            </Box>
            <Box
              as="button"
              bg="greenTeal"
              color="white"
              borderRadius="full"
              p={2}
              onClick={scrollRight}
            >
              <LuArrowRight size={20} />
            </Box>
          </HStack>
        </VStack>
      </Container>

      {/* Container Principal de Scroll */}
      <Flex
        ref={scrollRef}
        overflowX="auto"
        overflowY="hidden"
        px={6}
        gap={4} // Espaçamento controlado pelo Flex
        css={{
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          perspective: "1200px",
          scrollSnapType: "x mandatory", // Força o "imã" no card
        }}
      >
        {HowWorkData.map((item) => (
          <WiseCard key={item.id} item={item} />
        ))}
      </Flex>
      <Text
        whiteSpace="normal"
        bg={"linear-gradient(45deg, #6BF0C1 0%, #3FCE9D 100%)"}
        color={"primary"}
        p={2}
        px={4}
        borderRadius={8}
        textAlign={"center"}
        mt={8}
        w={"80%"}
        mx={"auto"}
        maxW={"550px"}
        fontWeight={"bold"}
        cursor={"pointer"}
        onClick={() =>
          (window.location.href = "https://app.apostapremia.com.br/register")
        }
      >
        CADASTRE-SE E RECEBA SEU PRIMEIRO DINHEIRO DE VOLTA{" "}
      </Text>
    </Box>
  );
};

type HowWorkItem = {
  id: number;
  title: string;
  description: string;
};

const WiseCard: React.FC<{
  item: HowWorkItem;
}> = ({ item }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Usa o hook personalizado para verificar a visibilidade do card
  // O threshold 0.5 significa que o card será considerado visível quando pelo menos 50% dele estiver na tela
  const isVisible = useIntersectionObserver(cardRef, { threshold: 0.5 });

  // Define as variantes de animação para o card
  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0.4, rotateY: 15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <MotionBox
      ref={cardRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={cardVariants}
      minW={{ base: "300px", md1: "400px" }}
      h={{ base: "400px", md1: "500px" }}
      bg={"#A93FFF"}
      color={"white"}
      borderRadius="30px"
      p={10}
      position="relative"
      whiteSpace="normal"
    >
      <Text fontWeight="900" fontSize={"xl"}>
        {item.id}.
      </Text>
      <Box>
        <Text fontSize="xl" color={"#99F596"} fontWeight="600">
          {item.title}
        </Text>
        <Text fontSize="lg">{item.description}</Text>
      </Box>
    </MotionBox>
  );
};

export default HowWork;
