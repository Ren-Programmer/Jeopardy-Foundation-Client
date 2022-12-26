import agent from "api/agent";
import { IHeader } from "shared/components/table/TableHeader";
import useCrudTable from "shared/hooks/useCrudTable";
import CreateQuestion from "./CreateQuestion";
import DeleteQuestion from "./DeleteQuestion";
import UpdateQuestion from "./UpdateQuestion";
import ViewQuestion from "./ViewQuestion";
import { Badge, BreadcrumbLink } from "@chakra-ui/react";
import { QuestionDifficulty } from "./interfaces/question-dtos";
import { ProcessType } from "shared/components/Routing/Authorized";

export interface IQuestions {
  tableRowDoubleClick?:(data:any)=>void
}
export default function Questions({tableRowDoubleClick}: IQuestions) {
  const defaultValue = {
    problem: "",
    solution: "",
    difficulty:0,
    categoryId:"",
    ageGroupId:""
  };
  const headers: IHeader[] = [
    { order: 1, name: "problem", displayName: "Question" },
    { order: 2, name: "solution", displayName: "Answer" },
    {
      order: 3,
      name: "difficulty",
      displayName: "Difficulty",
      renderMethod: (data: any) => {
        let colorScheme = "";
        switch (data) {
          case "Easy": {
            colorScheme = "green";
            break;
          }
          case "Medium": {
            colorScheme = "blue";
            break;
          }
          case "Challenging": {
            colorScheme = "orange";
            break;
          }
          case "Hard": {
            colorScheme = "red";
            break;
          }
          default: {
            colorScheme = "blue";
            break;
          }
        }
        return <Badge colorScheme={colorScheme}>{data}</Badge>;
        //return <>{data} Render</>;
      },
    },
  ];

  const { component } = useCrudTable({
    useTableProps: {
      calls: agent.Question,
      defaultValue,
      onMethod: agent.Question.Create,
      type:ProcessType.GeneralCrud
    },
    crudComponents: {
      create: <CreateQuestion />,
      delete: <DeleteQuestion />,
      update: <UpdateQuestion />,
      view: <ViewQuestion />,
    },
    displayProps: {
      displayName: "Question",
      caption: "All available Questions",
      cardTitle: "Questions",
    },
    headers,
    onDoubleClick:tableRowDoubleClick
  });

  return <> {component()}</>;
}
