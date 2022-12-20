export interface IGameDeisgn {
  title: string;
}

export interface IGameCategory {
  id: string;
  name: string;
}

export interface IGameQuestion {
  id: string;
  categoryId: string;
  questionValueId: string;
  problem: string;
  solution: string;
  value:number
}
