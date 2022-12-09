import { useFormContext } from "react-hook-form";
import QuestionAgeGroup from "./HTML/QuestionAgeGroup";
import QuestionCategory from "./HTML/QuestionCategory";
import QuestionDifficulty from "./HTML/QuestionDifficulty";
import QuestionProblem from "./HTML/QuestionProblem";
import QuestionSolution from "./HTML/QuestionSolution";

export interface IDeleteQuestion {}
export default function DeleteQuestion({}: IDeleteQuestion) {
  const formHook = useFormContext<any>();

  return (
    <>
      <QuestionProblem
        additionalInputProps={{
          isReadOnly: true,
        }}
        formHook={formHook}
      />
      <QuestionSolution
        additionalInputProps={{
          isReadOnly: true,
        }}
        formHook={formHook}
      />
      <QuestionCategory
        additionalInputProps={{
          isDisabled: true,
        }}
        formHook={formHook}
      />
      <QuestionAgeGroup
        additionalInputProps={{
          isDisabled: true,
        }}
        formHook={formHook}
      />
      <QuestionDifficulty
        additionalInputProps={{
          isDisabled: true,
        }}
        formHook={formHook}
      />
    </>
  );
}
