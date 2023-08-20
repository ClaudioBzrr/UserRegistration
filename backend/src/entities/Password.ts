export interface IPassword {
  password: string;
}

export type IComparePassword = IPassword & {
  hash: string;
};
