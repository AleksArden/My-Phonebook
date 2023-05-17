export interface IContact {
  id: string;
  name: string;
  number: string;
}

export type IContactWithoutId = Omit<IContact, 'id'>;

export type IEditContact = {
  id: Pick<IContact, 'id'>;
  item: IContactWithoutId;
};
