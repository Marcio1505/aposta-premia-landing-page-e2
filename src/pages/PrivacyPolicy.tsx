import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  OrderedList,
  ListIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckCircleIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import privacyPolicyJson from "./privacyPolicy.json";

type ConteudoItem =
  | string
  | {
      subtitulo?: string;
      descricao?: string;
      conteudo?: string | string[] | ConteudoItem[];
      lista?: string[];
      listaOrdenada?: string[];
      subsconteudo?: ConteudoItem[];
      nota?: string;
      contato?: string;
      contatos?: { tipo: string; valor: string }[];
      ferramentas?: { nome: string; descricao: string }[];
      recursos?: string[];
      definicoes?: { termo: string; definicao: string }[];
    };

type SecaoType = {
  titulo: string;
  id?: string;
  ultimaAtualizacao?: string;
  versao?: string;
  descricao?: string;
  definicoes?: { termo: string; definicao: string }[];
  conteudo?: ConteudoItem[];
  contato?: string;
  ferramentas?: { nome: string; descricao: string }[];
};

type PrivacyPolicyType = {
  versao: string;
  ultimaAtualizacao: string;
  titulo: string;
  secoes: SecaoType[];
};

function renderTextWithLink(text: string) {
  // Regex to match "Portaria SPA" optionally followed by a link in parentheses
  const portariaRegex =
    /(Portaria SPA\s*[^(\s]*)(\s*\((https?:\/\/[^\s)]+)\))?/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = portariaRegex.exec(text)) !== null) {
    const [full, portaria, , url] = match;
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (url) {
      // Only "Portaria SPA..." is clickable
      parts.push(
        <a
          key={url + match.index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#491474", textDecoration: "underline" }}
        >
          {portaria.trim()}
        </a>
      );
    } else {
      // No link, just render as text
      parts.push(portaria);
    }
    lastIndex = match.index + full.length;
  }

  // Fallback: handle other links in the rest of the text
  const rest = text.slice(lastIndex);
  if (rest) {
    // Regex for generic (text)(url) pattern
    const genericLinkRegex = /(.*?)(\((https?:\/\/[^\s)]+)\))/g;
    let lastGenericIndex = 0;
    let genericMatch: RegExpExecArray | null;
    while ((genericMatch = genericLinkRegex.exec(rest)) !== null) {
      const [full, before, , url] = genericMatch;
      if (genericMatch.index > lastGenericIndex) {
        parts.push(rest.slice(lastGenericIndex, genericMatch.index));
      }
      parts.push(
        <a
          key={url + genericMatch.index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#491474", textDecoration: "none" }}
        >
          {before.trim()}
        </a>
      );
      lastGenericIndex = genericMatch.index + full.length;
    }
    if (lastGenericIndex < rest.length) {
      parts.push(rest.slice(lastGenericIndex));
    }
  }

  return parts.length > 0 ? parts : text;
}

