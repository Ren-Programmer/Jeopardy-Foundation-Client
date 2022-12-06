import agent from "api/agent";
import { IHeader } from "shared/components/table/TableHeader";
import useCrudTable from "shared/hooks/useCrudTable";
import CreateAgeGroup from "./CreateAgeGroup";
import DeleteAgeGroup from "./DeleteAgeGroup";
import UpdateAgeGroup from "./UpdateAgeGroup";
import ViewAgeGroup from "./ViewAgeGroup";

export default function AgeGroups(){
    const defaultValue = {
        name: "",
        description: "",
        minAge:1,
        maxAge:105,
      };
      const headers: IHeader[] = [
        { order: 1, name: "name", displayName: "Name" },
        { order: 2, name: "description", displayName: "Description" },       
      ];
    
      const {       
        component
      } = useCrudTable({
        useTableProps: {
          calls: agent.AgeGroup,
          defaultValue,
          onMethod: agent.Category.Create,
        },
        crudComponents: {
          create: <CreateAgeGroup />,
          delete: <DeleteAgeGroup />,
          update: <UpdateAgeGroup />,
          view: <ViewAgeGroup />,
        },
        displayProps:{
          displayName: "Age Group",
          caption:"All available Age Groups",
          cardTitle:"Age Groups"
        },
        headers
      });
    
      
    
      return (
        <>
         {component()}
        </>
      );
}