import { TDataMeta } from "@store/metaActionGenerator";

export type TTemplates = {
  id: string;
  subject: string;
  attachments: string[]
  filename: string
};

export type TemplateState = {
  data: TTemplates[];
  dataMeta: TDataMeta
}

