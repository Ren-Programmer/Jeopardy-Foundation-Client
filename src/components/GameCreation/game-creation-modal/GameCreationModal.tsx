import { IQuestionValue } from "components/QuestionValue/interfaces/question-values-dtos";
import AppContext from "Contexts/AppContext";
import { ReactElement, useContext } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import CrudActions from "shared/components/modal/crud-modal/CrudActions";
import Modal, { IModal } from "shared/components/modal/Modal";
import { CrudTypes } from "shared/interfaces/crud";
import { IGameCategoryDTO, IGameQuestionDTO } from "../interfaces/game-creationd-tos";
import { GameCreationModalState } from "../useGameCreation";
import GameCategoryBody from "./GameCategoryBody";
import GameQuestionBody from "./GameQuestionBody";

export interface IGameCreationModal {
  // status: boolean;
  onClose: () => void;
  // data?: IGameQuestionDTO;
  modalProps: GameCreationModalState;
  onSuccess: (data: any, info: any) => void;
  onError: () => void;
  onCancel: () => void;
}
export default function GameCreationModal({
  // status,
  onClose,
  // data,
  modalProps,
  onError,
  onSuccess,
  onCancel,
}: IGameCreationModal) {
  const formHook = useFormContext();
  return (
    <>
      {/* <FormProvider {...formHook}> */}
      <Modal
        size={"3xl"}
        modalHeaderProps={{
          title: "Game Question Creation",
        }}
        modalBodyProps={{
          body: (
            <>
              {modalProps.submitType.type === "question" && (
                <>
                  <GameQuestionBody data={modalProps.data as IGameQuestionDTO} />
                </>
              )}
               {modalProps.submitType.type === "category" && (
                <>
                  <GameCategoryBody />
                </>
              )}
            </>
          ),
        }}
        modalFooterProps={{
          content: (
            <>
              {/* <button
                  onClick={formHook.handleSubmit((data) => {
                    console.log(data);
                  })}
                >
                  Save
                </button> */}
              <CrudActions
                cancelMethod={onCancel}
                processMethod={formHook.handleSubmit((data) => {
                  onSuccess(data, { name: "swerb" });
                }, onError)}
                type={CrudTypes.Update}
              />
            </>
          ),
        }}
        onClose={onClose}
        status={modalProps.status}
      />
      {/* </FormProvider> */}
    </>
  );
}
