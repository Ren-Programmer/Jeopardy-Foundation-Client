import agent from "api/agent";
import { ProcessType } from "shared/components/Routing/Authorized";
import { IHeader } from "shared/components/table/TableHeader";
import useCrudTable from "shared/hooks/useCrudTable";
import CreateCategory from "./CreateCategory";
import DeleteCategory from "./DeleteCategory";
import UpdateCategory from "./UpdateCategory";
import ViewCategory from "./ViewCategory";

export default function Categories() {
  const defaultValue = {
    name: "",
    description: "",
  };
  const headers: IHeader[] = [
    { order: 1, name: "name", displayName: "Name" },
    { order: 2, name: "description", displayName: "Description" },
  ];

  const {
    component,
  } = useCrudTable({
    useTableProps: {
      calls: agent.Category,
      defaultValue,
      onMethod: agent.Category.Create,
      type:ProcessType.GeneralCrud
    },
    crudComponents: {
      create: <CreateCategory />,
      delete: <DeleteCategory />,
      update: <UpdateCategory />,
      view: <ViewCategory />,
    },
    displayProps: {
      displayName: "Category",
      caption: "All available Categories",
      cardTitle: "Categories",
    },
    headers,
  });

  return <>{component()}</>;
}
