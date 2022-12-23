import AppContext from "Contexts/AppContext";
import { useContext } from "react";

export default function useAgent() {
  const { toast } = useContext(AppContext);
  return {
    toast,
  };
}
