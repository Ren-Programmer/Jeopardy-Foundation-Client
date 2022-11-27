import agent from "api/agent";
import { useEffect, useMemo, useState } from "react";
import { FormProvider, SubmitErrorHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import CrudActions from "shared/components/modal/crud-modal/CrudActions";
import CrudModal from "shared/components/modal/crud-modal/CrudModal";
import CrudOptions from "shared/components/table/crud-table/CrudOptions";
import CrudTable from "shared/components/table/crud-table/CrudTable";
import { IHeader } from "shared/components/table/TableHeader";
import useCrudTable from "shared/hooks/useCrudTable";
import useTable from "shared/hooks/useTable";
import { CrudTypes } from "shared/interfaces/crud";
import "./Categories.css";
import CreateCategory from "./CreateCategory";
import DeleteCategory from "./DeleteCategory";
import {
  ICreateCategoryDTO,
  IUpdateCategoryDTO,
} from "./interfaces/category-dtos";
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
    // items,
    // crudModalProps,
    // formHook,
    // createMethod,
    // updateMethod,
    // viewMethod,
    // deleteMethod,
    component
  } = useCrudTable({
    useTableProps: {
      calls: agent.Category,
      defaultValue,
      onMethod: agent.Category.Create,
    },
    crudComponents: {
      create: <CreateCategory />,
      delete: <DeleteCategory />,
      update: <UpdateCategory />,
      view: <ViewCategory />,
    },
    displayProps:{
      displayName: "Category",
      caption:"All available Categories",
      cardTitle:"Categories"
    },
    headers
  });

  

  return (
    <>
     {component()}
    </>
  );
}
