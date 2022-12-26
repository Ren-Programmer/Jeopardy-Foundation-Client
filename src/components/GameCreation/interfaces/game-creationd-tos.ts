export interface IGameDeisgnDTO {
  title: string;
  completed:number;
}

export interface IGameCategoryDTO {
  id: string;
  name: string;
  description:string
}

export interface IGameQuestionDTO {
  id: string;
  categoryId: string;
  questionValueId: string;
  problem: string;
  solution: string;
  value:number
  category:string;
  multiplier:string;
}
