import { Box, Container } from "@chakra-ui/react";
import Login from "components/Account/Login";
import AgeGroups from "components/AgeGroup/AgeGroups";
import Categories from "components/Category/Categories";
import Questions from "components/Question/Questions";
import AuthenticationContext from "Contexts/AuthenticationContext";
import { useContext } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import "./Body.css";
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
      <Container maxW={"container.xl"}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/age-groups" element={<AgeGroups />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<>Error</>} />
        </Routes>
      </Container>
    </>
  );
}
