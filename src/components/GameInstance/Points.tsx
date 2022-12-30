import { Heading, HStack, Spacer, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { TeamDTO } from "./interfaces/game-instance-dtos";

export interface IPoints {
  teamA: TeamDTO;
  teamB: TeamDTO;
}
export default function Points({ teamA, teamB }: IPoints) {
  return (
    <>
      <Heading color={teamA.teamColor}>{teamA.name} : {teamA.score}</Heading>
      <Spacer></Spacer>
      <Heading color={teamB.teamColor}>{teamB.name} : {teamB.score}</Heading>     
    </>
  );
}
