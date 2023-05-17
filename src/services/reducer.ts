interface StateAddContact {
  name: string;
  number: string;
}
type ActionAddContact = { type: 'name' | 'number'; payload: string };

export const initStateAddContact = {
  name: '',
  number: '',
};
export function reducerAddContact(
  state: StateAddContact,
  { type, payload }: ActionAddContact
) {
  return (state = { ...state, [type]: payload });
}

interface StateLoginPage {
  email: string;
  password: string;
}
type ActionLoginPage = { type: 'email' | 'password'; payload: string };

export const initStateLoginPage = {
  email: '',
  password: '',
};
export function reducerLoginPage(
  state: StateLoginPage,
  { type, payload }: ActionLoginPage
) {
  return (state = { ...state, [type]: payload });
}

interface StateRegisterPage {
  name: string;
  email: string;
  password: string;
}
type ActionRegisterPage = {
  type: 'name' | ' email' | 'password';
  payload: string;
};

export const initStateRegisterPage = {
  name: '',
  email: '',
  password: '',
};

export function reduserRegisterPage(
  state: StateRegisterPage,
  { type, payload }: ActionRegisterPage
) {
  return (state = { ...state, [type]: payload });
}
