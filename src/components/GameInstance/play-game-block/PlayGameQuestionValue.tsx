import { Stack } from "@chakra-ui/react";
import GameBox from "components/GameCreation/general/GameBox";
import { IQuestionValue } from "components/QuestionValue/interfaces/question-values-dtos";
import PlayGameContext from "Contexts/PlayGameContext";
import { useContext } from "react";
import { GamePlayProps } from "../useGamePlay";

export interface IPlayGameQuestionValue {
  value: IQuestionValue;
}
export default function PlayGameQuestionValue({
  value,
}: IPlayGameQuestionValue) {
  const { currentTeam:{teamColor} } = useContext(PlayGameContext);
  return (
    <>
      <Stack>
        <GameBox
          {...{
            colorScheme: teamColor,
            value: value.value,
          }}
        />
      </Stack>
    </>
  );
}
