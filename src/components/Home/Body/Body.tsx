import Categories from "components/Category/Categories";
import { Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import "./Body.css";
export default function Body() {
  return (
    <>
      <main className="mainn">
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<>Error</>} />
        </Routes>
      </main>
    </>
  );
}
