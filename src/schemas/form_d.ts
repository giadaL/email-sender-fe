import { ErrorType } from './errors_d'

export enum FormStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  FAILURE = 'failure',
  NONE = 'none',
  EDIT = 'edit',
}

export enum FormType {
  EDIT = 'edit',
  NEW = 'new',
  DELETE = 'delete',
  NONE = 'none',
}

export enum SectionId {
  ASSET = 1,
  RISKS = 2,
  GOALS = 3,
  INCOME_STATEMENT = 4,
  FAMILY_MAP = 5,
  HERITAGE_MAP = 6,
  CAPITAL_LOSS = 7,
  WELFARE = 8,
}

export enum SpecificNoteNameType {
  NOTE_RISCHI = 'note_rischi',
  NOTE_OBIETTIVI = 'note_obiettivi',
  NOTE_ASSET = 'note_asset',
  NOTE_INCOME_STATEMENT = 'note_conto_economico',
  NOTE_CAPITAL_LOSS = 'note_minusvalenza',
  NOTE_WELFARE = 'note_previdenza',
}

export enum PeopleModalRole {
  OWNER = 'owner',
  VIEWER = 'viewer',
  EDITOR = 'editor',
  TO = 'receiver_to',
  CC = 'receiver_cc',
  NONE = 'none',
}

export type FormState = {
  error_message: string;
  status: FormStatus;
  editing: boolean;
};

export type DataMeta<T = undefined> = {
  item?: T;
  status: FormStatus;
  error?: ErrorType;
  message: string;
};

export type QueryResult<T> = {
  items: T[];
  totalElements: number;
};

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

type DisplayType = {
  display: boolean;
};

export type ModalForm = DisplayType & {
  type: FormType;
};

export type ModalFormShared = DisplayType & {
  type: FormType;
  formTypeId: SectionId;
};

export type ShareReportModalType = DisplayType & {
  sectionId: SectionId;
};
