import {
  Progress as CProgress,
  ProgressProps,
  Tooltip,
} from "@chakra-ui/react";

export interface IProgress extends ProgressProps {
  tipInfo: string;
}
export default function Progress(props: IProgress) {
  return (
    <>
      <Tooltip label={props.tipInfo} colorScheme={props.colorScheme}>
        <CProgress {...props} />
      </Tooltip>
    </>
  );
}
