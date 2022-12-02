import { useDisclosure } from "@chakra-ui/react";
import IAgentGenericCalls, {
  BaseSearchParams,
  ServerErrorResult,
  ServerResponse,
} from "api/interfaces";
import axios, { AxiosResponse } from "axios";
import { useEffect, useMemo, useState } from "react";
import {
  FieldValues,
  SubmitErrorHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { toast } from "react-toastify";
import { ICrudModal } from "shared/components/modal/crud-modal/CrudModal";
import { PaginationProps } from "shared/components/pagination/Pagination";
import { CrudTypes } from "shared/interfaces/crud";

export interface IUseTable {
  calls: IAgentGenericCalls;
  defaultValue: any;
  onMethod: (data: any) => Promise<AxiosResponse<any, any>>;
}

export default function useTable<Create extends FieldValues, Update, Delete>({
  calls,
  defaultValue,
  onMethod,
}: IUseTable) {
  const [entity, setEntity] = useState(defaultValue);
  const [type, setType] = useState<CrudTypes>(CrudTypes.Create);
  const [itemsResponse, setItemsResponse] = useState<{
    items: [];
    pagination: PaginationProps;
  }>({
    items: [],
    pagination: {
      currentPage: 1,
      pageSize: 1,
      totalCount: 1,
      totalPages: 1,
    },
  });
  const [data, setData] = useState<any>();
  const [method, setMethod] = useState(() => onMethod);
  const [triggerReset, setTriggerReset] = useState(1);
  const [baseParams, setBaseParams] = useState<BaseSearchParams>({});
  const formHook = useForm({
    defaultValues: useMemo(() => {
      return entity;
    }, [entity]),
  });
  const [crudModalProps, setCrudModalProps] = useState<ICrudModal>({
    modalProps: {
      status: false,
      onClose: () => {
        setCrudModalProps({
          ...crudModalProps,
          modalProps: {
            ...crudModalProps.modalProps,
            status: false,
          },
        });
      },
      modalHeaderProps: {
        title: "Some Title for now",
      },
      modalBodyProps: {
        body: null,
      },
      modalFooterProps: {
        content: null,
      },
    },
    body: null,
  });
  useEffect(() => { 
    async function oo() {
      return await calls.Items(getSearchParams());
    }
    oo()
      .then((x) => {
        setItemsResponse(x.data);
      })
      .catch((error) => console.log(error));
  }, [baseParams]);
  async function getItems() {
    return await calls
      .Items(getSearchParams())
      .then((response) => {
        console.log(response.data);
        setItemsResponse(response.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    onSubmit(data);
  }, [data]);

  useEffect(() => {
    formHook.reset(entity);
  }, [entity, triggerReset]);

  const onSubmit = async (data: any) => {
    if (formHook.formState.isValid) await axiosMethod(data);
    // switch (type) {
    //   case CrudTypes.Create: {
    //     const response = await successCreateCall(data);
    //     response
    //       ? toast.success("Create was a success")
    //       : toast.error("Create was a failure");
    //     break;
    //   }
    //   case CrudTypes.Update: {
    //     toast.success("Update was a success");
    //     break;
    //   }
    //   default: {
    //     toast.success("Create :)");
    //     break;
    //   }
    // }
  };

  const triggerSubmit = (data: any) => {
    setData(data);
  };

  const onError: SubmitErrorHandler<any> = () => {
    toast.error("Please correct the errors on the form!!");
  };
  function addServerErrors(serverErrorResult: ServerErrorResult) {
    serverErrorResult.errors.forEach((error) => {
      formHook.setError(error.propertyName.toLowerCase(), {
        type: "server",
        message: error.errorMessage,
      });
    });
  }

  const axiosMethod = async (data: any) => {
    try {
      const response = await method(data).catch();
      getItems();
      console.log(response, type);
      switch (type) {
        case CrudTypes.Create: {
          alert();
          formHook.reset(entity);
          break;
        }
        case CrudTypes.Delete: {
          setCrudModalProps({
            ...crudModalProps,
            modalProps: { ...crudModalProps.modalProps, status: false },
          });
          break;
        }
        case CrudTypes.Update: {
          setCrudModalProps({
            ...crudModalProps,
            modalProps: { ...crudModalProps.modalProps, status: false },
          });
          break;
        }
      }

      toast.success("Process Completed");
    } catch (error: any) {
      // if(!error.response){
      //   toast.error("Process cannot be done at this time");
      //   return;
      // }
      const newError = error as AxiosResponse<any, any>;
      console.log(newError);
      const response = newError.data as ServerResponse;
      switch (response.statusCode) {
        case 400: {
          addServerErrors(response.result as ServerErrorResult);
          toast.error("Please correct the errors on the form");
          break;
        }
        case 500: {
          toast.error("Process cannot be done at this time");
          break;
        }
        default: {
          toast.error("Please correct the errors on the form");
          break;
        }
      }
    }
  };
  const getSearchParams = () => {
    const params = new URLSearchParams();
    Object.entries(baseParams).forEach((param) => {
      if (param[1] !== undefined) params.append(param[0], param[1]);
    });
    return params;
  };
  return {
    itemsResponse,
    getItems,
    type,
    setType,
    crudModalProps,
    setCrudModalProps,
    triggerSubmit,
    formHook,
    setTriggerReset,
    onError,
    addServerErrors,
    setMethod,
    entity,
    setEntity,
    setBaseParams,
    baseParams,
  };
}
// function useGenerateUseForm(
//   defaultValue: any,
//   type: CrudTypes
// ): UseFormReturn<any, any> {
//   const createFormHook = useForm({});
//   //const updateFormHook = useForm<Update>(defaultValue);
//   switch (type) {
//     case CrudTypes.Create: {
//       return createFormHook;
//     }
//     case CrudTypes.Update: {
//       return createFormHook;
//     }
//     default: {
//       return createFormHook;
//     }
//   }
// }
