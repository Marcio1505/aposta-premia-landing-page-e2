import { Box, VStack } from "@chakra-ui/react";
import Header from "../components/Header";
import Apresentation from "../components/Apresentation";
import Footer from "../components/Footer";
import HowWork from "../components/HowWork";
import WhyUse from "../components/WhyUse";
import Security from "../components/Security";
// import FaqSection from "../components/Faq";
import WhySayAboutUs from "../components/WhySayAboutUs";
function Home() {
  return (
    <VStack
      w={"100%"}
      spacing={0}
      overflowX={"hidden"}
      scrollBehavior={"smooth"}
    >
      <Header />
      <Box mx={"auto"} maxW={1900} w={"100%"}>
        <Apresentation />
        <WhyUse />
        <HowWork />
        <Security />

        <WhySayAboutUs />
        {/* <FaqSection /> */}
      </Box>
      <Footer />
    </VStack>
  );
}

export default Home;
