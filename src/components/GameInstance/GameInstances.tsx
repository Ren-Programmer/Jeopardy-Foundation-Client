import agent from "api/agent";
import { ProcessType } from "shared/components/Routing/Authorized";
import { IHeader } from "shared/components/table/TableHeader";
import useCrudTable from "shared/hooks/useCrudTable";
import CreateGameInstance from "./CRUD/CreateGameInstance";
import DeleteGameInstance from "./CRUD/DeleteGameInstance";
import UpdateGameInstance from "./CRUD/UpdateGameInstance";
import ViewGameInstance from "./CRUD/ViewGameInstance";
import { FaGamepad } from "react-icons/fa";
import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";
import PlayGameContext from "Contexts/PlayGameContext";
export interface IGameInstances {}
export default function GameInstances({}: IGameInstances) {
  const navigate = useNavigate();
  const defaultValue = {
    title: "",
    intendedAudience: "",
  };

  const headers: IHeader[] = [
    { order: 1, name: "title", displayName: "Game Title" },
    { order: 2, name: "intendedAudience", displayName: "Audience" },
    { order: 3, name: "teamCount", displayName: "Number of Teams" },
  ];
  const { component } = useCrudTable({
    useTableProps: {
      calls: agent.GameInstances,
      defaultValue,
      onMethod: agent.GameCreation.Create,
      type: ProcessType.GameCreation,
    },
    crudComponents: {
      create: <CreateGameInstance />,
      delete: <DeleteGameInstance />,
      update: <UpdateGameInstance />,
      view: <ViewGameInstance />,
    },
    displayProps: {
      displayName: "Game Instances",
      caption: "All available Game Instances",
      cardTitle: "Game Instances",
    },
    headers,
    additionalOptions: [
      {
        aria_label: "game-play",
        icon: <FaGamepad />,
        method: (id: string) => {
          //navigate("/game-creation");
          navigate({
            pathname: "/game-play",
            search: createSearchParams({
              id: id,
            }).toString(),
          });
        },
        toolTip: "Play Game",
      },
    ],
  });

  return <>{component()}</>;
}
