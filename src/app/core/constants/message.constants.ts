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

export const NAME_NOT_FOUND: MessageInterface = {
  title: "Campo de Nome não informado",
  message: "Informe-o e tente novamente!",
};

export const CPF_NOT_FOUND: MessageInterface = {
  title: "Campo de CPF não informado",
  message: "Informe-o e tente novamente!",
};

export const CPF_INVALID: MessageInterface = {
  title: "Campo de CPF inválido",
  message: "Verifique-o e tente novamente!",
};

export const PHONE_NOT_FOUND: MessageInterface = {
  title: "Campo de Telefone não informado",
  message: "Informe-o e tente novamente!",
};

export const PHONE_INVALID: MessageInterface = {
  title: "Telefone inválido",
  message: "Verifique-o e tente novamente!",
};

export const EMAIL_NOT_FOUND: MessageInterface = {
  title: "Campo de Email não informado",
  message: "Informe-o e tente novamente!",
};

export const EMAIL_INVALID: MessageInterface = {
  title: "Email inválido",
  message: "Verifique-o e tente novamente!",
};

export const STATE_NOT_FOUND: MessageInterface = {
  title: "Campo de Estado não informado",
  message: "Informe-o e tente novamente!",
};

export const CITY_NOT_FOUND: MessageInterface = {
  title: "Campo de Cidade não informado",
  message: "Informe-o e tente novamente!",
};

export const STREET_NOT_FOUND: MessageInterface = {
  title: "Campo de Rua não informado",
  message: "Informe-o e tente novamente!",
};

export const SAVE_PERSON: MessageInterface = {
  message: "Pessoa cadastrada com sucesso!",
};

export const EDIT_PERSON: MessageInterface = {
  message: "Dados atualizados com sucesso!",
};

export const REMOVE_PERSON: MessageInterface = {
  message: "Pessoa removida com sucesso!",
};
