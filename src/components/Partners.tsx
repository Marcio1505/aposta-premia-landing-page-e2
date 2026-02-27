import React from "react";
import { Box, VStack, Image } from "@chakra-ui/react";
import {
  offer1,
  offer2,
  offer3,
  offer4,
  cashback1,
  cashback2,
  cashback3,
  cashback4,
} from "../assets";

const PartnersData = [
  { id: 1, imageSrc: cashback1 },
  { id: 2, imageSrc: offer1 },
  { id: 3, imageSrc: cashback2 },
  { id: 4, imageSrc: offer2 },
  { id: 5, imageSrc: cashback3 },
  { id: 6, imageSrc: offer3 },
  { id: 7, imageSrc: cashback4 },
  { id: 8, imageSrc: offer4 },
  { id: 9, imageSrc: cashback1 },
  { id: 10, imageSrc: offer1 },
  { id: 11, imageSrc: cashback2 },
  { id: 12, imageSrc: offer2 },
  { id: 13, imageSrc: cashback3 },
  { id: 14, imageSrc: offer3 },
  { id: 15, imageSrc: cashback4 },
  { id: 16, imageSrc: offer4 },
  { id: 17, imageSrc: cashback1 },
  { id: 18, imageSrc: offer1 },
  { id: 19, imageSrc: cashback2 },
  { id: 20, imageSrc: offer2 },
  { id: 21, imageSrc: cashback3 },
  { id: 22, imageSrc: offer3 },
  { id: 23, imageSrc: cashback4 },
  { id: 24, imageSrc: offer4 },
  { id: 1, imageSrc: cashback1 },
  { id: 2, imageSrc: offer1 },
  { id: 3, imageSrc: cashback2 },
  { id: 4, imageSrc: offer2 },
  { id: 5, imageSrc: cashback3 },
  { id: 6, imageSrc: offer3 },
  { id: 7, imageSrc: cashback4 },
  { id: 8, imageSrc: offer4 },
  { id: 9, imageSrc: cashback1 },
  { id: 10, imageSrc: offer1 },
  { id: 11, imageSrc: cashback2 },
  { id: 12, imageSrc: offer2 },
  { id: 13, imageSrc: cashback3 },
  { id: 14, imageSrc: offer3 },
  { id: 15, imageSrc: cashback4 },
  { id: 16, imageSrc: offer4 },
  { id: 17, imageSrc: cashback1 },
  { id: 18, imageSrc: offer1 },
  { id: 19, imageSrc: cashback2 },
  { id: 20, imageSrc: offer2 },
  { id: 21, imageSrc: cashback3 },
  { id: 22, imageSrc: offer3 },
  { id: 23, imageSrc: cashback4 },
  { id: 24, imageSrc: offer4 },
  { id: 1, imageSrc: cashback1 },
  { id: 2, imageSrc: offer1 },
  { id: 3, imageSrc: cashback2 },
  { id: 4, imageSrc: offer2 },
  { id: 5, imageSrc: cashback3 },
  { id: 6, imageSrc: offer3 },
  { id: 7, imageSrc: cashback4 },
  { id: 8, imageSrc: offer4 },
  { id: 9, imageSrc: cashback1 },
  { id: 10, imageSrc: offer1 },
  { id: 11, imageSrc: cashback2 },
  { id: 12, imageSrc: offer2 },
  { id: 13, imageSrc: cashback3 },
  { id: 14, imageSrc: offer3 },
  { id: 15, imageSrc: cashback4 },
  { id: 16, imageSrc: offer4 },
  { id: 17, imageSrc: cashback1 },
  { id: 18, imageSrc: offer1 },
  { id: 19, imageSrc: cashback2 },
  { id: 20, imageSrc: offer2 },
  { id: 21, imageSrc: cashback3 },
  { id: 22, imageSrc: offer3 },
  { id: 23, imageSrc: cashback4 },
  { id: 24, imageSrc: offer4 },
];
const Partners: React.FC = () => {
  return (
    <Box id="sectionFour" justifyContent="center" w="100%" overflow="hidden">
      <VStack
        alignItems="center"
        mx="auto"
        color="primary"
        spacing={4}
        pb={10}
        pt={8}
      >
        <Box
          w="100%"
          overflowX="auto"
          position="relative"
          p={{ base: 0, md1: 8 }}
          css={{
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Box
            as="div"
            display="flex"
            w="fit-content"
            minW="100%"
            style={{
              animation: "partnerScroll 60s linear infinite",
            }}
            className="partners-scroll"
          >
            {[...PartnersData, ...PartnersData].map((item, idx) => (
              <Image
                key={idx}
                shadow="md"
                borderRadius={12}
                w={200}
                src={item.imageSrc}
                objectFit="contain"
                mx={2}
              />
            ))}
          </Box>
        </Box>
      </VStack>
      <style>
        {`
          @keyframes partnerScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .partners-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </Box>
  );
};

export default Partners;
