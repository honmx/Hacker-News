export interface IComment {
  by: string;
  id: number;
  parent: number;
  text: string;
  time: number;
  type: "comment";
  kids?: number[];
  dead?: boolean;
}