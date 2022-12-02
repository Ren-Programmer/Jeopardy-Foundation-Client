import { IconButton, Tooltip } from "@chakra-ui/react";
import { ReactElement } from "react";

export interface ICrudOption {
  aria_label: string;
  toolTip: string;
  method: ()=>void
  icon: ReactElement;
}

export default function CrudOption({
  icon,
  method,
  aria_label,
  toolTip,
}: ICrudOption) {
  return (
    <>
      <Tooltip label={toolTip} openDelay={300}>
        <IconButton
          mr={2}
          aria-label={aria_label}
          onClick={method}
          icon={icon}
        ></IconButton>
      </Tooltip>
    </>
  );
}
