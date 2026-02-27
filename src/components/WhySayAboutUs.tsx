import { VStack, Heading, Grid, Box, Text } from "@chakra-ui/react";
import { bgImage } from "../assets";

const videos = [
  { src: "?v=ef597f4c-a0bc-43b5-8b22-79c3a42cf616", id: 1 },
  { src: "?v=5a50ea58-66ed-4d73-b6e9-d5d45541758e", id: 2 },
];

const WhySayAboutUs: React.FC = () => {
  return (
    <VStack bgImage={bgImage} bg={"#F4F4F4"} p={6}>
      <Heading
        fontSize={{ base: "xl", md: "2xl" }}
        textAlign={{ base: "center", md: "start" }}
        fontWeight={"900"}
        color={"primary"}
        w={"100%"}
      >
        O que dizem sobre nós
      </Heading>
      <Text
        textAlign={{ base: "center", md: "start" }}
        color="primary"
        w={"100%"}
        fontSize={"lg"}
      >
        Quem usa, recomenda. Veja a experiência de quem já tá recebendo dinheiro
        de volta no Aposta Premia.
      </Text>
      <Box w="100%" my={6} overflowX="auto">
        <Grid
          templateColumns={`repeat(${videos.length}, 210px)`}
          gap={2}
          w={`${videos.length * 200 + (videos.length - 1) * 24}px`}
          minW="max-content"
        >
          {videos.map((video, idx) => (
            <VStack
              key={video.id + idx}
              w="200px"
              justify="center"
              position="relative"
              flexShrink={0}
            >
              <Box position="relative" w="100%" borderRadius={18} h="100%">
                <iframe
                  id="panda-ef597f4c-a0bc-43b5-8b22-79c3a42cf616"
                  src={
                    "https://player-vz-cabac419-f07.tv.pandavideo.com.br/embed/" +
                    video.src
                  }
                  width={200}
                  style={{ borderRadius: "18px" }}
                  height={360}
                ></iframe>
              </Box>
            </VStack>
          ))}
        </Grid>
      </Box>
    </VStack>
  );
};

export default WhySayAboutUs;
