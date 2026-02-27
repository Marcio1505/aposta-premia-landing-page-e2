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

export const CashbackRegulation: React.FC = () => {
  const primaryColor = "#491474";
  const secondaryColor = "#2a113d";

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
          Regulamento Geral – Aposta Premia
        </Heading>

        <VStack spacing={6} align="stretch">
          {/* 1. Sobre o Aposta Premia */}
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
              1. Sobre o Aposta Premia
            </Heading>
            <Text>
              O Aposta Premia é uma plataforma de fidelidade que conecta
              usuários a sites de apostas legalizadas, rifas, loterias estaduais
              e títulos de capitalização. Ao se cadastrar por meio dos nossos
              links de parceiros e utilizar os serviços dessas plataformas, você
              acumula cashback que pode ser usado para resgatar recompensas e
              números de sorteios passivos.
            </Text>
            <Text mt={2} fontWeight="bold">
              Importante:{" "}
              <Text as="span" fontWeight="normal">
                Não operamos jogos, apostas ou rifas diretamente. Atuamos
                exclusivamente como intermediários entre o usuário e nossos
                parceiros.
              </Text>
            </Text>
          </Box>

          {/* 2. Como Funciona o Cashback */}
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
              2. Como Funciona o Cashback
            </Heading>
            <List spacing={2} styleType="disc" pl={4}>
              <ListItem>Estar cadastrado no Aposta Premia.</ListItem>
              <ListItem>
                Utilizar nossos links de afiliado para se registrar nas casas
                parceiras.
              </ListItem>
              <ListItem>
                Manter consistência de dados (ex.: e-mail e CPF) entre as
                contas.
              </ListItem>
              <ListItem>
                Jogar ou adquirir produtos nas plataformas parceiras.
              </ListItem>
            </List>
            <Text mt={3}>
              O cashback é creditado com base nas perdas líquidas (NGR ou GGR,
              conforme o parceiro). Também é possível acumular cashback ao
              comprar números de sorteios passivos, como títulos de
              capitalização ou loterias estaduais.
            </Text>
            <Text mt={2} color="orange.500" fontWeight="bold">
              ⚠ O crédito do cashback não é imediato. Os prazos variam conforme
              o parceiro e o fechamento diário das apostas, respeitando o fuso
              horário da casa de aposta.
            </Text>
          </Box>

          {/* 3. Uso do Cashback */}
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
              3. Uso do Cashback
            </Heading>
            <Text>
              Atualmente, o saldo de cashback não pode ser convertido em
              dinheiro ou utilizado novamente para apostar. Ele pode ser trocado
              exclusivamente por novos números de sorteios passivos, diretamente
              na plataforma.
            </Text>
          </Box>

          {/* 4. Validação e Regras de Resgate */}
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
              4. Validação e Regras de Resgate
            </Heading>
            <List spacing={2} styleType="disc" pl={4}>
              <ListItem>
                O acúmulo e resgate de cashback depende da verificação da
                atividade real nas plataformas parceiras.
              </ListItem>
              <ListItem>
                Transações fraudulentas, dados inconsistentes ou múltiplas
                contas resultam em bloqueio do saldo e possível exclusão do
                usuário.
              </ListItem>
              <ListItem>
                Após o crédito do cashback, não é possível solicitar
                cancelamento ou reembolso.
              </ListItem>
            </List>
          </Box>

          {/* 5. Condutas Proibidas */}
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
              5. Condutas Proibidas
            </Heading>
            <Text mb={2}>São proibidas práticas como:</Text>
            <List spacing={2} styleType="disc" pl={4}>
              <ListItem>
                Criar múltiplas contas para obter vantagens indevidas.
              </ListItem>
              <ListItem>
                Usar dados de terceiros ou falsos (ex.: CPF, e-mail).
              </ListItem>
              <ListItem>
                Utilizar a plataforma de forma automatizada ou por meio de
                scripts.
              </ListItem>
              <ListItem>
                Burlar regras dos parceiros ou explorar falhas técnicas.
              </ListItem>
            </List>
            <Text mt={2}>
              Fraudes ou tentativas de manipulação resultam em suspensão ou
              encerramento da conta, além da perda total dos saldos acumulados.
            </Text>
          </Box>

          {/* 6. Parceiros e Variações */}
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
              6. Parceiros e Variações
            </Heading>
            <List spacing={2} styleType="disc" pl={4}>
              <ListItem>
                A lista de parceiros pode ser alterada a qualquer momento.
              </ListItem>
              <ListItem>
                Se um contrato for encerrado, usuários cadastrados anteriormente
                ainda poderão receber cashback, desde que continuem ativos na
                casa.
              </ListItem>
              <ListItem>
                Novos usuários não acumularão cashback em parceiros
                descontinuados.
              </ListItem>
            </List>
          </Box>

          {/* 7. Responsabilidade com o Jogo */}
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
              7. Responsabilidade com o Jogo
            </Heading>
            <Text>
              O Aposta Premia adota uma política rigorosa de jogo responsável,
              conforme exigido pela legislação brasileira (Portaria SPA/MF nº
              1.231/2024).
            </Text>
            <List spacing={2} styleType="disc" pl={4} mt={2}>
              <ListItem>
                Permitimos apenas o uso da plataforma por maiores de 18 anos.
              </ListItem>
              <ListItem>
                Monitoramos sinais de uso excessivo ou compulsivo e oferecemos
                suporte psicológico e ferramentas de autolimitação.
              </ListItem>
              <ListItem>
                Comunicamos alertas e promovemos ações educativas de forma
                transparente e ética.
              </ListItem>
            </List>
            <Text mt={2}>
              Em caso de necessidade, entre em contato com nosso time de
              acolhimento:{" "}
              <Text as="span" fontWeight="bold">
                jogoresponsavel@apostapremia.com.br
              </Text>
            </Text>
          </Box>

          {/* 8. Disposições Finais */}
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
              8. Disposições Finais
            </Heading>
            <List spacing={2} styleType="disc" pl={4}>
              <ListItem>
                Ao utilizar a plataforma, o usuário aceita todos os Termos,
                Políticas e Regulamentos do Aposta Premia.
              </ListItem>
              <ListItem>
                A plataforma se reserva o direito de alterar este regulamento a
                qualquer momento, com vigência imediata após a publicação.
              </ListItem>
              <ListItem>
                Em caso de dúvidas, entre em contato com nosso suporte:{" "}
                <Text as="span" fontWeight="bold">
                  📧 suporte@apostapremia.com.br
                </Text>
              </ListItem>
            </List>
          </Box>
        </VStack>
      </VStack>

      <Footer />
    </Box>
  );
};
