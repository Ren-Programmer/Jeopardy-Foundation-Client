import { ReactElement } from "react";
import Button from "shared/components/button/regular-button/Button";
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
      button = <Button  info="Create" buttonProps={{
        ...buttonProps,
        colorScheme:"messenger"
      }} />;
      break;
    }
    case CrudTypes.Update: {
      // button = <SuccessButton buttonProps={buttonProps} info="Update" />;
      button = <Button  info="Update" buttonProps={{
        ...buttonProps,
        colorScheme:"messenger"
      }} />;
      break;
    }
    case CrudTypes.Delete: {
      button = <Button  info="Delete" buttonProps={{
        ...buttonProps,
        colorScheme:"messenger"
      }} />;
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
        {type !== CrudTypes.View && type !== CrudTypes.Delete && (
          <div className="reset">
            {/* <DefaultButton
              buttonProps={{
                onClick: cancelMethod,
              }}
              info="Reset"
            /> */}
            <Button
              info="Reset"
              buttonProps={{
                onClick: cancelMethod,
              }}
            />
          </div>
        )}
        {type !== CrudTypes.View && <>{button}</>}
        <div className="process"></div>
      </div>
    </>
  );
}
