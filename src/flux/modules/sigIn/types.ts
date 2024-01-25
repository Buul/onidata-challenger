export type SigInRequest = {
  email: string;
  password: string;
};

export type SigIn = {
  refresh: string;
  access: string;
};

export interface SigInResponse {
  data: SigIn;
}
