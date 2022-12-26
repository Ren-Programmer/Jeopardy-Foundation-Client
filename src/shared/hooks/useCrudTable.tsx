import { ReactElement } from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import CrudActions from "shared/components/modal/crud-modal/CrudActions";
import CrudModal from "shared/components/modal/crud-modal/CrudModal";
import { ProcessType } from "shared/components/Routing/Authorized";
import { ICrudOption } from "shared/components/table/crud-table/CrudOption";
import { IAdditionalOption } from "shared/components/table/crud-table/CrudOptions";
import CrudTable from "shared/components/table/crud-table/CrudTable";
import { IHeader } from "shared/components/table/TableHeader";
import { CrudTypes } from "shared/interfaces/crud";
import useTable, { IUseTable } from "./useTable";

export interface IUseCrudTable {
  useTableProps: IUseTable;
  crudComponents: {
    create: ReactElement;
    update: ReactElement;
    view: ReactElement;
    delete: ReactElement;
  };
  displayProps: {
    displayName: string;
    caption: string;
    cardTitle: string;
  };
  headers: IHeader[];
  additionalOptions?: IAdditionalOption[];
  onDoubleClick?:(data:any)=>void
}

export default function useCrudTable({
  useTableProps,
  crudComponents,
  displayProps: { displayName, caption, cardTitle },
  headers,
  additionalOptions = [],
  onDoubleClick
}: IUseCrudTable) {
  const { calls, defaultValue } = useTableProps;
  const {
    itemsResponse,
    crudModalProps,
    setCrudModalProps,
    setType,
    triggerSubmit,
    formHook,
    setTriggerReset,
    onError,
    setMethod,
    setEntity,
    setBaseParams,
    baseParams,
  } = useTable(useTableProps);

  const { items, pagination } = itemsResponse;

  const createMethod = () => {
    setType(CrudTypes.Create);
    setEntity(defaultValue);
    setMethod(() => calls.Create);
    setCrudModalProps({
      ...crudModalProps,
      modalProps: {
        ...crudModalProps.modalProps,
        status: true,
        modalHeaderProps: {
          title: `Create ${displayName}`,
        },
        modalFooterProps: {
          content: (
            <>
              <CrudActions
                cancelMethod={() => {
                  setTriggerReset(Math.random());
                }}
                processMethod={formHook.handleSubmit(triggerSubmit, onError)}
                type={CrudTypes.Create}
              />
            </>
          ),
        },
      },
      body: crudComponents.create,
    });
  };
  const updateMethod = async (id: string) => {
    //setEntity(defaultValue);
    await getItem(id, formHook);
    setMethod(() => calls.Update);
    setCrudModalProps({
      ...crudModalProps,
      modalProps: {
        ...crudModalProps.modalProps,
        status: true,

        modalHeaderProps: {
          title: `Update ${displayName}`,
        },
        modalFooterProps: {
          content: (
            <>
              <CrudActions
                cancelMethod={() => {
                  setTriggerReset(Math.random());
                }}
                processMethod={formHook.handleSubmit(triggerSubmit, onError)}
                type={CrudTypes.Update}
              />
            </>
          ),
        },
      },
      body: crudComponents.update,
    });
    //await getItem(id, formHook);
    setType(CrudTypes.Update);
  };

  const deleteMethod = async (id: string) => {
    //setEntity(defaultValue);
    await getItem(id, formHook);
    setMethod(() => calls.Delete);
    setCrudModalProps({
      ...crudModalProps,
      modalProps: {
        ...crudModalProps.modalProps,
        status: true,

        modalHeaderProps: {
          title: `Delete ${displayName}`,
        },
        modalFooterProps: {
          content: (
            <>
              <CrudActions
                cancelMethod={() => {
                  setTriggerReset(Math.random());
                }}
                processMethod={formHook.handleSubmit(triggerSubmit, onError)}
                type={CrudTypes.Delete}
              />
            </>
          ),
        },
      },
      body: crudComponents.delete,
    });
    //await getItem(id, formHook);
    setType(CrudTypes.Delete);
  };
  const viewMethod = async (id: string) => {
    //setEntity(defaultValue);
    await getItem(id, formHook);
    setMethod(() => calls.Update);
    setCrudModalProps({
      ...crudModalProps,
      modalProps: {
        ...crudModalProps.modalProps,
        status: true,

        modalHeaderProps: {
          title: `View ${displayName}`,
        },
        modalFooterProps: {
          content: (
            <>
              <CrudActions
                cancelMethod={() => {
                  setTriggerReset(Math.random());
                }}
                processMethod={formHook.handleSubmit(triggerSubmit, onError)}
                type={CrudTypes.View}
              />
            </>
          ),
        },
      },
      body: crudComponents.view,
    });
    //await getItem(id, formHook);
    setType(CrudTypes.View);
  };
  const component = (
    <>
      <FormProvider {...formHook}>
        <CrudTable
          type={useTableProps.type}
          baseParam={baseParams}
          setBaseParam={setBaseParams}
          tableProps={{
            onDoubleClick,
            additionalOptions,
            type: useTableProps.type,
            baseParam: baseParams,
            setBaseParam: setBaseParams,
            tableHeaderProps: {
              headers: headers,
              optionsStatus: "show",
              baseParam: baseParams,
              setBaseParam: setBaseParams,
            },
            paginationProps: pagination,
            updateMethod,
            viewMethod,
            deleteMethod,
            data: items,
            caption,
            cardHeaderProps: {
              cardTitle,
            },
          }}
          modalProps={crudModalProps}
          createMethod={createMethod}
        />

        <CrudModal {...crudModalProps} />
      </FormProvider>
    </>
  );

  async function getItem(id: string, formHook: UseFormReturn) {
    await calls.Item(id).then((x) => setEntity({ id, ...x.data.result }));
    setTriggerReset(Math.random());
  }

  return {
    component: () => component,
  };
}
