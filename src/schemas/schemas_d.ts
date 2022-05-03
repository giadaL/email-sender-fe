export interface IPageAttributes extends React.HTMLAttributes<HTMLElement> {
    path: string;
}


export enum EFormStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  FAILURE = 'failure',
  NONE = 'none',
}