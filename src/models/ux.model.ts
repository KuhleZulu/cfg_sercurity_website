
export interface UxModel {
  Toast?: ToastModel;
  Loading?: boolean;
}
export interface ToastModel {
  Message: string;
  Title: string;
  Classes: string[];
}
