import React from "react";
import { VStack, Image, Heading, Text, Button } from "@chakra-ui/react";
import { arrowAp, arrowCrop, logoWhite } from "../assets";

const Footer: React.FC = () => {
  return (
    <VStack
      py={14}
      px={20}
      spacing={4}
      w="100vw"
      bg="linear-gradient(140deg, #8A29D9 0%, #3B0069 100%)"
    >
      <Image src={logoWhite} />
      <Heading as="h2" fontSize="2xl" color="white">
        Pronto pra começar a receber de volta?
      </Heading>
      <Text color="white">
        Crie sua conta gratuita e receba seu primeiro dinheiro de volta já na
        primeira jogada.
      </Text>
      <Button
        variant={"primary"}
        mt={2}
        fontSize={"md"}
        fontWeight={"black"}
        onClick={() =>
          (window.location.href = "https://app.apostapremia.com.br/register")
        }
      >
        CADASTRE-SE GRÁTIS
      </Button>

      <Image
        src={arrowAp}
        w={270}
        position={"absolute"}
        left={-170}
        transform={"rotate(-40deg)"}
      />
      <Image src={arrowCrop} w={90} mt={10} position={"absolute"} right={0} />
    </VStack>
  );
};

export default Footer;
