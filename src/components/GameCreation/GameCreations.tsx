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
import Progress from "shared/components/progress/Progress";
import GameCreationContext from "Contexts/GameCreationContext";
import { useMemo } from "react";

export interface IGameCreations {}
export default function GameCreations({}: IGameCreations) {
  const navigate = useNavigate();
  const defaultValue = {
    title: "",
    completed: 0,
  };
  const headers: IHeader[] = [
    { order: 1, name: "title", displayName: "Game Title" },
    {
      order: 1,
      name: "completed",
      displayName: "Completion Percentage",
      renderMethod: (data: any) => {
        let scheme = "";
        switch (true) {
          case data < 20: {
            scheme = "red";
            break;
          }
          case data >= 20 && data < 60: {
            scheme = "orange";
            break;
          }
          case data >= 60 && data < 100: {
            scheme = "telegram";
            break;
          }

          default: {
            scheme = "green";
            break;
          }
        }
        return (
          <>
            <Progress
              {...{
                value: data,
                colorScheme: scheme,
                size: "sm",
                tipInfo: `${data}% Completed`,
              }}
            />
          </>
        );
      },
    },
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
        method: (id: string) => {
          //navigate("/game-creation");
          navigate({
            pathname: "/game-creation",
            search: createSearchParams({
              id: id,
            }).toString(),
          });
        },
        toolTip: "Design Game",
      },
    ],
  });

  return (
    <>
      <GameCreationContext.Provider
        value={{
          channel: useMemo(() => new BroadcastChannel("Global Questions"), []),
        }}
      >
        {component()}
      </GameCreationContext.Provider>
    </>
  );
}

function gameCreation(id: string) {}
