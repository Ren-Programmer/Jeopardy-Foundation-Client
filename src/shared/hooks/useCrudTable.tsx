import { ReactElement } from "react";
import { FormProvider } from "react-hook-form";
import CrudActions from "shared/components/modal/crud-modal/CrudActions";
import CrudModal from "shared/components/modal/crud-modal/CrudModal";
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
}

export default function useCrudTable({
  useTableProps,
  crudComponents,
  displayProps: { displayName, caption, cardTitle },
  headers,
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
    setEntity(defaultValue);
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
    await getItem(id);
    setType(CrudTypes.Update);
  };
  const viewMethod = async (id: string) => {
    setEntity(defaultValue);
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
    await getItem(id);
    setType(CrudTypes.View);
  };
  const deleteMethod = async (id: string) => {
    setEntity(defaultValue);
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
    await getItem(id);
    setType(CrudTypes.Delete);
  };

  const component = (
    <>
      <FormProvider {...formHook}>
        <CrudTable
          baseParam={baseParams}
          setBaseParam={setBaseParams}
          tableProps={{
            baseParam:baseParams,
          setBaseParam:setBaseParams,
            tableHeaderProps: {
              headers: headers,
              optionsStatus: "show",
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
          createMethod={createMethod}       />

        <CrudModal {...crudModalProps} />
      </FormProvider>
    </>
  );

  async function getItem(id: string) {
    await calls.Item(id).then((x) => setEntity({ id, ...x.data.result }));
  }

  return {
    component: () => component,
  };
}
