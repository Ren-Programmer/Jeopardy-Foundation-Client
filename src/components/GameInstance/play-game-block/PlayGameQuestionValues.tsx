import { Stack } from "@chakra-ui/react";
import GameBox from "components/GameCreation/general/GameBox";
import { IQuestionValue } from "components/QuestionValue/interfaces/question-values-dtos";
import PlayGameContext from "Contexts/PlayGameContext";
import { useContext } from "react";
import { GamePlayProps } from "../useGamePlay";
import PlayGameQuestionValue from "./PlayGameQuestionValue";

export interface IPlayGameQuestionValues {
  values: IQuestionValue[];
}
export default function PlayGameQuestionValues({
  values,
}: IPlayGameQuestionValues) {
  const { currentTeam:{teamColor} } = useContext(PlayGameContext);
  return (
    <>
      <Stack>
        <GameBox
          {...{
            colorScheme: teamColor,
          }}
        />

        {values
          .sort((a, b) => a.value - b.value)
          .map((value, index) => {
            return <PlayGameQuestionValue key={index} value={value} />;
          })}
      </Stack>
    </>
  );
}