const renderConteudo = (conteudo: ConteudoItem, depth = 0) => {
  if (typeof conteudo === "string") {
    return (
      <Text key={conteudo} mb={2} fontSize={depth > 0 ? "md" : "lg"}>
        {renderTextWithLink(conteudo)}
      </Text>
    );
  }

  const {
    subtitulo,
    descricao,
    conteudo: innerConteudo,
    lista,
    listaOrdenada,
    subsconteudo,
    nota,
    contato,
    contatos,
    ferramentas,
    recursos,
    definicoes,
  } = conteudo;

  return (
    <Box key={subtitulo || descricao || Math.random()} mb={4}>
      {subtitulo && (
        <Heading
          as={depth === 0 ? "h2" : "h3"}
          fontSize={depth === 0 ? "xl" : "md"}
          color="#491474"
          mb={2}
        >
          {renderTextWithLink(subtitulo)}
        </Heading>
      )}
      {descricao && (
        <Text mb={2} fontSize="md">
          {renderTextWithLink(descricao)}
        </Text>
      )}
      {definicoes &&
        definicoes.map((def, i) => (
          <Box key={def.termo + i} mb={1}>
            <Text as="span" fontWeight="bold">
              {renderTextWithLink(def.termo)}:
            </Text>{" "}
            {renderTextWithLink(def.definicao)}
          </Box>
        ))}
      {Array.isArray(innerConteudo) &&
        innerConteudo.map((item) => renderConteudo(item, depth + 1))}
      {typeof innerConteudo === "string" && (
        <Text mb={2}>{renderTextWithLink(innerConteudo)}</Text>
      )}
      {lista && (
        <List spacing={1} pl={4} styleType="disc">
          {lista.map((li, i) => (
            <ListItem key={li + i}>
              <ListIcon as={CheckCircleIcon} color="#58ddb7" />
              {renderTextWithLink(li)}
            </ListItem>
          ))}
        </List>
      )}
      {listaOrdenada && (
        <OrderedList spacing={1} pl={4}>
          {listaOrdenada.map((li, i) => (
            <ListItem key={li + i}>{renderTextWithLink(li)}</ListItem>
          ))}
        </OrderedList>
      )}
      {subsconteudo &&
        subsconteudo.map((item) => renderConteudo(item, depth + 1))}
      {nota && (
        <Text mt={2} color="gray.500" fontStyle="italic" fontSize="sm">
          <InfoOutlineIcon mr={1} />
          {renderTextWithLink(nota)}
        </Text>
      )}
      {contato && (
        <Text mt={2} fontWeight="bold">
          Contato:{" "}
          <a href={`mailto:${contato}`}>{renderTextWithLink(contato)}</a>
        </Text>
      )}
      {contatos && (
        <Box mt={2}>
          {contatos.map((c, i) => (
            <Text key={c.tipo + i}>
              <b>{renderTextWithLink(c.tipo)}:</b>{" "}
              {c.tipo === "E-mail" ? (
                <a href={`mailto:${c.valor}`}>{renderTextWithLink(c.valor)}</a>
              ) : (
                renderTextWithLink(c.valor)
              )}
            </Text>
          ))}
        </Box>
      )}
      {ferramentas && (
        <List spacing={1} pl={4} styleType="disc">
          {ferramentas.map((f, i) => (
            <ListItem key={f.nome + i}>
              <b>{renderTextWithLink(f.nome)}</b>:{" "}
              {renderTextWithLink(f.descricao)}
            </ListItem>
          ))}
        </List>
      )}
      {recursos && (
        <List spacing={1} pl={4} styleType="disc">
          {recursos.map((r, i) => (
            <ListItem key={r + i}>{renderTextWithLink(r)}</ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export const PrivacyPolicy: React.FC = () => {
  const primaryColor = "#491474";
  const privacyPolicyData = privacyPolicyJson as PrivacyPolicyType;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const firstParam = Array.from(params.keys())[0];
    if (firstParam) {
      const el = document.getElementById(firstParam);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);
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
        align="stretch"
      >
        {privacyPolicyData.secoes.map((secao, idx) => (
          <Box key={secao.titulo + idx} mb={8}>
            <Heading
              as="h1"
              fontSize="2xl"
              color={primaryColor}
              id={secao.id}
              mb={2}
            >
              {renderTextWithLink(secao.titulo)}
            </Heading>
            {secao.ultimaAtualizacao && (
              <Text fontSize="sm" color="gray.500" mb={2}>
                Última atualização:{" "}
                {renderTextWithLink(secao.ultimaAtualizacao)}
              </Text>
            )}
            {secao.versao && (
              <Text fontSize="sm" color="gray.500" mb={2}>
                Versão: {renderTextWithLink(secao.versao)}
              </Text>
            )}
            {secao.descricao && (
              <Text mb={2} fontSize="md">
                {renderTextWithLink(secao.descricao)}
              </Text>
            )}
            {secao.definicoes &&
              secao.definicoes.map((def, i) => (
                <Box key={def.termo + i} mb={1}>
                  <Text as="span" fontWeight="bold">
                    {renderTextWithLink(def.termo)}:
                  </Text>{" "}
                  {renderTextWithLink(def.definicao)}
                </Box>
              ))}
            {secao.conteudo &&
              secao.conteudo.map((item) => renderConteudo(item))}
            {secao.ferramentas && (
              <Box mt={2}>
                <Heading as="h3" fontSize="sm" color={primaryColor} mb={1}>
                  Ferramentas de Autocontrole
                </Heading>
                <List spacing={1} pl={4} styleType="disc">
                  {secao.ferramentas.map((f, i) => (
                    <ListItem key={f.nome + i}>
                      <b>{renderTextWithLink(f.nome)}</b>:{" "}
                      {renderTextWithLink(f.descricao)}
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
            {secao.contato && (
              <Text mt={2} fontWeight="bold">
                Contato:{" "}
                <a href={`mailto:${secao.contato}`}>
                  {renderTextWithLink(secao.contato)}
                </a>
              </Text>
            )}
          </Box>
        ))}
      </VStack>

      <Footer />
    </Box>
  );
};
