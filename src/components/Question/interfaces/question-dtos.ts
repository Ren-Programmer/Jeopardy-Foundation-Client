export interface IQuestionCommonProps {
  problem: string;
  difficulty: string;
  solution: string;
}

export interface IQuestionsDTO extends IQuestionCommonProps {
  id: string;
}

export enum QuestionDifficulty {
  Easy = 1,
  Medium = 2,
  Challenging = 3,
  Hard = 4,
}

export interface ICreateQuestionDTO extends IQuestionCommonProps {
  categoryId: string;
  ageGroupId: string;
}
