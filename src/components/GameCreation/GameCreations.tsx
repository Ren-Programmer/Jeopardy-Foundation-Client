import agent from "api/agent";
import { ProcessType } from "shared/components/Routing/Authorized";
import { IHeader } from "shared/components/table/TableHeader";
import useCrudTable from "shared/hooks/useCrudTable";
import CreateGame from "./CRUD/CreateGame";
import DeleteGame from "./CRUD/DeleteGame";
import UpdateGame from "./CRUD/UpdateGame";
import ViewGame from "./CRUD/ViewGame";
import { FaDeviantart } from "react-icons/fa";
import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";

export interface IGameCreations {}
export default function GameCreations({}: IGameCreations) {
  const navigate = useNavigate();
  const defaultValue = {
    title: "",
  };
  const headers: IHeader[] = [
    { order: 1, name: "title", displayName: "Game Title" },
  ];

  const { component } = useCrudTable({
    useTableProps: {
      calls: agent.GameCreation,
      defaultValue,
      onMethod: agent.GameCreation.Create,
      type: ProcessType.GameCreation,
    },
    crudComponents: {
      create: <CreateGame />,
      delete: <DeleteGame />,
      update: <UpdateGame />,
      view: <ViewGame />,
    },
    displayProps: {
      displayName: "Game Instances",
      caption: "All available Game Instances",
      cardTitle: "Game Instances",
    },
    headers,
    additionalOptions: [
      {
        aria_label: "design-game",
        icon: <FaDeviantart />,
        method: (id:string) => {
          //navigate("/game-creation");
          navigate({
            pathname:"/game-creation",
            search:createSearchParams({
              id:id
            }).toString()
          })
          
        },
        toolTip: "Design Game",
      },
    ],
  });

  return <>{component()}</>;
}

function gameCreation(id: string) {
  
}
