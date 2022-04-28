export interface SimpleAction {
  type: string;
}

export interface GenericAction<T> {
  type: string;
  payload: T;
}

export type CommandAction = GenericAction<string>;

export type BooleanAction = GenericAction<boolean>;