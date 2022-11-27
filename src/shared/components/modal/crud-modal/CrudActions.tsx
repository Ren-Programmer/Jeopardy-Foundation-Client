import { ReactElement } from "react";
import DefaultButton from "shared/components/button/regular-button/default/DefaultButton";
import SuccessButton from "shared/components/button/regular-button/Success/SuccessButton";
import { CrudTypes } from "shared/interfaces/crud";
import "./CrudActions.css";

export interface ICrudActions {
  cancelMethod: () => void;
  type: CrudTypes;
  processMethod: () => void;
}

export default function CrudActions({
  cancelMethod,
  type,
  processMethod,
}: ICrudActions) {
  let button: ReactElement;
  let buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {
    onClick: processMethod,
  };
  switch (type) {
    case CrudTypes.Create: {
      button = <SuccessButton buttonProps={buttonProps} info="Create" />;
      break;
    }
    case CrudTypes.Update: {
      button = <SuccessButton buttonProps={buttonProps} info="Update" />;
      break;
    }
    case CrudTypes.Delete: {
      button = <SuccessButton buttonProps={buttonProps} info="Delete" />;
      break;
    }
    default: {
      button = <></>;
      break;
    }
  }

  return (
    <>
      <div className="crud-buttons">
        {(type !== CrudTypes.View && type!== CrudTypes.Delete) && (
          <div className="reset">
            <DefaultButton
              buttonProps={{
                onClick: cancelMethod,
              }}
              info="Reset"
            />
          </div>
        )}
        {type !== CrudTypes.View && <>{button}</>}
        <div className="process"></div>
      </div>
    </>
  );
}
