import { Box, Container } from "@chakra-ui/react";
import AgeGroups from "components/AgeGroup/AgeGroups";
import Categories from "components/Category/Categories";
import Questions from "components/Question/Questions";
import { Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import "./Body.css";
export default function Body() {
  return (
    <>
      <Container maxW={"container.xl"}>
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/age-groups" element={<AgeGroups/>}/>
          <Route path="/questions" element={<Questions/>}/>
          <Route path="*" element={<>Error</>} />
        </Routes>
      </Container>
    </>
  );
}
