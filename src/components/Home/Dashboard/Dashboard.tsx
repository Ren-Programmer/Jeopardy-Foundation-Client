import AuthenticationContext from "Contexts/AuthenticationContext";
import { useContext } from "react";

export default function Dashboard() {
  const { isCrudAdmin } = useContext(AuthenticationContext);

  if (isCrudAdmin) {
    return <>Crud Admin</>;
  }

  return <>Regular Member</>;

  //return <>Dashboard</>;
}
