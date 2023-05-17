export type ActionAddContact = { type: 'name' | 'number'; payload: string };

export type ActionLoginPage = { type: 'email' | 'password'; payload: string };

export type ActionRegisterPage = {
  type: 'name' | ' email' | 'password';
  payload: string;
};
