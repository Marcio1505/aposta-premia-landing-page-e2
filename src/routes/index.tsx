import { ChakraProvider } from "@chakra-ui/react";
import Home from "../pages/Home";
import { TermsAndConditions } from "../pages/TermsAndConditions";
import { PrivacyPolicy } from "../pages/PrivacyPolicy";
import theme from "../components/ui/Theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CashbackRegulation } from "../pages/CashbackRegulation";

function AppRoutes() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-policies" element={<PrivacyPolicy />} />
          <Route path="/cashback-regulation" element={<CashbackRegulation />} />
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default AppRoutes;
