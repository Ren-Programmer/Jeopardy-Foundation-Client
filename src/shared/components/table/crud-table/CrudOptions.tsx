import { IconButton, Tooltip } from "@chakra-ui/react";
import { FaTrashAlt, FaPencilAlt, FaRegEye } from "react-icons/fa";
import CrudOption from "./CrudOption";

export interface ICrudOptions {
  id: string;
  viewMethod?: (id: string) => void;
  updateMethod: (id: string) => void;
  deleteMethod?: (id: string) => void;
}

export default function CrudOptions({
  id,
  updateMethod,
  deleteMethod,
  viewMethod,
}: ICrudOptions) {
  return (
    <>     
      <CrudOption
      aria_label="update-button"
      icon={<FaPencilAlt/>}
      method={()=>updateMethod(id)}
      toolTip="Edit"      
      />
      <CrudOption
      aria_label="delete-button"
      icon={<FaTrashAlt/>}
      method={()=>deleteMethod!(id)}
      toolTip="Delete"      
      />
      <CrudOption
      aria_label="view-button"
      icon={<FaRegEye/>}
      method={()=>viewMethod!(id)}
      toolTip="View"      
      />         
    </>
  );
}
