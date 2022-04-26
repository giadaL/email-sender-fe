export interface SimpleAction {
  type: string;
}

export interface GenericAction<T> {
  type: string;
  payload: T;
}

export type CommandAction = GenericAction<string>;

export type BooleanAction = GenericAction<boolean>;

export enum EditOperationType {
  NONE = 'NONE',
  EDIT = 'EDIT',
  INSERT = 'INSERT',
}

export type EditOperation<T> = {
  op: EditOperationType;
  item: T;
};

export type FieldValue = {
  name: string;
  value: unknown;
};

export type FieldError = {
  name: string;
  error: string;
};
