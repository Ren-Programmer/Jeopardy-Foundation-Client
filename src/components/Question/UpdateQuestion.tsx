import { useFormContext } from "react-hook-form";
import QuestionAgeGroup from "./HTML/QuestionAgeGroup";
import QuestionCategory from "./HTML/QuestionCategory";
import QuestionDifficulty from "./HTML/QuestionDifficulty";
import QuestionProblem from "./HTML/QuestionProblem";
import QuestionSolution from "./HTML/QuestionSolution";

export interface IUpdateQuestion {}
export default function UpdateQuestion({}: IUpdateQuestion) {
    const formHook = useFormContext<any>();

    return (
      <>
        <QuestionProblem formHook={formHook} />
        <QuestionSolution formHook={formHook} />
        <QuestionCategory formHook={formHook} />
        <QuestionAgeGroup formHook={formHook} />
        <QuestionDifficulty formHook={formHook} />
      </>
    );
}
