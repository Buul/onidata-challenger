export type SigInRequest = {
  email: string;
  password: string;
};

export type User = {
  nome: string;
  sobrenome: string;
  cpf: number;
  sexo: string;
  dt_nascimento: number;
  cep: string;
  cidade: string;
  estado: string;
  logradouro: string;
  bairro: string;
  complemento: number;
  email: string;
  senha: string;
  token: string;
  image: string;
  id: string;
};

export interface SigInResponse {
  data: User[];
}
