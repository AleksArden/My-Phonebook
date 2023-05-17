import { IContact, IContactWithoutId } from 'types/contactsType';
import {
  ActionAddContact,
  ActionLoginPage,
  ActionRegisterPage,
} from 'types/reduserTypes';
import { IUser, IUserWithoutName } from 'types/userTypes';

export const initStateAddContact = {
  name: '',
  number: '',
};
export function reducerAddContact(
  state: IContactWithoutId,
  { type, payload }: ActionAddContact
) {
  return (state = { ...state, [type]: payload });
}

export const initStateLoginPage = {
  email: '',
  password: '',
};
export function reducerLoginPage(
  state: IUserWithoutName,
  { type, payload }: ActionLoginPage
) {
  return (state = { ...state, [type]: payload });
}

export const initStateRegisterPage = {
  name: '',
  email: '',
  password: '',
};

export function reduserRegisterPage(
  state: IUser,
  { type, payload }: ActionRegisterPage
) {
  return (state = { ...state, [type]: payload });
}

export function reducerEditContact(
  state: IContact,
  { type, payload }: ActionAddContact
) {
  return (state = { ...state, [type]: payload });
}
