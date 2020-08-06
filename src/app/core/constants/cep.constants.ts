import { MessageInterface } from "../interfaces/message.interface";

export const CEP_NOT_FOUND: MessageInterface = {
  title: "CEP não encontrado",
  message: "Verifique seu CEP e tente novamente!",
};

export const CEP_API_ERROR: MessageInterface = {
  title: "Erro ao buscar o CEP",
  message: "Verifique a sua conexão com a internet e tente novamente!",
};

export const CEP_FOUND: MessageInterface = {
  message: "CEP consultado com sucesso!",
};

export const CEP_NOT_INFORMED: MessageInterface = {
  title: "O campo CEP não foi informado",
  message: "Informe-o e tente novamente!",
};

export const CEP_INVALID: MessageInterface = {
  title: "Cep inválido",
  message: "Verifique-o e tente novamente!",
};
