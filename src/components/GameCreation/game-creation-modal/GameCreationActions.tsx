// import { useFormContext } from "react-hook-form";
// import CrudActions, { ICrudActions } from "shared/components/modal/crud-modal/CrudActions";

// export interface IGameCreationActions extends ICrudActions {}
// export default function GameCreationActions({cancelMethod,processMethod,type}: IGameCreationActions) {
//     const formHook = useFormContext();
//   return (
//     <>
//       <CrudActions
//         cancelMethod={cancelMethod}
//         processMethod={formHook.handleSubmit((data) => {
//           processMethod(data);
//         }, onError)}
//         type={type}
//       />
//     </>
//   );
// }
export interface IComponentName{}
export default function ComponentName({}:IComponentName){return <></>}