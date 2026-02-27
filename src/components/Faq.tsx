import React from "react";
import {
  VStack,
  Heading,
  Box,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Text,
} from "@chakra-ui/react";

const FaqSection: React.FC = () => {
  const faqItems = [
    {
      id: 1,
      question: "O que é o Aposta Premia?",
      answer:
        "Aposta Premia transforma sua experiência de apostas online! Mais do que um simples jogo, aqui cada aposta vale a pena. Com nosso sistema exclusivo de cashback, você recupera parte do valor apostado em casos de derrota, tornando suas jogadas mais seguras e vantajosas. Além disso, participe de rifas e sorteios incríveis, aproveite recompensas que fazem a diferença e muito mais. Aposte com mais confiança e aproveite as melhores vantagens!",
    },
    {
      id: 2,
      question: "Como funciona o cashback em apostas?",
      answer:
        "Ao apostar por meio do Aposta Premia em casas de apostas parceiras, você recebe um reembolso parcial sempre que perde. Esse cashback é creditado na sua conta da plataforma e pode ser usado para reinvestir em novas apostas. Não é um depósito bancário, mas sim um saldo inteligente para continuar jogando com estratégia.",
    },
    {
      id: 3,
      question: "Quais tipos de apostas são aceitas?",
      answer: "O Aposta Premia abrange diferentes tipos de jogos e apostas:",
      list: [
        "Rifas premiadas online",
        "Loterias digitais",
        "Cassinos online licenciados",
        "Slots (caça-níqueis)",
        "Roletas e apostas em sorteios",
      ],
      answer2:
        " Trabalhamos apenas com parceiros regulamentados, oferecendo opções seguras e transparentes.",
    },
    {
      id: 4,
      question: "O Aposta Premia é gratuito?",
      answer:
        "Sim. A plataforma é 100% gratuita para o usuário. Basta se cadastrar e apostar através dos nossos links. O rastreamento é automático e é isso que garante que você receba seu cashback em jogos e rifas.",
    },
    {
      id: 5,
      question: "Como sei que o cashback está funcionando?",
      answer:
        "Através do nosso sistema de rastreio seguro, validamos suas apostas com os parceiros e creditamos seu cashback dentro de até 30 dias. O valor fica visível no seu painel, e você é avisado assim que o saldo estiver disponível para uso.",
    },
    {
      id: 6,
      question: "É seguro apostar com o Aposta Premia?",
      answer:
        "Sim. Todos os nossos parceiros de apostas são licenciados e auditados. Seus dados estão protegidos por camadas de segurança e nossa equipe garante total privacidade e integridade.",
    },
    {
      id: 7,
      question: "Posso ganhar mais indicando amigos?",
      answer:
        "Com certeza. Temos um programa de indicação premiada: você convida, o amigo aposta, e ambos ganham. É uma forma de aumentar seus ganhos mesmo sem apostar diretamente.",
    },
    {
      id: 8,
      question: " Em quanto tempo recebo meu reembolso de apostas perdidas?",
      answer:
        "O tempo médio é de até 30 dias corridos, pois cada casa parceira precisa validar a sua participação. Após essa verificação, o saldo da premiação por perda é liberado no seu perfil do Aposta Premia.",
    },
  ];

  return (
    <Box
      my={0}
      mx={"auto"}
      bg={"white"}
      color={"primary"}
      justifyContent={"center"}
      w={"100%"}
    >
      <VStack spacing={10} mx={"auto"} p={8}>
        <Box w={"full"}>
          <Heading fontWeight={"black"} fontSize={"xl"}>
            Ainda com dúvida?
          </Heading>
          <Text> Leia o nosso FAQ</Text>
        </Box>

        <Accordion w="full" allowToggle>
          {faqItems.map((item) => {
            return (
              <AccordionItem
                key={item.id}
                bg={"white"}
                my={4}
                border={"1px solid #58DDB7"}
                borderRadius={16}
              >
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <VStack w={"full"} align="start">
                        <Heading
                          fontSize={"xl"}
                          textAlign="left"
                          fontWeight={"bold"}
                        >
                          <AccordionIcon
                            transform={
                              isExpanded ? "rotate(0deg)" : "rotate(-90deg)"
                            }
                          />

                          {item.question}
                        </Heading>
                      </VStack>
                    </AccordionButton>
                    <AccordionPanel pb={0} fontSize={"lg"}>
                      {item.answer}
                    </AccordionPanel>
                    <AccordionPanel pb={0} fontSize={"lg"}>
                      {item.list && (
                        <Box as="ul" pl={4} fontSize={"lg"}>
                          {item.list.map((listItem, index) => (
                            <li key={index}>{listItem}</li>
                          ))}
                        </Box>
                      )}
                    </AccordionPanel>
                    <AccordionPanel pb={4} fontSize={"xs"}>
                      {item.answer2}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>
      </VStack>
    </Box>
  );
};

export default FaqSection;
