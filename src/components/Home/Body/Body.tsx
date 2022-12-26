import { Box, Container } from "@chakra-ui/react";
import Login from "components/Account/Login";
import AgeGroups from "components/AgeGroup/AgeGroups";
import Categories from "components/Category/Categories";
import GameCreation from "components/GameCreation/GameDesign";
import GameCreations from "components/GameCreation/GameCreations";
import Questions from "components/Question/Questions";
import AuthenticationContext from "Contexts/AuthenticationContext";
import { useContext } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Authorized, { ProcessType } from "shared/components/Routing/Authorized";
import Redirection from "shared/components/Routing/Redirection";
import Dashboard from "../Dashboard/Dashboard";
import "./Body.css";
import GameQuestionSource from "components/GameCreation/game-creation-modal/HTML/Question/GameQuestionSource";
export default function Body() {
  const { isAuthenticated } = useContext(AuthenticationContext);

  if (!isAuthenticated) {
    return (
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <Routes >
        <Route path="/" element={<Dashboard />}  />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/categories"
          element={
            <Authorized
              element={<Categories />}
              authenticationType={ProcessType.GameCreation}
            />
          }
        />
        <Route
          path="/age-groups"
          element={
            <Authorized
              element={<AgeGroups />}
              authenticationType={ProcessType.GeneralCrud}
            />
          }
        />
        <Route
          path="/globalQuestionSearch"
          element={
            <Authorized
              element={<GameQuestionSource />}
              authenticationType={ProcessType.GameCreation}
            />
          }
        />
        <Route
          path="/questions"
          element={
            <Authorized
              element={<Questions />}
              authenticationType={ProcessType.GeneralCrud}
            />
          }
        />
        <Route
          path="/game-creation"
          element={
            <Authorized
              isContainer={false}
              element={<GameCreation />}
              authenticationType={ProcessType.GameCreation}
            />
          }
        />
        <Route
          path="/game-instances"
          element={
            <Authorized
              element={<GameCreations />}
              authenticationType={ProcessType.GameCreation}
            />
          }
        />
        <Route
          path="*"
          element={
            <>
              <Redirection />
            </>
          }
        />
      </Routes>
    </>
  );
}
