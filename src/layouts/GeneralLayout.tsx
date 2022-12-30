import Header from "components/Home/Header/Header";
import { Outlet } from "react-router";

export interface IGeneralLayout {}
export default function GeneralLayout({}: IGeneralLayout) {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
