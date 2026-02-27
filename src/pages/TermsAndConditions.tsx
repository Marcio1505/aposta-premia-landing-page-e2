import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const TermsAndConditions: React.FC = () => {
  const primaryColor = "#491474";
  const secondaryColor = "#2a113d";
  const quaternaryColor = "#58ddb7";

  return (
    <Box>
      <Header />

      <VStack
        bg={useColorModeValue("white", "gray.700")}
        p={{ base: 6, md: 8 }}
        borderRadius="lg"
        boxShadow="md"
        maxW={1200}
        mx={"auto"}
        spacing={6}
      >
        <Heading as="h1" size="xl" color={primaryColor} textAlign="start">
          Termos de Uso – Aposta Premia
        </Heading>
        <Text mb={6}>
          Seja bem-vindo ao Aposta Premia! Ao acessar e utilizar nosso site e
          plataforma, você concorda com os termos e condições descritos abaixo.
          Por favor, leia atentamente.
        </Text>

        <VStack spacing={6} align="stretch">
          <Box>
            <Heading
              as="h2"
              size="md"
              color={secondaryColor}
              mb={3}
              borderBottom="1px"
              borderColor="gray.200"
              pb={1}
            >
              1. Aceitação dos Termos
            </Heading>
            <Text>
              O uso do site app.apostapremia.com.br implica na aceitação total
              dos presentes Termos de Uso. Caso não concorde com algum dos
              termos, recomendamos que não utilize nossos serviços.
            </Text>
          </Box>

          <Box>
            <Heading
              as="h2"
              size="md"
              color={secondaryColor}
              mb={3}
              borderBottom="1px"
              borderColor="gray.200"
              pb={1}
            >
              2. Descrição do Serviço
            </Heading>
            <Text>
              O Aposta Premia é uma plataforma que oferece um sistema de
              recompensas baseado em apostas e compras de títulos realizadas em
              casas parceiras. Por meio da plataforma, o usuário pode acumular
              pontos, trocar por prêmios, acompanhar campanhas promocionais e
              visualizar seu desempenho.
            </Text>
          </Box>

          <Box>
            <Heading
              as="h2"
              size="md"
              color={secondaryColor}
              mb={3}
              borderBottom="1px"
              borderColor="gray.200"
              pb={1}
            >
              3. Cadastro e Conta de Usuário
            </Heading>
            <Text mb={3}>
              Para utilizar plenamente os serviços do Aposta Premia, é
              necessário criar uma conta com dados verdadeiros e atualizados. O
              usuário é o único responsável pela segurança de suas credenciais e
              pela veracidade das informações fornecidas.
            </Text>
            <Text>
              Reservamo-nos o direito de suspender ou excluir contas que
              apresentem atividade fraudulenta ou violem estes termos.
            </Text>
          </Box>

          <Box>
            <Heading
              as="h2"
              size="md"
              color={secondaryColor}
              mb={3}
              borderBottom="1px"
              borderColor="gray.200"
              pb={1}
            >
              4. Regras de Participação
            </Heading>
            <List spacing={2}>
              <ListItem>
                • A participação em campanhas depende do cumprimento dos
                critérios estabelecidos por cada casa de apostas parceira.
              </ListItem>
              <ListItem>
                • O sistema de pontos e premiação pode variar conforme a
                campanha.
              </ListItem>
              <ListItem>
                • É proibido utilizar meios fraudulentos ou automatizados para
                acumular pontos.
              </ListItem>
            </List>
          </Box>

          {/* Continue with the other sections following the same pattern */}

          <Box>
            <Heading
              as="h2"
              size="md"
              color={secondaryColor}
              mb={3}
              borderBottom="1px"
              borderColor="gray.200"
              pb={1}
            >
              11. Legislação e Foro
            </Heading>
            <Box
              bg={`${quaternaryColor}20`}
              p={4}
              borderLeft="4px"
              borderColor={quaternaryColor}
              borderRadius="0 4px 4px 0"
              my={4}
            >
              <Text>
                Estes Termos de Uso são regidos pelas leis brasileiras. Fica
                eleito o foro da comarca de [sua cidade ou estado], com renúncia
                a qualquer outro, por mais privilegiado que seja, para dirimir
                eventuais controvérsias relacionadas a este documento.
              </Text>
            </Box>
          </Box>
        </VStack>
      </VStack>

      <Footer />
    </Box>
  );
};
