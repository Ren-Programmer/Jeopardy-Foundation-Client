export interface ICrudOptions {
  id:string;
  viewMethod?: (id:string) => void;
  updateMethod: (id:string) => void;
  deleteMethod?: (id:string) => void;
}

export default function CrudOptions({ id,updateMethod,deleteMethod,viewMethod }: ICrudOptions) {
  return (
    <>
      {/* <select>
        <option value=""></option>
        <option value="">
          <button
          onClick={()=>method()}
          >ggg</button>
        </option>
      </select> */}
      <button onClick={()=>updateMethod(id)}>Update</button>
      <button onClick={()=>viewMethod!(id)}>View</button>
      <button onClick={()=>deleteMethod!(id)}>Delete</button>
    </>
  );
}
